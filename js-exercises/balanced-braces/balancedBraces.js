
function balancedBraces(...args) {
  let statement = args[0];
  let openingBracesArray = ['(', '[', '{'];
  let closingBracesArray = [')', ']', '}'];
  let braceStack = [];
  for(let i = 0;i < statement.length; i++) {
    let currentLetter = statement[i];
    if(openingBracesArray.includes(currentLetter))
      braceStack.push(currentLetter);
    else if(closingBracesArray.includes(currentLetter)){
          if((currentLetter == ')' && braceStack[braceStack.length-1] == '(')
            || (currentLetter == ']' && braceStack[braceStack.length-1] == '[')
            || (currentLetter == '}' && braceStack[braceStack.length-1] == '{'))
            braceStack.pop();
          else
            braceStack.push(currentLetter);
    }
  }
  return braceStack.length === 0;
}

export {
  balancedBraces,
};
