let clickCount = 0;
const maxClicks = 5;

document.getElementById("red-btn").addEventListener("click", function () {
  if (clickCount < maxClicks) {
    clickCount++;
    
    // Nút xanh to hơn
    const greenBtn = document.getElementById("green-btn");
    greenBtn.style.transform = `scale(${1 + clickCount * 0.5})`;
    
    // Di chuyển nút đỏ ra vị trí khác
    const redBtn = document.getElementById("red-btn");
    redBtn.style.position = "absolute";
    redBtn.style.top = `${Math.random() * 80}vh`;
    redBtn.style.left = `${Math.random() * 80}vw`;
  }
});

document.getElementById("green-btn").addEventListener("click", function () {
  // Ẩn hai nút
  document.querySelector(".buttons").style.display = "none";

  const container = document.querySelector(".container");
  container.innerHTML = `
    <img id="tuc" src="tuc.jpg" alt="Thành công" />
    <h2 style="color: #ff66a1;">Thế thì nhanh chóng nhắn cho em đi, đồ ngungoc nàyyy</h2>
  `;
});
