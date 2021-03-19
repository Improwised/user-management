<template>
  <div>
    <Index data-test="index"></Index>
  </div>
</template>

<script>
import Index from "@/components/Users/index.vue";

export default {
  components: {
    Index,
  },

  layout: "admin",
  async asyncData({ store }) {
    await store
      .dispatch("getUsersList")
      .then(() => {})
      .catch((e) => {
        store.commit("users", []);

        return e;
      });

    await store
      .dispatch("getSchema")
      .then(() => {})
      .catch((e) => {
        return e;
      });

    // store.commit("loading", false);

    return {};
  },
};
</script>
