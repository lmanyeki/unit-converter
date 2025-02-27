let units =["km","hm","Dm","m","dm","cm","mm"];

function convertUnits(value,fromUnits){
  let fromIndex=-1;

for (let i=0;i<=units.length; i++){
 if(units[i]===fromUnits){
  fromIndex=i;
  break;
 }


  
}
if (fromIndex==-1){
  return "Invalid unit";

}
let results={};
 for (let j=0; j<units.length; j++){
  let convertedValue=value;

  if (j>fromIndex){
    for(let k=fromIndex; k<j; k++){
      convertedValue *=10;
    }
  }
  else if(j<fromIndex){
    for(let k=fromIndex; k>j; k--){
      convertedValue /=10
    }
  }
  results[units[j]]=convertedValue;
 }
 return results;
}

console.log(convertUnits(1, "km"));  
console.log(convertUnits(5, "cm")); 
console.log(convertUnits(2, "Dm")); 
console.log(convertUnits(2.5, "km")); 