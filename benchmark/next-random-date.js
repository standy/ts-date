const dates = [];
for (let i = 0; i < 1000; i++) {
	dates.push(new Date(Math.random() * Date.now() * 2));
}
let i = 0;
function nextRandomDate() {
	i = (i + 1) % dates.length;
	return dates[i];
}

module.exports = nextRandomDate;
