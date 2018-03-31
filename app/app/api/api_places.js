/*
 * This file uses API methods to fetch nearby places 
 * from Google Places API
 * 
 */

const API_KEY = "AIzaSyBVaWYH-NKDC9Qd3q6sTabRj8OI_ktkM-c";
const BASE_URL= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}`


/*
 * @input {data}, {data} includes current location details and type
 * returns {Promise}
 */
export function getNearbyPlace(data){
    // Options
    // &location=40.34950,-74.65321&radius=1000&keyword=pharmacy"
    return //Promise
}