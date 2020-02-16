const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

const activeUser = anotherUser || defaultUserName;
const hasAccess = isAdmin != isLoggedIn;
let isTruthy = message < anotherMessage;
let isFalsy = !isLoggedIn;
let isNotTrue = typeof message === 'number';
const isTrue = typeof message != 'boolean';