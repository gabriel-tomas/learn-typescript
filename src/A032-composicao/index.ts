export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  frear(): void {
    this.motor.frear();
  }
}

class Motor {
  ligar(): void {
    console.log('Motor ligado');
  }

  desligar(): void {
    console.log('Motor desligado');
  }

  acelerar(): void {
    console.log('Acelerando...');
  }

  frear(): void {
    console.log('Freando...');
  }
}
