const calculate = (arry) => {
  const num1 = parseInt(calculateArry(arry)[0])
  const num2 = parseInt(calculateArry(arry)[2])
  const operator = (calculateArry(arry)[1])


  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    case '/': return num1 / num2
    default: return NaN
  }
}
const calculateArry = (arry) => {
  const verifyCaculation = []

  for (let i = 0; i < arry.length; i++) {
    if (arry[i] === null) {
      verifyCaculation.push(0)
    }
    else if (arry[i]) { verifyCaculation.push(arry[i])
    }
  }

  return verifyCaculation
}

// for loop (let i = 0; i <.length; i++)
module.exports = calculate
