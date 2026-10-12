/* Display Today's Date */

document.getElementById("today").innerHTML =
    "Date: " + new Date().toLocaleDateString("en-IN");


/* Search News */

const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let searchText = document.getElementById("searchInput").value.toLowerCase();

    let newsCards = document.getElementsByClassName("news-card");

    let count = 0;

    for (let i = 0; i < newsCards.length; i++) {

        let title = newsCards[i].getElementsByTagName("h3")[0].innerHTML.toLowerCase();

        let category = newsCards[i].getElementsByClassName("news-category")[0].innerHTML.toLowerCase();

        let description = newsCards[i].getElementsByClassName("short-text")[0].innerHTML.toLowerCase();

        if (title.includes(searchText) ||
            category.includes(searchText) ||
            description.includes(searchText)) {

            newsCards[i].style.display = "block";
            count++;

        } else {

            newsCards[i].style.display = "none";

        }
    }

    if (count == 0) {
        document.getElementById("noNews").style.display = "block";
    } else {
        document.getElementById("noNews").style.display = "none";
    }

});


/* Filter News by Category */

const categoryButtons = document.getElementsByClassName("category-button");

for (let i = 0; i < categoryButtons.length; i++) {

    categoryButtons[i].addEventListener("click", function () {

        let selectedCategory = this.getAttribute("data-category");

        let newsCards = document.getElementsByClassName("news-card");

        let searchText = document.getElementById("searchInput").value.toLowerCase();

        let count = 0;

        for (let j = 0; j < newsCards.length; j++) {

            let cardCategory = newsCards[j].getAttribute("data-category");

            let title = newsCards[j].getElementsByTagName("h3")[0].innerHTML.toLowerCase();

            let description = newsCards[j].getElementsByClassName("short-text")[0].innerHTML.toLowerCase();

            let category = newsCards[j].getElementsByClassName("news-category")[0].innerHTML.toLowerCase();

            if ((selectedCategory == "All" || cardCategory == selectedCategory) &&
                (title.includes(searchText) ||
                    description.includes(searchText) ||
                    category.includes(searchText))) {

                newsCards[j].style.display = "block";
                count++;

            } else {

                newsCards[j].style.display = "none";

            }
        }

        for (let k = 0; k < categoryButtons.length; k++) {
            categoryButtons[k].classList.remove("active");
        }

        this.classList.add("active");

        if (count == 0) {
            document.getElementById("noNews").style.display = "block";
        } else {
            document.getElementById("noNews").style.display = "none";
        }

    });

}


/* Read More Button */

const readButtons = document.getElementsByClassName("read-button");

for (let i = 0; i < readButtons.length; i++) {

    readButtons[i].addEventListener("click", function () {

        let card = this.parentElement;

        let fullText = card.getElementsByClassName("full-text")[0];

        if (fullText.style.display == "block") {

            fullText.style.display = "none";
            this.innerHTML = "Read More →";

        } else {

            fullText.style.display = "block";
            this.innerHTML = "Read Less ↑";

        }

    });

}


/* Dark Mode and Light Mode */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️ Light Mode";

    } else {

        themeButton.innerHTML = "🌙 Dark Mode";

    }

});


/* Newsletter Form */

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let email = document.getElementById("newsletterEmail").value;

    let message = "Thank you for subscribing! Email: " + email;

    document.getElementById("newsletterMessage").innerHTML = message;

    newsletterForm.reset();

});