const Table = ({ datos }) => {
    return (
      <div>
        <h1>Table</h1>
        <table border="1">
          <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Celular</th>
            <th>Correo</th>
          </thead>
          <tbody>
            {datos.map((dato) => (
              <tr>
                <td>{dato.nombre}</td>
                <td>{dato.apellido}</td>
                <td>{dato.celular}</td>
                <td>{dato.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;