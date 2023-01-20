const bgcolor = [
	"#292525",
	"#1f1f1f",
	"#373737",
	"#2c3642",
	"#1c2b3c",
	"#444444",
	"#1e152f",
	"#1e3029",
	"#0b2637",
];
const randomIdx = randomNum(bgcolor.length);

document.body.style.backgroundColor = `${bgcolor[randomIdx]}`;
document.querySelector("#contents").style.color = "#eee";

function randomNum(length) {
	return Math.floor(Math.random() * length)
}

