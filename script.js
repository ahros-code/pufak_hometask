const box = document.querySelector('.box');
let userNum = prompt('Enter number: ') - 0;
const newdiv = document.createElement('div');
const p = document.createElement('p');
newdiv.appendChild(p);
newdiv.classList.add('myP');
let id = setInterval(() => {
	userNum -= 1;
	p.textContent = userNum;
	box.appendChild(newdiv);
	if(userNum == 0) {
		clearInterval(id)
		box.removeChild(newdiv);
	}
}, 1000);