// =====================================
// FRONTEND LOGIC
// =====================================

const API = "http://localhost:3001/api/users";

// ===============================
// READ (GET ALL USERS)
// ===============================
async function loadUsers() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById("users");
  container.innerHTML = "";

  data.forEach(user => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>
        <b>${user.name}</b> (${user.role})
      </p>

      <button onclick="deleteUser('${user.id}')">Delete</button>
      <button onclick="updateUser('${user.id}')">Make Admin</button>
      <hr/>
    `;

    container.appendChild(div);
  });
}

// ===============================
// CREATE USER
// ===============================
async function createUser() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, role })
  });

  loadUsers();
}

// ===============================
// DELETE USER
// ===============================
async function deleteUser(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadUsers();
}

// ===============================
// UPDATE USER (simple demo)
// ===============================
async function updateUser(id) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role: "Admin" })
  });

  loadUsers();
}

// initial load
loadUsers();
