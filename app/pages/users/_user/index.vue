<template>
  <div>
    <Index />
  </div>
</template>
<script>
import Index from "~/components/User/index.vue";

export default {
  components: {
    Index,
  },
  layout: "admin",
  async asyncData({ store, route }) {
    await store
      .dispatch("getUserDetails", route.params.user)
      .then(() => {})
      .catch((e) => {
        return e;
      });

    return {};
  },
};
</script>
