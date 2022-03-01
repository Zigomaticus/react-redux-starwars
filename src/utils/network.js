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
