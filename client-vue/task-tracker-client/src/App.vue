<script >
export default {
  data() {
    return {
    };
  },
  methods: {
    
    sendGet() {
      const requestOptions = {
        method: "GET",
      }
      fetch("http://localhost:3000/task", requestOptions)
        // .then(response => response.json())
        .then(data => console.log(data));
    },
    sendGetAll() {
      console.log("get all")
    },
    sendPost() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Vue POST Request Example" })
      };
      fetch("http://localhost:3000/task", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    },
    sendPut() {
      console.log("put")
    },
    sendDelete() {
      console.log("send delete")
    }
  },
}
</script>

<template>
  <header>

    <div class="wrapper">
      <button @click="sendGet">Send GET Request</button>
      <button @click="sendGetAll">Send GET ALL Request</button>
      <button @click="sendPost">Send POST Request</button>
      <button @click="sendDelete">Send DELETE Request</button>
      <button @click="sendPut">Send PUT Request</button>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped></style>
