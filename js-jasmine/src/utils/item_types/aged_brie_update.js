exports.is = function (item) {
  return item.name.toLowerCase().match(/aged brie/);
};
exports.updateQuality = function (item) {
  if (item.sellIn <= 0) {
    item.quality += 2;
  } else {
    item.quality += 1;
  }
};
