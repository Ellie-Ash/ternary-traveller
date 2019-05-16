const interestsForDOM = {
    interestsAsHTML: (interests) => {
      return `
      <fieldset>
           <h1> Interests </h1>
           <p> Name: ${interests.name} </p>
           <p> Description: ${interests.description} </p>
           <p> Cost: ${interests.cost} </p>
           <p> Review: ${interests.review} </p>
           <button id="deleteInterest"> Delete </button>
        </fieldset>
        `
       },
    printInterestsToDOM: (listedInterests) => {
      const interestingContainer = document.querySelector("#myOutputDiv");
       listedInterests.map(interest => {
         interestingContainer.innerHTML += interestsForDOM.interestsAsHTML(interest);
       })
    },
   }
   export default interestsForDOM