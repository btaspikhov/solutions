class CustomSelect {

  constructor({el}) {
    this.el = el;

    this._initEvents();
  }

  _onClick(e) {
    let target = e.target;
    if (target.parentNode === this.el) this.toggle();
    else if (target.tagName === 'LI') {
      this.select(target);
      this.close();
    } else {
      this.close();
    }
  }

  _onDocumentClick(e) {
    if (!this.el.contains(e.target)) this.close();
  }

  _initEvents() {
    document.addEventListener('click', this._onClick.bind(this));
  }

  select(target) {
    let selectEvent = new CustomEvent('select', {
      bubbles: true,
      detail: {value: target.dataset.value}
    });
    this.el.dispatchEvent(selectEvent);
  }

  open() {
    this.el.classList.add('open');
    document.addEventListener('click', this._onDocumentClick);
  }

  close() {
    this.el.classList.remove('open');
    document.removeEventListener('click', this._onDocumentClick);
  }

  toggle() {
    if (this.el.classList.contains('open')) this.close();
    else this.open();
  }
}
