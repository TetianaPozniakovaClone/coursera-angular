(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingList', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingList'];
function ToBuyController(ShoppingList) {
  var list = this;

  list.items = ShoppingList.getToBuyItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.moveItem = function (itemIndex) {
    ShoppingList.moveItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingList'];
function AlreadyBoughtController(ShoppingList) {
  var showList = this;

  showList.items = ShoppingList.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  var boughtItems = [];

  service.moveItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item[0]);
};

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
