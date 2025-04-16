
const language = { current: "ar" };

function renderSubstance(sub) {
    return `
        <div class="result-card">
            <h3>${sub.name_ar} / ${sub.name_en}</h3>
            <p><strong>الصيغة:</strong> ${sub.formula}</p>
            <p><strong>MRM:</strong> ${sub.mrm}</p>
            <p><strong>زمن الاحتفاظ:</strong> ${sub.rt} دقيقة</p>
            <p><strong>الاستخدام:</strong> ${sub.usage}</p>
            <p><strong>طريقة الاستخلاص:</strong> ${sub.extraction}</p>
            <p><strong>الاختبار اللوني:</strong> ${sub.color_test}</p>
            <p><strong>المصدر:</strong> ${sub.source}</p>
        </div>
    `;
}

function renderAll(substances) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    substances.forEach(sub => {
        resultsDiv.innerHTML += renderSubstance(sub);
    });
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = substances.filter(sub => 
        sub.name_ar.includes(query) || sub.name_en.toLowerCase().includes(query)
    );
    renderAll(filtered);
});

document.getElementById('showAll').addEventListener('click', function() {
    renderAll(substances);
});

document.getElementById('toggleLang').addEventListener('click', function() {
    language.current = language.current === "ar" ? "en" : "ar";
    document.getElementById('mainTitle').textContent =
        language.current === "ar" ? "مستعرض مواد LCMS - ميس علي" : "LCMS Substance Finder - Mais Ali";
    this.textContent = language.current === "ar" ? "English" : "عربي";
});
