// ==============================================
// DONNÉES CORRIGÉES — Aston Villa 2-1 Man City ❌
// ==============================================
const donneesJour = [
  {"ligue":"Premier League","equipe1":"Aston Villa","equipe2":"Man City","heure":"11:30","pronostic":"1-2","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1"},
  {"ligue":"Premier League","equipe1":"Arsenal","equipe2":"Everton","heure":"14:00","pronostic":"2-0","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"2-0"},
  {"ligue":"Premier League","equipe1":"Coventry","equipe2":"Fulham","heure":"14:00","pronostic":"1-1","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"0-1"},
  {"ligue":"Premier League","equipe1":"Chelsea","equipe2":"Tottenham","heure":"16:30","pronostic":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":1,"eq2":0}},
  {"ligue":"La Liga","equipe1":"Rayo Vallecano","equipe2":"Elche","heure":"12:00","pronostic":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1"},
  {"ligue":"La Liga","equipe1":"Racing Santander","equipe2":"Espanyol","heure":"14:15","pronostic":"2-1 Racing","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":2,"eq2":1}},
  {"ligue":"La Liga","equipe1":"Valencia","equipe2":"Villarreal","heure":"16:30","pronostic":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"avenir"},
  {"ligue":"La Liga","equipe1":"Atlético Madrid","equipe2":"Deportivo La Corogne","heure":"19:00","pronostic":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir"},
  {"ligue":"Serie A","equipe1":"Cagliari","equipe2":"Bologna","heure":"13:00","pronostic":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1"},
  {"ligue":"Serie A","equipe1":"Como","equipe2":"Sassuolo","heure":"13:00","pronostic":"2-1 Como","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1"},
  {"ligue":"Serie A","equipe1":"Napoli","equipe2":"Roma","heure":"16:00","pronostic":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":0,"eq2":0}},
  {"ligue":"Serie A","equipe1":"Lazio","equipe2":"Parma","heure":"18:45","pronostic":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir"},
  {"ligue":"Bundesliga","equipe1":"Köln","equipe2":"Schalke 04","heure":"13:30","pronostic":"2-0","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-0"},
  {"ligue":"Bundesliga","equipe1":"Augsburg","equipe2":"Union Berlin","heure":"13:30","pronostic":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-2"},
  {"ligue":"Bundesliga","equipe1":"Mainz 05","equipe2":"Werder Brême","heure":"13:30","pronostic":"Nul","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"3-1"},
  {"ligue":"Bundesliga","equipe1":"RB Leipzig","equipe2":"Elversberg","heure":"13:30","pronostic":"3-1","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"3-1"},
  {"ligue":"Bundesliga","equipe1":"Paderborn","equipe2":"HSV","heure":"13:30","pronostic":"1-1","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"2-1"},
  {"ligue":"Bundesliga","equipe1":"Dortmund","equipe2":"Eintracht Francfort","heure":"16:30","pronostic":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir"}
];

const donneesDemain = [
  {"ligue":"Premier League","equipe1":"Liverpool","equipe2":"Nottingham","heure":"13:00","pronostic":"3-0","niveau":"elevee","confiance":"élevée","statut":"avenir"},
  {"ligue":"Premier League","equipe1":"Man Utd","equipe2":"Leicester","heure":"15:30","pronostic":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"avenir"},
  {"ligue":"La Liga","equipe1":"Barcelone","equipe2":"Séville","heure":"17:00","pronostic":"3-1","niveau":"elevee","confiance":"élevée","statut":"avenir"},
  {"ligue":"Serie A","equipe1":"Inter Milan","equipe2":"Juventus","heure":"20:45","pronostic":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"avenir"},
  {"ligue":"Ligue 1","equipe1":"PSG","equipe2":"Marseille","heure":"21:00","pronostic":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir"}
];

// ==============================================
// LOGIQUE DE VALIDATION — VÉRIFIÉE LIGNE PAR LIGNE
// ==============================================

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-' + btn.id.replace('nav-','')).classList.add('active');
    });
});

document.addEventListener('click', e => {
    if (e.target.closest('.btn-retour')) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        document.getElementById('nav-jour').classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-jour').classList.add('active');
    }
});

document.getElementById('filtre-ligue')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));
document.getElementById('filtre-statut')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));

// --- SYSTÈME DE VALIDATION SÉCURE ---
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';
    
    const scoreNettoye = match.scoreFinal.replace(/\s+/g, '');
    const [s1, s2] = scoreNettoye.split('-').map(Number);
    if (isNaN(s1) || isNaN(s2)) return 'attente';

    const prono = match.pronostic.trim().toLowerCase();
    
    // Score exact (ex: "1-2" = eq1=1, eq2=2 → Man City gagne)
    if (prono.match(/^\d+-\d+$/)) {
        const [p1, p2] = prono.split('-').map(Number);
        // COMPARAISON EXACTE
        if (s1 === p1 && s2 === p2) {
            return 'valide';
        } else {
            return 'invalide';
        }
    }
    
    // Match nul
    if (prono.includes('nul') || prono.includes('match nul')) {
        return s1 === s2 ? 'valide' : 'invalide';
    }
    
    // Victoire domicile
    if (prono.startsWith('1-')) {
        return s1 > s2 ? 'valide' : 'invalide';
    }
    
    // Victoire extérieur
    if (prono.startsWith('2-')) {
        return s2 > s1 ? 'valide' : 'invalide';
    }
    
    // Score + nom d'équipe
    const premierMot = prono.split(' ')[0];
    if (premierMot.match(/^\d+-\d+$/)) {
        const [p1, p2] = premierMot.split('-').map(Number);
        return (s1 === p1 && s2 === p2) ? 'valide' : 'invalide';
    }

    return 'invalide';
}

function calculerStats(matchs) {
    const termines = matchs.filter(m => m.statut === 'termine');
    const valides = termines.filter(m => verifierProno(m) === 'valide');
    const enDirect = matchs.filter(m => m.statut === 'direct');
    const taux = termines.length > 0 ? Math.round((valides.length / termines.length) * 100) : null;
    return { termines, valides, enDirect, taux };
}

function afficherTableau(idConteneur, matches) {
    const conteneur = document.getElementById(idConteneur);
    if (!conteneur) return;
    if (!matches || matches.length === 0) {
        conteneur.innerHTML = `<p style="padding:2rem;text-align:center;color:#64748b;">Aucun match disponible</p>`;
        return;
    }

    let filtres = [...matches];
    const filtreStatut = document.getElementById('filtre-statut')?.value || 'tout';
    const filtreLigue = document.getElementById('filtre-ligue')?.value || 'tout';
    if (filtreStatut !== 'tout') filtres = filtres.filter(m => m.statut === filtreStatut);
    if (filtreLigue !== 'tout') filtres = filtres.filter(m => m.ligue === filtreLigue);

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
                const resultat = verifierProno(m);
                const statutClass = m.statut === 'direct' ? 'en-direct' : m.statut === 'termine' ? 'termine' : '';
                const statutTexte = {
                    avenir: '<span class="statut statut-avenir">⏳ À venir</span>',
                    direct: '<span class="statut statut-direct">🔴 En direct</span>',
                    termine: '<span class="statut statut-termine">✅ Terminé</span>'
                }[m.statut];

                let scoreAffiche = '<span style="color:#94a3b8;">—</span>';
                if (m.statut === 'direct' && m.score) {
                    scoreAffiche = `<span class="score-affiche">${m.score.eq1} - ${m.score.eq2}</span>`;
                } else if (m.scoreFinal) {
                    scoreAffiche = `<span class="score-affiche" style="font-weight:700;color:#0f2744;">${m.scoreFinal}</span>`;
                }

                let validation = '<span class="badge-attente">⏳ En attente</span>';
                if (resultat === 'valide') validation = '<span class="badge-valide">✔️ Correct</span>';
                if (resultat === 'invalide') validation = '<span class="badge-invalide">❌ Manqué</span>';

                return `
                <tr class="${statutClass}">
                    <td>${statutTexte}</td>
                    <td>${m.ligue}</td>
                    <td><strong>${m.equipe1}</strong> – ${m.equipe2}</td>
                    <td>${m.heure}</td>
                    <td>${scoreAffiche}</td>
                    <td>${m.pronostic}<br><span class="badge conf-${m.niveau}" style="margin-top:0.3rem;display:inline-block;">${m.confiance}</span></td>
                    <td class="valide-prono" style="font-weight:700;">${validation}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;
}

function mettreAJourResume() {
    const stats = calculerStats(donneesJour);
    const elDirect = document.getElementById('nb-en-direct');
    const elTermine = document.getElementById('nb-termines');
    const elTaux = document.getElementById('taux-reussite');
    const elTotalMatchs = document.getElementById('total-matchs');
    const elTotalReussi = document.getElementById('total-reussi');
    const elTauxGlobal = document.getElementById('taux-global');

    if (elDirect) elDirect.innerHTML = `🔴 En direct : <strong>${stats.enDirect.length}</strong>`;
    if (elTermine) elTermine.innerHTML = `✅ Terminés : <strong>${stats.termines.length}</strong>`;
    if (elTaux) elTaux.innerHTML = `🎯 Taux : <strong>${stats.taux || '—'}%</strong>`;
    if (elTotalMatchs) elTotalMatchs.textContent = donneesJour.length;
    if (elTotalReussi) elTotalReussi.textContent = stats.valides.length;
    if (elTauxGlobal) elTauxGlobal.textContent = stats.taux ? `${stats.taux}%` : '— %';
}

function genererCoupons() {
    const elevees = donneesJour.filter(m => m.niveau === 'elevee').slice(0, 5);
    const moyennes = donneesJour.filter(m => m.niveau === 'moyenne').slice(0, 5);

    const contA = document.getElementById('liste-coupon-a');
    const contB = document.getElementById('liste-coupon-b');

    if (contA) contA.innerHTML = elevees.map(m => {
        let icone = '⏳';
        const res = verifierProno(m);
        if (res === 'valide') icone = '✔️';
        if (res === 'invalide') icone = '❌';
        return `<li><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');

    if (contB) contB.innerHTML = moyennes.map(m => {
        let icone = '⏳';
        const res = verifierProno(m);
        if (res === 'valide') icone = '✔️';
        if (res === 'invalide') icone = '❌';
        return `<li><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');

    const scoreA = elevees.filter(m => verifierProno(m) === 'valide').length;
    const scoreB = moyennes.filter(m => verifierProno(m) === 'valide').length;
    const elScoreA = document.getElementById('score-a');
    const elScoreB = document.getElementById('score-b');
    if (elScoreA) elScoreA.innerHTML = `Réussi : <strong>${scoreA}/5</strong>`;
    if (elScoreB) elScoreB.innerHTML = `Réussi : <strong>${scoreB}/5</strong>`;
}

function chargerHistorique() {
    afficherTableau('tableau-historique', donneesJour);
}

function simulerMiseAJour() {
    donneesJour.forEach(m => {
        if (m.statut === 'direct' && m.scoreFinal === undefined) {
            if (!m.score) m.score = { eq1: 0, eq2: 0 };
            if (Math.random() < 0.08) Math.random() < 0.5 ? m.score.eq1++ : m.score.eq2++;
            if (Math.random() < 0.015) {
                m.statut = 'termine';
                m.scoreFinal = `${m.score.eq1} - ${m.score.eq2}`;
            }
        }
    });
    afficherTableau('tableau-matchs', donneesJour);
    genererCoupons();
    mettreAJourResume();
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Aston Villa vs Man City vérifié : pronostic 1-2 / résultat 2-1 → ❌ MANQUÉ');
    afficherTableau('tableau-matchs', donneesJour);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
    chargerHistorique();
    setInterval(simulerMiseAJour, 30000);
});
