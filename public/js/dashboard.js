document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/";
    return;
  }

  try {
    const response = await fetch("/inventory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      renderInventory(data.data);
    } else {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  } catch (err) {
    alert("Something went wrong while loading inventory");
    console.error(err);
  }

  const itemForm = document.getElementById("itemForm");
  itemForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const itemId = document.getElementById("itemId").value;
    const itemName = document.getElementById("itemName").value;
    const category = document.getElementById("category").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;

    const token = localStorage.getItem("token");

    let url;
    let method;

    if (itemId) {
      url = `/inventory/${itemId}`;
      method = "PUT";
    } else {
      url = "/inventory";
      method = "POST";
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemName,
          category,
          quantity,
          price,
          status,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(itemId ? "Item updated successfully" : "Item added successfully");
        itemForm.reset();
        window.location.reload();
      } else {
        alert(data.message || "Failed to save item");
      }
    } catch (err) {
      alert("Something went wrong while saving item");
      console.error(err);
    }
  });
});

function renderInventory(items) {
  let inventoryTableBody = document.getElementById("inventoryTableBody");
  inventoryTableBody.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${item.item_name}</td>
    <td>${item.category}</td>
    <td>${item.quantity}</td>
    <td>${item.price}</td>
    <td>${item.status}</td>
    <td>${item.date_added}</td>
    <td><button onclick='editItem(${JSON.stringify(item)})'>Edit</button></td>
    <td><button onclick="deleteItem(${item.id})">Delete</button></td>`;

    inventoryTableBody.appendChild(row);
  });
}

function editItem(item) {
  document.getElementById("itemId").value = item.id;
  document.getElementById("itemName").value = item.item_name;
  document.getElementById("category").value = item.category;
  document.getElementById("quantity").value = item.quantity;
  document.getElementById("price").value = item.price;
  document.getElementById("status").value = item.status;
}

async function deleteItem(id) {
  const token = localStorage.getItem("token");
  const confirmDelete = confirm("Are you want to delete this item?");

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await fetch(`/inventory/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Item deleted successfully");
      window.location.reload();
    } else {
      alert(data.message || "Failed to delete item");
    }
  } catch (err) {
    alert("Something went wrong while deleting a item");
    console.error(err);
  }
}
