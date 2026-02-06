# AJAX Redux - Star Wars Character/Movie Guide

## Assignment Overview

This project is Homework #1 for Level 4 of the Interactive Digital Media program. The goal is to create a responsive Star Wars character and movie guide using the Star Wars API (SWAPI). The application fetches data via AJAX calls to populate a list of characters and display detailed movie information upon user interaction.

## Learning Goals

- Research and utilize external APIs (SWAPI)
- Implement AJAX requests with proper error handling and loading states
- Create responsive web design from mobile to desktop
- Use modern JavaScript features like Fetch API, template literals, and HTML Template elements
- Incorporate GreenSock (GSAP) animations for enhanced user experience
- Practice Git branching and best practices

## Features

- **Character List**: Displays 10+ Star Wars characters in an unordered list
- **Interactive Links**: Each character name serves as a clickable link to one of their featured movies
- **Movie Details**: Upon clicking, fetches and displays movie title, opening crawl, and poster image
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewports
- **Loading States**: Includes loading icons during AJAX requests
- **Error Handling**: Graceful handling of failed requests with user-friendly messages
- **Animations**: GreenSock enhancements for smooth transitions and interactions
- **Template Usage**: Utilizes HTML Template elements and template literals for dynamic content rendering

## Technologies Used

- **HTML5**: Semantic markup and template elements
- **CSS3/Sass**: Responsive design with SCSS architecture (7-1 pattern)
- **JavaScript (ES6+)**: Fetch API for AJAX, DOM manipulation
- **GreenSock (GSAP)**: Animation library for enhanced interactions
- **SWAPI**: Star Wars API for data retrieval

## Project Structure

```
Cheng_Yi_HW1/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── LICENSE                 # License file
├── assets/                 # Static assets
├── css/
│   ├── main.css           # Compiled CSS
│   └── grid.css           # Grid system
├── images/                # Movie poster images
├── js/
│   └── main.js            # Main JavaScript file
└── sass/
    ├── main.scss          # Main SCSS file
    ├── abstracts/
    │   ├── _index.scss
    │   ├── _variables.scss
    │   ├── _mixins.scss
    │   └── _fonts.scss
    ├── base/
    │   ├── _index.scss
    │   └── _typography.scss
    ├── components/
    │   ├── _index.scss
    │   ├── _character-item.scss
    │   ├── _movie-card.scss
    │   └── _movie-list.scss
    └── pages/
        ├── _index.scss
        └── _home.scss
```

## API Usage

This project uses the [Star Wars API (SWAPI)](https://swapi.info) to fetch character and movie data. Key endpoints:

- `https://swapi.info/api/people/` - Retrieve character information
- `https://swapi.info/api/films/{id}/` - Retrieve specific movie details

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Cheng_Yi_HW1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Cheng_Yi_HW1
   ```

3. Open `index.html` in your preferred web browser or use a local server.

## Usage

1. Open the application in a web browser
2. View the list of Star Wars characters
3. Click on any character name to view details about one of their movies
4. The movie information will appear in a separate section with title, opening crawl, and poster

## Git Branches

- `main` (or `master`): Production-ready code
- `dev.yi.script`: Development branch for JavaScript implementation
- `dev.yi.styles`: Development branch for styling and responsiveness
- `dev.yi.api`: Development branch for API integration

## Grading Rubric

- **HTML/CSS (2 marks)**: Semantic HTML and responsive CSS implementation
- **Design (2 marks)**: Visual design and user experience
- **GitHub Best Practices (1 mark)**: Proper branching, commits, and repository management
- **First Data Call (2 marks)**: Successful retrieval of character list from SWAPI
- **Populate List (3 marks)**: Dynamic rendering of character list with links
- **Second Data Call (2 marks)**: AJAX call to fetch movie details
- **Populate Second Box (3 marks)**: Display of movie info, opening crawl, and poster

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Cheng Yi

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Star Wars API (SWAPI) for providing the data
- GreenSock for the animation library
- Interactive Digital Media program instructors
