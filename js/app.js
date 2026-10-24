const API_JOUR = 'data/2026-10-24.json';
const API_DEMAIN = 'data/2026-10-25.json';

let donneesJour = [], donneesDemain = [];

// --- Navigation ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const pageId = 'section-' + btn.id.replace('nav-', '');
        document.getElementById(pageId).classList.add('active');
    });
});

// Boutons retour
document.addEventListener('click', e => {
    if (e.target.closest('.btn-retour')) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        document.getElementById('nav-jour').classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-jour').classList.add('active');
    }
});

// Navigation historique
document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-jour')) {
        document.querySelectorAll('.btn-jour').forEach(b => b.classList.remove('actif'));
        e.target.classList.add('actif');
        chargerHistorique(e.target.dataset.jour);
    }
});

// Filtres
document.getElementById('filtre-ligue')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));
document.getElementById('filtre-statut')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));

// --- Chargement des données ---
async function charger() {
    try {
        console.log('Chargement des données du jour...');
        const r1 = await fetch(API_JOUR);
        if (!r1.ok) throw new Error(`Erreur fichier jour: ${r1.status}`);
        donneesJour = await r1.json();
        console.log('Matchs chargés:', donneesJour.length);
        afficherTableau('tableau-matchs', donneesJour);
        genererCoupons();
        mettreAJourResume();
    } catch(e) {
        console.error('Problème chargement jour:', e);
        document.getElementById('tableau-matchs').innerHTML = `
            <div style="padding:2rem;text-align:center;color:#ef4444;background:#fef2f2;border-radius:12px;">
                ⚠️ Impossible de charger les données<br>
                <small>Vérifie que le dossier <code>data/</code> et le fichier <code>2026-10-24.json</code> existent</small>
            </div>`;
    }

    try {
        const r2 = await fetch(API_DEMAIN);
        if (!r2.ok) throw new Error(`Erreur fichier demain: ${r2.status}`);
        donneesDemain = await r2.json();
        afficherTableau('tableau-matchs-demain', donneesDemain);
    } catch(e) {
        console.error('Problème chargement demain:', e);
    }
}

function chargerHistorique(date) {
    fetch(`data/${date}.json`)
        .then(r => {
            if (!r.ok) throw new Error('Fichier introuvable');
            return r.json();
        })
        .then(data => {
            data.forEach(m => {
                if (m.statut === 'termine' && m.scoreFinal) {
                    m.valide = verifierProno(m);
                }
            });
            afficherTableau('tableau-historique', data);
        })
        .catch(() => {
            document.getElementById('tableau-historique').innerHTML = `
                <p style="text-align:center;padding:2rem;color:#f59e0b;">
                    ⚠️ Données indisponibles pour cette date
                </p>`;
        });
}

// --- Validation du pronostic ---
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';
    const [s1, s2] = match.scoreFinal.split('-').map(Number);
    const prono = match.pronostic.trim().toLowerCase();
    
    if (prono.includes('nul') || prono === '1-1') {
        return s1 === s2 ? 'valide' : 'invalide';
    }
    if (prono.match(/^\d+-\d+$/)) {
        const [p1, p2] = prono.split('-').map(Number);
        return (s1 === p1 && s2 === p2) ? 'valide' : 'invalide';
    }
    if (prono.startsWith('1-')) return s1 > s2 ? 'valide' : 'invalide';
    if (prono.startsWith('2-')) return s2 > s1 ? 'valide' : 'invalide';
    return 'invalide';
}

