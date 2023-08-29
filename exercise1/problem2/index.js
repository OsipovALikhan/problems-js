function intWithinBounds(n, min, max)  {
    if (!Number.isInteger(n)) {
      return false;
    }
    return n >= min && n < max;
}
module.exports = intWithinBounds;
