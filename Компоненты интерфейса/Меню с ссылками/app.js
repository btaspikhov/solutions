(function() {

  //import
  let Menu = window.Menu;
  
  let menu = new Menu({
    el: document.querySelector('.menu'),
    title: "Сладости",
    template: _.template(document.getElementsByClassName('menu-template')[0].innerHTML.trim()),
    listTemplate: _.template(document.getElementsByClassName('menu-list-template')[0].innerHTML.trim()),
    items: {
      "donut": "Пончик",
      "cake": "Пирожное",
      "chocolate": "Шоколадка"
    }
  });
})();
