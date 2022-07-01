<script>
  import { fade } from "svelte/transition";
  export let tareas = [];
  export let borrarTarea;
</script>

{#if tareas.length > 0}
  {#each tareas as tarea (tarea.id)}
    <div transition:fade={{ delay: 200, duration: 300 }} class="card mt-2">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <i class="fa fa-thumb-tack me-2 color-text" aria-hidden="true" />
          <span>
            {tarea.descripcion}
          </span>
        </div>
        <div>
          <button
            class="btn btn-danger btn-sm"
            on:click={() => borrarTarea(tarea.id)}
            ><i class="fa fa-trash-o" aria-hidden="true" /></button
          >
        </div>
      </div>
    </div>
  {/each}
{/if}

<style>
  .color-text {
    color: #ff3e00;
  }
</style>
