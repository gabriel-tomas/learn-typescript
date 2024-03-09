/* eslint-disable @typescript-eslint/no-namespace */
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.ab = 'ab';
    var Pessoa = /** @class */ (function () {
        function Pessoa(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
        return Pessoa;
    }());
    MyNameSpace.Pessoa = Pessoa;
    MyNameSpace.pessoa = new Pessoa('Gabriel', 'Tomás');
    var OtherNameSpace;
    (function (OtherNameSpace) {
        OtherNameSpace.hello = 'Hello';
    })(OtherNameSpace = MyNameSpace.OtherNameSpace || (MyNameSpace.OtherNameSpace = {}));
})(MyNameSpace || (MyNameSpace = {}));
var pessoa2 = new MyNameSpace.Pessoa('Gabriel2', 'Tomás2');
/// <reference path="module.ts" />
console.log(MyNameSpace.pessoa);
console.log(pessoa2);
