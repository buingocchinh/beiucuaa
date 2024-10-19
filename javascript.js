const button = document.getElementById('heartButton');
const container = document.getElementById('heartContainer');

button.addEventListener('click', () => {
    const flowers = [];
    const numberOfFlowers = 20; // Số lượng bông hoa tạo hình trái tim
    const radius = 100; // Bán kính của hình trái tim

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        const angle = (i / numberOfFlowers) * 2 * Math.PI;
        const x = radius * Math.sin(angle) * (Math.abs(Math.cos(angle)) ** 0.5);
        const y = -radius * Math.cos(angle) * (Math.abs(Math.sin(angle)) ** 0.5);

        flower.style.left = `${50 + x}px`;
        flower.style.top = `${50 + y}px`;

        container.appendChild(flower);
        flowers.push(flower);

        setTimeout(() => {
            container.removeChild(flower);
        }, 1000);
    }
});

