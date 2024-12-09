// Yıldızların rastgele hareket etmesini sağlamak için küçük bir JavaScript animasyonu
document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 150; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.position = 'absolute';
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random() * 0.5 + 0.5;  // Opaklık (0.5 ile 1 arasında)
        
        // Yıldızları rastgele yerleştirme
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        
        starsContainer.appendChild(star);
        
        // Yıldızları hareket ettirmek için animasyon
        let duration = Math.random() * 5 + 5;  // 5 ile 10 saniye arasında
        star.style.animation = `moveStars ${duration}s linear infinite`;
    }
});

// Yıldızların hareket animasyonları
@keyframes moveStars {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(calc(100vw * -1), calc(100vh * -1));
    }
}
