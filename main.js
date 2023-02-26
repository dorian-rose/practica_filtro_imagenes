//document site variables

const viajes = document.querySelector(".viajes");
const fragment = document.createDocumentFragment();
const filterContainer = document.querySelector("#filter-container");
const searchResultDiv = document.querySelector("#search-result-div");

//arrays for card content
const travelImages = [
  {
    url: "viajes-1.jpg",
    text: "hammock on the beach",
    relatedWords: ["mar", "agua", "cielo"],
  },
  {
    url: "viajes-2.jpg",
    text: "beach huts",
    relatedWords: ["mar", "agua", "cielo", "nubes", "edificios"],
  },
  {
    url: "viajes-3.jpg",
    text: "signs",
    relatedWords: ["nubes", "cielo"],
  },
  {
    url: "viajes-4.jpg",
    text: "Seville",
    relatedWords: ["seville", "agua", "cielo", "edificios", "ciudad", "puente"],
  },
  {
    url: "viajes-5.jpg",
    text: "bridge in Seville",
    relatedWords: [
      "seville",
      "agua",
      "cielo",
      "edificios",
      "ciudad",
      "puente",
      "farola",
    ],
  },
  {
    url: "viajes-6.jpg",
    text: "seaside road",
    relatedWords: ["mar", "agua", "cielo", "puente", "farola", "nubes"],
  },
  {
    url: "viajes-7.jpg",
    text: "Granada",
    relatedWords: ["cielo", "edificios", "ciudad"],
  },
];

//array related words
const relatedWords = [
  "farola",
  "nubes",
  "mar",
  "agua",
  "edificios",
  "ciudad",
  "puente",
  "seville",
  "kangaroo",
  "todos",
];

//event listeners:
document.addEventListener("click", ({ target }) => {
  if (target.matches(".filter")) {
    const id = target.id;
    filter(id);
  }
});

//====FUNCTIONS=====
//paint original cards
function makeCard(imageArray) {
  imageArray.forEach((item) => {
    //create image, alt, src and title, attach to card container
    const cardImg = document.createElement("IMG");
    cardImg.alt = item.text;
    cardImg.src = `viajes/${item.url}`;
    cardImg.title = item.text;
    cardImg.classList.add("card");
    //store (attache) card container to fragment
    fragment.append(cardImg);
  });
  viajes.append(fragment);
}

//filter images
const filter = (id) => {
  viajes.innerHTML = "";
  searchResultDiv.innerHTML = "";
  let filteredImages = [];
  if (id == "todos") {
    makeCard(travelImages);
  } else {
    travelImages.forEach((element) => {
      element.relatedWords.forEach((word) => {
        if (word == id) {
          filteredImages.push(element);
        }
      });
    });
    printFilteredCards(filteredImages, id);
  }
};

const printFilteredCards = (imageArray, id) => {
  if (imageArray.length > 0) {
    let searchResult = document.createElement("P");
    searchResult.innerHTML = `Su busqueda ha encontrado <strong>${imageArray.length}</strong> imagenes de <strong>${id}</strong>`;
    searchResultDiv.append(searchResult);
    makeCard(imageArray);
  } else {
    let searchResult = document.createElement("P");
    searchResult.innerHTML = `Su busqueda no ha encontrado ningun imagen de <strong>${id}</strong>`;
    searchResultDiv.append(searchResult);
  }
};

//make filter buttons
const makeFilterButtons = () => {
  const filterTitle = document.createElement("H4");
  filterTitle.textContent = "Filtrar";
  relatedWords.forEach((word) => {
    const filterButton = document.createElement("BUTTON");
    filterButton.textContent = word;
    filterButton.setAttribute("id", word);
    filterButton.classList.add("filter");
    fragment.append(filterButton);
  });
  filterContainer.append(filterTitle, fragment);
};

// start: call functions on document load
document.addEventListener("DOMContentLoaded", () => {
  makeFilterButtons();
  makeCard(travelImages);
});
