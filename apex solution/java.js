document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-name');
    const gallerySections = document.querySelectorAll('.gallery-section');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const close = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    document.getElementById('GRAPHIC DESIGNING').style.display = 'block';
    document.querySelector('.gallery-container').style.display = 'block';


    sections.forEach(section => {
        section.addEventListener('click', function() {
            gallerySections.forEach(gs => gs.style.display = 'none');
            document.getElementById(this.dataset.section).style.display = 'block';
            document.querySelector('.gallery-container').style.display = 'block';
        });
    });

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            popup.style.display = 'block';
            popupImg.src = this.src;
        });
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-name');
    const gallerySections = document.querySelectorAll('.gallery-section');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const close = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Default section to show on load
    document.getElementById('GRAPHIC DESIGNING').style.display = 'block';
    document.querySelector('.gallery-container').style.display = 'block';

    // Section click event
    sections.forEach(section => {
        section.addEventListener('click', function() {
            gallerySections.forEach(gs => gs.style.display = 'none');
            document.getElementById(this.dataset.section).style.display = 'block';
            document.querySelector('.gallery-container').style.display = 'block';
        });
    });

    // Gallery item click event
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            popup.style.display = 'block';
            popupImg.src = this.src;
        });
    });

    // Close popup
    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
