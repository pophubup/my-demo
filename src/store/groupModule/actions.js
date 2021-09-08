import {GetGroups} from '../APIFunctions'

export default {
    async loadGroups(context, __) {
        const groups = await GetGroups();
        context.commit('setGroup', groups);
    }
   
}