import store from "@/store";

describe("state initial", () => {
  test("Tasks is not empty collection", () => {
    expect(store.state.tasks.tasks).not.toEqual([]);
  });

  test("FilterSide is null", () => {
    expect(store.state.tasks.filterSide).toBe(null);
  });
  test("DeleteTaskId is 0", () => {
    expect(store.state.tasks.deleteTaskId).toBe(0);
  });
  test("EditTaskId is 0", () => {
    expect(store.state.tasks.editTaskId).toBe(0);
  });
  test("ShowModal is false", () => {
    expect(store.state.tasks.showModal).toBe(false);
  });
  test("ModalType is empty string", () => {
    expect(store.state.tasks.modalType).toBe("");
  });
});

describe("actions", () => {
  test("#addTask", () => {
    store.dispatch("addTask", {
      id: 8,
      title: "Task number 8",
      dueDate: "07/10/2023",
      completed: false,
    });
    expect(store.state.tasks.tasks.length).toEqual(8);
  });

  test("#filterSide", () => {
    store.dispatch("filterSide", "all");
    expect(store.state.tasks.tasks.length).toEqual(8);
  });

  test("#deleteTask", () => {
    store.dispatch("deleteTask", 8);
    expect(store.state.tasks.tasks.length).toEqual(7);
  });

  test("#setDeleteTaskId", () => {
    store.dispatch("setDeleteTaskId", 8);
    expect(store.state.tasks.deleteTaskId).toEqual(8);
  });

  test("#setEditTaskId", () => {
    store.dispatch("setEditTaskId", 8);
    expect(store.state.tasks.editTaskId).toEqual(8);
  });
  test("#showModal", () => {
    store.dispatch("setShowModal", true);
    expect(store.state.tasks.showModal).toEqual(true);
  });
  test("#setModalType", () => {
    store.dispatch("setModalType", "delete");
    expect(store.state.tasks.modalType).toEqual("delete");
  });

  test("#updateTask", () => {
    store.dispatch("updateTask", {
      id: 7,
      title: "Task number 71",
      dueDate: "07/10/2023",
      completed: false,
    });
    const taskId8 = store.state.tasks.tasks.filter((task) => task.id === 7)[0];
    expect(taskId8.title).toEqual("Task number 71");
  });
});
