// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter cards based on category
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        const category = this.innerText.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.style.display = 'none';
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            }
        });
    });
});

// Dynamically load images for the gallery
window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    // Sample image URLs
    const imageUrls = [
        'gallery1.jpg',
        'gallery2.jpg',
        'gallery3.jpg',
        'gallery4.jpg',
        'gallery5.jpg',
        'gallery6.jpg'
    ];

    // Create image elements and append to gallery
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Nepal';
        gallery.appendChild(img);
    });
    // Get all explore buttons
const exploreBtns = document.querySelectorAll('.explore-btn');

// Attach click event listener to each explore button
exploreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Get the parent card element
        const card = this.closest('.card');
        
        // Get the explore details element within the card
        const exploreDetails = card.querySelector('.explore-details');
        
        // Toggle the visibility of explore details
        if (exploreDetails.style.display === 'none') {
            exploreDetails.style.display = 'block';
            this.textContent = 'Hide'; // Change button text
        } else {
            exploreDetails.style.display = 'none';
            this.textContent = 'Explore'; // Change button text
        }
    });
});

});
