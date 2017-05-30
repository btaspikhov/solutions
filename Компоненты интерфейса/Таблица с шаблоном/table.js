(function() {
  'use strict';

  /**
   * @class Table
   * компонента "Таблица"
   */

  class Table {

    /**
		 * @constructor
		 * @param  {Object} opts
		 */
    constructor({el, template, tableParams: {titleCol1, titleCol2, users}}) {
      this.el = el;
      this.template = template;
      this.tableParams = {};
      this.tableParams.titleCol1 = titleCol1;
      this.tableParams.titleCol2 = titleCol2;
      this.tableParams.users = users;
      this.render();
    }
    /**
     * Отрисовка таблицы
     */
    render() {
      this.el.innerHTML = this.template({
        title1: this.tableParams.titleCol1,
        title2: this.tableParams.titleCol2,
        users: this.tableParams.users
      });
    }
  }

  //export

  window.Table = Table;
})();
