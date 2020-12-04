import getItemTypes from './utils/get_item_types';
import standardItem from './utils/standard_item';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
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
    getItemTypes().forEach(itemType => {
      if (itemType.is(item)) {
        itemType.updateQuality(item);
      }
    })
  }

  _updateItemSellIn(item) {
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
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
