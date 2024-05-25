document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('icon');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    icon.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Optionally, close overlay when clicking outside of the image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
