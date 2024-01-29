import { BASE_URL } from "../constants/constants";

export const CountryLoader = async () => {
  try {
    const res = await fetch(`${BASE_URL}/all`);
    if (!res.ok) throw new Error("Could not fetch Products");
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const CountryDetailsLoader = async ({ params }) => {
  try {
    const { name } = params;
    const formattedName = encodeURIComponent(name);
    const encodedUrl = `${BASE_URL}name/${formattedName}`;

    const res = await fetch(encodedUrl);

    if (!res.ok) return new Error("Could not fetch Products Details");

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};
