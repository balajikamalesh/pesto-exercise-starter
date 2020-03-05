function telephoneCheck(...args) {
  let phoneNo = args[0];
  let phoneNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneNoRegex.test(phoneNo);
}

export { telephoneCheck };
