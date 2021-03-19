<template>
  <vue-json-pretty
    data-test="metadata"
    :data="data"
    :highlight-mouseover-node="true"
    :show-length="true"
  ></vue-json-pretty>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
};
</script>
