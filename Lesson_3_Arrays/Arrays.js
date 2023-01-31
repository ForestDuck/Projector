//EX-1
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let temp = userNames[0];
userNames[0] = userNames[1];
userNames[1] = temp;
let initials=userNames.map(function(userName) {
return userName.split(' ').map(word => word.charAt(0)).join('.')
} );

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//EX-2
const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = Number(currentMaxValue.toString().split('').sort().reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//EX-3
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray= resultsArray.flat(Infinity).reduce((a,b)=>{
return a*b;
})

console.log(productOfArray); // 24
