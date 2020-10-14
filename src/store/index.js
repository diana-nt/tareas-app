import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    fechaActualizacionEstado: '',
    actual: 'tareas',
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
      const tarea = state.tareas.find(tarea => tarea.id === tareaId);
      tarea.completed = !tarea.completed
    },
    ELIMINAR_TAREA(state, tareaId){
      const index = state.tareas.findIndex(tarea => tarea.id === tareaId);
      state.tareas.splice(index, 1);
    },
    CAMBIAR_TAB(state, tab){
      state.actual = tab.toLowerCase();
    },
    ORDENAR_TAREAS(state){
      state.tareas = state.tareas.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    },
    ACTUALIZAR_FECHA(state) {
      state.fechaActualizacionEstado = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
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
    },
    cambiarTab(context, tab){
      context.commit("CAMBIAR_TAB", tab);
    },
    ordenarTareas(context){
      context.commit("ORDENAR_TAREAS");
    },
    actualizarFecha(context){
      context.commit('ACTUALIZAR_FECHA');
      console.log('Estado modificado por última vez el ' + context.state.fechaActualizacionEstado)
    }
  },
  getters: {
    getTareas(state){
      return state.tareas;
    },
    getTareasFinalizadas(state){
      return state.tareas.filter(tarea => tarea.completed === true);
    },
    getTareasPendientes(state){
      return state.tareas.filter(tarea => tarea.completed === false);
    },
/*    getTab(state){
      return state.actual;
    },*/
    getTareasAMostrar(state, getters){
      if (state.actual === 'finalizadas'){
        return getters.getTareasFinalizadas;
      }else if (state.actual === 'pendientes'){
        return getters.getTareasPendientes;
      }
      return state.tareas;
    }
  },
  modules: {
  }
})
