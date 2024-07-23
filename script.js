const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author-text');
const newQuoteBtn = document.getElementById('new-quote');
const copyQuoteBtn = document.getElementById('copy-quote');
const favoriteQuoteBtn = document.getElementById('favorite-quote');
const favoritesList = document.getElementById('favorites-list');
const container = document.querySelector('.container');

const apiUrl = 'https://type.fit/api/quotes';
let quotes = [];

// Fetch quotes from the API
async function fetchQuotes() {
    try {
        const response = await fetch(apiUrl);
        quotes = await response.json();
        loadNewQuote();
    } catch (error) {
        console.error('Error fetching quotes:', error);
        quoteText.textContent = 'Failed to fetch quotes.';
        authorText.textContent = 'Unknown';
    }
}

function displayQuote(quoteData) {
    quoteText.textContent = quoteData.text;
    authorText.textContent = quoteData.author || 'Unknown';
    container.style.backgroundImage = `url('https://source.unsplash.com/random/800x600')`;
}

function loadNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    displayQuote(quotes[randomIndex]);
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesList.innerHTML = '';
    favorites.forEach((fav, index) => {
        const li = document.createElement('li');
        li.innerHTML = `"${fav.text}" - ${fav.author} <button onclick="removeFavorite(${index})" class="remove-btn">Remove</button>`;
        favoritesList.appendChild(li);
    });
}

newQuoteBtn.addEventListener('click', loadNewQuote);

copyQuoteBtn.addEventListener('click', () => {
    const quoteToCopy = `${quoteText.textContent} - ${authorText.textContent}`;
    navigator.clipboard.writeText(quoteToCopy).then(() => {
        alert("Quote copied to clipboard!");
    });
});

favoriteQuoteBtn.addEventListener('click', () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push({ text: quoteText.textContent, author: authorText.textContent });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites();
});

function removeFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites();
}

window.onload = () => {
    fetchQuotes();
    loadFavorites();
};
