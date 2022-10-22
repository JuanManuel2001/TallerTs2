import { dataSeries } from './DataSeries.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalSeasonsElm = document.getElementById("Avg-seasons");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderSeriesInTable(dataSeries);
totalSeasonsElm.innerHTML = "".concat(getAvgSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporada, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearSeriesInTable();
    var coursesFiltered = searchSerieByName(text, dataSeries);
    renderSeriesInTable(coursesFiltered);
}
function searchSerieByName(nameKey, series) {
    return nameKey === '' ? dataSeries : series.filter(function (c) {
        return c.nombre.match(nameKey);
    });
}
function getAvgSeasons(series) {
    var totalCredits = 0;
    series.forEach(function (serie) { return totalCredits = totalCredits + serie.temporada; });
    totalCredits = totalCredits / 8;
    return totalCredits;
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
