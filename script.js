"use strict";

// Selectors
const textareaEl = document.querySelector(".textarea");
const wordNumberEl = document.querySelector(".stat__number--words");
const charactersNumberEl = document.querySelector(".stat__number--charcters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEL = document.querySelector(".stat__number--facebook");

// Events & Fynctions
const inputHandler = () => {
	// example of validation
	if (textareaEl.value.includes("<script>")) {
		alert("You can not use <script> in your text");
		textareaEl.value = textareaEl.value.replace("<script>", " ");
	}

	// determine new numbers
	let numberOfWords = textareaEl.value.split(" ").length;
	if (textareaEl.value.length === 0) {
		numberOfWords = 0;
	}

	const numberOfCharacters = textareaEl.value.length;
	const twitterCharsLeft = 280 - numberOfCharacters;
	const facebookCharsLeft = 2200 - numberOfCharacters;

	// add visual indicator if limit is exceeded
	if (twitterCharsLeft < 0) {
		twitterNumberEl.classList.add("stat__number--limit");
	} else {
		twitterNumberEl.classList.remove("stat__number--limit");
	}

	if (facebookCharsLeft < 0) {
		facebookNumberEL.classList.add("stat__number--limit");
	} else {
		facebookNumberEL.classList.remove("stat__number--limit");
	}

	// set new numbers
	wordNumberEl.textContent = numberOfWords;
	charactersNumberEl.textContent = numberOfCharacters;
	twitterNumberEl.textContent = twitterCharsLeft;
	facebookNumberEL.textContent = facebookCharsLeft;
};

textareaEl.addEventListener("input", inputHandler);
