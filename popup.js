const $ = (v) => document.querySelector(v);
const $$ = (v) => document.querySelectorAll(v);
let changeColorBtn = $$(".changeColor");

const bgcolor = ["#292525", "#1f1f1f", "#373737", "#2c3642","#1c2b3c"]

for (let i = 0;i< bgcolor.length;i++) {
    changeColorBtn[i].style.backgroundColor = bgcolor[i];
}

for (let i = 0;i< changeColorBtn.length;i++) {
	changeColorBtn[i].addEventListener("click", function(e) {
		chrome.storage.sync.get("bgcolor", function (data) {
			const { bgcolor } = data;
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				chrome.tabs.executeScript(tabs[0].id, {
					code: `document.body.style.backgroundColor = "${bgcolor[i]}";`,
				});
			});
		});
	});
}
