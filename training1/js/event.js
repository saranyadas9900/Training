document.getElementById('colorChangeBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
});
