// Pas deze variabelen aan
let progress = 10; // Pas het percentage aan (0-100)
let pageTitle = "Sascha 3D Coms"; // Paginatitel
let mainTitle = "Heave ho Alton towers"; // Hoofdtitel
let nextCommissionText = "Dino Chase - Koletee"; // Next commission text

// Toepassen op de site
document.getElementById("pageTitle").textContent = pageTitle;
document.getElementById("title").textContent = mainTitle;
document.getElementById("nextCommission").textContent = "Next Commission: " + nextCommissionText;

// Animatie voor de voortgangsbalk
setTimeout(() => {
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("percentageText").textContent = progress + "%";
}, 500); // Vertraging voor animatie-effect
