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
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Nueva tarea..."
      bind:value={texto}
      maxlength="30"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button class="btn btn-warning" id="button-addon2"
      ><i class="fa fa-plus" aria-hidden="true" /></button
    >
  </div>
</form>

<style></style>
