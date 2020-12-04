import getItemTypes from './get_item_types'

exports.is = function (item) {
  let isStandard = true;
  getItemTypes().forEach(itemType => {
    if (itemType.is(item)) {
      isStandard = false;
    }
  });
  return isStandard
}
exports.updateQuality = function (item) {
  if (item.sellIn <= 0) {
    item.quality -= 2;
  } else {
    item.quality -= 1;
  }
};