document.getElementById("nailongForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let seru = document.getElementById("seru").value;
  let rate = document.getElementById("rate").value;
  let cerita = document.getElementById("cerita").value;

  // Ganti dengan nomor WhatsApp kamu (tanpa +, pakai 62)
  let nomorWhatsApp = "6281234567890";

  let pesan = `Hai Nailong 🐸%0AHari ini: ${seru}%0ARate: ${rate}/10%0ACerita: ${cerita}`;
  let url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');
});
