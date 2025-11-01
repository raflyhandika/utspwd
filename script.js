// === script.js ===

// Ambil elemen-elemen yang dibutuhkan
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector(".icon");
const toast = document.getElementById("toast");
const form = document.getElementById("contactForm");
const showToastBtn = document.getElementById("showToast");

// =========================
// 1. Dark Mode Toggle
// =========================

// Cek preferensi tema yang tersimpan di localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.textContent = "☀️";
} else if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("dark");
  icon.textContent = "🌙";
} else {
  // Jika belum ada preferensi, ikuti sistem pengguna
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.classList.add("dark");
    icon.textContent = "☀️";
  }
}

// Event klik tombol toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  icon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// =========================
// 2. Toast Notification
// =========================
function showToast(message) {
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2500);
}

if (showToastBtn) {
  showToastBtn.addEventListener("click", () => {
    showToast("Sweet Moments Start Here");
  });
}

// =========================
// 3. Simulasi Kirim Form
// =========================
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulasi kirim data
    const nama = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (nama && email) {
      showToast(`Terima kasih, ${nama}! Pesan Anda telah dikirim.`);
      form.reset();
    } else {
      showToast("Harap lengkapi semua kolom.");
    }
  });
}

// =========================
// 4. Tombol Beli Produk
// =========================
document.querySelectorAll(".buy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.parentElement.querySelector("h3").textContent;
    showToast(`Anda membeli ${product}. Terima kasih!`);
  });
});

