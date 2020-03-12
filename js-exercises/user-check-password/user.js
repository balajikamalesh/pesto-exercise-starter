
// (*)
// Follow the instructions and fill in the blank sections.
function User(username, password) {
  // set a username and password property on the user object that is created
  let userObj = {};
  userObj.username = username;
  userObj.password = password;
  
  Object.assign(this, userObj);
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
User.prototype.checkPassword = function checkPassword(password) {
    return this.password === password;
};

export {
  User,
};
