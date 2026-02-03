const images = document.querySelectorAll('.ba-image img, .delivery-card img');

images.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;

        const bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style.maxWidth = '90%';
        bigImg.style.maxHeight = '90%';

        overlay.appendChild(bigImg);
        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);
    });
});