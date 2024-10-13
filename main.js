let scrollAmount = 0;

function scrollCarouselLeft() {
    const carouselElement = document.querySelector('.carousel');
    let newScrollPosition = scrollAmount - 250;
    if (newScrollPosition < 0) {
        newScrollPosition = carouselElement.scrollWidth - carouselElement.clientWidth;
    }
    carouselElement.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
    scrollAmount = newScrollPosition;
}

function scrollCarouselRight() {
    const carouselElement = document.querySelector('.carousel');
    let newScrollPosition = scrollAmount + 250;
    if (newScrollPosition > carouselElement.scrollWidth - carouselElement.clientWidth) {
        newScrollPosition = 0;
    }
    carouselElement.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
    scrollAmount = newScrollPosition;
}

const products1 = [
    { id: 1, name: 'Adapter cable', category: 'Electronic', price: 2000, img: 'https://i5.walmartimages.com/asr/310a3529-41fc-4f9f-89c5-fcd045e025fb_1.6e69816b6b2edd216728b2ecad2966d7.jpeg' },
    { id: 2, name: 'Blue Dress', category: 'Clothes', price: 10000, img: 'https://i5.walmartimages.com/asr/6bd5cf88-4327-4b44-8a34-582c3f8d29da_1.7f75146a72f2b3d4fdf8d274127a693f.jpeg' },
    { id: 3, name: 'Textbook 1B', category: 'Education', price: 5000, img: 'https://i5.walmartimages.com/asr/47bd44a5-e707-41f1-90a8-9f59af772187_1.8b2879f18f6a76f0e4a54a94fae3a8f8.jpeg' },
    { id: 4, name: 'Rose Gold Jacket', category: 'Clothes', price: 6000, img: 'https://i5.walmartimages.com/asr/dfb36e94-b6c2-4a4a-bf4e-ef0212f8747f_1.d03f5aa53ecf75da35c36b08ba15e317.jpeg' },
    { id: 5, name: 'Beige Bag', category: 'Accessories', price: 3000, img: 'https://i5.walmartimages.com/asr/fd1a565e-cc94-46f6-872f-3d2674ecb6af_1.f9f79e22aaacdb78dcb8f63e2043b0a5.jpeg' }
];

// Function to display products
function displayProducts(products) {
    const container = document.getElementById('suggested-items-container');
    container.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        itemElement.innerHTML = `
            <a href="product.html">
                <img src="${product.imageUrl}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="price">₩${product.price}</p>
            </a>
        `;

        container.appendChild(itemElement);
    });
}


displayProducts(products1); 

function searchItems() {
    // Get the search input value
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all items in the container
    let items = document.getElementsByClassName('item');
    
    // Loop through all items and hide those that don't match the search query
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.innerHTML.toLowerCase().indexOf(input) > -1) {
            item.style.display = ""; // Show the item
        } else {
            item.style.display = "none"; // Hide the item
        }
    }
}
