/*
 * This file uses API methods to fetch nearby places 
 * from Google Places API
 * 
 */

const API_KEY = "AIzaSyBVaWYH-NKDC9Qd3q6sTabRj8OI_ktkM-c";
const BASE_URL= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}`
import axios from 'axios';

/*
 * @input {data}, {data} includes current location details and type
 * returns {Promise}
 */
export function getNearbyPlace(data){
    return axios.get(`${BASE_URL}&location=${data.coords.latitude},${data.coords.longitude}&radius=500&keyword=pharmacy`)
    

}