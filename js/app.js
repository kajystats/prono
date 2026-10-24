// ==============================================
// DONNÉES
// ==============================================
const donneesJour = [
  {"id":"aston-mancity","ligue":"Premier League","equipe1":"Aston Villa","equipe2":"Man City","heure":"11:30","pronostic":"2","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1","analyse":"Man City devait l'emporter selon le pronostic, mais Aston Villa a dominé la rencontre à domicile et a obtenu une victoire méritée."},
  {"id":"arsenal-everton","ligue":"Premier League","equipe1":"Arsenal","equipe2":"Everton","heure":"14:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"2-0","analyse":"Arsenal a confirmé sa supériorité à domicile et maîtrisé le match du début à la fin."},
  {"id":"coventry-fulham","ligue":"Premier League","equipe1":"Coventry","equipe2":"Fulham","heure":"14:00","pronostic":"N","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"0-1","analyse":"Le pronostic visait un partage des points, mais Fulham a fait la différence en seconde période."},
  {"id":"chelsea-tottenham","ligue":"Premier League","equipe1":"Chelsea","equipe2":"Tottenham","heure":"16:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":1,"eq2":0},"analyse":"Match en cours — Chelsea mène et semble tenir son avantage."},
  {"id":"rayo-elche","ligue":"La Liga","equipe1":"Rayo Vallecano","equipe2":"Elche","heure":"12:00","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1","analyse":"Rencontre équilibrée comme prévu, les deux équipes se neutralisent."},
  {"id":"racing-espanyol","ligue":"La Liga","equipe1":"Racing Santander","equipe2":"Espanyol","heure":"14:15","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":2,"eq2":1},"analyse":"Match en cours — Racing mène et confirme son statut de favori à domicile."},
  {"id":"valencia-villarreal","ligue":"La Liga","equipe1":"Valencia","equipe2":"Villarreal","heure":"16:30","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"avenir","analyse":"Derby prometteur entre deux formations à niveau proche."},
  {"id":"atletico-deportivo","ligue":"La Liga","equipe1":"Atlético Madrid","equipe2":"Deportivo La Corogne","heure":"19:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Atlético est le favori clair à domicile."},
  {"id":"cagliari-bologna","ligue":"Serie A","equipe1":"Cagliari","equipe2":"Bologna","heure":"13:00","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1","analyse":"Deux équipes au niveau similaire qui se neutralisent, le pronostic était juste."},
  {"id":"como-sassuolo","ligue":"Serie A","equipe1":"Como","equipe2":"Sassuolo","heure":"13:00","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1","analyse":"Como a su tirer profit de son public pour prendre les trois points."},
  {"id":"napoli-roma","ligue":"Serie A","equipe1":"Napoli","equipe2":"Roma","heure":"16:00","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":0,"eq2":0},"analyse":"Match en cours — très attendu entre deux ténors italiens."},
  {"id":"lazio-parma","ligue":"Serie A","equipe1":"Lazio","equipe2":"Parma","heure":"18:45","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Lazio largement favorite à domicile."},
  {"id":"koln-schalke","ligue":"Bundesliga","equipe1":"Köln","equipe2":"Schalke 04","heure":"13:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-0","analyse":"Köln a dominé et confirmé son avantage sur son terrain."},
  {"id":"augsburg-union","ligue":"Bundesliga","equipe1":"Augsburg","equipe2":"Union Berlin","heure":"13:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-2","analyse":"Le pronostic visait une victoire d'Augsburg, mais Union Berlin a renversé la situation."},
  {"id":"mainz-werder","ligue":"Bundesliga","equipe1":"Mainz 05","equipe2":"Werder Brême","heure":"13:30","pronostic":"N","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"3-1","analyse":"Le match nul était envisagé, mais Mainz a fait la différence en seconde mi-temps."},
  {"id":"rbleipzig-elversberg","ligue":"Bundesliga","equipe1":"RB Leipzig","equipe2":"Elversberg","heure":"13:30","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"3-1","analyse":"Le RB Leipzig a tenu son rang de favori et maîtrisé la rencontre."},
  {"id":"paderborn-hsv","ligue":"Bundesliga","equipe1":"Paderborn","equipe2":"HSV","heure":"13:30","pronostic":"N","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"2-1","analyse":"Le partage des points était prévu, mais Paderborn a obtenu la victoire."},
  {"id":"dortmund-frankfort","ligue":"Bundesliga","equipe1":"Dortmund","equipe2":"Eintracht Francfort","heure":"16:30","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Dortmund est le favori à domicile pour cette affiche."}
];

const donneesDemain = [
  {"id":"liverpool-nottingham","ligue":"Premier League","equipe1":"Liverpool","equipe2":"Nottingham","heure":"13:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Liverpool est le grand favori à domicile."},
  {"id":"manu-leicester","ligue":"Premier League","equipe1":"Man Utd","equipe2":"Leicester","heure":"15:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"avenir","analyse":"Man Utd devrait s'imposer mais attention à la forme de Leicester."},
  {"id":"barcelone-seville","ligue":"La Liga","equipe1":"Barcelone","equipe2":"Séville","heure":"17:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Barcelone largement favorite au Camp Nou."},
  {"id":"inter-juventus","ligue":"Serie A","equipe1":"Inter Milan","equipe2":"Juventus","heure":"20:45","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"avenir","analyse":"Le classique italien s'annonce très serré."},
  {"id":"psg-marseille","ligue":"Ligue 1","equipe1":"PSG","equipe2":"Marseille","heure":"21:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Le PSG est le favori au Parc des Princes."}
];

// ==============================================
// RÈGLE DE VALIDATION : UNIQUEMENT RÉSULTAT FINAL (1/N/2)
// ==============================================
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';

    // Déterminer le résultat réel : 1 = vic. domicile, N = nul, 2 = vic. extérieur
    const [s1, s2] = match.scoreFinal.split('-').map(Number);
    let resultatReel;
    if (s1 > s2) resultatReel = '1';
    else if (s1 < s2) resultatReel = '2';
    else resultatReel = 'N';

    // Extraire le pronostic : normaliser en 1 / N / 2
    let pronostic = match.pronostic.trim();
    if (pronostic === 'Nul' || pronostic === 'Nul.' || pronostic === 'N' || pronostic.toLowerCase().includes('nul')) {
        pronostic = 'N';
    } else if (pronostic === '1' || pronostic.startsWith('1-')) {
        pronostic = '1';
    } else if (pronostic === '2' || pronostic.startsWith('2-')) {
        pronostic = '2';
    }

    // Comparaison : seul le résultat final compte, PAS le score exact
    return resultatReel === pronostic ? 'valide' : 'invalide';
}

// ==============================================
// NAVIGATION PRINCIPALE
// ==============================================
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-' + btn.id.replace('nav-','')).classList.add('active');
    });
});

