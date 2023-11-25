document.addEventListener("DOMContentLoaded", function () {
    // Sample list of countries
    const countries = [
        { name: "United States", capital: "Washington, D.C.", population: "331 million" },
        { name: "United Kingdom", capital: "London", population: "68 million" },
        { name: "Canada", capital: "Ottawa", population: "38 million" },
        // Add more countries as needed
    ];

    // Populate the country list
    const countryList = document.getElementById("countries");
    countries.forEach(country => {
        const listItem = document.createElement("li");
        listItem.textContent = country.name;
        listItem.addEventListener("click", () => showCountryInfo(country));
        countryList.appendChild(listItem);
    });

    // Display country information when a country is selected
    function showCountryInfo(country) {
        const selectedCountryDiv = document.getElementById("selected-country");
        selectedCountryDiv.innerHTML = `
            <strong>Name:</strong> ${country.name}<br>
            <strong>Capital:</strong> ${country.capital}<br>
            <strong>Population:</strong> ${country.population}
        `;
    }
});
