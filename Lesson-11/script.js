

function HealthPotion() {
    this.health = 100;
  }
  
  HealthPotion.prototype.healthPotion = function() {
    this.health += 50;
  };


function MagicUser() {
    HealthPotion.call(this);
    this.mana = 200;
  }
  MagicUser.prototype = Object.create(HealthPotion.prototype);
  Object.assign(MagicUser.prototype);

  MagicUser.prototype.drinkPotion = function() {
    this.mana += 30;

  };


  
  function Mage() {
    MagicUser.call(this);
    this.class = 'Mage';
    this.power = 'Fireball';
    this.stuff = 'Fire Bringer'
    this.ultMove = 'Meteor Rain';
    // this.health = 100;
  }
  Mage.prototype = Object.create(MagicUser.prototype);
  Object.assign(Mage.prototype);
  

  Mage.prototype.useMagic = function(cast) {
    if (this.mana > 0) {
      if (cast === 'power') {
        console.log(` Spirit of element use ${this.power} `)
        this.mana -= 20;
      } else if (cast === 'ult') {
        console.log(`O all mighty ${this.stuff} give me your strength: ${this.ultMove}`)
        this.mana -= 50;
      } else {
        console.log(`You don't know this kind of Magic`)
      }
    } else if (this.mana <= 0) {
      console.log(`You don't have enough mana`)
    }   
};
    Mage.prototype.changeMagicElement = function(){
        this.power = 'Electric chain';
        this.stuff = 'Strom Owner'
        this.ultMove = 'Storm Dragon';
             }

             Mage.prototype.introduce = function() {
                console.log('I am Adonis from Mage Tower');
              };
 

  

  function Warlock() {
    HealthPotion.call(this)
    MagicUser.call(this);
    this.class = 'Warlock';
    this.power = 'Rise';
    this.ultMove = 'Black Hole';
    this.health = 120;
    this.minion = 'Skeleton soldier';
  }

  Warlock.prototype = Object.create(MagicUser.prototype);
  Object.assign(Warlock.prototype);


  Warlock.prototype.useMagic = function(cast) {
    if (this.mana > 0) {
      if (cast === 'power') {
        if(this.mana >= 80){
          console.log(`${this.power}:${this.minion}`);
          this.mana -= 80;   
        } else {
          console.log(`You don't have enough mana`)  
        } 
      } else if (cast === 'ult') {
        if(this.mana >= 150){
          console.log(`Darkness.Void.${this.ultMove}`);
          this.mana -= 150;   
        } else {
          console.log(`You don't have enough mana`);
        }
      } else {
        console.log(`You don't know this kind of Dark Magic`);
      }
 }else {
      console.log(`You don't have enough mana`);
    }  
}
 Warlock.prototype.void = function(){
        console.log('TO THE VOID')
        this.health = 0;
             }

    Warlock.prototype.introduce = function(){
        console.log('I am Death in person')
             }
  


  function Warrior() {
    this.class = 'Warrior';
    this.attack = 'swinging your sword';
    this.ultMove = 'Attack of metal Hurricane';
    this.health = 400;
    this.weapon = 'sword'
  }
  Warrior.prototype = Object.create(HealthPotion.prototype);
  Warrior.prototype.constructor = Warrior;


  Warrior.prototype.useWeapon = function(swing) {
      if (swing === 'swing') {
          console.log(`${this.attack}`);
       }else if (swing === 'ult') {
          console.log(`CHARGE:${this.ultMove}`);
        } else {
            console.log(`swing your ${this.weapon}`)  
        }
 };
    Warrior.prototype.useOtherWeapon = function(weapon){
this.weapon = weapon;
    }

    Warrior.prototype.introduce = function(){
       console.log('I am Knight of Storm Kingdom')
            }

 



  function Rouge() {
    this.class = 'Warrior';
    this.attack = 'stab in the back';
    this.ultMove = 'Shadow';
    this.health = 200;
    this.weapon = 'dagger'
  }
  Rouge.prototype = Object.create(HealthPotion.prototype);
  Rouge.prototype.constructor = Rouge;


  Rouge.prototype.useWeapon = function(stab) {
      if (stab === 'stab') {
          console.log(`${this.attack}`);
       }else if (stab === 'ult') {
          console.log(`${this.ultMove} clones`);
        } else {
            console.log(`everyone can see you`)  
        }
 };
        Rouge.prototype.throwSmokeBomb = function(){
console.log('Smoke is every where')
    }

    Rouge.prototype.introduce = function(){
       console.log('I am SHADOW')
            }

 

const myMage = new Mage();
// myMage.introduce(); 
// myMage.useMagic('power'); 
// myMage.changeMagicElement();
// myMage.useMagic('power'); 
// myMage.useMagic('unknown'); 
// myMage.useMagic('ult'); 
myMage.healthPotion();
console.log(myMage.health)
myMage.drinkPotion()
console.log(myMage.mana)

const myWarlock = new Warlock();
// myWarlock.introduce(); 
// myWarlock.useMagic('power'); 
// myWarlock.void(); 
myWarlock.healthPotion();
myWarlock.healthPotion();
console.log(myWarlock.health)

const myWarrior = new Warrior();
// myWarrior.introduce(); 
// myWarrior.useWeapon('swing'); 
// myWarrior.useWeapon('ult'); 
// myWarrior.useOtherWeapon('axe');
// myWarrior.useWeapon(); 
myWarrior.healthPotion();
console.log(myWarrior.health)

const myRouge = new Rouge();
// myRouge.introduce(); 
// myRouge.useWeapon('stab'); 
// myRouge.useWeapon('unknown'); 
// myRouge.throwSmokeBomb(); 
myRouge.healthPotion();
console.log(myRouge.health)

  
  
  







  
  
  



