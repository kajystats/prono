const API_JOUR = 'data/2026-10-24.json';
const API_DEMAIN = 'data/2026-10-25.json';

let donneesJour = [], donneesDemain = [];
let miseAJourEnCours = false;

// --- Navigation principale ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-' + btn.id.replace('nav-','')).classList.add('active');
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

// Filtres statut
document.getElementById('filtre-statut').addEventListener('change', e => {
    afficherTableau('tableau-matchs', donneesJour);
});

// --- Chargement des données ---
async function charger() {
    try {
        const r1 = await fetch(API_JOUR);
        donneesJour = await r1.json();
        afficherTableau('tableau-matchs', donneesJour);
        genererCoupons();
        mettreAJourResume();
    } catch(e) {console.error('Erreur jour :', e);}
    try {
        const r2 = await fetch(API_DEMAIN);
        donneesDemain = await r2.json();
        afficherTableau('tableau-matchs-demain', donneesDemain);
    } catch(e) {console.error('Erreur demain :', e);}
    chargerHistorique('2026-10-24');
}

// Simulation de mise à jour en direct
function simulerMiseAJourDirect() {
    donneesJour.forEach(match => {
        if (match.statut === 'direct' && match.scoreFinal === undefined) {
            if (!match.score) match.score = {eq1:0, eq2:0};
            // Mise à jour aléatoire du score pour démonstration
            if (Math.random() < 0.08) {
                Math.random() < 0.5 ? match.score.eq1++ : match.score.eq2++;
            }
            // Fin aléatoire du match
            if (Math.random() < 0.015) {
                match.statut = 'termine';
                match.scoreFinal = `${match.score.eq1} - ${match.score.eq2}`;
                match.valide = verifierProno(match);
            }
        }
    });
    afficherTableau('tableau-matchs', donneesJour);
    genererCoupons();
    mettreAJourResume();
}

function chargerHistorique(date) {
    const fichier = `data/${date}.json`;
    fetch(fichier)
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
            document.getElementById('tableau-historique').innerHTML =
                `<p style="text-align:center;padding:2rem;color:var(--or);">
                 ⚠️ Données indisponibles pour cette date</p>`;
        });
}

// --- Logique de validation du pronostic ---
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';
    const [s1, s2] = match.scoreFinal.split('-').map(Number);
    const prono = match.pronostic.trim().toLowerCase();
    
    // Exemples : "2-0", "1-2", "Nul", "2-1 Racing"
    if (prono.includes('nul') || prono.includes('1-1')) {
        return s1 === s2 ? 'valide' : 'invalide';
    }
    if (prono.includes('–') || prono.includes('-')) {
        const parties = prono.split(/[–-]/).map(p => p.trim());
        if (parties.length >= 2 && !isNaN(parties[0]) && !isNaN(parties[1])) {
            const [p1, p2] = [parseInt(parties[0]), parseInt(parties[1])];
            return (s1 === p1 && s2 === p2) ? 'valide' : 'invalide';
        }
    }
    // Gagnant
    if (prono.includes('1-') || prono.includes('2-') || prono.includes(' -')) {
        const gProno = prono.startsWith('1') ? 'domicile' : prono.startsWith('2') ? 'exterieur' : 'nul';
        const gReel = s1 > s2 ? 'domicile' : s2 > s1 ? 'exterieur' : 'nul';
        return gProno === gReel ? 'valide' : 'invalide';
    }
    return 'invalide';
}

