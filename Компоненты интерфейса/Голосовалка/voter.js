/**
 * Устанавливает голосовалку
 * @author: Berik Taspikhov
 */
class Voter {
  constructor(options) {
    
    let el = options.elem;
    this._vote = el.querySelector('.voter__vote');
    let onclick = this._onclick.bind(this);
    this._state = 0;
   
    el.addEventListener('click', onclick);
    
  }
  
  _render() {
    this._vote.innerHTML = this._state;
  }
  
  _onclick(e) {
    let target = e.target;
    if (target.className === 'voter__up') this._increase();
    if (target.className === 'voter__down') this._decrease(); 
    this._render();
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