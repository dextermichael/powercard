(function(){
var burger = document.querySelector('.burger');
var nav = document.querySelector('#'+burger.dataser.target);

burger.addEventListener('click',function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active')
});
})();