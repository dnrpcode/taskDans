export const getArticlesFromApi = async params => {
  let response = await fetch(
    'http://dev3.dansmultipro.co.id/api/recruitment/positions.json' + params,
  );
  let json = await response.json();
  return json;
};
