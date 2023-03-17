let arrowRight = document.querySelector('.bi-arrow-right-circle');
let arrowLeft = document.querySelector('.bi-arrow-left-circle');
let invisibleProject = document.getElementById('3');
let firstProject = document.getElementById('1');

function clickOnArrows() {
	arrowRight.addEventListener('click', showNextPic);
	arrowLeft.addEventListener('click', showPrevPic);
}

const showNextPic = () => {
	firstProject.style.display = 'none';
	invisibleProject.style.display = 'block';
};
const showPrevPic = () => {
	invisibleProject.style.display = 'none';
	firstProject.style.display = 'block';
};

clickOnArrows();
