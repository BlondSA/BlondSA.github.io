window.addEventListener("DOMContentLoaded", () => {
	const createElem = (parent, domElement, nameOfClass) => {
		const parentElement = document.querySelector(parent);
		const createEl = (elem) => {
			return document.createElement(elem);
		};
		const element = createEl(domElement);
		element.classList.add(nameOfClass);
		parentElement.appendChild(element);
	};

	let count = 0;

	const createLine = (precent) => {
		if (document.querySelector(".loading")) {
			document.querySelector(".loading").remove();
		}
		createElem("body", "div", "loading");
		createElem(".loading", "div", "loading__text");
		createElem(".loading", "div", "loading__container");
		createElem(".loading__container", "div", "loading__line");
		document.querySelector(".loading__text").textContent = `${precent}%`;
		document.querySelector(".loading__line").style.width = `${precent}%`;
	};

	const showLine = () => {
		if (count > 100) {
			return clearInterval(timer);
		}
		createLine(count);
		return count++;
	};

	const timer = () => {
		setInterval(() => showLine(), 100);
	};
	timer();
});
