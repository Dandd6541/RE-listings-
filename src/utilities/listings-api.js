import sendRequest from "./send-request";

const BASE_URL = "/api/listings";

export function getAll( )  {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(listingFormData) {
    return sendRequest(`${BASE_URL}`, 'POST', listingFormData);
}