// --- Affichage tableau ---
function afficherTableau(idConteneur, matches) {
    const conteneur = document.getElementById(idConteneur);
    if (!conteneur || !matches || matches.length === 0) {
        if (conteneur) conteneur.innerHTML = `<p style="padding:1.5rem;text-align:center;color:#64748b;">Aucun match à afficher</p>`;
        return;
    }

    let filtres = [...matches];
    const filtreStatut = document.getElementById('filtre-statut')?.value || 'tout';
    const filtreLigue = document.getElementById('filtre-ligue')?.value || 'tout';

    if (filtreStatut !== 'tout') {
        filtres = filtres.filter(m => m.statut === filtreStatut);
    }
    if (filtreLigue !== 'tout') {
        filtres = filtres.filter(m => m.ligue === filtreLigue);
    }

    conteneur.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Statut</th>
                    <th>Ligue</th>
                    <th>Match</th>
                    <th>Heure</th>
                    <th>Score</th>
                    <th>Pronostic</th>
                    <th>Validation</th>
                </tr>
            </thead>
            <tbody>
            ${filtres.map(m => {
                if (m.statut === 'termine' && m.scoreFinal) {
                    m.valide = verifierProno(m);
                }

                const statutClass = m.statut === 'direct' ? 'en-direct' : m.statut === 'termine' ? 'termine' : '';
                const statutTexte = {
                    avenir: '<span class="statut statut-avenir">⏳ À venir</span>',
                    direct: '<span class="statut statut-direct">🔴 En direct</span>',
                    termine: '<span class="statut statut-termine">✅ Terminé</span>'
                }[m.statut] || '';

                let scoreAffiche = '<span style="color:#94a3b8;">—</span>';
                if (m.statut === 'direct' && m.score) {
                    scoreAffiche = `<span class="score-affiche">${m.score.eq1} - ${m.score.eq2}</span>`;
                } else if (m.scoreFinal) {
                    scoreAffiche = `<span class="score-affiche">${m.scoreFinal}</span>`;
                }

                let validation = '<span class="badge-attente">⏳ En attente</span>';
                if (m.valide === 'valide') validation = '<span class="badge-valide">✔️ Correct</span>';
                if (m.valide === 'invalide') validation = '<span class="badge-invalide">❌ Manqué</span>';

                return `
                <tr class="${statutClass}">
                    <td>${statutTexte}</td>
                    <td>${m.ligue}</td>
                    <td><strong>${m.equipe1}</strong> – ${m.equipe2}</td>
                    <td>${m.heure}</td>
                    <td>${scoreAffiche}</td>
                    <td>${m.pronostic}<br><span class="badge conf-${m.niveau}" style="margin-top:0.3rem;display:inline-block;">${m.confiance}</span></td>
                    <td class="valide-prono">${validation}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;
}

// --- Mise à jour résumé ---
function mettreAJourResume() {
    const totalTermines = donneesJour.filter(m => m.statut === 'termine').length;
    const reussi = donneesJour.filter(m => m.valide === 'valide').length;
    const enDirect = donneesJour.filter(m => m.statut === 'direct').length;
    const taux = totalTermines > 0 ? Math.round((reussi / totalTermines) * 100) : '—';

    document.getElementById('nb-en-direct').innerHTML = `🔴 En direct : <strong>${enDirect}</strong>`;
    document.getElementById('nb-termines').innerHTML = `✅ Terminés : <strong>${totalTermines}</strong>`;
    document.getElementById('taux-reussite').innerHTML = `🎯 Taux : <strong>${taux}%</strong>`;
    document.getElementById('total-matchs').textContent = donneesJour.length;
    document.getElementById('total-reussi').textContent = reussi;
    document.getElementById('taux-global').textContent = totalTermines > 0 ? `${taux}%` : '— %';
}

// --- Coupons ---
function genererCoupons() {
    const elevees = donneesJour.filter(m => m.niveau === 'elevee').slice(0, 5);
    const moyennes = donneesJour.filter(m => m.niveau === 'moyenne').slice(0, 5);

    document.getElementById('liste-coupon-a').innerHTML = elevees.map(m => {
        let icone = '⏳';
        if (m.valide === 'valide') icone = '✔️';
        if (m.valide === 'invalide') icone = '❌';
        return `<li><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic}</span><span>${icone}</span></li>`;
    }).join('');

    document.getElementById('liste-coupon-b').innerHTML = moyennes.map(m => {
        let icone = '⏳';
        if (m.valide === 'valide') icone = '✔️';
        if (m.valide === 'invalide') icone = '❌';
        return `<li><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic}</span><span>${icone}</span></li>`;
    }).join('');

    const scoreA = elevees.filter(m => m.valide === 'valide').length;
    const scoreB = moyennes.filter(m => m.valide === 'valide').length;
    document.getElementById('score-a').innerHTML = `Réussi : <strong>${scoreA}/5</strong>`;
    document.getElementById('score-b').innerHTML = `Réussi : <strong>${scoreB}/5</strong>`;
}

// --- Simulation temps réel ---
function simulerMiseAJour() {
    donneesJour.forEach(m => {
        if (m.statut === 'direct' && m.scoreFinal === undefined) {
            if (!m.score) m.score = { eq1: 0, eq2: 0 };
            if (Math.random() < 0.08) {
                Math.random() < 0.5 ? m.score.eq1++ : m.score.eq2++;
            }
            if (Math.random() < 0.015) {
                m.statut = 'termine';
                m.scoreFinal = `${m.score.eq1} - ${m.score.eq2}`;
                m.valide = verifierProno(m);
            }
        }
    });
    afficherTableau('tableau-matchs', donneesJour);
    genererCoupons();
    mettreAJourResume();
}

// Lancement
charger();
setInterval(simulerMiseAJour, 30000);
