describe("Gilded Rose", function() {

  it("Given sell_in, quality are greater than 0, when 1 day passed, both decrease by 1", function() {
    var items = [];
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    update_items(items);
    expect(items[0].quality).toEqual(19);
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

});
