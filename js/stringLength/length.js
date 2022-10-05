const getStringLength = (string) => {
  if (!string.length || string.length > 10) {
    throw new Error('try again');
  }
  return string.length;
};

module.exports = getStringLength;