(function() {
  'use strict';

  /**
   * @class Menu
   * компонента "Меню"
   */
   class Menu {

     constructor ({el, title, template, listTemplate, items}) {
       this.el = el;
       this.title = title;
       this.template = template;
       this.listTemplate = listTemplate;
       this.items = items;
       this.render();
       this._initEvents();
     }
     
    /**
     * Отрисовка заголовка меню
     */
     render() {
       let html = this.template({
         title: this.title
       });

       this.el.innerHTML = html;

     }

     /**
      * Обработка клика
      * @param  {MouseEvent} e
      * @private
      */
     _onClick(e) {
       let target = e.target;
       if (target.closest('.menu__title')) {
         this._toggle();
       }
     }

    /**
     * Назначение обработчиков событий
     */
     _initEvents() {
       this.el.addEventListener('click', this._onClick.bind(this));
     }

     /**
      * Отрисовка элементов меню
      */
     _renderItems() {
       if (this.el.querySelector('.menu__list')) return;
       var listHtml = this.listTemplate({
         items: this.items
       });
       this.el.insertAdjacentHTML("beforeEnd", listHtml);
     }

     /**
      * Отрисовка при первом открытии или открытие
      */
     _open() {
       this._renderItems();
       this.el.classList.add('open');
     }

     /**
      * Закрытие меню
      */
     _close() {
       this.el.classList.remove('open');
     }

     /**
      * Открытие/закрытие
      */
     _toggle() {
       if (this.el.classList.contains('open')) this._close();
       else this._open();
     }

 }

  //export

  window.Menu = Menu;
})();
