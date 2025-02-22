// DOM canvas
const canvas = document.getElementById("canvas");
// Mengambil fitur canvas js
const ctx = canvas.getContext("2d");

// Ambil yang diklik
const nomor = document.getElementById("nomor");
const gambar = document.querySelector("img");
const pathGambar = "ss/";

nomor.addEventListener("click", function (e) {
  let ganti = 1;
  if (e.target.tagName === "LI") {
    ganti = e.target.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log(ganti);
  }

  switch (ganti) {
    case 1:
      drawSegitigaMerah();
      gambar.src = `${pathGambar}code1.png`;

      break;
    case 2:
      drawTrapesiumBiru();
      gambar.src = `${pathGambar}code2.png`;
      break;
    case 3:
      drawLogoUPN();
      gambar.src = `${pathGambar}code3.png`;
      break;
    case 4:
      drawLingkaranHijau();
      gambar.src = `${pathGambar}code4.png`;
      break;
    case 5:
      drawObjek5();
      gambar.src = `${pathGambar}code5.png`;
      break;
    case 6:
      drawObjek6();
      gambar.src = `${pathGambar}code6.png`;
      break;
  }
});

// Fungsi per bentukannya
const drawSegitigaMerah = () => {
  // Objek Segitiga Merah
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(80, 10);
  ctx.lineTo(20, 140);
  ctx.lineTo(150, 140);
  ctx.closePath();
  ctx.fill();
};

const drawTrapesiumBiru = () => {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(170, 140);
  ctx.lineTo(195, 100);
  ctx.lineTo(290, 100);
  ctx.lineTo(315, 140);
  ctx.closePath();
  ctx.fill();
};

const drawLogoUPN = () => {
  // Fungsi menggambar pentagon
  const drawPentagon = (x, y, size, fillColor, strokeColor, strokeWidth) => {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = ((Math.PI * 2) / 5) * i - Math.PI / 2; // Rotasi agar atasnya rata
      const px = x + size * Math.cos(angle);
      const py = y + size * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
  };

  // Menggambar pentagon luar
  drawPentagon(200, 200, 120, "yellow", "black", 5);

  // Menggambar pentagon dalam (outline)
  drawPentagon(200, 200, 110, "transparent", "black", 2);
};

const drawLingkaranHijau = () => {
  // Objek Lingkaran Hijau
  ctx.fillStyle = "rgb(49, 226, 22)";
  ctx.beginPath();
  ctx.arc(380, 90, 50, 0, Math.PI * 2);
  ctx.fill();
};

const drawObjek5 = () => {
  // Objek Jam Pasir Segitiga Merah
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(160, 210);
  ctx.lineTo(270, 210);
  ctx.lineTo(214, 270);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(270, 330);
  ctx.lineTo(160, 330);
  ctx.lineTo(214, 270);
  ctx.closePath();
  ctx.fill();

  // Objek Hexagon
  ctx.fillStyle = "rgb(44, 30, 135)";
  ctx.beginPath();
  ctx.moveTo(320, 240);
  ctx.lineTo(400, 200);
  ctx.lineTo(457, 250);
  ctx.lineTo(438, 300);
  ctx.lineTo(371, 330);
  ctx.lineTo(371, 330);
  ctx.lineTo(320, 300);
  ctx.closePath();
  ctx.fill();
};

const drawObjek6 = () => {
  // Objek 3 trapesium yang bertumpukan
  const drawTrapesium = (points) => {
    ctx.beginPath();
    points.forEach(([x, y], index) => {
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fill();
  };

  ctx.fillStyle = "rgb(61, 74, 34)";

  drawTrapesium([
    [80, 370],
    [180, 360],
    [160, 400],
    [100, 410],
  ]);

  drawTrapesium([
    [100, 412],
    [160, 402],
    [154, 450],
    [96, 440],
  ]);

  drawTrapesium([
    [96, 442],
    [154, 452],
    [182, 485],
    [120, 493],
  ]);
};
