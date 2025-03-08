// Pas deze variabelen aan
let progress = 75; // Pas het percentage aan (0-100)
let pageTitle = "Mijn Project Status"; // Paginatitel
let mainTitle = "Website Bouw"; // Hoofdtitel
let nextCommissionText = "Logo design for Alex"; // Next commission text

// Toepassen op de site
document.getElementById("pageTitle").textContent = pageTitle;
document.getElementById("title").textContent = mainTitle;
document.getElementById("nextCommission").textContent = "Next Commission: " + nextCommissionText;

// Animatie voor de voortgangsbalk
setTimeout(() => {
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("percentageText").textContent = progress + "%";
}, 500); // Vertraging voor animatie-effect
