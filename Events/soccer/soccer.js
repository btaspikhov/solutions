var draggables = document.getElementById('draggables');
var prevTarget;

draggables.onmousedown = function(e) {
  target = e.target;
  if (!target.classList.contains('draggable')) return;
  var coords = getCoords(target);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  var field = document.getElementById('field');
  var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
  );
  var scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
  );

  target.style.position = 'absolute';
  moveAt(e);

  if (!prevTarget) {
    target.style.zIndex = 1000;
  } else {
    target.style.zIndex = +prevTarget.style.zIndex+1;
  }
  console.log(target.style.zIndex);

  function moveAt(e) {
    var left = e.pageX - shiftX,
        top = e.pageY - shiftY;
    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (top + target.offsetHeight > scrollHeight) {
      top = scrollHeight - target.offsetHeight;
    }
    if (left + target.offsetWidth > scrollWidth) {
      left = scrollWidth - target.offsetWidth;
    }  
    target.style.left = left + 'px';
    target.style.top = top + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  document.onmouseup = function() {
    document.onmousemove = null;
    document.onmouseup = null;
    prevTarget = target;
  };
}
document.addEventListener('mousedown', function(e) {e.preventDefault();});

draggables.ondragstart = function() {
  return false;
};

function getCoords(elem) { 
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };

}