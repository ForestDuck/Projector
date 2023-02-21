// для елементу з текстом 'Навігація по DOM дереву'
//  використав:getElementById
function findText(){
 const tagName= document.querySelectorAll('h2');
 for(let i=0; i<tagName.length;i++){
  if(tagName[i].textContent.includes('Навігація по DOM дереву')){
  console.log(tagName[i])
 }
 }
} 
findText()
//or
const tagName= document.getElementById('header-two');
console.log(tagName)


 
// для першого елементу <section>
//  використав:querySelector
const firstSections = document.querySelector('section');
//or
const firstElInSection = firstSections.firstElementChild;
//Check
console.log(firstSections,firstElInSection)

// для елементу списку з текстом 'Пункт 5'
//  використав:querySelectorAll
function liText() {
  const listItems = document.querySelectorAll('li')
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent.includes('Пункт 5')) {
      console.log(listItems[i]);
    }
  }
}
liText()
//or
const listItems = document.querySelectorAll('li')
console.log(listItems[4])



// для елементу з класом 'hatredLevelBlock'
//  використав:getElementsByClassName
const byClass = document.getElementsByClassName('hatred-level-block');
console.log(byClass[0])

