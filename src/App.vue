<template>
  <div id="app">
      <h2>TAREAS QUE HACER</h2>

      <agreagar-tarea />
      <tareas />

  </div>
</template>

<script>
import Tareas from "./components/Tareas";
import AgreagarTarea from "./components/AgreagarTarea";

export default {
  name: 'App',
  components: {
      Tareas,
      AgreagarTarea
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
h2 {

    font-family: 'Oswald', sans-serif;
    text-align: center;
    padding-top: 50px;
    font-size: 60px;
    text-decoration: underline;
    text-decoration-color: paleturquoise;
}
</style>
