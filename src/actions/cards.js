

export const getCards = () => {
  return dispatch => {

    const url = 'https://jsonplaceholder.typicode.com/comments ';

    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      // console.log('data from server', json);
      dispatch({type: 'FETCH_CARDS_SUCCESS', payload: json})
      return json;
    })
    .catch((error) => {
      console.log('error', error)
    })
  }

}
