(function() {
  let users = [{
    name: "Вася",
    age: 10
  }, {
    name: "Петя",
    age: 15
  }, {
    name: "Женя",
    age: 20
  }, {
    name: "Маша",
    age: 25
  }, {
    name: "Даша",
    age: 30
  }, ];

  //import
  Table = window.Table;

  new Table({
    el: document.querySelector('.grid-holder'),
    template: _.template(document.querySelector('.grid-template').innerHTML),
    tableParams: {titleCol1: 'Имя', titleCol2: 'Возраст', users: users}
  });
})();
