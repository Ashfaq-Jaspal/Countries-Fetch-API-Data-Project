// Getting HTML elements
let countries = document.querySelector(`#all-countries`);
let popUp = document.querySelector(`.popup`);
let overlay = document.querySelector(`.overlay`);
let closeIcon = document.querySelector(`.icon`);
let searchInput = document.querySelector(`#search-input`);
let form = document.querySelector(`form`);
let showAllBtn = document.querySelector(`#show-all-btn`);
// Fetching Data
fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Showing Data
        function showCountries() {
            let box = ``;
            data.forEach((country, index) => {
                box += `<div data-index = "${index}" class="country-box">
                <div class = "flag-div">
                <img class = "flag" src="${data[index].flags.png}">
                </div>
                <p>${data[index].name.common}</p>
                <i class="ri-arrow-right-line"></i>
            </div>`;
            });
            countries.innerHTML = box;
            // Showing More Details on click
            function showCountry() {
                countries.addEventListener(`click`, (details) => {
                    if (details.target.classList.contains(`country-box`)) {
                        let clickedElem = details.target.dataset.index;
                        popUp.innerHTML = `<h1>${data[clickedElem].name.common}</h1>
                        <div><img class="flag-img" src="${data[clickedElem].flags.png}"></div>
                        <p>Official Name: <span>${data[clickedElem].name.official}</span></p>
                        <p>Population: <span>${data[clickedElem].population}</span></p>
                        <p>Region: <span>${data[clickedElem].region}</span></p>
                        <p>Sub Region: <span>${data[clickedElem].subregion}</span></p>
                        <p>Capital: <span>${data[clickedElem].capital}</span></p>
                        <p>Area: <span>${data[clickedElem].area}</span></p>
                        <p>Borders: <span>${data[clickedElem].borders}</span></p>
                        <p>Google Map: <a href="${data[clickedElem].maps.googleMaps}" target="_blank">Click Here</a></p>
                        <p>Languages: <span>${Object.values(data[clickedElem].languages).toString()}</span></p>
                        <p>Currency: <span>${Object.entries(data[clickedElem].currencies)[0][1].name}</span></p>
                        <p>Latitude & Longitude: <span>${data[clickedElem].latlng}</span></p>
                        <p>Time zone: <span>${data[clickedElem].timezones}</span></p>

<i class="ri-close-large-line icon" onClick = "closePopup()"></i>`;
                        overlay.style.display = `block`;
                        popUp.style.display = `flex`;
                    }
                });
            }
            showCountry();
        }
        showCountries();

        // Searching Function
        searchInput.addEventListener(`input`, () => {
            const filteredArray = data.filter((obj) =>
                obj.name.common.toLowerCase().startsWith(searchInput.value.toLowerCase())
            );
            // Showing Searched Data
            function showCountries() {
                let box = ``;
                filteredArray.forEach((country, index) => {
                    box += `<div data-index = "${index}" class="country-box">
                    <div class = "flag-div">
                    <img class = "flag" src="${filteredArray[index].flags.png}">
                    </div>
                    <p>${filteredArray[index].name.common}</p>
                    <i class="ri-arrow-right-line"></i>
            </div>`;
                });
                countries.innerHTML = box;
                // Showing More Details on clicking
                function showCountry() {
                    countries.addEventListener(`click`, (details) => {
                        if (details.target.classList.contains(`country-box`)) {
                            let clickedElem = details.target.dataset.index;
                            popUp.innerHTML = `<h1>${filteredArray[clickedElem].name.common}</h1>
                            <div><img class="flag-img" src="${filteredArray[clickedElem].flags.png}"></div>
                            <p>Official Name: <span>${filteredArray[clickedElem].name.official}</span></p>
                            <p>Population: <span>${filteredArray[clickedElem].population}</span></p>
                            <p>Region: <span>${filteredArray[clickedElem].region}</span></p>
                            <p>Sub Region: <span>${filteredArray[clickedElem].subregion}</span></p>
                            <p>Capital: <span>${filteredArray[clickedElem].capital}</span></p>
                            <p>Area: <span>${filteredArray[clickedElem].area}</span></p>
                            <p>Borders: <span>${filteredArray[clickedElem].borders}</span></p>
                            <p>Google Map: <a href="${filteredArray[clickedElem].maps.googleMaps}" target="_blank">Click Here</a></p>
                            <p>Languages: <span>${Object.values(filteredArray[clickedElem].languages).toString()}</span></p>
                            <p>Currency: <span>${Object.entries(filteredArray[clickedElem].currencies)[0][1].name}</span></p>
                            <p>Latitude & Longitude: <span>${filteredArray[clickedElem].latlng}</span></p>
                            <p>Time zone: <span>${filteredArray[clickedElem].timezones}</span></p>

<i class="ri-close-large-line icon" onClick = "closePopup()" style="font-size: 30px; cursor: pointer; position: absolute; top: 20px; right: 20px;"></i>`;
                            overlay.style.display = `block`;
                            popUp.style.display = `flex`;
                        }
                    });
                }
                showCountry();
            }
            showCountries();
        });
    });
// Form Submission
form.addEventListener(`submit`, (event) => {
    searchInput.blur()
    event.preventDefault();
});
// Closing PopUp
function closePopup() {
    popUp.style.display = `none`;
    overlay.style.display = `none`;
}