let points = 0;
let total = 0;
document.getElementById('start').addEventListener('click', () => {
	points = 0;
	total = 0;
});
document.getElementById('correct').addEventListener('click', () => {
		points++;
		total++;
});
document.getElementById('incorrect').addEventListener('click', () => {
	total++;
});
document.getElementById('total').addEventListener('click', () => {
	alert(points.toString() + "/" + total.toString() + ' ' + points * 100/total + "%");
});
