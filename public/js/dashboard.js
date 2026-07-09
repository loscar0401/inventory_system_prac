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
      console.log(data);
    } else {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  } catch (err) {
    alert("Something went wrong while loading inventory");
    console.error(err);
  }
});

function renderInventory(items) {
  let inventoryTableBody = document.getElementById("inventoryTableBody");
  inventoryTableBody.innerHTML = " ";
}
