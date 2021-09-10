//2 PTS: Use an object
const config = {
    // 10 PTS: use 3rd party API
    apiURL: 'http://universities.hipolabs.com/search?country='
};

window.onload = function() {
    var countryButton = document.querySelector("#btn_country");
    //2 PTS: use a click event
    countryButton.onclick = fetchData;

};
//2 PTS: Custom Function
const fetchData = function() {
    var countryName = document.querySelector("#country_name").value;
    // 2 PTS: access object property using dot notation
    let url = config.apiURL + countryName;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => renderData(data));
}

const renderData = function(data) {
    let table = "<table class='dataTable'>";
    table += "<thead><tr><th>College Name</th><th>College URL</th></tr></thead>"
    for (let i = 1; i < 25; i++) {
        var result = "";
        result += `<tr>
                        <td>${data[i].name}</td>
                        <td><a href="${data[i].web_pages}" target="_blank">${data[i].web_pages}</a></td>
                    </tr>`;
        table += result;
        document.getElementById("api-data").innerHTML = table;
    }
}