# Encryptix_AD_02
A dynamic web application that displays a random quote of the day

# Quote of the Day

Users can copy quotes, add them to favorites, and view their list of favorite quotes. The quotes are fetched from the `type.fit` API, providing a vast collection of quotes. The background changes with each new quote, fetching a random image from Unsplash.

## Features

- **Random Quotes**: Display a random quote with the author from the `type.fit` API.
- **Dynamic Background**: Each new quote comes with a new background image from Unsplash.
- **Copy to Clipboard**: Easily copy the current quote to your clipboard with one click.
- **Favorites Management**: Add quotes to your favorites list and remove them as needed.
- **Persistent Storage**: Favorites are stored in Local Storage, ensuring they persist between sessions.

## API Reference

- **Quotes API**: [https://type.fit/api/quotes](https://type.fit/api/quotes)
  - Provides a collection of quotes from various authors.
- **Background Images**: Random images fetched from Unsplash
  - Delivers a new background image each time a new quote is fetched.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/KartikyeThakur/Encryptix_AD_02.git
    ```
2. Navigate to the project directory:
    ```bash
    cd quote-of-the-day
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. **View Quote**: Open the web application to see a random quote.
2. **New Quote**: Click "New Quote" to fetch a new random quote with a new background image.
3. **Copy Quote**: Click "Copy Quote" to copy the current quote to your clipboard.
4. **Add to Favorites**: Click "Favorite" to add the current quote to your list of favorites.
5. **View Favorites**: View your list of favorite quotes in the "Favorites" section.
6. **Remove from Favorites**: Click "Remove" next to a favorite quote to remove it from your favorites.

## Code Structure

- **index.html**: The main HTML file containing the structure of the web page.
- **style.css**: The CSS file containing the styles for the web page.
- **script.js**: The JavaScript file containing the logic for fetching quotes, managing favorites, and updating the UI.

## Lessons Learned

- **API Integration**: Fetching data from an external API and handling asynchronous requests in JavaScript.
- **Local Storage**: Using Local Storage to persist data between sessions.
- **Dynamic UI**: Updating the user interface dynamically based on user interactions.
- **Responsive Design**: Creating a visually appealing and responsive design for a better user experience.

## Optimizations

- **Design Improvements**: Improve the design and responsiveness of the application for different screen sizes.
- **Error Handling**: Implement more robust error handling for API requests.
- **Social Sharing**: Add additional features such as sharing quotes on social media.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.
