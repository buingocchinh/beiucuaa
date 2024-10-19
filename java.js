const button = document.getElementById('heartButton');
const container = document.getElementById('heartContainer');

button.addEventListener('click', () => {
    const flowers = [];
    const numberOfFlowers = 20; // Số lượng bông hoa tạo hình trái tim
    const radius = 80; // Bán kính của hình trái tim

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Tính toán vị trí bông hoa dựa trên hình trái tim
        const angle = (i / numberOfFlowers) * 2 * Math.PI;
        const x = radius * Math.sin(angle) * Math.abs(Math.cos(angle));
        const y = radius * Math.cos(angle) * Math.abs(Math.sin(angle));

        flower.style.left = `${100 + x}px`; // Cộng thêm 100 để di chuyển tâm ra giữa
        flower.style.top = `${100 + y}px`;

        container.appendChild(flower);
        flowers.push(flower);

        // Loại bỏ bông hoa sau 1 giây
        setTimeout(() => {
            container.removeChild(flower);
        }, 1000);
    }
});
