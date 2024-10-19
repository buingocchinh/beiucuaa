const button = document.getElementById('heartButton');
const container = document.getElementById('heartContainer');

button.addEventListener('click', () => {
    const flowers = [];
    const numberOfFlowers = 40; // Tăng số lượng bông hoa
    const radius = 150; // Tăng bán kính hình trái tim

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Sử dụng công thức tạo hình trái tim
        const angle = (i / numberOfFlowers) * 2 * Math.PI;
        const x = radius * (16 * Math.sin(angle) ** 3);
        const y = -radius * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        flower.style.left = `${150 + x}px`; // Cộng thêm 150 để di chuyển tâm ra giữa
        flower.style.top = `${150 + y}px`;

        container.appendChild(flower);
        flowers.push(flower);

        // Loại bỏ bông hoa sau 1.5 giây
        setTimeout(() => {
            container.removeChild(flower);
        }, 1500);
    }
});
