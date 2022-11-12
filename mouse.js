let text = document.querySelector('h1');
let menu = document.querySelector('.menu');
let copy = document.querySelector('.copy');

var copyText;

text.addEventListener('mousedown', (e) => {
	copyText = window.getSelection().toString();
})

window.oncontextmenu = (e) => {
	e.preventDefault();
	menu.style.display = 'inline-block';
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	menu.style.left = mouseX + 'px';
	menu.style.top = mouseY + 'px';

}

window.addEventListener('click', (e) => {
	close(e);
})

const close = (e, trigger) => {
	const mouseX = e.clientX;
	const mouseY = e.clientY;
	const menuWidth = menu.clientWidth;
	const menuHeight = menu.clientHeight;
	const menuLeft = Number(menu.style.left.replace('px', ''));
	const menuTop = Number(menu.style.top.replace('px', ''));

	if(mouseX < menuLeft || mouseX > menuLeft + menuWidth || mouseY < menuTop || mouseY > menuTop + menuHeight || !trigger) {
		menu.style.display = 'none';
	}
}

copy.addEventListener('click', (e) => {
	const el = document.createElement('textarea');
  el.innerHTML = copyText;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
	close(e, false);
})
