/* eslint no-unused-vars: ["error", { "args": "none" }] */
export default {
  getUsersList({ commit }) {
    return this.$axios
      .$get("/api/identities")
      .then((results) => {
        commit("users", results);
      })
      .catch((error) => {
        return error;
      });
  },

  getUserDetails({ commit }, id) {
    return this.$axios
      .$get(`/api/identities/${id}`)
      .then((results) => {
        commit("userDetails", results);
      })
      .catch((error) => {
        return error;
      });
  },

  getSchema({ commit, rootState }, schemaName) {
    const url = rootState.schemaUrlList[schemaName];

    return this.$axios
      .$get(url)
      .then((results) => {
        commit("schemaDetails", results);

        return results;
      })
      .catch((error) => {
        return error;
      });
  },

  // createRecoveryLink({ commit }, payload) {
  //   return this.$axios
  //     .$post(`/api/recovery/link`, payload)
  //     .then((res) => {
  //       commit("userDetails", results);
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
  // },
};
