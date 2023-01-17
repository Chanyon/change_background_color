chrome.runtime.onInstalled.addListener(function () {
	console.log("ok");
	//storage setting value
	chrome.storage.sync.set({ bgcolor: ["#292525", "#1f1f1f", "#373737", "#2c3642","#1c2b3c"] }, function () {
		console.log("storage init colors value");
	});

	// 为特定网址显示图标
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: "ziglnag.org" },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		]);
	});

	chrome.browserAction.setBadgeText({ text: "zig" });
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] });
    // chrome.action.setBadgeBackgroundColor({color: '#FFFFFF'});
});
