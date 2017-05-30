let table = document.getElementById('bagua-table');
let isEditting = false;
let area, td, savedValue;
table.addEventListener('click', (e) => {

  if (e.target.tagName === 'TD' && !isEditting) {
    isEditting = true;
    td = e.target;

    let coords = td.getBoundingClientRect();
    area = document.createElement('textarea');
    area.value = td.innerHTML;
    savedValue = td.innerHTML;

    td.innerHTML = '';
    td.appendChild(area);
    area.style.left = coords.left + 'px';
    area.style.top = coords.top + 'px';
    area.style.height = td.offsetHeight - 2*parseInt(getComputedStyle(area).paddingTop) + 'px';
    area.style.width = td.offsetWidth - 2*parseInt(getComputedStyle(area).paddingLeft) + 'px';
    area.focus();

    let div = document.createElement('div');
    let ok = document.createElement('button');
    ok.innerHTML = 'OK';
    ok.classList.add('ok-button');
    let cancel = document.createElement('button');
    cancel.innerHTML = 'CANCEL';
    cancel.classList.add('cancel-button');
    div.appendChild(ok);
    div.appendChild(cancel);
    div.style.position = 'fixed';

    div.style.left = coords.left + 'px';
    div.style.top = coords.bottom + 'px';

    td.appendChild(div);
  } else if (e.target.tagName === 'BUTTON' && e.target.className === 'ok-button') {
      td.innerHTML = area.value;
      isEditting = false;
  } else if (e.target.tagName === 'BUTTON' && e.target.className === 'cancel-button') {
      td.innerHTML = savedValue;
      isEditting = false;
  }
  
});
