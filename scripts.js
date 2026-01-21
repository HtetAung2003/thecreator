document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('review-track');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');

    if (track && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const cardWidth = track.querySelector('.review-card-item').offsetWidth + 24; // Width + gap
            track.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            const cardWidth = track.querySelector('.review-card-item').offsetWidth + 24; // Width + gap
            track.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        });
    }
});
