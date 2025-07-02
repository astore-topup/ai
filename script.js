let produk = [];

fetch("produk.json")
  .then((res) => res.json())
  .then((data) => {
    produk = data;
  });

function jawab() {
  const pertanyaan = document.getElementById("pertanyaan").value.toLowerCase();
  const jawabanElem = document.getElementById("jawaban");
  const waLink = document.getElementById("waLink");

  let hasil = "Maaf, saya tidak menemukan produk yang sesuai.";

  // Cari produk yang cocok
  const cocok = produk.find((p) => {
    return (
      pertanyaan.includes(p.jenis) &&
      pertanyaan.includes(p.untuk) &&
      (pertanyaan.includes("terbaik") || pertanyaan.includes("rekomendasi")) &&
      pertanyaan.includes(p.usia)
    );
  });

  if (cocok) {
    hasil = `Rekomendasi kami: <b>${cocok.nama}</b> - ${cocok.deskripsi}`;
    waLink.href = `https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20beli%20${encodeURIComponent(cocok.nama)}`;
    waLink.style.display = "inline-block";
  } else {
    waLink.style.display = "none";
  }

  jawabanElem.innerHTML = hasil;
}
