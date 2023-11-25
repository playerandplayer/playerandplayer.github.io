document.addEventListener("DOMContentLoaded", function () {
    const countries = [
        { name: "United States", capital: "Washington, D.C.", population: "331 million", image: "usa.jpg", owner: "USA" },
        { name: "United Kingdom", capital: "London", population: "68 million", image: "uk.jpg", owner: "United Kingdom" },
        { name: "Canada", capital: "Ottawa", population: "38 million", image: "canada.jpg", owner: "Canada" },
        // Add more countries as needed
    ];

    const countryList = document.getElementById("countries");
    const selectedCountryDiv = document.getElementById("selected-country");
    const invadeButton = document.getElementById("invade-button");

    countries.forEach(country => {
        const listItem = document.createElement("li");
        listItem.textContent = country.name;
        listItem.addEventListener("click", () => showCountryInfo(country));
        countryList.appendChild(listItem);
    });

    function showCountryInfo(country) {
        selectedCountryDiv.innerHTML = `
            <strong>Name:</strong> ${country.name}<br>
            <strong>Capital:</strong> ${country.capital}<br>
            <strong>Population:</strong> ${country.population}<br>
            <strong>Owner:</strong> ${country.owner}<br>
            <img src="${country.image}" alt="${country.name}" width="100">
        `;
    }

    invadeButton.addEventListener("click", function () {
        // Add logic here for invading a country
        alert("Invading a country!");
    });
});
