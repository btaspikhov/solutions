/**
 * Устанавливает поведение карусели
 * @author: Berik Taspikhov
 */
class Carousel {
  constructor({elem}) {
    
    this.$el = elem;
    this.$ul = this.$el.querySelector('ul');
    this.$buttonLeft = this.$el.querySelector('.arrow.left');
    this.$buttonRight = this.$el.querySelector('.arrow.right');
    this.$lis = this.$el.querySelectorAll('li');
    this._position = 0;
    
    let onLeftClick = this._onLeftClick.bind(this);
    let onRightClick = this._onRightClick.bind(this);
   
    this.$buttonLeft.addEventListener('click', onLeftClick);
    this.$buttonRight.addEventListener('click', onRightClick);
    
  }
  
  _render() {
    this.$ul.style.marginLeft = this._position+'px';
    console.log(this.$ul.style.marginLeft);
  }
  
  _onRightClick(e) {
    this._position = Math.max(this._position-390, -130*(this.$lis.length-3));
    this._render();
  }
  
  _onLeftClick(e) {
    this._position = Math.min(this._position+390, 0);
    this._render();
  }

}