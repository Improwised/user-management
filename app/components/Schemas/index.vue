<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div>
          <b-card
            class="custom-card"
            header-tag="header"
            header-class="custom-header dfaisb bb-1"
            body-class="custom-body p-0"
            footer-tag="footer"
            footer-class="custom-footer bt-1"
          >
            <div class="table-responsive m-0 user-list">
              <table class="custom-table table m-0 bb-1 br-1 table-hover">
                <thead class="bg-light">
                  <tr>
                    <th class="text-center">Schema</th>
                  </tr>
                </thead>
                <tbody v-if="schemaUrlList">
                  <tr v-for="(schemaUrl, index) in schemaUrlList" :key="index">
                    <td class="text-center">
                      <nuxt-link
                        :to="{
                          name: 'schemas-schema',
                          params: { schema: index, schema_url: schemaUrl },
                        }"
                        >{{ index }}</nuxt-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    schemaUrlList() {
      return this.$store.getters.schemaUrlList;
    },
  },
};
</script>

<style>
.user-list .custom-table.table tbody td {
  height: 90px;
  /*font-size: 1rem;*/
}

.user-list .custom-table.table tbody td .progress .progress-bar.bg-warning {
  color: #212529;
}

.user-list .table-hover tbody tr:hover {
  background-color: rgba(7, 140, 253, 0.03);
}

.h26 {
  height: 26px;
}
</style>