// --- Affichage des tableaux ---
function afficherTableau(idConteneur, matches) {
    const conteneur = document.getElementById(idConteneur);
    if (!matches || matches.length === 0) {
        conteneur.innerHTML = `<p style="text-align:center;padding:2rem;color:var(--texte-clair);">Aucune donnée disponible</p>`;
        return;
    }

    // Filtre statut
    const filtreStatut = document.getElementById('filtre-statut')?.value || 'tout';
    let filtres = matches;
    if (filtreStatut !== 'tout') {
        filtres = matches.filter(m => {
            if (filtreStatut === 'avenir') return m.statut === 'avenir';
            if (filtreStatut === 'direct') return m.statut === 'direct';
            if (filtreStatut === 'termine') return m.statut === 'termine';
            return true;
        });
    }

    // Filtre ligue
    const filtreLigue = document.getElementById('filtre-ligue')?.value || 'tout';
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
                    <th>Score / Résultat</th>
                    <th>Pronostic</th>
                    <th>Validation</th>
                </tr>
            </thead>
            <tbody>
            ${filtres.map(m => {
                const statutClass = m.statut === 'direct' ? 'en-direct' : m.statut === 'termine' ? 'termine' : '';
                const statutTexte = m.statut === 'avenir' ? '<span class="statut statut-avenir">⏳ À venir</span>' :
                                    m.statut === 'direct' ? '<span class="statut statut-direct">🔴 En direct</span>' :
                                    '<span class="statut statut-termine">✅ Terminé</span>';
                
                let scoreAffiche = '';
                if (m.statut === 'avenir') {
                    scoreAffiche = '<span style="color:var(--texte-clair);">—</span>';
                } else if (m.statut === 'direct' && m.score) {
                    scoreAffiche = `<span class="score-affiche">${m.score.eq1} - ${m.score.eq2}</span>`;
                } else if (m.scoreFinal) {
                    scoreAffiche = `<span class="score-affiche">${m.scoreFinal}</span>`;
                }

                let validation = '<span class="badge-attente">⏳ En attente</span>';
                if (m.valide === 'valide') {
                    validation = '<span class="badge-valide">✔️ Correct</span>';
                } else if (m.valide === 'invalide') {
                    validation = '<span class="badge-invalide">❌ Manqué</span>';
                }

                return `
                <tr class="${statutClass}">
                    <td>${statutTexte}</td>
                    <td>${m.ligue}</td>
                    <td><strong>${m.equipe1}</strong> – ${m.equipe2}</td>
                    <td>${m.heure}</td>
                    <td>${scoreAffiche}</td>
                    <td>${m.pronostic}<br><span class="badge conf-${m.niveau}" style="margin-top:0.25rem;display:inline-block;">${m.confiance}</span></td>
                    <td class="valide-prono">${validation}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;
}

// --- Mise à jour résumé ---
function mettreAJourResume() {
    const total = donneesJour.filter(m => m.statut === 'termine').length;
    const reussi = donneesJour.filter(m => m.valide === 'valide').length;
    const enDirect = donneesJour.filter(m => m.statut === 'direct').length;
    const taux = total > 0 ? Math.round((reussi / total) * 100) : '—';

    const elDirect = document.getElementById('nb-en-direct');
    const elTermine = document.getElementById('nb-termines');
    const elTaux = document.getElementById('taux-reussite');
    const elTotalMatchs = document.getElementById('total-matchs');
    const elTotalReussi = document.getElementById('total-reussi');
    const elTauxGlobal = document.getElementById('taux-global');

    if (elDirect) elDirect.innerHTML = `🔴 En direct : <strong>${enDirect}</strong>`;
    if (elTermine) elTermine.innerHTML = `✅ Terminés : <strong>${total}</strong>`;
    if (elTaux) elTaux.innerHTML = `🎯 Taux de réussite : <strong>${taux}%</strong>`;
    if (elTotalMatchs) elTotalMatchs.textContent = donneesJour.length;
    if (elTotalReussi) elTotalReussi.textContent = reussi;
    if (elTauxGlobal) elTauxGlobal.textContent = total > 0 ? `${taux}%` : '— %';
}

// --- Génération des coupons ---
function genererCoupons() {
    const elevees = donneesJour.filter(m => m.niveau === 'elevee').slice(0,5);
    const milieu = donneesJour.filter(m => m.niveau === 'moyenne').slice(0,5);
    
    document.getElementById('liste-coupon-a').innerHTML = elevees.map(m => {
        let icone = '⏳';
        if (m.valide === 'valide') icone = '✔️';
        if (m.valide === 'invalide') icone = '❌';
        return `<li><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic} · ${m.ligue}</span><span>${icone}</span></li>`;
    }).join('') || '<li style="opacity:0.6;">Données en cours de chargement...</li>';

    document.getElementById('liste-coupon-b').innerHTML = milieu.map(m => {
        let icone = '⏳';
        if (m.valide === 'valide') icone = '✔️';
        if (m.valide === 'invalide') icone = '❌';
        return `<li><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic} · ${m.ligue}</span><span>${icone}</span></li>`;
    }).join('') || '<li style="opacity:0.6;">Données en cours de chargement...</li>';

    // Score coupons
    const reussiA = elevees.filter(m => m.valide === 'valide').length;
    const reussiB = milieu.filter(m => m.valide === 'valide').length;
    document.getElementById('score-a').innerHTML = `Réussi : <strong>${reussiA}/5</strong>`;
    document.getElementById('score-b').innerHTML = `Réussi : <strong>${reussiB}/5</strong>`;
}

// --- Lancement ---
charger();
setInterval(simulerMiseAJourDirect, 30000); // Màj toutes les 30s
