<template>
  <div>
    <Index />
  </div>
</template>
<script>
import Index from "~/components/Schema/index.vue";

export default {
  components: {
    Index,
  },
  layout: "admin",
  async asyncData({ store, route }) {
    await store
      .dispatch("getSchema", route.params.schema)
      .then(() => {})
      .catch((e) => {
        return e;
      });

    return {};
  },
};
</script>
