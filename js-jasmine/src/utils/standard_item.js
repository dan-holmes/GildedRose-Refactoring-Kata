exports.updateQuality = function (item) {
  if (item.sellIn <= 0) {
    item.quality -= 2;
  } else {
    item.quality -= 1;
  }
};