const argsString = (message, args) => {

  let position = 0;

  while(message.indexOf('{}') > -1){
    message = message.replace('{}',args[position]);
    position++;
  }

  return message;

};

export { argsString };
