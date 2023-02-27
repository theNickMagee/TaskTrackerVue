import { reactive } from "vue";

export const store = reactive({
  tasks: [
    {
      title: "Default Task",
    },
  ],
  statusOptions: [
    { name: "Incomplete", color: "red" },
    { name: "In-Proge", color: "red" },
  ],
});
