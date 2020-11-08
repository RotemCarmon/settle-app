import httpService from './httpService';

async function getGroups() {
  const userId = "5f8970c04f684a22553e9028";
  return httpService.get(`group?id=${userId}`)
}

export default {
  getGroups
}