import validator from 'validator';

(() => {
  type NodeListInputs = NodeListOf<HTMLInputElement>;

  const form: HTMLFormElement = document.querySelector('form')!;
  const formFields: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.form-fields')!;
  const allInputs: NodeListInputs = document.querySelectorAll(
    '.form-fields > input',
  )!;
  const passwordInputs: NodeListInputs = document.querySelectorAll(
    '.form-fields > input.input-password',
  );

  form.addEventListener('submit', (e) => {
    const arrayErrors: string[] = [];
    e.preventDefault();
    allInputs.forEach((input) => {
      if (input.classList.contains('username')) {
        const inputValue = input.value.trim();

        if (inputValue.length < 8 || inputValue.length > 34) {
          arrayErrors.push(
            'Campo "Usuário" tem que ter entre 8 e 34 caracteres',
          );
        }
      }
      if (input.classList.contains('email')) {
        const inputValue = input.value.trim();

        if (!validator.isEmail(inputValue)) {
          arrayErrors.push('Email inválido');
        }
      }
      if (
        input.classList.contains('password') ||
        input.classList.contains('password2')
      ) {
        const inputValue = input.value.trim();

        if (inputValue.length < 8 || inputValue.length > 64) {
          if (
            arrayErrors.indexOf(
              'Campo "Senha" tem que ter entre 8 e 64 caracteres',
            ) === -1
          )
            arrayErrors.push(
              'Campo "Senha" tem que ter entre 8 e 64 caracteres',
            );
        }
        if (passwordInputs[0].value !== passwordInputs[1].value) {
          if (arrayErrors.indexOf('As senhas devem ser iguais') === -1)
            arrayErrors.push('As senhas devem ser iguais');
        }
      }
    });
    if (arrayErrors.length > 0) {
      popMessage(arrayErrors, 'error');
      return;
    } else {
      form.submit();
    }
  });

  function popMessage(messages: string[], messageType: string): void {
    clearPopUpMessageContainer();
    messages.forEach((message) => {
      const popUpMessage = createPopMessage(message);
      if (!popUpMessage.classList.contains('active')) {
        if (messageType === 'error') {
          popUpMessage.classList.add('error');
          popUpMessage.classList.add('active');
        }
      }
    });
  }

  function clearPopUpMessageContainer(): void {
    const popUpContainer = document.querySelector('.container-pop-up-message')!;
    popUpContainer.innerHTML = '';
  }

  function createPopMessage(message: string): HTMLDivElement {
    const popUpContainer = document.querySelector('.container-pop-up-message')!;
    const popDiv = document.createElement('div');
    popDiv.classList.add('pop-up', 'message');
    popDiv.innerHTML = message;
    popUpContainer.appendChild(popDiv);
    popDiv.addEventListener('animationend', () => clearPopUpMessageContainer());
    return popDiv;
  }

  allInputs.forEach((input) => {
    if (input.classList.contains('username')) {
      const arrayErrors: string[] = [];
      input.addEventListener('keyup', () => {
        const inputValue = input.value.trim();
        if (inputValue.length < 8 || inputValue.length > 34) {
          arrayErrors.push(
            'Campo "Usuário" tem que ter entre 8 e 34 caracteres',
          );
        }
        throwInputErrors(arrayErrors, input);
        arrayErrors.splice(0, arrayErrors.length);
      });
    }
    if (input.classList.contains('email')) {
      const arrayErrors: string[] = [];
      input.addEventListener('keyup', () => {
        const inputValue = input.value.trim();
        if (!validator.isEmail(inputValue)) {
          arrayErrors.push('Email inválido');
        }
        throwInputErrors(arrayErrors, input);
        arrayErrors.splice(0, arrayErrors.length);
      });
    }
    if (
      input.classList.contains('password') ||
      input.classList.contains('password2')
    ) {
      const arrayErrors: string[] = [];
      input.addEventListener('keyup', () => {
        const inputValue = input.value.trim();
        if (inputValue.length < 8 || inputValue.length > 64) {
          arrayErrors.push('Campo "Senha" tem que ter entre 8 e 64 caracteres');
        }
        if (passwordInputs[0].value !== passwordInputs[1].value) {
          throwPasswordInputError('As senhas devem ser iguais');
        } else {
          throwPasswordInputError('');
        }
        throwInputErrors(arrayErrors, input);
        arrayErrors.splice(0, arrayErrors.length);
      });
    }
  });

  function throwPasswordInputError(errorMsg: string): void {
    const formFieldsError: HTMLDivElement[] = [];
    formFields.forEach((formField) => {
      if (
        formField.querySelector('input.password') ||
        formField.querySelector('input.password2')
      ) {
        formFieldsError.push(formField);
      }
      if (passwordInputs[0].value === passwordInputs[1].value) {
        formFieldsError.forEach((formField) => {
          formField.querySelectorAll('.error-message').forEach((spanError) => {
            spanError.remove();
          });
          formField.classList.remove('show-error-message');
        });
        return;
      }
      formFieldsError.forEach((formField) => {
        formField.querySelectorAll('.error-message').forEach((spanError) => {
          spanError.remove();
        });
        formField.classList.add('show-error-message');
        formField.appendChild(createSpanError(errorMsg));
      });
    });
  }

  function throwInputErrors(
    arrayErrors: string[],
    input: HTMLInputElement,
  ): void {
    let formFieldError!: HTMLDivElement;
    formFields.forEach((formField) => {
      if (
        formField.querySelector(
          `input.${input.getAttribute('class')!.split(' ')[0]}`,
        )
      ) {
        formFieldError = formField;
      }
    });
    if (arrayErrors.length === 0) {
      formFieldError.classList.remove('show-error-message');
      return;
    }
    formFieldError.classList.add('show-error-message');
    arrayErrors.forEach((error) => {
      formFieldError.querySelectorAll('.error-message').forEach((spanError) => {
        spanError.remove();
      });
      formFieldError.appendChild(createSpanError(error));
    });
  }

  function createSpanError(erroMsg: string): HTMLSpanElement {
    const span = document.createElement('span');
    span.innerText = erroMsg;
    span.classList.add('error-message');
    return span;
  }
})();

export default 0;
