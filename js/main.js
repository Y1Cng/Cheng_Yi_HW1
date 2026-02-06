(() => {
    const characterBox = document.querySelector("#character-box");
    const reviewCon = document.querySelector("#review-con");
    const reviewTemplate = document.querySelector("#review-template");
    const swapiBaseUrl = "https://swapi.info/api";

    // Mapping array to associate characters with specific movie IDs and local posters
    const characterMovieMap = [
        { name: "Luke Skywalker", movieId: "1", rating: "8.2", poster: "images/new-hope.jpg" },
        { name: "C-3PO", movieId: "2", rating: "8.7", poster: "images/empire.jpg" },
        { name: "R2-D2", movieId: "3", rating: "8.4", poster: "images/jedi.jpg" },
        { name: "Darth Vader", movieId: "6", rating: "8.5", poster: "images/revenge-sith.jpg" },
        { name: "Leia Organa", movieId: "4", rating: "7.7", poster: "images/phantom-menace.jpg" },
        { name: "Owen Lars", movieId: "5", rating: "7.5", poster: "images/attack-clones.jpg" },
        { name: "Beru Whitesun lars", movieId: "1", rating: "8.2", poster: "images/new-hope.jpg" },
        { name: "R5-D4", movieId: "2", rating: "8.7", poster: "images/empire.jpg" },
        { name: "Biggs Darklighter", movieId: "3", rating: "8.4", poster: "images/jedi.jpg" },
        { name: "Obi-Wan Kenobi", movieId: "6", rating: "8.5", poster: "images/revenge-sith.jpg" }
    ];

    // Use async function to fetch data from API to avoid blocking the page
    async function fetchCharacters() {
        try {
            const response = await fetch(`${swapiBaseUrl}/people`);
            if (!response.ok) throw new Error("Failed to fetch characters");

            const data = await response.json();
            // Only take the first 10 characters for the list
            renderCharacterList(data.slice(0, 10));
        } catch (error) {
            characterBox.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        }
    }

    // I built the list dynamically so I don’t have to hardcode HTML for 10 characters
    function renderCharacterList(characters) {
        const ul = document.createElement("ul");

        characters.forEach((char, index) => {
            const li = document.createElement("li");
            li.classList.add("character-item"); // Added class for GSAP targeting
            li.style.opacity = "0"; // Set initial opacity for GSAP animation

            const link = document.createElement("a");
            link.textContent = char.name;
            link.href = "#";

            const mapData = characterMovieMap[index];

            // Used named function for event listener to follow coding standards
            link.addEventListener("click", (e) => handleLinkClick(e, mapData));

            li.appendChild(link);
            ul.appendChild(li);
        });

        characterBox.innerHTML = "";
        characterBox.appendChild(ul);

        // GSAP Stagger animation to make the list slide in smoothly
        gsap.to(".character-item", {
            opacity: 1,
            x: 0,
            startAt: { x: -20 },
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

    function handleLinkClick(event, mapData) {
        event.preventDefault();
        // Second AJAX call to fetch movie details based on clicked character
        fetchMovieDetails(mapData.movieId, mapData.rating, mapData.poster);
    }

    async function fetchMovieDetails(id, rating, poster) {
        try {
            reviewCon.innerHTML = "<p>Loading story...</p>";
            const response = await fetch(`${swapiBaseUrl}/films/${id}`);
            const movieData = await response.json();

            // Use fetched movie data to populate the detail panel
            renderMovieDetail(movieData, rating, poster);
        } catch (error) {
            reviewCon.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        }
    }

    // I used a template tag to keep HTML structure clean and reusable
    function renderMovieDetail(movie, rating, poster) {
        const templateClone = reviewTemplate.content.cloneNode(true);

        // Selecting elements from cloned template and updating content
        templateClone.querySelector(".review-heading").textContent = movie.title;
        templateClone.querySelector(".review-rating").textContent = `Rating: ${rating}/10`;
        templateClone.querySelector(".review-description").textContent = movie.opening_crawl;

        const img = templateClone.querySelector(".movie-poster");
        img.src = poster;
        img.alt = movie.title;

        reviewCon.innerHTML = "";
        reviewCon.appendChild(templateClone);

        // I added a small fade-in for the card to improve visual flow
        gsap.from(".review-card", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" });
    }

    fetchCharacters();
})();