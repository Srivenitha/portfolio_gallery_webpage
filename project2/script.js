const themeButton = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");
    themeButton.textContent="☀️";

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeButton.textContent="☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.textContent="🌙";

    }

});

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", searchTemplates);

searchInput.addEventListener("keyup", (event) => {

    if(event.key==="Enter"){
        searchTemplates();
    }

});

function searchTemplates(){

    const value = searchInput.value.toLowerCase().trim();

if(value===""){

document.querySelectorAll(".product-card").forEach(card=>{

card.style.display="block";

});

return;

}

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card=>{

        const title = card.querySelector(".product-title").textContent.toLowerCase();

        const price = card.querySelector(".product-price").textContent.toLowerCase();

        if(

            title.includes(value) ||

            price.includes(value)

        ){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            if (category === "all") {

                card.style.display = "block";

            }

            else if (card.dataset.category === category) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});