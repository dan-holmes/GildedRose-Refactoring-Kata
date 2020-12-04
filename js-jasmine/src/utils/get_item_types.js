function getItemTypes() {
  const glob = require('glob');
  const path = require('path');

  let itemTypes = [];

  glob.sync('./src/utils/item_types/**/*.js').forEach(function (file) {
    itemTypes.push(require(path.resolve(file)));
  });

  return itemTypes;
}

export default getItemTypes;