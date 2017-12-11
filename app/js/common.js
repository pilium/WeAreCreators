var modalBtn = document.querySelector('.open');
var closeBtn = document.querySelector('.close');

var modalContainer = document.querySelector('.modals');

modalBtn.addEventListener('click',function(){
  modalContainer.style.display = 'block';  
  window.setTimeout(function(){
    modalContainer.classList.add('active');
  },0.1);
});

closeBtn.addEventListener('click',function(){
    modalContainer.classList.remove('active');
    modalContainer.style.display = 'none';
});