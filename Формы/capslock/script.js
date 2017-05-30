(function () {
	
	let input = document.querySelector('input');
	let capsIndicator = document.querySelector('#capsIndicator');
	let capsOn = null;
	let isFocused = false;
	
	document.addEventListener('keydown', (e) => {
		if (e.keyCode !== 20 || capsOn === null) return;
		
		capsOn = !capsOn;
		if (isFocused) showCapsIndicator(true);
		if (!capsOn) showCapsIndicator(false);
		console.log(e.keyCode);
		
	});

	document.onkeypress = function(e) {
      e = e || event;

      var chr = getChar(e);
      if (!chr) return // special key

      if (chr.toLowerCase() == chr.toUpperCase()) {
        // символ, не зависящий от регистра, например пробел
        // не может быть использован для определения CapsLock
        return;
      }

      capsOn = (chr.toLowerCase() == chr && e.shiftKey) || (chr.toUpperCase() == chr && !e.shiftKey);
    }

	input.addEventListener('focus', function() {
		isFocused = true;
		if (capsOn)	showCapsIndicator(true);
	});

	input.addEventListener('keyup', function() {
		if (capsOn)	showCapsIndicator(true);
	});

	input.addEventListener('blur', function() {
		isFocused = false;
		showCapsIndicator(false);
	});

	function showCapsIndicator(bool) {
		 capsIndicator.style.display = bool ? 'block' : 'none';
	}

	// event.type должен быть keypress
	function getChar(event) {
	  if (event.which == null) { // IE
	    if (event.keyCode < 32) return null; // спец. символ
	    return String.fromCharCode(event.keyCode)
	  }

	  if (event.which != 0 && event.charCode != 0) { // все кроме IE
	    if (event.which < 32) return null; // спец. символ
	    return String.fromCharCode(event.which); // остальные
	  }

	  return null; // спец. символ
	}
})();