let apiURL =  "http://ergast.com/api/f1";

/**Get get all seasons/years */
function getYears() {
    const response = await fetch(apiURL + "/seasons.json?limit=100");

    return response;
}


/**Getting information for drivers */
function getDriverInfo(season) {
    const response = await fetch(apiURL + "/" + season + "/drivers");

    return response;
}

function getDriverWins(driver, season) {
    const response = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/results/1.json?limit=100");

    return response;
}

function getPolePositions(driver, season) {
    const response = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/grid/1/results.json?limit=100");

    return response;
}

function getFastestLaps(driver, season) {
    const response  = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/fastest/1/results.json?limit=100");

    return response
}

function getLapsLed(driver, season, round) {
    const response = await fetch(apiURL + "/" + season + "/" + round + "/drivers/" + driver + "/laps.json?limit=1000");

    return response;
}

function getLapsLedAllDrivers(season, round) {
    const response = await fetch(apiURL + "/" + season + "/" + round + "/laps.json?limit=1000");

    return response;
}

/**Get constructor information */
function getAllConstructorWinsAndPoints(season) {
    const response = await fetch(apiURL + "/" + season + "/constructorStandings.json");

    return response;
}