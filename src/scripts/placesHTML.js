const placesForDOM = {
  placeNameAsHTML: (places) => {
  return `
   <div class="dropdown">
   <button onclick="placesForDOM.function" class="dropbtn">Dropdown</button>
   <div id="myDropdown" class="dropdown-content">
     <a href="#">${places.name}</a>
     <a href="#">${places.name}</a>
     <a href="#">${places.name}</a>
   </div>
 </div>
     `
    },
  printPlacesToDOM: (placesVisited) => {
   const placeContainer = document.querySelector("#myOutputDiv");
    placesVisited.map(place => {
      placeContainer.innerHTML += placesForDOM.placeNameAsHTML(place);
    })
  },
  function: () => {
    document.getElementById("myDropdown").classList.toggle("show");
  window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  }

}}
export default placesForDOM