<script>
  import moment from "moment";
  export let info;
  const { time, casos, criticos, recuperados, muertes } = info;
  moment.locale();
</script>

<table class="table">
  <thead>
    <tr>
      <th>Fecha</th>
      <th>Casos</th>
      <th>Críticos</th>
      <th>Recuperados</th>
      <th>Fallecidos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{moment(time).format("LL")}</td>
      <td>{casos}</td>
      <td>{criticos}</td>
      <td>{recuperados}</td>
      <td>{muertes}</td>
    </tr>
  </tbody>
</table>
