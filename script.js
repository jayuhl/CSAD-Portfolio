// --- THIS IS THE ONLY PART YOU NEED TO EDIT ---

// A list of all your projects.
// Each project is an "object" with a title, description, etc.
const projects = [
    {
        title: "Project 1: Tic-Tac-Toe App",
        description: "A Python tool that scans websites for broken links and security vulnerabilities. Used libraries like Requests and BeautifulSoup.",
        imageUrl: "images/TicTacToeapp_image.png", // Use a placeholder or a path like "images/bopit.png"
        demoUrl: "../app_pages/mastermind.html", // Link to your live demo
        repoUrl: "#"  // Link to your GitHub repository
    },
    {
        title: "Project 2: Odometer App",
        description: "A web-based tool built with JavaScript, HTML, and CSS that animates different sorting algorithms like Bubble Sort and Quick Sort.",
        imageUrl: "images/odometerapp_image.png",
        demoUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Project 3: BopIt App",
        description: "A description for a third project. You can add as many as you like! Just copy this format.",
        imageUrl: "images/bopitapp_image.png",
        demoUrl: "../app_pages/BopIt.html",
        repoUrl: "#"
    }
    // Add more projects here...
];

// --- THIS PART BUILDS THE WEBSITE - NO NEED TO EDIT BELOW ---

// Get the grid container from the HTML
const projectGrid = document.getElementById('project-grid');

// Loop through each project in the 'projects' array
projects.forEach(project => {
    // Create a new 'div' element for the card
    const card = document.createElement('div');
    card.className = 'project-card';

    // Create the HTML content for the card
    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
            <a href="${project.demoUrl}">App Details</a>
            <a href="${project.repoUrl}" target="_blank">GitHub Repo</a>
        </div>
    `;

    // Add the new card to the grid
    projectGrid.appendChild(card);
});