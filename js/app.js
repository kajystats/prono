const API_JOUR = 'data/2026-10-24.json';
const API_DEMAIN = 'data/2026-10-25.json';

let donneesJour = [], donneesDemain = [], donneesHistorique = [];

// Navigation principale
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-' + btn.id.replace('nav-','')).classList.add('active');
    });
});

// Navigation historique
document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-jour')) {
        document.querySelectorAll('.btn-jour').forEach(b => b.classList.remove('actif'));
        e.target.classList.add('actif');
        chargerHistorique(e.target.dataset.jour);
    }
});

async function charger() {
    try {
        const r1 = await fetch(API_JOUR);
        donneesJour = await r1.json();
        afficherTableau('tableau-matchs', donneesJour);
        genererCoupons();
    } catch(e) {console.error('Erreur jour :', e);}
    try {
        const r2 = await fetch(API_DEMAIN);
        donneesDemain = await r2.json();
        afficherTableau('tableau-matchs-demain', donneesDemain);
    } catch(e) {console.error('Erreur demain :', e);}
    // Charger historique par défaut
    chargerHistorique('2026-10-24');
}

function chargerHistorique(date) {
    const fichier = `data/${date}.json`;
    fetch(fichier)
        .then(r => {
            if (!r.ok) throw new Error('Fichier introuvable');
            return r.json();
        })
        .then(data => {
            donneesHistorique = data;
            afficherTableau('tableau-historique', donneesHistorique);
        })
        .catch(() => {
            document.getElementById('tableau-historique').innerHTML =
                `<p style="text-align:center;padding:2rem;color:var(--or);">
                 ⚠️ Données indisponibles pour cette date</p>`;
        });
}

function afficherTableau(idConteneur, matches) {
    const conteneur = document.getElementById(idConteneur);
    if (!matches || matches.length === 0) {
        conteneur.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--texte-clair);">Aucune donnée disponible</p>`;
        return;
    }
    conteneur.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Ligue</th><th>Match</th><th>Heure UTC</th><th>Pronostic</th><th>Confiance</th>
                </tr>
            </thead>
            <tbody>
            ${matches.map(m => `
            <tr>
                <td>${m.ligue}</td>
                <td><strong>${m.equipe1}</strong> – ${m.equipe2}</td>
                <td>${m.heure}</td>
                <td>${m.pronostic}</td>
                <td><span class="badge conf-${m.niveau}">${m.confiance}</span></td>
            </tr>`).join('')}
            </tbody>
        </table>`;
}

function genererCoupons() {
    const elevees = donneesJour.filter(m => m.niveau === 'elevee').slice(0,5);
    const milieu = donneesJour.filter(m => m.niveau === 'moyenne').slice(0,5);
    document.getElementById('liste-coupon-a').innerHTML = elevees.map(m =>
        `<li><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic} · ${m.ligue}</li>`
    ).join('') || '<li style="opacity:0.6;">Données en cours de chargement...</li>';
    document.getElementById('liste-coupon-b').innerHTML = milieu.map(m =>
        `<li><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic} · ${m.ligue}</li>`
    ).join('') || '<li style="opacity:0.6;">Données en cours de chargement...</li>';
}

document.getElementById('filtre-ligue').addEventListener('change', e => {
    const val = e.target.value;
    const filtre = val === 'tout' ? donneesJour : donneesJour.filter(m => m.ligue === val);
    afficherTableau('tableau-matchs', filtre);
});

charger();
