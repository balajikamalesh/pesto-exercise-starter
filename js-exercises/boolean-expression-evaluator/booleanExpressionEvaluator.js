function booleanExpressionEvaluator(expression) {
  let tokenArray = expression.split(' ');
  let validTokens = ['|', '&', '^', 'false', 'true', '!false', '!true'];

  let isArrayValid = tokenArray.every(function(token) {
                    return validTokens.includes(token.toString());
                  });

  if (!isArrayValid) {
    throw new Error();
  }

  tokenArray = evaulateAllNegations(tokenArray);

  let currentResult = tokenArray[0];
  let currentOperation = tokenArray[1];
  
  for(let i = 2;i < tokenArray.length; i++) {
  	if(tokenArray[i] === '|' || tokenArray[i] === '&')
    	currentOperation = tokenArray[i];
    else {
    		if(currentOperation === '|')
        		currentResult = currentResult | tokenArray[i];
        else if(currentOperation === '&')
        		currentResult = currentResult & tokenArray[i];
        else if(currentOperation === '^')
        		currentResult = currentResult ^ tokenArray[i];
    }
  }

  return Boolean(currentResult);
}

function evaulateAllNegations(tokenArray) {
  return tokenArray.map(function(token) {
    if(token[0] === '!' && (token.slice(1) == 'true' || token.slice(1) == 'false' ) ) {
      return !(token.slice(1) === 'true');
    } else if(token == 'true' || token == 'false')
    	return token == 'true';
      else
      	return token;
  });
}

export { booleanExpressionEvaluator };
