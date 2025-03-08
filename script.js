// Pas deze variabelen aan
let progress = 10; // Pas het percentage aan (0-100)
let pageTitle = "Status"; // Paginatitel
let mainTitle = "Progress Sascha"; // Hoofdtitel
let nextCommissionText = "Dino Chase - koletee"; // Next commission text

// Toepassen op de site
document.getElementById("pageTitle").textContent = pageTitle;
document.getElementById("title").textContent = mainTitle;
document.getElementById("nextCommission").textContent = "Next Commission: " + nextCommissionText;

// Eerst zetten we de breedte op 0%
let progressBar = document.getElementById("progressBar");
progressBar.style.width = "0%";

// Na een korte delay, laten we de balk animeren
setTimeout(() => {
    progressBar.style.transition = "width 1.5s ease-in-out"; // Animatie toevoegen
    progressBar.style.width = progress + "%"; // Verander de breedte
    document.getElementById("percentageText").textContent = progress + "%"; // Update de tekst
}, 500); // 500ms delay voor een smooth effect
