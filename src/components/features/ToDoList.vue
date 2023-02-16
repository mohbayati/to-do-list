<template>
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"
    >
      <div
        class="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800"
      >
        <div class="container mx-auto p-6">
          <h1 class="text-2xl font-bold mb-4">Today {{ getDate() }}</h1>

          <Task v-for="task in tasks" :key="task.id" :task="task" />

          <div class="mt-2">
            <button
              class="rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
              @click="createTask()"
            >
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
                    stroke="#13d605"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              Add task
            </button>
            <Modal :show-modal="getShowModal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../layout/Modal.vue";

import Task from "../features/Task.vue";

export default {
  components: {
    Task,
    Modal,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    getShowModal() {
      return this.$store.getters.getShowModal;
    },
  },
  name: "ToDoList",
  methods: {
    getDate() {
      const timeElapsed = Date.now();
      return new Date(timeElapsed).toLocaleDateString();
    },
    createTask() {
      this.$store.dispatch("setModalType", "create");
      this.$store.dispatch("setEditTaskId", 0);
      this.$store.dispatch("setShowModal", true);
    },
  },
};
</script>
