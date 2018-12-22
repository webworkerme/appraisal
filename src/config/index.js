function getApiUrl() {
 let hn = window.location.hostname
 let vs = 'v1/'
 if (hn === 'localhost') {
  return 'http://api.appraisal.webworkerme.com/api/' + vs
  // return 'http://localhost:8989/api/' + vs
 } else {
  return 'http://api.appraisal.webworkerme.com/api/' + vs
 }
}
const API_URL = getApiUrl()
export default {
 createAuth: API_URL + 'auth/create',
 signAuth: API_URL + 'auth/signin',
 getProfile: API_URL + 'profile/get/',
}
