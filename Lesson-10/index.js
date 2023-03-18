
'use strict'
//  Ancestor for 4 classes
class World{
    constructor(){
     this.world = 'Devoland';   
    }  
}
// Ancestor for 2 classes
class Fronter extends World{
constructor(){
    super()
this.fraction = 'Fronter';
}
    battlecry(){
        console.log('For the Fronterier')   
    } 
}
// Ancestor for 2 classes
class Backender extends World {
 constructor(){
    super()
this.fraction = 'Backer';
}
battlecry(){
    console.log('For the Backland')   
    } 
}
// first class
class  Jascript  extends Fronter{
    #mana;
    constructor(spell,redux){
        super()
    this.race ='Jascript';
    this.weapon = 'React';
    this.ability = 'html/css/js';
    this.#mana = 10;
    }

    
    
    useMagic(spell){
        if(spell === 'center div'){
            if(this.#mana > 0){
            console.log('Magic have been casted')
            this.#mana--
            }else{
               console.log('Mana is to low') 
            }
            
        }else{
            console.log('You dont know this kind of Magic')
        }
    }

    getMana() {
        console.log(this.#mana);
      }

    drinkManaPoition(){
        this.#mana = this.#mana + 1
    }

  

    useWeapon(redux){
if(redux === 'slash' || redux === 'pierce' || redux === 'straight down' || redux === 'const kill = kill' ){
    console.log('swuuuuuuuuuushhhhhhhh')
}else{
    console.log('Raise you keyboard')
}
    }

   catchphrase = () => console.log(`I am a Shield of ${front.fraction}`)
// unique ability
   becomeBack = () => this.weapon = 'Node.js'
   
}

// second class
class  Phytonist  extends Backender  {
    #mana;
    constructor(spell,phyton){
        super()
    this.race ='Phytonist';
    this.weapon = 'TensorFlow';
    this.ability = 'phyton';
    this.#mana = 15;
    }
    
    useMagic(spell){
        if(spell === 'pep 8'){
            if(this.#mana > 0){
            console.log('Magic have been casted')
            this.#mana--
            }else{
               console.log('Mana is to low') 
            }   
        }else{
            console.log('You dont know this kind of Magic')
        }
    }

    drinkManaPoition(){
        this.#mana = this.#mana + 1
    }

    useWeapon(phyton){
if(phyton === 'slash' || phyton === 'pierce' || phyton === 'straight down' || phyton === 'print()' ){
    console.log('swuuuuuuuuuushhhhhhhh')
}else{
    console.log('Raise you keyboard')
}
    }

   catchphrase = () => console.log(`I am a Shield of ${back.fraction}`)
// unique ability
   becomeCool () {
    this.weapon = 'C++';
    this.race = 'Cool C++ser';
   }  
}

// third class
class  Devopser  extends Backender  {
    #mana;
    constructor(spell,Csharp){
        super()
    this.race ='Devopser';
    this.weapon = 'C#';
    this.ability = 'bring server back to life';
    this.#mana = 20;
    }
    
    useMagic(spell){
if(spell === 'restart'){
    if(this.#mana > 0){
    console.log('Magic have been casted')
    this.#mana--
    }else{
       console.log('Mana is to low') 
    }
    
}else{
    console.log('You dont know this kind of Magic')
}
    }

    drinkManaPoition(){
        this.#mana = this.#mana + 1
    }

    useWeapon(Csharp){
if(Csharp === 'slash' || Csharp === 'pierce' || Csharp === 'straight down' || Csharp === 'really sharp language' ){
    console.log('swuuuuuuuuuushhhhhhhh')
}else{
    console.log('Raise you keyboard')
}
    }

   catchphrase = () => console.log(`I am a Shield of ${back.fraction}`)
// unique ability
   askHelp = () => console.log('power of StackOverFlow come to my HELP')

}

// fourth class
class  Designerer extends Fronter{
    #mana;
    constructor(figma){
        super()
    this.race ='Designerer';
    this.weapon = 'Figma';
    this.ability = 'make Jascript angry';
    this.#mana = 3;
    }
    
      useMagic(){
        if(this.#mana > 0){
     console.log(`You started crying (you don't know any kind of Magic)`) 
     this.#mana=this.#mana - 3;      
        }else{
            console.log('Mana is to low')      
        }
    
}
  
drinkManaPoition(){
    this.#mana = this.#mana + 1
}


    useWeapon(figma){
if(figma === 'slash' || figma === 'pierce' || figma === 'straight down' || figma === 'color = red' ){
    console.log('swuuuuuuuuuushhhhhhhh')
}else{
    console.log('Raise you keyboard')
}
    }

   catchphrase = () => console.log(`I am a Shield of ${front.fraction}`)
// unique ability
   getAngry = () => this.useMagic() 
   
}


const front1 = new Jascript()
const bac1 = new Phytonist()
const back2 = new Devopser()
const front2 = new Designerer()


// front1.useMagic('center div')
// front1.useMagic('center div')
// front1.drinkManaPoition()
// front1.getMana() 
