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
            <h5 class="m-0">{{ userDetails.id }}</h5>
            <b-button
              variant="success"
              size="sm"
              @click="$bvModal.show('activate-' + userDetails.id)"
              >Activate</b-button
            >
          </template>

          <div class="pad-2">
            <JsonPretty :data="userDetails" />
          </div>
        </b-card>
      </div>
    </div>
    <Activate
      :id="'activate-' + userDetails.id"
      :user-id="userDetails.id"
    ></Activate>
  </div>
</template>
<script>
import JsonPretty from "@/components/Shared/JsonPretty.vue";
import Activate from "@/components/User/Activate.vue";

export default {
  components: {
    JsonPretty,
    Activate,
  },
  computed: {
    userDetails() {
      return this.$store.getters.userDetails;
    },
  },
};
</script>
