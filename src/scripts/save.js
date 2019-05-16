import APIManager from "./dbCalls";
import interestsForDOM from "./interestsHTML";

const saveFunction = {
    populatePage: (interestArray) => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "interest-saved");
        newDiv.innerHTML = interestArray.map(interestsForDOM).join("");
        document.querySelector(".myOutputDiv").append(newDiv);
     },
    saveNewInterest: () => {
   const newInterestObject = {
     title: document.getElementById("iDescription").value,
     cost: document.getElementById("iCost").value,
     review: document.getElementById("iReview").value,
   }
   APIManager.saveInterest(newInterestObject)
     .then(allResults => {
       console.log(allResults);
       APIManager.getAllInterests()
         .then(result => {
         const interestContainer =
         document.querySelector(".myInputDiv");
         interestContainer.innerHTML = ""
           saveFunction.populatePage(result);
         })
    })
    },
    saveBtnFunction: () => {
        console.log("save button clicked");
        const interestContainer = document.querySelectorAll(".myInputDiv")
        let mySavedInterests = saveFunction.saveNewInterest();
        interestContainer.innerHTML = mySavedInterests;
    }
}

export default saveFunction