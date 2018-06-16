import BASE_URL from '../api'
const url = `${BASE_URL}burgers/`

// GET
export const fetchData = (callback) => {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

// POST
export const postData = (data, callback) => {
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

// PUT
export const putData = (id, data, callback) => {
  const fullUrl = `${url + id}/`
  fetch(fullUrl, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
    }
  )
    .then(response => response.json())
    .then(data => fetch(url, {method: 'GET'}))
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

// DELETE
export const deleteData = (id, callback) => {
  const fullUrl = `${url + id}/`
  fetch(fullUrl, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
    }
  )
    .then(response => fetch(url, {method: 'GET'}))
    .then(res => res.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}
