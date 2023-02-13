<template>
  <div class="px-6 py-6 lg:px-8">
    <h3
      v-if="modalType === 'edit'"
      class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
    >
      Edit
    </h3>
    <h3
      v-else-if="modalType === 'create'"
      class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
    >
      Create
    </h3>
    <form @submit.prevent="submitHandler" class="space-y-6" action="#">
      <div>
        <label
          for="taskName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Task Name</label
        >
        <input
          type="text"
          name="taskName"
          id="task_name"
          ref="taskName"
          :value="task.title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Fill the task name"
          required
        />
      </div>
      <div>
        <label
          for="dueDate"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Due date</label
        >
        <datetime
          format="MM/DD/YYYY"
          name="dueDate"
          ref="dueDate"
          :value="task.dueDate"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        ></datetime>
      </div>
      <div v-if="modalType === 'edit'" class="flex items-center mr-4">
        <input
          name="completedTask"
          id="completed_Task"
          ref="completedTask"
          :checked="task.completed"
          type="checkbox"
          class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="completedTask"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Task is completed?</label
        >
      </div>
      <div
        class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
      >
        <button
          v-if="modalType === 'edit'"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit the task
        </button>
        <button
          v-else-if="modalType === 'create'"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add task
        </button>
        <button
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          @click="cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import datetime from "vuejs-datetimepicker";
export default {
  components: { datetime },
  props: {
    modalType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      task: { title: "", dueDate: null, completed: false },
    };
  },
  created() {
    if (this.$store.getters.getEditTaskId !== 0) {
      this.task = this.$store.getters.getTaskById;
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      let refTask = this.task;
      refTask.title = this.$refs.taskName.value;
      if (this.$store.getters.getEditTaskId !== 0) {
        refTask.completed = this.$refs.completedTask.checked;
      }
      refTask.dueDate = this.$refs.dueDate.date;
      if (this.modalType === "edit") {
        this.$store.dispatch("updateTask", refTask);
        this.$store.dispatch("setShowModal", false);
      } else {
        this.$store.dispatch("addTask", refTask);
        this.$store.dispatch("setShowModal", false);
      }
    },
    cancel() {
      this.$store.dispatch("setShowModal", false);
    },
  },
};
</script>
