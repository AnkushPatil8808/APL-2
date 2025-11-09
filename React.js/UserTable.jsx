import React from "react";

function UserTable() {
  const users = [
    { id: 1, name: "Kunal", email: "kunal@mail.com" },
    { id: 2, name: "Aman", email: "aman@mail.com" },
  ];

  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr><th>ID</th><th>Name</th><th>Email</th></tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
