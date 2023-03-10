function durationBetweenDates(date1='11.01.2022',date2='02.09.2023',gap='days'){
    //changing date to number
    date1 =  new Date(date1);
    date2 =  new Date(date2);
    // creating empty variable to get dates interval length
    let datesDiff;
    //insures that function will work even when date2 > date1
    if(date1 === 'Invalid Date'|| date2 === 'Invalid Date'){
      return 'Invalid Date'
    }else if( date2 > date1){
      datesDiff = date2-date1
    }else if(date2 < date1){
      datesDiff = date1-date2
    }else{
      return 0
    }
    //creating an operator that accepts a third parameter and returns an appropriate response according to it
      switch (gap){
        case "days"   : return Math.floor(datesDiff / (1000*60*60*24)); 
        case "hours"  : return Math.floor(datesDiff / (1000*60*60)); 
        case "minutes": return Math.floor(datesDiff / (1000 * 60));
        case "seconds": return Math.floor(datesDiff / 1000);
        default: return `choose correct gap('days', 'hours', 'minutes', 'seconds')`;
      }
     }
     
    // checking console  
    
    console.log (durationBetweenDates())
    
// Ex-2
    function optimizer(data) {
        // converting all keys to lower case, and rounding all values to two decimal
      return Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
          return [key.toLowerCase(), (Math.round(value * 100) / 100).toFixed(2)];
        }),
      );
    }
    
    //checking arguments
    const priceData = {
        Apples: '23.4',
        BANANAS: '48',
        oRAnGEs: '48.7584',
        };
    let updatedPriceData = optimizer(priceData);
    console.log(updatedPriceData)

// Ex-3

//Recursive function
  function recursiveOddSumTo(number) {
    // stop condition
    if (number <= 0){
       return 0;  
    }
    // checking if number is even and if so calling fucntion again 
    else{
        if(number%2 !== 1){
         return recursiveOddSumTo(number - 1);   
        }
        // if number is not even than we add number to next odd number
        else{
         return number + recursiveOddSumTo(number - 1);   
        }
    }
  }
//Iteration function
  function iterationOddSumTo(number){
    let oddNum = 0
    for(let i = 0; i< number; i++){
        if(i% 2 === 0){
             oddNum+=i+1
        }
    }
    return oddNum
  }



//checking arguments
console.log(recursiveOddSumTo(1))
console.log(recursiveOddSumTo(10))
console.log(iterationOddSumTo(3))
console.log(iterationOddSumTo(13))
