const ContinentModel = require("./Models/Continent");
const CountryModel = require("./Models/Country");
const CityModel = require("./Models/City");
const Provinces = require("./Models/Provinces");
const Languages = require("./Models/Language");
const Shape = require("./Models/Shape");
const Tz = require("./Models/Tz");

const CityToCountry = require("./Models/CityToCountry");
const CountriesToContinent = require("./Models/CountriesToContinent");
const LanguagesToCountry = require("./Models/LanguagesToCountry");
const ProvincesToCountry = require("./Models/ProvincesToCountry");
const TimezonesToCountry = require("./Models/TimezonesToCountry");

const fs = require("fs");
const log = require("inologger");

const JSON_DATA = {
    joinCountry : "_Join꞉cities꞉Country.json",
    joinContinent : "_Join꞉countries꞉Continent.json",
    joinLanguages : "_Join꞉languages꞉Country.json",
    joinProvinces : "_Join꞉provinces꞉Country.json",
    joinTimezones: "_Join꞉timezones꞉Country.json",
    city: "City.json",
    continent: "Continent.json",
    Language: "Language.json",
    Country: "Country.json",
    Shape: "Shape.json",
    Subdivisions_States_Provinces: "Subdivisions_States_Provinces.json",
    Timezone_Time_Zones_Dataset: "Timezone_Time_Zones_Dataset.json",
};

function readJson(filename) {
 return JSON.parse(fs.readFileSync("./objects/"+filename,"utf-8"))
}

async function importCountry(){
    let data = readJson(JSON_DATA.Country).results;
    for (let i = 0; i < data.length;i++){
        data[i].continentId = data[i].continent.objectId;
        data[i].emoji = "no emoji";
        if (data[i].shape){
            data[i].shapeId = data[i].shape.objectId;
        }
    }
    await insertData(CountryModel,"CountryModel",data);
}

async function importContinents() {
    let data = readJson(JSON_DATA.continent).results;
    await insertData(ContinentModel,"ContinentModel",data);

}

async function importCity(){
    let data = readJson(JSON_DATA.city).results;
    for (let i = 0; i < data.length;i++){
        data[i].countryId = data[i].country.objectId;
        data[i].latitude = data[i].location.latitude;
        data[i].longitude = data[i].location.longitude;
    }
    await insertData(CityModel,"CityModel",data);

}

async function importProvinces(){
    let data = readJson(JSON_DATA.Subdivisions_States_Provinces).results;
    for (let i = 0; i < data.length;i++){
        data[i].countryId = data[i].country.objectId;
    }

    await insertData(Provinces,"Provinces",data);

}

async function importLanguages(){
    let data = readJson(JSON_DATA.Language).results;
    await insertData(Languages,"Languages",data);
}

async function importShapes(){
    let data = readJson(JSON_DATA.Shape).results;
    for(let i = 0; i < data.length;i++){
        data[i].countryId = data[i].country.objectId
    }

    await insertData(Shape,"Shapes",data);
}

async function importTz(){
    let data = readJson(JSON_DATA.Timezone_Time_Zones_Dataset).results;
    for(let i = 0; i < data.length;i++){
        if (data[i].Country){
            data[i].countryId = data[i].Country.objectId;
        }else{
            data[i].countryId = 0;
        }
        data[i].tzHours = data[i]["UTC_Jan_1_2020"];
    }
    await insertData(Tz,"TimeZone",data);
}

async function insertData(model,name,data){
    let list = await model.findAll();
    if (list.length < 1){
        model.bulkCreate(data).then((results)=>{
            log.info(name+" inserted to database");
        }).catch((err)=>{
            log.error(err.message);
        })
    }else{
        log.warn(name+ " for shapes already inserted")
    }
}

async function insertJoins(){
    await insertData(CityToCountry,"CityToCountry",readJson(JSON_DATA.joinCountry).results);
    await insertData(CountriesToContinent,"CountriesToContinent",readJson(JSON_DATA.joinContinent).results);
    await insertData(LanguagesToCountry,"LanguagesToCountry",readJson(JSON_DATA.joinLanguages).results);
    await insertData(ProvincesToCountry,"ProvincesToCountry",readJson(JSON_DATA.joinProvinces).results);
    await insertData(TimezonesToCountry,"TimezonesToCountry",readJson(JSON_DATA.joinTimezones).results);
}

setTimeout(()=>{
    importContinents().then(r => log.info("Continent inserted"));
    importCountry().then(r => log.info("Country inserted"));
    importCity().then(r=>log.info("City inserted"));
    importProvinces().then(r=>log.info("Provinces inserted"));
    importLanguages().then(r=>log.info("Languages inserted"));
    importShapes().then(r=>log.info("Shapes inserted"));
    importTz().then(r=>log.info("Tz inserted"));
    insertJoins().then(r=>log.info("JOINS inserted"));
},2000);
