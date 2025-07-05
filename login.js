async function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('error');

  try {
    const res = await fetch('https://raw.githubusercontent.com/ghanzakunbaru/sentra/main/users.json');
    const users = await res.json();
    const found = users.find(u => u.username === username && u.password === password);

    if (found) {
      localStorage.setItem('sentra_user', username);
      window.location.href = 'dashboard.html';
    } else {
      error.innerText = 'Username atau password salah';
    }
  } catch (err) {
    error.innerText = 'Gagal menghubungi server';
    console.error(err);
  }
}
