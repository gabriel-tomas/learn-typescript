export class DataBase {
  private static instance: DataBase;

  private constructor(
    private readonly host: string,
    private readonly port: number,
    private readonly username: string,
    private readonly password: string,
  ) {}

  connect(): void {
    console.log(`Host: ${this.host}`);
    console.log(`Port: ${this.port}`);
    console.log('Conectado...');
  }

  static getInstance(
    host: string,
    port: number,
    username: string,
    password: string,
  ): DataBase {
    if (!DataBase.instance) {
      const instance = new DataBase(host, port, username, password);
      DataBase.instance = instance;
      return instance;
    }
    return DataBase.instance;
  }
}

const db1 = DataBase.getInstance('localhost', 3000, 'user', '123456');
const db2 = DataBase.getInstance('localhost', 6000, 'user', '123456');

console.log(db1 === db2);
