import {GetGroups, GetOrganizationGroup} from '../APIFunctions'

export default {
    async loadGroups(context, __) {
        const groups = await GetGroups();
        context.commit('setGroup', groups);
    },
    async loadOrganization(context, __) {
         const groups = await GetOrganizationGroup();
        context.commit('setOrganization', groups);
    }
   
}