"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const movieDB = {
		movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
	};

	const advertisingBlock = document.querySelectorAll(".promo__adv img");
	const genre = document.querySelector(".promo__genre");
	const poster = document.querySelector(".promo__bg");
	const movieList = document.querySelector(".promo__interactive-list");
	const addForm = document.querySelector("form.add");
	const addInput = addForm.querySelector(".adding__input");
	const checkBox = addForm.querySelector("[type='checkBox']");

	const deleteAdv = (array) => {
		array.forEach((item) => {
			item.remove();
		});
	};
	deleteAdv(advertisingBlock);

	const makeChanges = () => {
		genre.textContent = "Драма";
		poster.style.backgroundImage = "url(../img/bg.jpg)";
	};
	makeChanges();

	const sortArray = (array) => {
		array.sort();
	};

	const createMovieList = (films, parent) => {
		parent.innerHTML = "";
		sortArray(films);

		films.forEach((film, i) => {
			parent.innerHTML += `<li class ="promo__interactive-item" id="${i + 1}">${i + 1}. ${film}
                <div class="delete"></div>
            </li>`;
		});

		document.querySelectorAll(".delete").forEach((btn, i) => {
			btn.addEventListener("click", () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(films, parent);
			});
		});
	};

	createMovieList(movieDB.movies, movieList);

	const addItemHandler = (evt) => {
		evt.preventDefault();
		const favorite = checkBox.checked;
		let newFilm = addInput.value;

		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.slice(0, 21)}...`;
			}
			if (favorite) {
				console.log("Добавляем любимый фильм");
			}
			movieDB.movies.push(newFilm);
			createMovieList(movieDB.movies, movieList);
			addForm.reset();
		}
	};

	addForm.addEventListener("submit", addItemHandler);
});
