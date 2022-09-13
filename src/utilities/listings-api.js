import sendRequest from "./send-request";

const BASE_URL = "/api/listings";

export function getAll( )  {
    return sendRequest(`${BASE_URL}`);
}

export function addListing(listingFormData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', listingFormData);
}
export function updateListing(id, listingFormData) {
    return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', listingFormData);
}

export function deleteListing(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE' );
}