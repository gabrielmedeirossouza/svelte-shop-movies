const BASE_URL = import.meta.env.VITE_THE_MOVIE_DB_API;
const MOVIE_API_KEY = import.meta.env.VITE_THE_MOVIE_DB_API_KEY;

export function http(api: string) {
  async function get(query: string) {
    const queryValue = query ? `&${query}` : '';

    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/${api}?language=pt-BR&api_key=${MOVIE_API_KEY}${queryValue}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  return {
    get,
  };
}