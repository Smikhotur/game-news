export function getGames(api) {
  return fetch(`https://free-to-play-games-database.p.rapidapi.com${api}`, {
    method: 'GET',
    url: api,
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '155780a428msh6759a051afd97e3p1c2c2cjsn2fb08ece979a',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
