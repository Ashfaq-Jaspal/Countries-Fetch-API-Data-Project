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
                box += `<div class="country-box"">
                <h1>${data[index].name.common}</h1>
                <div class = "flag-div">
                <img data-index = "${index}" class = "flag" src="${data[index].flags.png}" alt="">
                </div>
            </div>`;
            });
            countries.innerHTML = box;
            // Showing More Details on click
            function showCountry() {
                countries.addEventListener(`click`, (details) => {
                    if (details.target.classList.contains(`flag`)) {
                        let clickedElem = details.target.dataset.index;
                        popUp.innerHTML = `<table>
    <tr>
        <th>Common Name</th>
        <th class = "country-name">${data[clickedElem].name.common}</th>
    </tr>
    <tr>
        <th>Official Name</th>
        <th class = "country-name">${data[clickedElem].name.official}</th>
    </tr>
    <tr>
    <th>Flag</th>
    <th><img src="${data[clickedElem].flags.png}"></th>
</tr>
<tr>
    <th>Coat Of Arms</th>
    <th><img src="${data[clickedElem].coatOfArms.png}"></th>
</tr>
    <tr>
        <th>Status</th>
        <th>${data[clickedElem].status}</th>
    </tr>
    <tr>
        <th>UN Member</th>
        <th>${data[clickedElem].unMember}</th>
    </tr>
    <tr>
        <th>Capital</th>
        <th>${data[clickedElem].capital}</th>
    </tr>
    <tr>
        <th>Region</th>
        <th>${data[clickedElem].region}</th>
    </tr>
    <tr>
        <th>Sub Region</th>
        <th>${data[clickedElem].subregion}</th>
    </tr>
    <tr>
        <th>Latitude & Longitude</th>
        <th>${data[clickedElem].latlng}</th>
    </tr>
    <tr>
        <th>Languages</th>
        <th>${Object.values(data[clickedElem].languages).toString()}</th>
    </tr>
    <tr>
        <th>Currency</th>
        <th>${Object.entries(data[clickedElem].currencies)[0][1].name}</th>
    </tr>
    <tr>
        <th>Landlocked</th>
        <th>${data[clickedElem].landlocked}</th>
    </tr>
    <tr>
        <th>Borders</th>
        <th>${data[clickedElem].borders}</th>
    </tr>
    <tr>
        <th>Area</th>
        <th>${data[clickedElem].area}</th>
    </tr>
    <tr>
        <th>Google Map</th>
        <th><a href="${data[clickedElem].maps.googleMaps}" target="_blank">Click here</a></th>
    </tr>
    <tr>
        <th>Open Street Map</th>
        <th><a href="${data[clickedElem].maps.openStreetMaps}" target="_blank">Click here</a></th>
    </tr>
    <tr>
        <th>Population</th>
        <th>${data[clickedElem].population}</th>
    </tr>
    <tr>
        <th>Time zone</th>
        <th>${data[clickedElem].timezones}</th>
    </tr>
    <tr>
        <th>Continent</th>
        <th>${data[clickedElem].continents}</th>
    </tr>
    <tr>
        <th>Start Of Week</th>
        <th>${data[clickedElem].startOfWeek}</th>
    </tr>
</table>

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
                    box += `<div class="country-box"">
                <h1>${filteredArray[index].name.common}</h1>
                <div class = "flag-div">
                <img data-index = "${index}" class = "flag" src="${filteredArray[index].flags.png}" alt="">
                </div>
            </div>`;
                });
                countries.innerHTML = box;
                // Showing More Details on clicking
                function showCountry() {
                    countries.addEventListener(`click`, (details) => {
                        if (details.target.classList.contains(`flag`)) {
                            let clickedElem = details.target.dataset.index;
                            popUp.innerHTML = `<table>
    <tr>
        <th>Common Name</th>
        <th class = "country-name">${filteredArray[clickedElem].name.common}</th>
    </tr>
    <tr>
        <th>Official Name</th>
        <th class = "country-name">${filteredArray[clickedElem].name.official}</th>
    </tr>
    <tr>
    <th>Flag</th>
    <th><img src="${filteredArray[clickedElem].flags.png}"></th>
</tr>
<tr>
    <th>Coat Of Arms</th>
    <th><img src="${filteredArray[clickedElem].coatOfArms.png}"></th>
</tr>
    <tr>
        <th>Status</th>
        <th>${filteredArray[clickedElem].status}</th>
    </tr>
    <tr>
        <th>UN Member</th>
        <th>${filteredArray[clickedElem].unMember}</th>
    </tr>
    <tr>
        <th>Capital</th>
        <th>${filteredArray[clickedElem].capital}</th>
    </tr>
    <tr>
        <th>Region</th>
        <th>${filteredArray[clickedElem].region}</th>
    </tr>
    <tr>
        <th>Sub Region</th>
        <th>${filteredArray[clickedElem].subregion}</th>
    </tr>
    <tr>
        <th>Latitude & Longitude</th>
        <th>${filteredArray[clickedElem].latlng}</th>
    </tr>
    <tr>
        <th>Languages</th>
        <th>${Object.values(filteredArray[clickedElem].languages).toString()}</th>
    </tr>
    <tr>
    <th>Currency</th>
    <th>${Object.entries(filteredArray[clickedElem].currencies)[0][1].name}</th>
    </tr>
    <tr>
        <th>Landlocked</th>
        <th>${filteredArray[clickedElem].landlocked}</th>
    </tr>
    <tr>
        <th>Borders</th>
        <th>${filteredArray[clickedElem].borders}</th>
    </tr>
    <tr>
        <th>Area</th>
        <th>${filteredArray[clickedElem].area}</th>
    </tr>
    <tr>
        <th>Google Map</th>
        <th><a href="${filteredArray[clickedElem].maps.googleMaps}" target="_blank">Click here</a></th>
    </tr>
    <tr>
        <th>Open Street Map</th>
        <th><a href="${filteredArray[clickedElem].maps.openStreetMaps}" target="_blank">Click here</a></th>
    </tr>
    <tr>
        <th>Population</th>
        <th>${filteredArray[clickedElem].population}</th>
    </tr>
    <tr>
        <th>Time zone</th>
        <th>${filteredArray[clickedElem].timezones}</th>
    </tr>
    <tr>
        <th>Continent</th>
        <th>${filteredArray[clickedElem].continents}</th>
    </tr>
    <tr>
        <th>Start Of Week</th>
        <th>${filteredArray[clickedElem].startOfWeek}</th>
    </tr>
</table>

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
// On Form Submission Input Field will be empty
form.addEventListener(`submit`, (event) => {
    searchInput.value = ``;
    event.preventDefault();
});
// Showing All Countries Function
showAllBtn
    .addEventListener(`click`, () => {
        window.location.reload();
    })

    .catch((error) => {
        console.log(`Cannot fetch data`, error);
    });

function closePopup() {
    popUp.style.display = `none`;
    overlay.style.display = `none`;
}





// 1 Callback asynchronus

// let myName;

// function fetchData(callback) {
//     setTimeout(() => {
//         callback(myName = `Ali`)
//     }, 2000);
// }

// function display(data) {
//     console.log(data);
// }
// fetchData(display)

// 2 Promise asynchronus

// let myName;

// function fetchData() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(myName = `Ali`)
//         }, 2000);
//     })
// }
// fetchData()

// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// 3 How to fetch data

// fetch(`https://restcountries.com/v3.1/all`)
//     .then((data) => {
//         return data.json();
//     })

//     .then((data) => {
//         console.log(data[0]);
//     })

//     .catch((error) => {
//         console.log(error);
//     });
