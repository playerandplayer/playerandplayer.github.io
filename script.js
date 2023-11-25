document.addEventListener("DOMContentLoaded", function () {
    // Sample list of countries with image URLs
    const countries = [
        { name: "United States", capital: "Washington, D.C.", population: "331 million", image: "usa.jpg" },
        { name: "United Kingdom", capital: "London", population: "68 million", image: "uk.jpg" },
        { name: "Canada", capital: "Ottawa", population: "38 million", image: "canada.jpg" },
        // Add more countries as needed
    ];

    const countryList = document.getElementById("countries");
    const selectedCountryDiv = document.getElementById("selected-country");

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
            <img src="${country.image}" alt="${country.name}" width="100">
        `;
    }
});
