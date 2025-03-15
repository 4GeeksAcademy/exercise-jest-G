const {sum,fromEuroToDollar,fromDollarToYen,fromEuroToYen,fromYenToEuro,fromYenToPound} = require('./app.js')

test('adds 14 + 9 to equal 23',()=> {
    let total = sum(14,9);
    expect(total).toBeCloseTo(23);
})

test('let 2 euros be equal to 2.14 dollars',()=> {
    let total = fromEuroToDollar(2)
    expect(total).toBeCloseTo(2.14);
})
test('let 2 dollar equal to 292 yen',()=>{
    let total = fromDollarToYen(2);
    expect(total).toBeCloseTo(292.52)
})

test ('156.5 yen equal to 1 euro',()=>{
    let total = fromYenToEuro(156.5);
    expect (total).toBeCloseTo(1);
})

test ('2 euros equal to 313 yen',()=>{
    let total = fromEuroToYen(2);
    expect (total).toBeCloseTo(313)
})
test('1000 yen equal to 5.57 pound', () => {
    let total = fromYenToPound(1000);
    expect(total).toBeCloseTo(5.56);
});