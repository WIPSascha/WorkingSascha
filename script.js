// Pas deze variabelen aan
let progress = 65; // Pas het percentage aan (0-100)
let pageTitle = "Sascha 3D Coms"; // Paginatitel
let mainTitle = "What is in progress?"; // Hoofdtitel
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
