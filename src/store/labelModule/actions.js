import { GetLabels } from "../APIFunctions";

export default {
  async loadLabels(context, payload) {
    const labels = await GetLabels(payload);
    context.commit("setLabels", labels);
  },
};
