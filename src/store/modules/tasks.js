import taskList from "@/assets/task-list";
const SET_FILTER_SIDE = "SET_FILTER_SIDE";
const DELETE_TASK = "DELETE_TASK";
const SET_DELETE_TASK_ID = "SET_DELETE_TASK_ID";
const SET_EDIT_TASK_ID = "SET_EDIT_TASK_ID";
const SET_SHOW_MODAL = "SET_SHOW_MODAL";
const SET_MODAL_TYPE = "SET_MODAL_TYPE";
const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";

const state = {
  tasks: taskList,
  filterSide: null,
  deleteTaskId: 0,
  editTaskId: 0,
  showModal: false,
  modalType: "",
};
const getters = {
  getTasks: (state) => {
    if (state.filterSide && state.filterSide.key === "Completed") {
      return state.tasks.filter((task) => task.completed !== false);
    } else if (state.filterSide && state.filterSide.key === "pending") {
      return state.tasks.filter((task) => task.completed !== true);
    }
    return state.tasks;
  },
  getDeleteTaskId: (state) => {
    return state.deleteTaskId;
  },
  getEditTaskId: (state) => {
    return state.editTaskId;
  },
  getTaskById: (state) => {
    return state.tasks.filter((task) => task.id === state.editTaskId)[0];
  },
  getShowModal: (state) => {
    return state.showModal;
  },
  getModalType: (state) => {
    return state.modalType;
  },
};
const mutations = {
  [SET_FILTER_SIDE](state, filterSide) {
    state.filterSide = filterSide;
  },
  [DELETE_TASK](state, id) {
    state.tasks.splice(
      state.tasks.findIndex((task) => task.id === id),
      1
    );
  },
  [SET_DELETE_TASK_ID](state, id) {
    state.deleteTaskId = id;
  },
  [SET_EDIT_TASK_ID](state, id) {
    state.editTaskId = id;
  },
  [SET_SHOW_MODAL](state, showModal) {
    state.showModal = showModal;
  },
  [SET_MODAL_TYPE](state, modalType) {
    state.modalType = modalType;
  },
  [ADD_TASK](state, task) {
    const length = state.tasks.length;
    task.id = length + 1;
    state.tasks.push(task);
  },
  [UPDATE_TASK](state, task) {
    state.tasks = state.tasks.map((oldTask) => {
      if (task.id === oldTask.id) {
        return task;
      }
      return oldTask;
    });
  },
};
const actions = {
  filterSide({ commit }, filterSide) {
    commit(SET_FILTER_SIDE, filterSide);
  },
  deleteTask({ commit }, id) {
    commit(DELETE_TASK, id);
  },
  setDeleteTaskId({ commit }, id) {
    commit(SET_DELETE_TASK_ID, id);
  },
  setEditTaskId({ commit }, id) {
    commit(SET_EDIT_TASK_ID, id);
  },
  setShowModal({ commit }, showModal) {
    commit(SET_SHOW_MODAL, showModal);
  },
  setModalType({ commit }, modalType) {
    commit(SET_MODAL_TYPE, modalType);
  },
  addTask({ commit }, task) {
    commit(ADD_TASK, task);
  },
  updateTask({ commit }, task) {
    commit(UPDATE_TASK, task);
  },
};
const modules = {};

export default {
  state,
  getters,
  mutations,
  actions,
  modules,
};
