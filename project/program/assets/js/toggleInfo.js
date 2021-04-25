import $ from 'jquery'

var infoToggleBtn = $('#info-toggle-btn');

// document.getElementById('info-toggle-btn').onclick = function changeContent() { 
//     document.getElementById('collapse-one').classList.toggle(show);
// }

infoToggleBtn.click( function changeContent() { 
    document.querySelector('#collapse-one').classList.toggle('show');
});