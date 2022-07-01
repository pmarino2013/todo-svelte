<script>
  import { onMount, afterUpdate } from "svelte";
  let tareas = [];

  import logo from "../../assets/svelte.png";
  import TodoCards from "./TodoCards.svelte";
  import TodoForm from "./TodoForm.svelte";

  onMount(() => {
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  });

  afterUpdate(() => {
    console.log("the component just updated");

    localStorage.setItem("tareas", JSON.stringify(tareas));
  });

  const handleSubmit = (/** @type {any} */ texto) => {
    if (texto) {
      tareas = [
        ...tareas,
        {
          id: new Date().getTime(),
          descripcion: texto,
          done: false,
        },
      ];
    }
  };

  const borrarTarea = (/** @type {any} */ id) => {
    let newTareas = tareas.filter((tarea) => {
      return tarea.id !== id;
    });

    tareas = [...newTareas];
  };
</script>

<section>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-center align-items-center my-3">
          <img src={logo} alt="logo" />
          <h3 class=" color-text m-0">Lista de tareas</h3>
        </div>
      </div>
    </div>
    <div class="row cuadro">
      <div class="card col-12 col-md-6 offset-md-3">
        <div class="card-body">
          <div class="col">
            <TodoForm {handleSubmit} />
            <small class="text-white"
              >Cantidad de tareas pendientes: <span class="fw-bold"
                >{tareas.length}</span
              ></small
            >
            <TodoCards {tareas} {borrarTarea} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .cuadro {
    min-height: 80vh;
  }
  .card {
    background-color: #ff3e00;
  }
  .color-text {
    color: #ff3e00;
  }
  img {
    width: 50px;
  }
</style>
