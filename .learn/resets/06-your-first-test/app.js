const sum = (a,b)=> {
    return a + b
}
console.log(sum(7,3))
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro){
    let dollar = euro * oneEuroIs.USD
return dollar
}

console.log(fromEuroToDollar(2))

function fromDollarToYen(dollar){
    let euro = dollar  / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;
}
console.log(fromDollarToYen(2));

function fromYenToEuro(yen){
    let euro = yen / oneEuroIs.JPY;
    return euro;
}
console.log(fromYenToEuro(156.5));
function fromEuroToYen(euro){
    let yen = euro * oneEuroIs.JPY;
    return yen;
  }
  
  console.log(fromEuroToYen(2));
  
  function fromYenToPound(yen){
    let euro = yen /oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
  }
  console.log(fromYenToPound(1000))

module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToEuro,fromEuroToYen,fromYenToPound};

