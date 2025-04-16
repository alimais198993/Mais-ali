
const substances = [
    { name: "Amphetamine", category: "Drugs" },
    { name: "Arsenic", category: "Toxins" },
    { name: "Atropine", category: "Prescription" },
    { name: "Benzoylecgonine", category: "Drugs" },
    { name: "Bromazepam", category: "Prescription" },
    { name: "BMK", category: "Precursors" },
    { name: "Butalbital", category: "Prescription" },
    { name: "Caffeine", category: "Prescription" },
    { name: "Cannabidiol", category: "Drugs" },
    { name: "Cannabinol", category: "Drugs" },
    { name: "Carisoprodol", category: "Prescription" },
    { name: "Chloral Hydrate", category: "Toxins" },
    { name: "Chlorpromazine", category: "Prescription" },
    { name: "Clonazepam", category: "Prescription" },
    { name: "Cocaine", category: "Drugs" },
    { name: "Codeine", category: "Prescription" },
    { name: "Cyclobenzaprine", category: "Prescription" },
    { name: "Cyanide", category: "Toxins" },
    { name: "Chloroform", category: "Toxins" },
    { name: "Creatinine", category: "Other" }
];

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.getElementById("langBtn").innerText = currentLang === "en" ? "العربية" : "English";
    document.getElementById("title").innerText = currentLang === "en" ? "LCMS Substance Finder" : "باحث المواد التحليلية";
    document.getElementById("searchBox").placeholder = currentLang === "en" ? "Search for a substance..." : "ابحث عن مادة...";
    renderCards(filteredSubstances);
}

let filteredSubstances = [...substances];

function filterCategory(category) {
    if (category === "All") {
        filteredSubstances = [...substances];
    } else {
        filteredSubstances = substances.filter(s => s.category === category);
    }
    renderCards(filteredSubstances);
}

function searchSubstances() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const results = substances.filter(s => s.name.toLowerCase().includes(query));
    renderCards(results);
}

function renderCards(list) {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    list.forEach(sub => {
        const card = document.createElement("div");
        card.className = `card ${sub.category}`;
        card.innerText = sub.name;
        card.onclick = () => alert(`${sub.name} profile coming soon...`);
        container.appendChild(card);
    });
}

// Initial render
renderCards(filteredSubstances);