// Retour à l'accueil depuis la page détail
document.addEventListener('click', e => {
    if (e.target.closest('.btn-retour')) {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        document.getElementById('nav-jour').classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('section-jour').classList.add('active');
    }
});

// Filtres
document.getElementById('filtre-ligue')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));
document.getElementById('filtre-statut')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));

// ==============================================
// AFFICHAGE TABLEAU + LIEN DÉTAIL
// ==============================================
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
                    <th>Résultat</th>
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
                <tr class="${statutClass}" style="cursor:pointer;" data-match-id="${m.id}">
                    <td>${statutTexte}</td>
                    <td>${m.ligue}</td>
                    <td><strong>${m.equipe1}</strong> – ${m.equipe2}</td>
                    <td>${m.heure}</td>
                    <td>${scoreAffiche}</td>
                    <td>${m.pronostic}<br><span class="badge conf-${m.niveau}" style="margin-top:0.3rem;display:inline-block;">${m.confiance}</span></td>
                    <td style="font-weight:700;">${validation}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;

    // Clic sur une ligne → afficher détails
    conteneur.querySelectorAll('tr[data-match-id]').forEach(row => {
        row.addEventListener('click', () => {
            const matchId = row.getAttribute('data-match-id');
            afficherDetailMatch(matchId);
        });
    });
}

