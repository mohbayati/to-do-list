<template>
  <div class="grid grid-cols-1 border-y">
    <div class="flex items-center m-2">
      <input
        type="checkbox"
        class="w-4 mr-2 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        disabled
        :checked="task.completed"
      />
      <span
        :style="{ color: getDateColor(task) }"
        :class="{ 'line-through': task.completed }"
        >{{ task.title }}
      </span>

      <button
        data-tooltip-target="tooltip-light-doblicate"
        data-tooltip-style="light"
        class="text-white rounded ml-auto p-2"
        @click="duplicateTask(task)"
      >
        <svg
          fill="#0dc700"
          width="32px"
          height="32px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#0dc700"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M1468.183 451.76v1468.184H0V451.76h1468.183ZM777.203 800h-112l-.001 318.041H333v112h332.202V1580h112v-349.959H1113v-112H777.202V800ZM1920 0v1468.296h-338.812V338.812H451.704V0H1920Z"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      </button>
      <div
        id="tooltip-light-doblicate"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Doplicate
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        data-tooltip-target="tooltip-light-edit"
        data-tooltip-style="light"
        class="text-white rounded ml-2 p-2"
        @click="setEditModal(task.id)"
      >
        <svg
          fill="#009dff"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#009dff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>edit</title>
            <path
              d="M10.681 18.207l-2.209 5.67 5.572-2.307-3.363-3.363zM26.855 6.097l-0.707-0.707c-0.78-0.781-2.047-0.781-2.828 0l-1.414 1.414 3.535 3.536 1.414-1.414c0.782-0.781 0.782-2.048 0-2.829zM10.793 17.918l0.506-0.506 3.535 3.535 9.9-9.9-3.535-3.535 0.707-0.708-11.113 11.114zM23.004 26.004l-17.026 0.006 0.003-17.026 11.921-0.004 1.868-1.98h-14.805c-0.552 0-1 0.447-1 1v19c0 0.553 0.448 1 1 1h19c0.553 0 1-0.447 1-1v-14.058l-2.015 1.977 0.054 11.085z"
            ></path>
          </g>
        </svg>
      </button>
      <div
        id="tooltip-light-edit"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Edit
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        data-tooltip-target="tooltip-light-delete"
        data-tooltip-style="light"
        class="text-white rounded p-2 ml-2"
        @click="setDeleteTaskId(task.id)"
      >
        <svg
          width="32px"
          height="32px"
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
              d="M10 11V17"
              stroke="#ff0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 11V17"
              stroke="#ff0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4 7H20"
              stroke="#ff0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
              stroke="#ff0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#ff0000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      <div
        id="tooltip-light-delete"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Delete
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isdelete: true,
    };
  },
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getDateColor(task) {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed).getTime();
      if (task.completed === false && today >= new Date(task.dueDate).getTime())
        return "red";
    },
    setEditModal(id) {
      this.$store.dispatch("setModalType", "edit");
      this.$store.dispatch("setShowModal", true);
      this.$store.dispatch("setEditTaskId", parseInt(id));
    },
    setDeleteTaskId(id) {
      this.$store.dispatch("setModalType", "delete");
      this.$store.dispatch("setShowModal", true);
      this.$store.dispatch("setDeleteTaskId", parseInt(id));
    },
    duplicateTask(task) {
      let copiedTask = JSON.parse(JSON.stringify(task));
      this.$store.dispatch("addTask", copiedTask);
    },
  },
};
</script>
