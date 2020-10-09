import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [
      {
        id: 1,
        title: 'Aprender Vue',
        completed: false,
        created_at: new Date('2017-06-01')
      },
      {
        id: 2,
        title: 'Lavar coche',
        completed: false,
        created_at: new Date('2018-04-23')
      },
      {
        id: 3,
        title: 'Pasar la aspiradora',
        completed: false,
        created_at: new Date('2019-11-30')
      },
      {
        id: 4,
        title: 'Hacer trabajo de clase',
        completed: false,
        created_at: new Date('2019-02-10')
      },
      {
        id: 5,
        title: 'Comprar impresora',
        completed: false,
        created_at: new Date('2004-08-13')
      }
    ],
  },
  mutations: {
    AGREGAR_TAREA (state, tarea){
      const nuevaTarea = {
        id: tarea.newId,
        title: tarea.title,
        completed: false,
        created_at: new Date()
      }
      state.tareas.unshift(nuevaTarea);
    },
    COMPLETAR_TAREA(state, tareaId){
      const tarea = state.tareas.findIndex(tarea => tarea.id === tareaId);
      tarea.completed = !tarea.completed;
    },
    ELIMINAR_TAREA(state, tareaId){
      const index = state.tareas.findIndex(tarea => tarea.id === tareaId);
      state.tareas.splice(index, 1);
    }
  },
  actions: {
    agregarTarea(context, tarea){
      context.commit("AGREGAR_TAREA", tarea);
    },
    completarTarea(context, tareaId){
      context.commit("COMPLETAR_TAREA", tareaId);
    },
    eliminarTarea(context, tareaId){
      context.commit("ELIMINAR_TAREA", tareaId);
    }
  },
  getters: {
    getTodos(state){
      return state.tareas;
    }
  },
  modules: {
  }
})
