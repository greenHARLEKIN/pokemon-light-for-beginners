//------------ CLASSES ------------------------------------------------

class Pokemon {
  constructor(name, magic, health, skills) {
    this.name = name;
    this.magic = magic;
    this.health = health;
    this.skills = skills;
  }

  fight(enemy) {
    // Diese Überprüfung muss vor dem Kampf stattfinden, damit ein besiegtes Pokémon nicht angreifen kann!
    if (this.health <= 0) {
      console.log(`${this.name} wurde besiegt und kann nicht angreifen!`);
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.skills.length); // Eine zufällige Attacke...
    const randomSkill = this.skills[randomIndex]; // ...wird ausgewählt.
    const damage = randomSkill.strength; // Die Stärke der Attacke bestimmt die Höhe des Schadens.

    console.log(`${this.name} setzt ${randomSkill.name} ein!`);
    console.log(`${enemy.name} erleidet ${damage} Punkte Schaden!`);
    enemy.health -= damage; // Besiegt oder nicht?

    if (enemy.health <= 0) {
      console.log(`${enemy.name} wurde besiegt!`);
    }
  }
}

class AttackSkill {
  constructor(name, costs, strength) {
    this.name = name;
    this.costs = costs; // Könnte man sich auch schenken...
    this.strength = strength;
  }
}

//-------------- POKÉMON: Pikachu --------------------------------------

const pikachu = new Pokemon("Pikachu", 120, 140, [
  new AttackSkill("Donnerschock", 20, 30),
  new AttackSkill("Ruckzuckhieb", 15, 20),
  new AttackSkill("Rutenschlag", 0, 0),
  new AttackSkill("Volttackle", 100, 150),
]);

//---------------- POKÉMON: Glumanda -----------------------------------

const glumanda = new Pokemon("Glumanda", 120, 140, [
  new AttackSkill("Glut", 30, 40),
  new AttackSkill("Kratzer", 15, 20),
  new AttackSkill("Heuler", 0, 0),
  new AttackSkill("Feuersturm", 100, 150),
]);

//----------------- FIGHT! ---------------------------------------------

/*pikachu.fight(glumanda);
glumanda.fight(pikachu);*/

glumanda.fight(pikachu);
pikachu.fight(glumanda);