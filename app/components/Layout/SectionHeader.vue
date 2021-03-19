<template>
  <div class="dfaisb mb-4">
    <div class="page-title dfaic">
      <nuxt-link
        v-if="to && to.name"
        :to="to"
        class="mr-4"
        data-test="go-back-link"
      >
        <!-- eslint-disable-next-line -->
        <b-badge variant="back">< Back</b-badge>
      </nuxt-link>
      <img
        v-if="imageUrl"
        class="icon-default mr-2"
        :src="imageUrl"
        height="33"
        data-test="image"
      />
      <h3 data-test="section-header-title">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    imageName: {
      type: String,
      default: "",
      required: true,
    },
    to: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    imageUrl() {
      if (this.imageName) {
        return require(`@/assets/images/${this.imageName}.svg`);
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.main-section-content .page-title {
  color: #3d5170;
}

.main-section-content .badge-back {
  color: #d3d3d3;
  background-color: #3d5170;
}

.main-section-content .page-title h3 {
  margin: 0;
}
</style>
