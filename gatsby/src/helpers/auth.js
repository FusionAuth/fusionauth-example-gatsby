import config from "../../../config"

const parseJson = response => {
  if (response.status === 200) {
    return response.json()
  } else {
    throw response.status
  }
}

export const generateLoginUrl = () => {
  return `http://localhost:${config.serverPort}/login`
}

export const generateLogoutUrl = () => {
  return `http://localhost:${config.serverPort}/logout`
}

export const getCurrentUser = callback => {
  fetch(`http://localhost:${config.serverPort}/user`, {credentials: 'include'})
    .then(parseJson)
    .then(data => {
      if (data && data.token) {
        callback(null, data.token)
      } else {
        throw new Error('Something went wrong and the user could not be found.')
      }
    })
    .catch(error => callback(error))
}
