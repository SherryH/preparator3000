function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_items(items) {
  items.forEach(item=>{
    // if 'Aged Brie'
    if (item.name === 'Aged Brie'){
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
      item.sell_in = item.sell_in - 1 // move to bottom
    } 
    // if Backstage
    else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sell_in === 0){
        item.quality = 0
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
          if (item.sell_in < 11) {
            item.quality = item.quality + 1
          }
          if (item.sell_in < 6) {
            item.quality = item.quality + 1
          }
        }
      }
      item.sell_in = item.sell_in - 1 // move to bottom            
    } else if (item.name === 'Sulfuras, Hand of Ragnaros'){
      
    } else if (item.name === 'Conjured Mana Cake'){
        item.quality = item.quality > 0 ? item.quality - 2: item.quality
        if (item.sell_in < 0 && item.quality > 0) {
          item.quality = Math.max(item.quality -2, 0)
        }
        item.sell_in = item.sell_in - 1 // move to bottom            
    } else {
        item.quality = item.quality > 0 ? item.quality - 1: item.quality
        if (item.sell_in < 0 && item.quality > 0) {
          item.quality = Math.max(item.quality -1, 0)
        }
        item.sell_in = item.sell_in - 1 // move to bottom            
    }
  })

}

// further refactoring can be done by extracting functions
/*
function update_items(){
  switch(item.name){
    case "Aged Brie":
      getAgedBrieQuality()
      break;
    case "Backstage Concert":
      getBackstageQuality()
      break;      
    case: "Sulfuras":
      break;
    case "Conjured":
      getConjuredQuality()
      break;
    default:
      getCommonItemQuality()
  }
  if(item.name !== "Sufuras"){
    item.sell_in = item.sell_in - 1
  }
}

*/