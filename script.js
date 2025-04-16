document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const filtered = substances.filter(sub => sub.name_ar.includes(query) || sub.name_en.toLowerCase().includes(query));
    filtered.forEach(sub => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <h3>${sub.name_ar} / ${sub.name_en}</h3>
            <p><strong>الصيغة:</strong> ${sub.formula}</p>
            <p><strong>MRM:</strong> ${sub.mrm}</p>
            <p><strong>زمن الاحتفاظ:</strong> ${sub.rt} دقيقة</p>
        `;
        resultsDiv.appendChild(card);
    });
});
