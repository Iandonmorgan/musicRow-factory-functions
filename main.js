// Create three labels (each are an array)

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

// Create factory functions for each genre of music

const createFunkArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "Funk"
    }
}

const createRapArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "Rap"
    }
}

const createCountryArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "Country"
    }
}

const createBluegrassArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "Bluegrass"
    }
}

const createPopArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "Pop"
    }
}

/*
Create artists with factory functions and put results in
corresponding label array
*/

chattenRecords.push(createCountryArtist("Bruce Atikins", 23));
polarRecords.push(createPopArtist("Jensen Brown", 20));
jumpStopRecords.push(createFunkArtist("Dre Funkz", 25));
jumpStopRecords.push(createRapArtist("Dusta Grimes", 21));
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 23));
chattenRecords.push(createCountryArtist("Avilee Dallas", 19));
polarRecords.push(createPopArtist("Austin Kinkaid", 22));
jumpStopRecords.push(createRapArtist("Loyoncé Branis", 27));

// Console log results

console.log("JumpStop Records", jumpStopRecords);
console.log("Chatten Records", chattenRecords);
console.log("Polar Records", polarRecords);

/*
This code could be refactored to iterate through a separate
array to create artists, for a more concise code.
*/
