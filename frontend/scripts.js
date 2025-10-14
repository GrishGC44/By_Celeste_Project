const baseURL = "http://localhost:5000";

async function handleLogin(formId, url, msgId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.querySelector("input[type='email']").value;
    const password = form.querySelector("input[type='password']").value;

    const res = await fetch(`${baseURL}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    document.getElementById(msgId).innerText = data.message;
  });
}

handleLogin("loginForm", "login", "loginMsg");
handleLogin("wholesaleForm", "wholesale", "whMsg");
