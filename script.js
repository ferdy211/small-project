/*const gambar = document.querySelector('.center');
const gambar2 = document.querySelector('.target');

gambar.addEventListener('click', function(e) {
	if(e.target.className == 'source') {
		gambar2.src = e.target.src;
	}
});*/

const loading = document.getElementById('loading');
const x = setTimeout(()=>{
	loading.style.display = "none";
}, 650)
window.addEventListener('load', x);


function prev() {
	document.getElementById('target').src = "tshirt6.jpg";
}

function next() {
	document.getElementById('target').src = "tshirt3.jpg";
}

function click1() {
	window.location.href='file:///D:/small%20project/halaman2.html';
}

function click2() {
	window.location.href='file:///D:/small%20project/href1.html';
}

function click3() {
	window.location.href='file:///D:/small%20project/href2.html';
}

function click4() {
	window.location.href='file:///D:/small%20project/href3.html';
}

function click5() {
	window.location.href='file:///D:/small%20project/href4.html';
}

function click6() {
	window.location.href='file:///D:/small%20project/href5.html';
}

function click7() {
	window.location.href='file:///D:/small%20project/href6.html';
}

function click8() {
	window.location.href='file:///D:/small%20project/href7.html';
}

function click9() {
	window.location.href='file:///D:/small%20project/href8.html';
}




