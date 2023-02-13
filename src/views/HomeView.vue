<template>
  <div class="min-h-full">
    <NavBar />
    <Sidebar />
    <ToDoList />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import ToDoList from "@/components/features/ToDoList.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    ToDoList,
    Sidebar,
  },
};
</script>
