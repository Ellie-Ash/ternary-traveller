const baseURL = "http://0.0.0.0:8088";

const APIManager = {
    getAllPlaces: function() {
        return fetch(`${baseURL}/places`)
                .then(response => response.json())
    },
    getAllInterests: function() {
        return fetch(`${baseURL}/interests`)
                .then(response => response.json())
    },
    deletePlace: function(placeId) {
        return fetch(`${baseURL}/${placeId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => response.json());
    },
    saveInterest: function(interestObj) {
        return fetch(`${baseURL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(interestObj)
        }).then(response => response.json());
    },
}

export default APIManager;
