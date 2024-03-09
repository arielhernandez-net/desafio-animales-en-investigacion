import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

(async () => {
	try {
		const res = await fetch("animales.json");
		const data = await res.json();
		animalSelect(data);
		animalPreview(data);
	} catch (error) {
		console.log(error);
	} finally {
    console.log("Completa")
	}
})();

const animalSelect = (data) => {
  const button = document.getElementById("btnRegistrar");

  let animalArray = [];
  button.addEventListener("click", (event) => {
      event.preventDefault();
      const animalList = document.getElementById("animal");
      const edad = document.getElementById("edad");
      const comentarios = document.getElementById("comentarios");
      const preview = document.getElementById("preview");

      const animalName = animalList.value;
      const animalData = data.animales.find((animal) => animal.name === animalName);

      if (!animalData) {
          console.error(`No se encontraron datos para el animal "${animalName}".`);
          return;
      }

      const instanceImage = animalData.imagen;
      const instanceSound = animalData.sonido;

      const AnimalClass = getAnimalClass(animalName);
      if (!AnimalClass) {
          console.error(`No se encontró una clase para el animal "${animalName}".`);
          return;
      }

      const newAnimal = new AnimalClass(
          animalName,
          edad.value,
          `assets/imgs/${instanceImage}`,
          comentarios.value,
          `assets/sounds/${instanceSound}`
      );

      if (animalName !== "Seleccione un animal" && edad.value !== "Seleccione un rango de años" && comentarios.value !== "" && instanceImage) {
          animalArray.push(newAnimal);
          animalInset(animalArray);
          animalList.selectedIndex = 0;
          edad.selectedIndex = 0;
          comentarios.value = "";
          preview.innerHTML = `<img src="assets/imgs/lion.svg" style="background-position: center top; background-size: contain; background-repeat: no-repeat;" height="200px">`;
      }
  });
};

const getAnimalClass = (animalName) => {
  switch (animalName) {
      case "Leon":
          return Leon;
      case "Lobo":
          return Lobo;
      case "Oso":
          return Oso;
      case "Serpiente":
          return Serpiente;
      case "Aguila":
          return Aguila;
      default:
          return null;
  }
};

const animalPreview = (data) => {
	const animal = document.getElementById("animal");
	const preview = document.getElementById("preview");
	const { animales } = data;

	animal.addEventListener("change", (e) => {
		const findImage = animales.find((animal) => animal.name === e.target.value).imagen;
		document.getElementById("preview").setAttribute("class", "");
    preview.innerHTML = `<img src="assets/imgs/${findImage}" alt="${e.target.value}" class="img-fluid" style=" max-width: 100%;">`;

	});
};

const animalInset = (animalArray) => {
  const card = document.getElementById("animalesInsert");
  card.innerHTML = "";

  animalArray.forEach((animal) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "mb-3");
      cardDiv.style.width = "200px"; 

      const cardContent = `
          <img src="${animal.img}" class="card-img-top" alt="${animal.nombre}">
          <div class="card-body">
           
              <div class="audio-container" data-audio="${animal.nombre}">
                  <img class="img-fluid w-25" src="assets/imgs/audio.svg" alt="Reproducir audio" style="filter: invert(100%);">
                  <audio src="${animal.sonido}" id="${animal.nombre}Audio" preload="auto"></audio>
              </div>
          </div>
      `;

      cardDiv.innerHTML = cardContent;
      card.appendChild(cardDiv);
      console.log(animalArray);
      
      cardDiv.addEventListener("click", () => {

      });
  });

  card.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "IMG" && target.parentElement.classList.contains("audio-container")) {
        const audioId = `${target.parentElement.dataset.audio}Audio`;
        const audioElement = document.getElementById(audioId);
        if (audioElement) {
            audioElement.play();
        }
    }
});
};
