<script>
  let tareas = [];
  let texto = "";
  import logo from "../../assets/svelte.png";

  const handleSubmit = () => {
    if (texto) {
      //   tareas.push({ descripcion: texto, done: false })
      tareas = [...tareas, { descripcion: texto, done: false }];
      texto = "";
    }
  };

  const borrarTarea = (index) => {
    let newTareas = tareas.filter((tarea) => {
      return tarea !== tareas[index];
    });

    tareas = [...newTareas];
  };
</script>

<section>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-center align-items-center mb-3">
          <img src={logo} alt="logo" />
          <h3 class=" color-text m-0">Lista de tareas</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <form on:submit|preventDefault={handleSubmit}>
          <input
            class="form-control"
            type="text"
            bind:value={texto}
            maxlength="20"
          />
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 col-md-6 offset-md-3">
        {#if tareas.length > 0}
          {#each tareas as tarea, index}
            <div class="card mb-2">
              <div
                class="card-body d-flex justify-content-between align-items-center"
              >
                <div>
                  <i
                    class="fa fa-thumb-tack me-2 color-text"
                    aria-hidden="true"
                  />
                  <span>
                    {tarea.descripcion}
                  </span>
                </div>
                <div>
                  <button
                    class="btn btn-danger btn-sm"
                    on:click={() => borrarTarea(index)}
                    ><i class="fa fa-trash-o" aria-hidden="true" /></button
                  >
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .color-text {
    color: #ff3e00;
  }
  img {
    width: 50px;
  }
</style>
