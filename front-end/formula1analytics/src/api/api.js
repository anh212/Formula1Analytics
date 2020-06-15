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

export async function getDriverWins(season, driver) {
    const response = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/results/1.json?limit=100");
    console.log(response);
    let data = await response.json();

    console.log(data);
    let wins = data.MRData.RaceTable.Races.length;
    
    return wins;
}

export async function getPolePositions(season, driver) {
    const response = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/grid/1/results.json?limit=100");
    console.log(response);
    let data = await response.json();

    console.log(data);
    let poles = data.MRData.RaceTable.Races.length;

    return poles;
}

export async function getFastestLaps(season, driver) {
    const response  = await fetch(apiURL + "/" + season + "/drivers/" + driver + "/fastest/1/results.json?limit=100");
    console.log(response);
    let data = await response.json();

    console.log(data)
    let fastestLaps = data.MRData.RaceTable.Races.length;
    
    return fastestLaps;
}

export async function getLapsLed(season, driver, round) {
    const response = await fetch(apiURL + "/" + season + "/" + round + "/drivers/" + driver + "/laps.json?limit=1000");
    console.log(response);
    let data = await response.json();

    console.log(data);
    
    return data;
}

export async function getLapsLedAllDrivers(season, round) {
    const response = await fetch(apiURL + "/" + season + "/" + round + "/laps.json?limit=1000");
    console.log(response);
    let data = await response.json();

    console.log(data)
    
    return data;
}

/**Get constructor information */
export async function getConstructorInfo(season) {
    const response = await fetch(apiURL + "/" + season + "/constructors.json");
    let data = await response.json();

    console.log(data);

    //Only need data for constructorId and name
    let drivers = data.MRData.ConstructorTable.Constructors.map((value) => {
        return {
            constructorId: value.constructorId,
            name: value.name
        }
    });
    console.log(drivers);
    return drivers;
}

export async function getConstructorWinsAndPoints(season, constructor) {
    const response = await fetch(apiURL + "/" + season + "/constructors/" + constructor + "/constructorStandings.json");
    console.log(response);
    let data = await response.json();

    console.log(data)

    //Return constructor standings to give option of using number of wins or points (standings)
    let constructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0];
    console.log(constructorStandings);
    return constructorStandings;
}