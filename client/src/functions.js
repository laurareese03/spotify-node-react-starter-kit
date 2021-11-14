import axios from "axios";

const baseURL = "https://api.spotify.com/v1/";

export function getTrack(trackID, auth) {
    axios.get(baseURL + 'tracks/' + trackID, auth).then(function (response) {
        // handle success
        console.log(response);
      })
}