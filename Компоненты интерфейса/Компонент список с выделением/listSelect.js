class ListSelect {

  constructor({elem}) {
    this.el = elem;
    this.lastClickedLi = null;
    this._initEvents();
  }

  _initEvents() {
    this.el.addEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    let li = e.target.closest('li');
    if (!li) return;

    if (e.metaKey || e.ctrlKey) { // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
      this.toggleSelect(li);
    } else if (e.shiftKey) {
      this.selectFromLast(li);
    } else {
      this.selectSingle(li);
    }

    this.select();

    this.lastClickedLi = li;
  }

  select() {
    let selectEvent = new CustomEvent("select", {
      bubbles: true,
      detail: this.getSelected()
    });
    this.el.dispatchEvent(selectEvent);
  }


  deselectAll() {
    [].forEach.call(this.el.children, function(child) {
      child.classList.remove('selected');
    });
  }

  toggleSelect(li) {
    li.classList.toggle('selected');
  }

  selectSingle(li) {
    this.deselectAll();
    li.classList.add('selected');
  }

  selectFromLast(target) {
    let startElem = this.lastClickedLi || target;

    target.classList.add('selected');
    if (startElem == target) {
      // клик на том же элементе, что и раньше
      // это особый случай
      return;
    }

    let isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;

    if (isLastClickedBefore) {
      for (let elem = startElem; elem != target; elem = elem.nextElementSibling) {
        elem.classList.add('selected');
      }
    } else {
      for (let elem = startElem; elem != target; elem = elem.previousElementSibling) {
        elem.classList.add('selected');
      }
    }
  }

  getSelected() {
    return [].map.call(this.el.querySelectorAll('.selected'), function(li) {
      return li.innerHTML;
    });
  }
}
