const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people";

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    } else {
    }

    return await res.json();
  } catch (err) {
    console.error("Could not fetch.", err.message);
    return false;
  }
};

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));

(async () => {
  const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
  console.log(body);
})();
