function logger(path) {
  return function (...args) {
    return console.log(path, ...args);
  };
}
