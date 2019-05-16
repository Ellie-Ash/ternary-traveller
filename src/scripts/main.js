import APIManager from "./dbCalls";
import placesForDOM from "./placesHTML";
import interestsForDOM from "./interestsHTML";
import interestForm from "./interestForm"



//testing import of dbcalls and calling getAllPlaces
APIManager.getAllPlaces()
    .then(places => placesForDOM.printPlacesToDOM(places));

APIManager.getAllInterests()
    .then(interests => interestsForDOM.printInterestsToDOM(interests));

interestForm.printFormToDOM();