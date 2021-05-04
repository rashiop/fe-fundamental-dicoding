import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    const onButtonSearchClicked = async () => {
        try {
            const filteredClubs = await DataSource.searchClub(searchElement.value);
            renderResult(filteredClubs)
        } catch(ex) {
            fallbackResult(ex);
        }
    };

    const renderResult = (results) => {
        clubListElement.innerHTML = "";
        results.forEach(({name, fanArt, description}) => {
            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
                '<div class="club-info">\n' +
                '<h2>' + name + '</h2>\n' +
                '<p>' + description + '</p>' +
                '</div>';
            clubListElement.appendChild(clubElement);
        })
    };

    const fallbackResult = function (message) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;