class Slider {

  constructor({elem, max}) {
    this.el = elem;
    this.thumbEl = elem.querySelector('.slider__thumb');
    this.max = max;

    this._onDocumentMouseMove = this._onDocumentMouseMove.bind(this);
    this._onDocumentMouseUp = this._onDocumentMouseUp.bind(this);
    this._initEvents();
  }

  _initEvents() {
    this.el.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
    this.el.addEventListener('mousedown', this._onmousedown.bind(this));
  }

  _onmousedown(e) {
    if (e.target.closest('.slider__thumb')) {
      this._startDrag(e.clientX, e.clientY);
      e.preventDefault();
    }
  }

  _startDrag(startClientX, startClientY) {
    this.thumbCoords = this.thumbEl.getBoundingClientRect();
    this.sliderCoords = this.el.getBoundingClientRect();
    this.shiftX = startClientX - this.thumbCoords.left;
    this.shiftY = startClientY - this.thumbCoords.top;

    document.addEventListener('mousemove', this._onDocumentMouseMove);
    document.addEventListener('mouseup', this._onDocumentMouseUp);
  }

  _moveTo(clientX) {
  // вычесть координату родителя, т.к. position: relative
    this.newLeft = clientX - this.shiftX - this.sliderCoords.left;
    console.log(clientX,this.sliderCoords.left, this.shiftX,  this.newLeft);
    // курсор ушёл вне слайдера
    if (this.newLeft < 0) {
      this.newLeft = 0;
    }
    let rightEdge = this.el.offsetWidth - this.thumbEl.offsetWidth;
    if (this.newLeft > rightEdge) {
      this.newLeft = rightEdge;
    }

    this.thumbEl.style.left = this.newLeft + 'px';
  }

  _slide() {
    let slideEvent = new CustomEvent('slide', {
      detail: Math.round(this.newLeft/(this.el.offsetWidth - this.thumbEl.offsetWidth)*this.max)
    });
    this.el.dispatchEvent(slideEvent);
  }

  _onDocumentMouseMove(e) {
       this._moveTo(e.clientX);
       this._slide();

  }

  _change() {
    let changeEvent = new CustomEvent('change', {
      bubbles: true,
      detail: Math.round(this.newLeft/(this.el.offsetWidth - this.thumbEl.offsetWidth)*this.max)
    });
    this.el.dispatchEvent(changeEvent);
  }

  _onDocumentMouseUp() {
       this._endDrag();
       this._change();
  }

  _endDrag() {
       document.removeEventListener('mousemove', this._onDocumentMouseMove);
       document.removeEventListener('mouseup', this._onDocumentMouseUp);
  }

  setValue(val) {

      let pos = (this.el.offsetWidth - this.thumbEl.offsetWidth)/this.max*val;
      this.thumbEl.style.left = pos + 'px';
  }

}
