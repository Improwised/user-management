<template>
  <b-modal :id="id" title="Activate user" centered hide-footer>
    <div class="mb-2">
      <p>Activate user will send recovery link email to user</p>
      <b-form inline>
        <label class="mr-sm-2">Expires In</label>
        <b-input-group append="hours" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            id="name"
            v-model="expiresIn"
            type="number"
            min="1"
            max="24"
            data-test="name"
            required
            autocomplete="off"
          ></b-form-input>
        </b-input-group>
      </b-form>
    </div>

    <div class="text-center mb-1">
      <b-button
        :disabled="expiresIn < 1"
        type="submit"
        block
        variant="success"
        class="form-control"
        data-test="submit-btn"
        @click="activate()"
        >Activate</b-button
      >
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "activate-modal",
    },
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      expiresIn: null,
    };
  },
  methods: {
    async activate() {
      await this.$store
        .dispatch("createRecoveryLink", {
          user_id: this.userId,
          expires_in: this.expiresIn,
        })
        .then(() => {})
        .catch((e) => {
          return e;
        });
    },
  },
};
</script>
