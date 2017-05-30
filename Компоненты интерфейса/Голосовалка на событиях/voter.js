/**
 * Устанавливает голосовалку
 * @author: Berik Taspikhov
 */
class Voter {
  constructor({elem}) {

    this.el = elem;
    this._vote = this.el.querySelector('.voter__vote');
    this._state = 0;
    this._initEvents();

  }

  _render() {
    this._vote.innerHTML = this._state;
  }

  _initEvents() {
    this.el.addEventListener('click', this._onclick.bind(this));
  }

  _onclick(e) {
    let target = e.target;
    if (target.className === 'voter__up') this._increase();
    if (target.className === 'voter__down') this._decrease();
    this.change();
    this._render();
  }

  change() {
   let widgetEvent = new CustomEvent("change", {
     bubbles: true,
     detail: this._state
   });
   this.el.dispatchEvent(widgetEvent);
 }

  setVote(num) {
    this._state = num;
  }

  _increase() {
      this._state++;
  }

  _decrease() {
      this._state--;
  }

}
