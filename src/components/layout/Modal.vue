<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"
      v-if="showModal"
    ></div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      v-if="showModal"
    >
      <div class="bg-white p-6 rounded-lg shadow-xl">
        <DeleteConfirm v-if="modalType === 'delete'" />
        <FormTask v-else :modal-type="modalType" />
      </div>
    </div>
  </div>
</template>
<script>
import FormTask from "./Form.vue";
import DeleteConfirm from "./DeleteConfirm.vue";
export default {
  computed: {
    modalType() {
      return this.$store.getters.getModalType;
    },
  },
  components: {
    FormTask,
    DeleteConfirm,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "defaultModal",
    },
  },
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
</style>
