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

export const putData = (url, id, data, callback) => {
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

export const deleteData = (url, id, callback) => {
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
