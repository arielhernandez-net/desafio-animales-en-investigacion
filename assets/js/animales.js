import Animal from "./animal.js";

class Leon extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	get idLeon() {
		return this._idLeon;
	}
	Rugir() {
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	get idLobo() {
		return this._idLobo;
	}
	Aullar() {
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Oso extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	get idOso() {
		return this._idOso;
	}
	Grunir() {
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Serpiente extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	get idSerpiente() {
		return this._idSerpiente;
	}
	Sisear() {
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}
class Aguila extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	get idAguila() {
		return this._idAguila;
	}
	Chillar() {
		const audio = document.createElement("audio");
		audio.setAttribute("src", `${this._sonido}`);
		audio.play();
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };