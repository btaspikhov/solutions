'use strict';
function validate(form) {

      function clear() {
        for (let i=0; i<form.elements.length; i++) {
          let el = form.elements[i];
            
          el.classList.remove('error');
          deleteMessage(el);
        }

      }

      clear();

      function showMessage(el, text) {
          let span = document.createElement('span');
            span.innerHTML = text;
            span.style.color = 'red';
            span.classList.add('errorMessage');
            el.parentNode.appendChild(span);
      }

      function deleteMessage(el) {
            let span = el.parentNode.lastElementChild;
            if (span.classList.contains('errorMessage')) {
              el.parentNode.removeChild(span);
            }
      }
      
      for (let i=0; i<form.elements.length; i++) {
        let el = form.elements[i];
        if (el.value === '') {
          if (el === form.elements.from) {
            showMessage(el, 'Укажите от кого');
          }
          if (el === form.elements.to) {
            showMessage(el, 'Укажите куда');
          }
          if (el === form.elements.message) {
            showMessage(el, 'Отсутствует текст');
          }
          if (el === form.elements.password) {
            showMessage(el, 'Укажите пароль');
          }
          if (el === form.elements.password2) {
            continue;
          }


          el.classList.add('error');

        } 
      }



      let pass1 = form.elements.password;
      let pass2 = form.elements.password2;

      if (pass1.value !== '' && pass1.value !== pass2.value) {
        pass1.classList.add('error');
        showMessage(pass1, 'Пароли не совпадают');
        pass2.classList.remove('error');
      }
}

let form = document.forms[0];

form.addEventListener('submit', function() {
  validate(form);
});