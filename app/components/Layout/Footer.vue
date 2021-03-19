<template>
  <footer data-test="footer" class="footer bg-white bt-1 dfaic">
    <div></div>
    <div data-test="copyright" class="text-muted">
      Copyright © {{ currentYear }} User Management
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style>
.footer {
  height: 56px;
}
</style>
