async function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const status = document.getElementById("status");

  if (!user || !pass) {
    return status.textContent = "⚠️ Lengkapi semua kolom!";
  }

  // Ganti URL ini ke RAW GitHub kamu
  const dataURL = "https://raw.githubusercontent.com/ghanzakunbaru/sentra/main/users.json";";

  try {
    const res = await fetch(dataURL);
    const data = await res.json();

    if (data[user] && data[user] === pass) {
      // Simpan ke sessionStorage biar bisa akses dashboard
      sessionStorage.setItem("user", user);
      window.location.href = "dashboard.html";
    } else {
      status.textContent = "❌ Username atau password salah!";
    }
  } catch (e) {
    status.textContent = "⚠️ Gagal ambil data user!";
  }
}