// ==============================================
// PAGE DÉTAIL DU MATCH
// ==============================================
function afficherDetailMatch(matchId) {
    // Fusionner toutes les données pour retrouver le match
    const tousLesMatchs = [...donneesJour, ...donneesDemain];
    const match = tousLesMatchs.find(m => m.id === matchId);
    if (!match) return;

    const resultat = verifierProno(match);
    
    // Déterminer le résultat réel en clair
    let resultatReelTexte = '—';
    if (match.scoreFinal) {
        const [s1, s2] = match.scoreFinal.split('-').map(Number);
        if (s1 > s2) resultatReelTexte = `Victoire ${match.equipe1}`;
        else if (s1 < s2) resultatReelTexte = `Victoire ${match.equipe2}`;
        else resultatReelTexte = 'Match nul';
    }

    // Traduire le pronostic en clair
    let pronosticTexte = match.pronostic;
    if (match.pronostic === '1') pronosticTexte = `Victoire ${match.equipe1}`;
    if (match.pronostic === '2') pronosticTexte = `Victoire ${match.equipe2}`;
    if (match.pronostic === 'N') pronosticTexte = 'Match nul';

    let validationTexte = '<span class="badge-attente">⏳ En attente</span>';
    if (resultat === 'valide') validationTexte = '<span class="badge-valide">✔️ CORRECT</span>';
    if (resultat === 'invalide') validationTexte = '<span class="badge-invalide">❌ MANQUÉ</span>';

    // Masquer les autres sections et afficher le détail
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const sectionDetail = document.getElementById('section-detail') || creerSectionDetail();
    
    sectionDetail.innerHTML = `
        <div style="max-width:800px;margin:0 auto;padding:2rem 1rem;">
            <button class="btn-retour" style="background:none;border:none;color:#10b981;font-size:1rem;cursor:pointer;padding:0.5rem 0;margin-bottom:1.5rem;">← Retour aux matchs</button>
            
            <div style="background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden;">
                <div style="background:linear-gradient(135deg,#0f2744,#1e40af);color:#fff;padding:2rem;">
                    <p style="opacity:0.8;margin:0 0 0.5rem 0;font-size:0.95rem;">${match.ligue} — ${match.heure}</p>
                    <h2 style="margin:0;font-size:1.8rem;">${match.equipe1} <span style="opacity:0.6;">vs</span> ${match.equipe2}</h2>
                    <p style="margin-top:1rem;font-size:1.1rem;">
                        ${match.statut === 'termine' ? `<strong>Score final : ${match.scoreFinal}</strong>` : 
                          match.statut === 'direct' ? `<strong style="color:#fbbf24;">🔴 En direct : ${match.score.eq1} - ${match.score.eq2}</strong>` : 
                          '⏳ À venir'}
                    </p>
                </div>

                <div style="padding:2rem;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem;">
                        <div>
                            <h3 style="color:#64748b;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Pronostic</h3>
                            <p style="font-size:1.3rem;font-weight:700;margin:0;">${pronosticTexte}</p>
                            <span class="badge conf-${match.niveau}" style="margin-top:0.5rem;display:inline-block;">${match.confiance}</span>
                        </div>
                        <div>
                            <h3 style="color:#64748b;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Résultat réel</h3>
                            <p style="font-size:1.3rem;font-weight:700;margin:0;">${resultatReelTexte}</p>
                        </div>
                    </div>

                    <div style="padding:1.5rem;border-radius:12px;background:${resultat === 'valide' ? '#f0fdf4' : resultat === 'invalide' ? '#fef2f2' : '#f8fafc'};margin-bottom:2rem;text-align:center;">
                        <h3 style="margin:0 0 0.5rem 0;font-size:1rem;color:#475569;">Validation</h3>
                        <p style="font-size:1.5rem;font-weight:700;margin:0;">${validationTexte}</p>
                        <p style="margin-top:0.5rem;font-size:0.9rem;color:#64748b;">Seul le résultat final compte (victoire / nul)</p>
                    </div>

                    <div>
                        <h3 style="color:#0f2744;margin-bottom:1rem;">📊 Analyse du match</h3>
                        <p style="line-height:1.7;color:#334155;">${match.analyse || 'Analyse complète à venir...'}</p>
                    </div>
                </div>
            </div>
        </div>`;
    
    sectionDetail.classList.add('active');
}

function creerSectionDetail() {
    const section = document.createElement('section');
    section.id = 'section-detail';
    section.className = 'page';
    document.querySelector('main').appendChild(section);
    return section;
}

// ==============================================
// STATISTIQUES GLOBALES
// ==============================================
function calculerStats(matchs) {
    const termines = matchs.filter(m => m.statut === 'termine');
    const valides = termines.filter(m => verifierProno(m) === 'valide');
    const enDirect = matchs.filter(m => m.statut === 'direct');
    const taux = termines.length > 0 ? Math.round((valides.length / termines.length) * 100) : null;
    return { termines, valides, enDirect, taux };
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

// ==============================================
// COUPONS
// ==============================================
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
        return `<li style="cursor:pointer;" data-match-id="${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');

    if (contB) contB.innerHTML = moyennes.map(m => {
        let icone = '⏳';
        const res = verifierProno(m);
        if (res === 'valide') icone = '✔️';
        if (res === 'invalide') icone = '❌';
        return `<li style="cursor:pointer;" data-match-id="${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.pronostic}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');

    // Clic sur coupon → détail
    document.querySelectorAll('#liste-coupon-a li, #liste-coupon-b li').forEach(li => {
        li.addEventListener('click', () => afficherDetailMatch(li.getAttribute('data-match-id')));
    });

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

// ==============================================
// MISE À JOUR EN TEMPS RÉEL
// ==============================================
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
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
}

// ==============================================
// LANCEMENT
// ==============================================
window.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Validation 1N2 activée — seul résultat final compte');
    afficherTableau('tableau-matchs', donneesJour);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
    chargerHistorique();
    setInterval(simulerMiseAJour, 30000);
});
