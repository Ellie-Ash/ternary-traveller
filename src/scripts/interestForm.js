import saveFunction from "./save"

const interestForm = {
    displayFormAsHTML: () => {
    return `<fieldset>
    <h1> Interests </h1>
    <label for="interestName"> Name: </label>
    <input type="text" id="iName">  </input>
    <label for="interestDescription"> Description: </label>
    <input type="text" id="iDescription">  </input>
    <label for="interestCost"> Cost: </label>
    <input type="text" id="iCost">  </input>
    <label for="interestReview"> Review: </label>
    <input type="text" id="iReview">  </input>
    <dropdown> !!!!!!!!!!!! </dropdown>
    <button id="saveInterestBtn"> Save </button>
    </fieldset>`
    },
printFormToDOM: () => {
    const veryInterestingContainer = document.querySelector("#myInputDiv");
      veryInterestingContainer.innerHTML = interestForm.displayFormAsHTML();
      document.getElementById("saveInteresBtn").addEventListener("click",
      saveFunction.saveBtnFunction)

    }
}

export default interestForm