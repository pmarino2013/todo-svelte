<script>
  export let handleSubmit;
  let texto = "";
</script>

<form
  on:submit|preventDefault={() => {
    handleSubmit(texto);
    texto = "";
  }}
>
  <input
    class="form-control"
    type="text"
    bind:value={texto}
    maxlength="30"
    placeholder="Nueva tarea..."
  />
</form>

<style></style>
