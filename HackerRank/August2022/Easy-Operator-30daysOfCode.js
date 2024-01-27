function solve(meal_cost, tip_percent, tax_percent) {
    let mcost = Number(meal_cost.toString())
    mcost

    let tips = mcost / 100 * tip_percent;
    let tax = mcost / 100 * tax_percent;
    tips
    tax

    let result = mcost + tips + tax
    result = result.toFixed(0)
    return result
  }
  
  const TestAsert = (valueA, valueB) => {
    valueA
    valueB
      return console.log(
          Number(valueA) === Number(valueB)? "no error : " + valueA : "error : " + valueA
      );
  };

  TestAsert(solve(12.00, 20, 8), 15)
  TestAsert(solve(15.50, 15, 10), 19)
  
  