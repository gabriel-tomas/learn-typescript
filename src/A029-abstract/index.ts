export abstract class Personagem {
  protected abstract icon: string;

  constructor(
    protected name: string,
    protected damage: number,
    protected life: number,
  ) {}

  attack(personagem: Personagem): void {
    console.log(`${this.name} usou ${this.currentEquipment()}`);
    console.log(`${this.name} atacou ${personagem.name}`);
    personagem.loseLife(this.damage);
  }

  loseLife(quantity: number): void {
    console.log(`${this.name} perdeu [ ${quantity} ] de vida`);
    this.life -= quantity;
  }

  abstract currentEquipment(): string;
}

class Arqueiro extends Personagem {
  icon = '\u{1F3F9}';
  currentEquipment(): string {
    return this.icon + ' Arco';
  }
}
class Guerreiro extends Personagem {
  icon = '\u{1F5E1}';
  currentEquipment(): string {
    return this.icon + ' Espada';
  }
}

const arqueiro1 = new Arqueiro('John', 7, 50);
const guerreiro1 = new Guerreiro('Tom', 4, 70);

arqueiro1.attack(guerreiro1);
