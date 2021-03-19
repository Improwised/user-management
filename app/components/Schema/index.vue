<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <b-card
          class="custom-card mt-5"
          header-tag="header"
          header-class="custom-header dfaisb bb-1"
          body-class="custom-body p-0"
          footer-tag="footer"
          footer-class="custom-footer bt-1"
        >
          <template #header>
            <h5 class="m-0">{{ id }}</h5>
          </template>
          <div class="pad-2">
            <JsonPretty :data="schemaDetails.properties.traits.properties" />
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import JsonPretty from "@/components/Shared/JsonPretty.vue";

export default {
  components: {
    JsonPretty,
  },

  computed: {
    schemaDetails() {
      return this.$store.getters.schemaDetails;
    },
    id() {
      return this.$route.params.schema;
    },
  },
  // methods: {
  //   getProperties() {
  //     const properties =
  //       this.schemaDetails &&
  //       this.schemaDetails.properties &&
  //       this.schemaDetails.properties.traits.properties;

  //     return properties;
  //   },
  // },
};
</script>
