export const fetchData = (url, callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

export const postData = (url, data, callback) => {
  fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
    }
  )
    .then(response => response.json())
    .then(data => fetch(url, {method: 'GET'}))
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}