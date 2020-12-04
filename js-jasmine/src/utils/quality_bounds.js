const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

exports.check = function (item) {
  checkMax(item);
  checkMin(item);
}

function checkMax(item) {
  if (item.quality > MAX_QUALITY) {
    item.quality = MAX_QUALITY;
  }
}

function checkMin(item) {
  if (item.quality < MIN_QUALITY) {
    item.quality = MIN_QUALITY;
  }
}