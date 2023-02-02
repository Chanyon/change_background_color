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
	"hsl(210deg, 30%, 8%)",
	"#182635",
	"#181818",
	"#191b1f"
];
const randomIdx = randomNum(bgcolor.length);

document.body.style.backgroundColor = `${bgcolor[randomIdx]}`;
document.querySelector("#contents").style.color = "#eee";

const uri = window.location.host;

if (uri === "sxwangzhiwen.github.io") {
	document.querySelectorAll("a").forEach((item) => {
		item.style.color = "#eee";
	});
	document.querySelectorAll("p> a").forEach((item) => {
		item.style.color = "#ccc";
	});
	document.querySelectorAll("p > code").forEach((item) => {
		item.style.color = "#000";
	});
	document.querySelectorAll("figure > pre > code > span.line")
		.forEach((item) => {
			item.style.color = "#000";
	});
	document.querySelectorAll("#navigation > ul > li > a").forEach((item) => {
		item.style.color = "#49c0ee";
	});
}

function randomNum(length) {
	return Math.floor(Math.random() * length);
}
