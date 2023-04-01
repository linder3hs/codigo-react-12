export default function Table(props) {
  const { columns, rows } = props;

  return (
    <div className="mt-5 table-responsive">
      <table className="table">
        <thead className="table-dark text-center">
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 &&
            rows.map((row) => (
              <tr key={row.id} className="text-center">
                {columns.map((column) => (
                  <td key={row.id}>
                    {column.hasOwnProperty("render")
                      ? column.render(row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
