//document site variables

const viajes = document.querySelector(".viajes");
const select = document.querySelector("select");
const fragment = document.createDocumentFragment();
const appear = document.querySelector(".appear");
const close = document.querySelector(".close");
const filterContainer = document.querySelector("#filter-container");
const searchResultDiv = document.querySelector("#search-result-div");

//arrays for card content
const travelImages = [
  {
    url: "viajes-1.jpg",
    text: "hammock on the beach",
    heading: "Trip 1",
    para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    relatedWords: ["mar", "agua", "cielo"],
  },
  {
    url: "viajes-2.jpg",
    text: "beach huts",
    heading: "Trip 2",
    para: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
    relatedWords: ["mar", "agua", "cielo", "nubes"],
  },
  {
    url: "viajes-3.jpg",
    text: "signs",
    heading: "Trip 3",
    para: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    relatedWords: ["nubes", "cielo"],
  },
  {
    url: "viajes-4.jpg",
    text: "Seville",
    heading: "Trip 4",
    para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
    relatedWords: ["seville", "agua", "cielo", "edificios", "ciudad", "puente"],
  },
  {
    url: "viajes-5.jpg",
    text: "bridge in Seville",
    heading: "Trip 5",
    para: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
    heading: "Trip 6",
    para: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. ",
    relatedWords: ["mar", "agua", "cielo", "puente", "farola", "nubes"],
  },
  {
    url: "viajes-7.jpg",
    text: "Granada",
    heading: "Trip 7",
    para: "Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
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

//filter images
const filter = (id) => {
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
  viajes.innerHTML = "";
  searchResultDiv.innerHTML = "";
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
  relatedWords.forEach((word) => {
    const filterButton = document.createElement("BUTTON");
    filterButton.textContent = word;
    filterButton.setAttribute("id", word);
    filterButton.classList.add("filter");
    fragment.append(filterButton);
  });
  filterContainer.append(fragment);
};

//paint cards
function makeCard(imageArray) {
  console.log(imageArray);
  imageArray.forEach((item) => {
    //create card container and add a class to it
    const cardContainer = document.createElement("ARTICLE");
    cardContainer.classList.add("card");
    //create image, alt, src and title, attach to card container
    const cardImg = document.createElement("IMG");
    cardImg.alt = item.text;
    cardImg.src = `viajes/${item.url}`;
    cardImg.title = item.text;
    //create a h3 and text content for it, and attach to card body div
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = item.heading;
    //create a para, text content for it, and attach to card body
    const cardPara = document.createElement("p");
    cardPara.textContent = item.para;
    cardContainer.append(cardImg, cardTitle, cardPara);
    //store (attache) card container to fragment
    fragment.append(cardContainer);
  });
  viajes.append(fragment);
}

// start: call functions on document load
document.addEventListener("DOMContentLoaded", () => {
  makeFilterButtons();
  makeCard(travelImages);
});