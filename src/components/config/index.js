function getApiUrl() {
 let hn = window.location.hostname
 let vs = 'v1/'
 if (hn === 'localhost') {
  return 'http://localhost:8989/api/' + vs
 } else {
  return 'https://api.sturta.com/api/' + vs
  // }
 }
 const API_URL = getApiUrl()
 export default {
  createAuth: API_URL + 'auth/create',
  checkPhone: API_URL + 'auth/checkphone',
  signAuth: API_URL + 'auth/signin',
  getProfile: API_URL + 'profile/get/',
  createExperience: API_URL + 'create/experience',
  saveExperience: API_URL + 'save/experience',
  fileDel: API_URL + 'sturta-image-delete/',
  filePrep: API_URL + 'sturta-image-preprocessor/',
  updateExperience: API_URL + 'create/update',
  getExperience: API_URL + 'get/experience/',
  getHostExperience: API_URL + 'get/user/experience/',
  getExperiences: API_URL + 'get/experiences',
  createWorkers: API_URL + 'create/worker',
  createUpdateWorkers: API_URL + 'create/update/worker',
  saveWorkers: API_URL + 'save/worker',
  getWorkers: API_URL + 'get/workers',
  getMyExperience: API_URL + 'active/experience/',
  search: API_URL + 'search/get/',
  categories: API_URL + 'get/categories',
  ticket: API_URL + 'help/create',
  supportTickets: API_URL + 'get/help/tickets/',
  deleteTickets: API_URL + 'help/delete/',
  settings: API_URL + 'settings/',
  getActiveUser: API_URL + 'get/user/',
  supportAuthor: API_URL + '/admin/support/tickets/',
  createHistory: API_URL + 'create/history',
  getHistory: API_URL + 'get/history/',
  deleteHistory: API_URL + 'search/delete/'
 }
