(function () {
	
	let placeholder = document.querySelector('#placeholder');
	let input = document.querySelector('#input');
	placeholder.addEventListener('focus', function() {
		input.focus();
	});

	input.addEventListener('focus', function() {
		placeholder.remove();
	});
})();