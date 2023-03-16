const hmenu = document.querySelector('.hidden-menu');
const hambuger = document.querySelector('.hambuger');
const content = document.querySelector('.hidden-cont');
const close = document.querySelector('.close-btn');

hambuger.addEventListener('click', () => {
  hmenu.style.display = 'block';
  hambuger.style.display = 'none';
});

close.addEventListener('click', () => {
  hmenu.style.display = 'none';
  hambuger.style.display = 'block';
});

content.addEventListener('click', () => {
  hmenu.style.display = 'none';
  hambuger.style.display = 'block';
});