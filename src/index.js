console.log("%c HI", "color: firebrick");

const init = () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      data.message.map((img) => {
        const dogImgCont = document.getElementById("dog-image-container");
        const dogImg = document.createElement("img");
        dogImgCont.appendChild(dogImg);
        dogImg.setAttribute("src", img);
        dogImg.setAttribute("width", 200);
      });
    });

  const optionDropdown = document.getElementById("breed-dropdown");
  const list = document.getElementById("dog-breeds");
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const objectKeysArray = Object.keys(data.message);

      objectKeysArray.forEach((breed) => {
        const breedsList = document.createElement("li");
        list.appendChild(breedsList);
        breedsList.textContent += breed;
        breedsList.onclick = () => {
          breedsList.style.color = "red";
        };
      });

      optionDropdown.addEventListener("change", (event) => {
        const allLilists = document.querySelectorAll("li");
        for (let i = 0; i < allLilists.length; i++) {
          allLilists[i].remove();
        }
        objectKeysArray.filter((breed) => {
          if (event.target.value == breed.charAt(0)) {
            const breedsList = document.createElement("li");
            breedsList.textContent = breed;
            list.appendChild(breedsList);
          }
        });
      });
    });
};

document.addEventListener("DOMContentLoaded", init);
