const allPromises = (args) => {
  if (args === undefined) return Promise.resolve();
  const returnList = [];
  args.forEach((element, index) => {
    if (element instanceof Promise)
        element.then((result) => returnList[index] = result);
    else 
        returnList[index] = element;
  });

  return new Promise((resolve) => resolve(returnList));
};

export { allPromises };
