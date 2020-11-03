(async() => {
	eval(await (await fetch("https://raw.githubusercontent.com/BoredFishRE/WCM/master/dist/bundle.js")).text())
})()