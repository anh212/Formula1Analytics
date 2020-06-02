let apiURL =  "http://ergast.com/api/f1";

/**Get get all seasons/years */
export async function getYears() {
    console.log("Getting seasons from API");
    const response = await fetch(apiURL + "/seasons.json?limit=100");
    let data = await response.json()

    //Remove extraneous data such as wiki links
    let seasons = data.MRData.SeasonTable.Seasons.map((value) => {
        return value.season
    });

    return seasons;
}

/**Getting information for drivers */
export async function getDriverInfo(season) {
    const response = await fetch(apiURL + "/" + season + "/drivers.json");
    console.log(response);
    let data = await response.json();

    console.log(data);

    //Only need data for driverId, givenName, and familyName
    let drivers = data.MRData.DriverTable.Drivers.map((value) => {
        return {
            driverId: value.driverId,
            givenName: value.givenName,
            familyName: value.familyName
        }
    });
    console.log(drivers);
    return drivers;
}

export async function getDriverWins(driver, season) {
    const response = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/results/1.json?limit=100");

    return response;
}

export async function getPolePositions(driver, season) {
    const response = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/grid/1/results.json?limit=100");

    return response;
}

export async function getFastestLaps(driver, season) {
    const response  = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/fastest/1/results.json?limit=100");

    return response
}

export async function getLapsLed(driver, season, round) {
    const response = await fetch(apiURL + "/" + season + "/" + round + "/drivers/" + driver + "/laps.json?limit=1000");

    return response;
}

export async function getLapsLedAllDrivers(season, round) {
    const response = await fetch(apiURL + "/" + season + "/" + round + "/laps.json?limit=1000");

    return response;
}

/**Get constructor information */
export async function getConstructorInfo(season) {
    const response = await fetch(apiURL + "/" + season + "/constructors.json");

    return response;
}

export async function getAllConstructorWinsAndPoints(season) {
    const response = await fetch(apiURL + "/" + season + "/constructorStandings.json");

    return response;
}