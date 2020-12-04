import getItemTypes from './utils/get_item_types';
import standardItem from './utils/standard_item';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const itemTypes = getItemTypes().concat([standardItem])
class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item =>
      this._updateItem(item)
    );
    return this.items;
  }

  _updateItem(item) {
    this._updateItemQuality(item);
    this._updateItemSellIn(item);
  }

  _updateItemQuality(item) {
    this._conditionallyUpdateQuality(item);
    this._checkQualityBounds(item);
  }

  _conditionallyUpdateQuality(item) {
    itemTypes.forEach(itemType => {
      if (itemType.is(item)) {
        itemType.updateQuality(item);
      }
    })
  }

  _updateItemSellIn(item) {
    if (this._isSulfuras(item)) return;
    item.sellIn = item.sellIn - 1;
  }

  _isSulfuras(item) {
    return item.name.toLowerCase().match(/sulfuras/)
  }

  _checkQualityBounds(item) {
    this._checkMaxQuality(item);
    this._checkMinQuality(item);
  }

  _checkMaxQuality(item) {
    if (item.quality > MAX_QUALITY) {
      item.quality = MAX_QUALITY;
    }
  }

  _checkMinQuality(item) {
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY;
    }
  }
}
module.exports = {
  Shop
};
