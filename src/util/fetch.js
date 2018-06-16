export const fetchData = (url, callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(res => console.log(res))
}