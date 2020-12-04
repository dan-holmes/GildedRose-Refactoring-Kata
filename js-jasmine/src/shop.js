import getItemTypes from './utils/get_item_types';
import sulfuras from './utils/item_types/sulfuras_update'
import standardItem from './utils/standard_item';
import qualityBounds from './utils/quality_bounds'

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
    qualityBounds.check(item);
  }

  _conditionallyUpdateQuality(item) {
    itemTypes.forEach(itemType => {
      if (itemType.is(item)) {
        itemType.updateQuality(item);
      }
    })
  }

  _updateItemSellIn(item) {
    if (sulfuras.is(item)) return;
    item.sellIn = item.sellIn - 1;
  }
}
module.exports = {
  Shop
};
