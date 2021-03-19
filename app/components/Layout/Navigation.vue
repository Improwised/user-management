<!-- eslint-disable vue/no-template-shadow -->

<template>
  <b-navbar
    class="navigation bg-white pos-stk-top p-0"
    toggleable="md"
    data-test="navbar"
    type="light"
    :sticky="true"
  >
    <div class="d-md-none dfaisb w-100">
      <div class="px-3 branding dfaic">
        <img
          data-test="pandioLogo"
          src="@/assets/images/logo.png"
          height="46"
        />
      </div>
      <b-button
        class="custom-toggle-sidebar mar-1 dfaisb"
        data-test="toggleSidebar"
        variant="outline-secondary"
        @click="toggleSidebar"
      >
        <i
          data-test="table_chart"
          class="material-icons"
          style="transform: rotate(-90deg)"
          >table_chart</i
        >
      </b-button>
    </div>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right class="pad-1 bl-1">
          <template #button-content class="text-cap"> Anonymous </template>
          <b-dropdown-item-button> Settings </b-dropdown-item-button>

          <b-dropdown-item-button data-test="Logout"
            >Logout</b-dropdown-item-button
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import EventBus from "@/libs/eventBus.js";

export default {
  methods: {
    toggleSidebar() {
      EventBus.$emit("TOGGLE_SIDEBAR");
    },
  },
};
</script>
<style>
.navigation {
  -webkit-box-shadow: 0 0.125rem 0.625rem rgba(90, 97, 105, 0.12);
  box-shadow: 0 0.125rem 0.625rem rgba(90, 97, 105, 0.12);
}

.navigation .w-100.dropdown-menu {
  max-height: 400px;
}

.navigation .dropdown-item {
  outline: none;
}

.navigation .dropdown-item.active,
.navigation .dropdown-item:active {
  color: #09639d;
  font-weight: bold;
  text-decoration: none;
  background-color: #f8f9fa;
}

.text-brand {
  color: rgba(2, 100, 157, 1);
}
.navigation .dropdown-menu {
  max-height: 300px;
  overflow-y: auto;
  width: auto !important;
  margin: 0;
}
</style>
