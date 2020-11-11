import httpService from './httpService';

async function getGroups(userId) {
  return await httpService.get(`group?id=${userId}`)
}
async function createGroup(groupInfo){
  return await httpService.post('group/create', groupInfo)
}

export default {
  getGroups,
  createGroup
}