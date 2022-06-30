<script>
  import { onMount } from "svelte";

  import { getData } from "../helpers/fetchCovid";
  import CovidForm from "./CovidForm.svelte";
  import CovidTable from "./CovidTable.svelte";

  let datosCovid;
  let info = {};

  onMount(() => {
    console.log("the component has mounted");
    traerInfo();
  });

  const traerInfo = (valor = "") => {
    datosCovid = getData(valor).then((datos) => {
      console.log(datos.response);

      return (info = {
        pais: datos.response[0].country,
        casos: datos.response[0].cases.active,
        criticos: datos.response[0].cases.critical,
        recuperados: datos.response[0].cases.recovered,
        muertes: datos.response[0].deaths.total,
        dia: datos.response[0].day,
        tiempo: datos.response[0].time,
      });
    });
  };
</script>

<div class="container">
  <div class="row">
    <div class="col-12">
      <h3>Informe Covid-19</h3>
    </div>
    <div class="col-12 col-md-6 offset-md-3 my-3">
      <CovidForm {traerInfo} />
    </div>
  </div>
  {#await datosCovid}
    <p>Cargando..</p>
  {:then value}
    <div class="row">
      <div class="col-12">
        <p><b>Pais:</b> {info.pais}</p>
      </div>
      <div class="col-12 col-md-6 offset-md-3">
        <CovidTable {info} />
      </div>
    </div>
  {:catch error}
    <p>No se encontraron datos</p>
  {/await}
</div>

<style>
</style>
