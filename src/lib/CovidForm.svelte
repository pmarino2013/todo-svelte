<script>
  let buscar = "";
  export let traerInfo;
</script>

<div class="d-flex">
  <input
    type="text"
    class="form-control"
    bind:value={buscar}
    on:click={() => (buscar = "")}
    placeholder="Nombre de pais en inglés"
  />
  <button class="btn btn-primary ms-2" on:click={() => traerInfo(buscar)}
    >Buscar</button
  >
</div>
