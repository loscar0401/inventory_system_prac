document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || "Account created successfully");
        window.location.href = "/";
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (err) {
      alert("Something went wrong while registering account");
      console.error(err);
    }
  });
});
