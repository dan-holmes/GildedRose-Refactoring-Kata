exports.is = function (item) {
  return item.name.toLowerCase().match(/conjured/);
};
exports.updateQuality = function (item) {
  if (item.sellIn <= 0) {
    item.quality -= 4;
  } else {
    item.quality -= 2;
  }
};
