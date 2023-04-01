export default function Table(props) {
  const { users, columns } = props;

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
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.id}>
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
