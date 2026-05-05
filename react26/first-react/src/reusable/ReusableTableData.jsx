export default function ReusableTableData({ user }) {
  return (
    <>
      <strong style={{ color: "green" }}>
        Re-usable table compnennt throgh Props
      </strong>
      <br /> <br />
      <table border="1" width="100%">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
        </thead>
        <tbody>
          {user.map((items) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.age}</td>
              <td>{items.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
