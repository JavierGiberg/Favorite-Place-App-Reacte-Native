const GOOGLE_APIKEY = "AIzaSyAOZTlHgGMBWyD36W7eLdEAAdS5JXGu91o";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_APIKEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_APIKEY}`;
  const reponse = await fetch(url);

  if (!reponse.ok) {
    throw new Error("Faild to fech address");
  }
  const data = await reponse.json();
  const address = data.results[0].formatted_address;
  return address;
}
