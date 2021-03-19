<template>
  <aside class="sidebar" :class="{ 'sidebar-visible': isVisibleSidebar }">
    <div class="branding bb-1 d-flex align-items-center justify-content-center">
      <img src="@/assets/images/user_logo.png" height="46" />
      <!-- User Management -->
    </div>
    <div class="sidebar-menus">
      <b-list-group :flush="true" tag="div">
        <!--  -->
        <b-list-group-item
          :active="$route.name === 'index'"
          tag="a"
          :to="{
            name: 'index',
          }"
          data-test="dashboard"
        >
          <!-- <img
            class="icon-default mr-2"
            :src="defaultIcon('dashboard')"
            height="20"
          />
          <img
            class="icon-active mr-2"
            :src="activeIcon('dashboard')"
            height="20"
          /> -->
          <b-icon icon="circle" class="cp mr-2" font-scale="2"></b-icon>
          Dashboard
        </b-list-group-item>
        <b-list-group-item
          :active="$route.name === 'users'"
          data-test="users"
          tag="a"
          :to="{
            name: 'users',
          }"
        >
          <b-icon icon="person" class="cp mr-2" font-scale="2"></b-icon>
          Users
        </b-list-group-item>

        <b-list-group-item
          :active="$route.name === 'schemas'"
          data-test="schemas"
          tag="a"
          :to="{
            name: 'schemas',
          }"
        >
          <b-icon icon="code" class="cp mr-2" font-scale="2"></b-icon>
          Schemas
        </b-list-group-item>

        <!-- <b-list-group-item
          v-if="isRoleOwner"
          tag="a"
          :to="{
            name: 'pulsar-activity-logs'
          }"
          :active="$route.name === 'pulsar-activity-logs'"
        >
          Activity Logs
        </b-list-group-item> -->
        <!--  -->
      </b-list-group>
    </div>
  </aside>
</template>

<script>
import EventBus from "@/libs/eventBus.js";

export default {
  data: () => {
    return {
      isVisibleSidebar: true,
    };
  },

  mounted() {
    EventBus.$on("TOGGLE_SIDEBAR", () => {
      this.isVisibleSidebar = !this.isVisibleSidebar;
    });

    document.addEventListener("click", (event) => {
      if (
        !(event && event.target && event.target.closest(".sidebar")) &&
        !(event && event.target && event.target.closest(".navigation"))
      ) {
        if (window.innerWidth < 768) {
          if (this.isVisibleSidebar) {
            this.isVisibleSidebar = false;
          }
        }
      }
    });

    if (window.innerWidth > 767 && !this.isVisibleSidebar) {
      this.isVisibleSidebar = true;
    } else if (window.innerWidth < 768 && this.isVisibleSidebar) {
      this.isVisibleSidebar = false;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 767 && !this.isVisibleSidebar) {
        this.isVisibleSidebar = true;
      } else if (window.innerWidth < 768 && this.isVisibleSidebar) {
        this.isVisibleSidebar = false;
      }
    });
  },
  methods: {
    // defaultIcon(iconName) {
    //   return require(`@/assets/images/${iconName}.svg`);
    // },
    // activeIcon(iconName) {
    //   return require(`@/assets/images/${iconName}-active.svg`);
    // }
    // extractNamespace(n) {
    //   if (n && n.length && n.includes("/")) {
    //     return n.split("/")[1];
    //   } else {
    //     return n;
    //   }
    // }
  },
};
</script>

<style>
.sidebar {
  top: 0;
  width: 210px;
  height: 100vh;
  z-index: 2;
  position: fixed;
  background-color: white;
  /* background-color: #343a40; */
  box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
    0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
    0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
  -webkit-box-shadow: 0 0.125rem 9.375rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.5rem rgba(90, 97, 105, 0.12),
    0 0.9375rem 1.375rem rgba(90, 97, 105, 0.1),
    0 0.4375rem 2.1875rem rgba(165, 182, 201, 0.1);
}

@media only screen and (max-width: 768px) {
  .sidebar {
    width: 0;
    overflow: hidden;
  }

  .sidebar-visible {
    width: 210px;
    overflow: visible;
  }
}

.sidebar .branding {
  height: 56px;
  background-color: #09639d;
  /*padding: 0.5rem 1rem;*/
}

.sidebar .sidebar-menus {
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 57px);
}

.sidebar-menus .list-group .list-group-item {
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  background-color: white;
  padding: 0.9375rem 1.5625rem;
  border-bottom: 1px solid #e1e5eb;
}

.sidebar-menus .list-group .list-group-item:hover,
.sidebar-menus .list-group .list-group-item.active {
  color: #09639d;
  background-color: #fbfbfb;
  box-shadow: inset 0.1875rem 0 0 #09639d;
}

.sidebar-menus .list-group .list-group-item.active {
  border-top: 1px solid #e1e5eb;
  border-bottom: 1px solid #e1e5eb;
}

.sidebar-menus .list-group .list-group-item .icon-default,
.sidebar-menus .list-group .list-group-item .icon-default {
  display: inline-block;
}

.sidebar-menus .list-group .list-group-item .icon-active,
.sidebar-menus .list-group .list-group-item .icon-active {
  display: none;
}

.sidebar-menus .list-group .list-group-item:hover .icon-default,
.sidebar-menus .list-group .list-group-item.active .icon-default {
  display: none;
}

.sidebar-menus .list-group .list-group-item:hover .icon-active,
.sidebar-menus .list-group .list-group-item.active .icon-active {
  display: inline-block;
}
</style>
