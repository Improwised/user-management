<template>
  <div>
    <Index data-test="index"></Index>
  </div>
</template>

<script>
import Index from "@/components/Schemas/index.vue";

export default {
  components: {
    Index,
  },

  layout: "admin",
};
</script>
