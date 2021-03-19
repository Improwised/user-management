<template>
  <main class="main">
    <Sidebar />
    <section class="main-section pos-rel">
      <Navigation />
      <section class="main-section-content p-4">
        <nuxt />
      </section>
      <Footer />
    </section>
  </main>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar.vue";
import Navigation from "@/components/Layout/Navigation.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "Client",
  components: {
    Sidebar,
    Navigation,
    Footer,
  },
};
</script>

<style>
@import "@/assets/css/app.css";
</style>

<style>
.main {
  min-height: 100vh;
  background: #f5f6f8;
}

.main-section {
  z-index: 1;
}

.sidebar-visible + .main-section {
  margin-left: 210px;
}

@media only screen and (max-width: 768px) {
  .sidebar-visible + .main-section {
    margin-left: 0px;
  }
}

.main-section-content {
  min-height: calc(100vh - 56px);
}
</style>
