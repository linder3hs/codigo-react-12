export default function Table(props) {
  const { columns, rows } = props;

  return (
    <div className="mt-5 table-responsive">
      <table className="table">
        <thead className="table-dark">
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 &&
            rows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td>{row[column.key]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

{/* <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <img
                    className="rounded-circle"
                    width={40}
                    alt=""
                    src={user.avatar}
                  />
                </td>
                <td>{user.password}</td>
                <th>{user.terms ? "✅" : "❌"} </th>
              </tr> */}
