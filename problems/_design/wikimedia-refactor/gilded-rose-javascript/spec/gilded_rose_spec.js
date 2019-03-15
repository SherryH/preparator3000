describe("Gilded Rose", function() {

  it("Given sell_in, quality are greater than 0, when 1 day passed, both decrease by 1", function() {
    var items = [];
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    update_items(items);
    expect(items[0].quality).toEqual(19);
    expect(items[0].sell_in).toEqual(9);
  });

  it("Given sell_in is less than 0 and quality is greater than 0, when 1 day passed, quality decreases by two", function() {
    var items = [];
    items.push(new Item('+5 Dexterity Vest', -1, 9));
    update_items(items);
    expect(items[0].quality).toEqual(7);
  });

  it("Given quality is 0, when 1 day passes, quality stays 0", function() {
    var items = [];
    items.push(new Item('+5 Dexterity Vest', -1, 0));
    update_items(items);
    expect(items[0].quality).toEqual(0);
  });

  it("Sell_in always decreases by 1 when 1 day pass", function() {
    var items = [];
    items.push(new Item('+5 Dexterity Vest', -1, 0));
    update_items(items);
    expect(items[0].sell_in).toEqual(-2);
  });

  it("Aged Brie increases quality by 1 when 1 day pass", function() {
    var items = [];
    items.push(new Item('Aged Brie', 2, 0));
    update_items(items);
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("Aged Brie quality can not be more than 50", function() {
    var items = [];
    items.push(new Item('Aged Brie', 0, 50));
    update_items(items);
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(50);
  });

  it("Sulfuras never gets sold and never decrease in quality", function() {
    var items = [];
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    update_items(items);
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50));
    update_items(items);
    expect(items[1].sell_in).toEqual(9);
    expect(items[1].quality).toEqual(50);
  });

  it("Given sell_in >10, Backstage passes increases quality by 1 after 1 day", function() {
    var items = [];
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20));
    update_items(items);
    expect(items[0].sell_in).toEqual(10);
    expect(items[0].quality).toEqual(21);
  });

  it("Given sell_in <=10, Backstage passes increases quality by 2 after 1 day", function() {
    var items = [];
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20));
    update_items(items);
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(22);

    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20));
    update_items(items);
    expect(items[1].sell_in).toEqual(5);
    expect(items[1].quality).toEqual(22);
  });

  it("Given sell_in <=5, Backstage passes increases quality by 3 after 1 day", function() {
    var items = [];
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20));
    update_items(items);
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(23);
  });

  it("Given sell_in =0, Backstage passes drops to 0", function() {
    var items = [];
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20));
    update_items(items);
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(23);
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20));
    update_items(items);
    expect(items[1].sell_in).toEqual(-1);
    expect(items[1].quality).toEqual(0);
  });

  it("Given sell_in > 0, conjured item quality degrades by 2 after 1 day", function() {
    var items = [];
    items.push(new Item('Conjured Mana Cake', 3, 6));
    update_items(items);
    expect(items[0].sell_in).toEqual(2);
    expect(items[0].quality).toEqual(4);
  });
});
