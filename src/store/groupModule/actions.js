import {GetGroups} from '../APIFunctions'

export default {
    async loadGroups(context, __) {


        const groups = await GetGroups();
        console.log(groups)
        context.commit('setGroup', groups);
    }
   
}