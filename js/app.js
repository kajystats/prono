// ==============================================
// DONNÉES COMPLÈTES AVEC SCORE PROBABLE
// ==============================================
const donneesJour = [
  {
    "id":"aston-mancity","ligue":"Premier League",
    "equipe1":"Aston Villa","equipe2":"Man City",
    "heure":"11:30",
    "pronostic":"2",
    "scoreProbable":"1-2",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-1",
    "analyse":"Man City était annoncé favori avec une victoire probable 1-2, mais Aston Villa a dominé à domicile et renversé la situation."
  },
  {
    "id":"arsenal-everton","ligue":"Premier League",
    "equipe1":"Arsenal","equipe2":"Everton",
    "heure":"14:00",
    "pronostic":"1",
    "scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"termine","scoreFinal":"2-0",
    "analyse":"Arsenal a confirmé sa supériorité comme prévu, victoire nette 2-0 conforme au pronostic."
  },
  {
    "id":"coventry-fulham","ligue":"Premier League",
    "equipe1":"Coventry","equipe2":"Fulham",
    "heure":"14:00",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"faible","confiance":"faible",
    "statut":"termine","scoreFinal":"0-1",
    "analyse":"Le partage des points (1-1 probable) n'a pas eu lieu, Fulham a fait la différence en seconde période."
  },
  {
    "id":"chelsea-tottenham","ligue":"Premier League",
    "equipe1":"Chelsea","equipe2":"Tottenham",
    "heure":"16:30",
    "pronostic":"1",
    "scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"direct","score":{"eq1":1,"eq2":0},
    "analyse":"Match en cours — Chelsea mène et semble suivre la trajectoire du pronostic."
  },
  {
    "id":"rayo-elche","ligue":"La Liga",
    "equipe1":"Rayo Vallecano","equipe2":"Elche",
    "heure":"12:00",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"1-1",
    "analyse":"Rencontre équilibrée exactement comme prévu, score conforme au pronostic."
  },
  {
    "id":"racing-espanyol","ligue":"La Liga",
    "equipe1":"Racing Santander","equipe2":"Espanyol",
    "heure":"14:15",
    "pronostic":"1",
    "scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"direct","score":{"eq1":2,"eq2":1},
    "analyse":"Match en cours — Racing mène 2-1, exactement le score probable annoncé."
  },
  {
    "id":"valencia-villarreal","ligue":"La Liga",
    "equipe1":"Valencia","equipe2":"Villarreal",
    "heure":"16:30",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"avenir",
    "analyse":"Derby très attendu entre deux formations au niveau très proche, nul probable."
  },
  {
    "id":"atletico-deportivo","ligue":"La Liga",
    "equipe1":"Atlético Madrid","equipe2":"Deportivo La Corogne",
    "heure":"19:00",
    "pronostic":"1",
    "scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "analyse":"Atlético est le favori très clair à domicile, victoire 2-0 attendue."
  },
  {
    "id":"cagliari-bologna","ligue":"Serie A",
    "equipe1":"Cagliari","equipe2":"Bologna",
    "heure":"13:00",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"1-1",
    "analyse":"Deux équipes au niveau identique qui se neutralisent, parfaitement conforme au pronostic."
  },
  {
    "id":"como-sassuolo","ligue":"Serie A",
    "equipe1":"Como","equipe2":"Sassuolo",
    "heure":"13:00",
    "pronostic":"1",
    "scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-1",
    "analyse":"Como a confirmé son avantage à domicile, score exact conforme au pronostic."
  },
  {
    "id":"napoli-roma","ligue":"Serie A",
    "equipe1":"Napoli","equipe2":"Roma",
    "heure":"16:00",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"direct","score":{"eq1":0,"eq2":0},
    "analyse":"Match en cours — très attendu, nul toujours probable."
  },
  {
    "id":"lazio-parma","ligue":"Serie A",
    "equipe1":"Lazio","equipe2":"Parma",
    "heure":"18:45",
    "pronostic":"1",
    "scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "analyse":"Lazio largement favorite à domicile, victoire 2-0 prévue."
  },
  {
    "id":"koln-schalke","ligue":"Bundesliga",
    "equipe1":"Köln","equipe2":"Schalke 04",
    "heure":"13:30",
    "pronostic":"1",
    "scoreProbable":"2-0",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-0",
    "analyse":"Köln a dominé de bout en bout, score exact conforme au pronostic."
  },
  {
    "id":"augsburg-union","ligue":"Bundesliga",
    "equipe1":"Augsburg","equipe2":"Union Berlin",
    "heure":"13:30",
    "pronostic":"1",
    "scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"1-2",
    "analyse":"Victoire d'Augsburg était prévue (2-1 probable), mais Union Berlin a renversé la rencontre."
  },
  {
    "id":"mainz-werder","ligue":"Bundesliga",
    "equipe1":"Mainz 05","equipe2":"Werder Brême",
    "heure":"13:30",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"faible","confiance":"faible",
    "statut":"termine","scoreFinal":"3-1",
    "analyse":"Nul 1-1 probable, mais Mainz a accéléré en seconde période pour l'emporter."
  },
  {
    "id":"rbleipzig-elversberg","ligue":"Bundesliga",
    "equipe1":"RB Leipzig","equipe2":"Elversberg",
    "heure":"13:30",
    "pronostic":"1",
    "scoreProbable":"3-1",
    "niveau":"elevee","confiance":"élevée",
    "statut":"termine","scoreFinal":"3-1",
    "analyse":"Le RB Leipzig a tenu son rang, score exact conforme au pronostic."
  },
  {
    "id":"paderborn-hsv","ligue":"Bundesliga",
    "equipe1":"Paderborn","equipe2":"HSV",
    "heure":"13:30",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"faible","confiance":"faible",
    "statut":"termine","scoreFinal":"2-1",
    "analyse":"Partage des points prévu 1-1, mais Paderborn a obtenu la victoire en fin de match."
  },
  {
    "id":"dortmund-frankfort","ligue":"Bundesliga",
    "equipe1":"Dortmund","equipe2":"Eintracht Francfort",
    "heure":"16:30",
    "pronostic":"1",
    "scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "analyse":"Dortmund est le favori à domicile, victoire 2-0 attendue."
  }
];

const donneesDemain = [
  {
    "id":"liverpool-nottingham","ligue":"Premier League",
    "equipe1":"Liverpool","equipe2":"Nottingham",
    "heure":"13:00",
    "pronostic":"1",
    "scoreProbable":"3-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "analyse":"Liverpool est le grand favori à domicile, large victoire attendue."
  },
  {
    "id":"manu-leicester","ligue":"Premier League",
    "equipe1":"Man Utd","equipe2":"Leicester",
    "heure":"15:30",
    "pronostic":"1",
    "scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"avenir",
    "analyse":"Man Utd devrait s'imposer mais attention à la forme actuelle de Leicester."
  },
  {
    "id":"barcelone-seville","ligue":"La Liga",
    "equipe1":"Barcelone","equipe2":"Séville",
    "heure":"17:00",
    "pronostic":"1",
    "scoreProbable":"3-1",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "analyse":"Barcelone largement favorite au Camp Nou."
  },
  {
    "id":"inter-juventus","ligue":"Serie A",
    "equipe1":"Inter Milan","equipe2":"Juventus",
    "heure":"20:45",
    "pronostic":"N",
    "scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"avenir",
    "analyse":"Le classique s'annonce très serré, nul probable."
  },
  {
    "id":"psg-marseille","ligue":"Ligue 1",
    "equipe1":"PSG","equipe2":"Marseille",
    "heure":"21:00",
    "pronostic":"1",
    "scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "analyse":"Le PSG est le favori clair au Parc des Princes."
  }
];

// ==============================================
// VALIDATION : SEUL LE RÉSULTAT FINAL COMPTE (1/N/2)
// ==============================================
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';
    const [s1, s2] = match.scoreFinal.split('-').map(Number);
    let resultatReel = s1 > s2 ? '1' : s1 < s2 ? '2' : 'N';
    let pronostic = match.pronostic.trim();
    if (pronostic.toLowerCase().includes('nul') || pronostic === 'Nul' || pronostic === 'N') pronostic = 'N';
    else if (pronostic === '1' || pronostic.startsWith('1-')) pronostic = '1';
    else if (pronostic === '2' || pronostic.startsWith('2-')) pronostic = '2';
    return resultatReel === pronostic ? 'valide' : 'invalide';
}

function resultatEnTexte(code, eq1, eq2) {
    if (code === '1') return `Victoire ${eq1}`;
    if (code === '2') return `Victoire ${eq2}`;
    return 'Match nul';
}

// ==============================================
// GESTION DE L'URL / LIENS UNIQUES PAR PAGE
// ==============================================
function getHash() {
    return window.location.hash.slice(1).trim();
}

function naviguerVers(chemin) {
    window.location.hash = chemin;
}

function revenirListe() {
    window.history.back();
}

function traiterHash() {
    const hash = getHash();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (hash.startsWith('match/')) {
        const matchId = hash.replace('match/', '');
        afficherDetailMatch(matchId, false);
        return;
    }
    
    // Page principale
    document.getElementById('section-jour')?.classList.add('active');
    document.getElementById('nav-jour')?.classList.add('actif');
}

// ==============================================
// NAVIGATION PRINCIPALE
// ==============================================
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = btn.id.replace('nav-','');
        naviguerVers(pageId === 'jour' ? '' : pageId);
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
        btn.classList.add('actif');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(`section-${pageId}`)?.classList.add('active');
    });
});

// Bouton retour → retour dans l'historique
document.addEventListener('click', e => {
    if (e.target.closest('.btn-retour')) {
        revenirListe();
    }
});

// Écouter les changements d'URL (flèches précédent/suivant du navigateur)
window.addEventListener('hashchange', traiterHash);

// Filtres
document.getElementById('filtre-ligue')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));
document.getElementById('filtre-statut')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));

// ==============================================
// AFFICHAGE TABLEAU — LIENS CLIQUABLES
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

                let pronosticAffiche = m.scoreProbable || m.pronostic;
                if (m.pronostic === '1') pronosticAffiche = `${m.scoreProbable}`;
                if (m.pronostic === '2') pronosticAffiche = `${m.scoreProbable}`;
                if (m.pronostic === 'N') pronosticAffiche = `${m.scoreProbable}`;

                let validation = '<span class="badge-attente">⏳ En attente</span>';
                if (resultat === 'valide') validation = '<span class="badge-valide">✔️ Correct</span>';
                if (resultat === 'invalide') validation = '<span class="badge-invalide">❌ Manqué</span>';

                return `
                <tr class="${statutClass}" style="cursor:pointer;" data-hash="match/${m.id}">
                    <td>${statutTexte}</td>
                    <td>${m.ligue}</td>
                    <td><strong>${m.equipe1}</strong> – ${m.equipe2}</td>
                    <td>${m.heure}</td>
                    <td>${scoreAffiche}</td>
                    <td>${pronosticAffiche}<br><span class="badge conf-${m.niveau}" style="margin-top:0.3rem;display:inline-block;">${m.confiance}</span></td>
                    <td style="font-weight:700;">${validation}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;

    // Clic sur une ligne → aller vers le lien dédié
    conteneur.querySelectorAll('tr[data-hash]').forEach(row => {
        row.addEventListener('click', () => {
            naviguerVers(row.getAttribute('data-hash'));
        });
    });
}

// ==============================================
// PAGE DÉTAIL — LIEN UNIQUE PAR MATCH
// ==============================================
function afficherDetailMatch(matchId, pushState = true) {
    const tousLesMatchs = [...donneesJour, ...donneesDemain];
    const match = tousLesMatchs.find(m => m.id === matchId);
    if (!match) return;

    // Mettre à jour l'URL si ce n'est pas déjà fait via hashchange
    if (pushState && getHash() !== `match/${matchId}`) {
        naviguerVers(`match/${matchId}`);
        return;
    }

    const resultat = verifierProno(match);

    let resultatReelCode = null;
    let resultatReelTexte = '—';
    if (match.scoreFinal) {
        const [s1, s2] = match.scoreFinal.split('-').map(Number);
        resultatReelCode = s1 > s2 ? '1' : s1 < s2 ? '2' : 'N';
        resultatReelTexte = resultatEnTexte(resultatReelCode, match.equipe1, match.equipe2);
    }

    let pronosticTexte = match.pronostic;
    if (match.pronostic === '1') pronosticTexte = `Victoire ${match.equipe1}`;
    if (match.pronostic === '2') pronosticTexte = `Victoire ${match.equipe2}`;
    if (match.pronostic === 'N') pronosticTexte = 'Match nul';

    let verdict = '';
    let verdictCouleur = '#f8fafc';
    if (match.statut === 'termine') {
        if (resultat === 'valide') {
            verdict = '✅ VERDICT : PRONOSTIC RÉUSSI';
            verdictCouleur = '#f0fdf4';
        } else {
            verdict = '❌ VERDICT : PRONOSTIC MANQUÉ';
            verdictCouleur = '#fef2f2';
        }
    }

    let validationTexte = '<span class="badge-attente">⏳ En attente</span>';
    if (resultat === 'valide') validationTexte = '<span class="badge-valide">✔️ CORRECT</span>';
    if (resultat === 'invalide') validationTexte = '<span class="badge-invalide">❌ MANQUÉ</span>';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const sectionDetail = document.getElementById('section-detail') || creerSectionDetail();

    sectionDetail.innerHTML = `
        <div style="max-width:850px;margin:0 auto;padding:2rem 1rem;">
            <button class="btn-retour" style="background:none;border:none;color:#10b981;font-size:1rem;cursor:pointer;padding:0.5rem 0;margin-bottom:1.5rem;">← Retour aux matchs</button>
            
            <div style="background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden;">
                <!-- EN-TÊTE -->
                <div style="background:linear-gradient(135deg,#0f2744,#1e40af);color:#fff;padding:2rem;">
                    <p style="opacity:0.8;margin:0 0 0.5rem 0;font-size:0.95rem;">${match.ligue} — ${match.heure}</p>
                    <h2 style="margin:0;font-size:1.8rem;">${match.equipe1} <span style="opacity:0.6;">vs</span> ${match.equipe2}</h2>
                    <p style="margin-top:1rem;font-size:1.1rem;">
                        ${match.statut === 'termine' ? `<strong>Score final : ${match.scoreFinal}</strong>` : 
                          match.statut === 'direct' ? `<strong style="color:#fbbf24;">🔴 En direct : ${match.score.eq1} - ${match.score.eq2}</strong>` : 
                          '⏳ À venir'}
                    </p>
                    <p style="margin-top:0.5rem;font-size:0.85rem;opacity:0.7;">🔗 Lien : ${window.location.origin}${window.location.pathname}#match/${match.id}</p>
                </div>

                <div style="padding:2rem;">
                    <!-- SCORES -->
                    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-bottom:2rem;">
                        <div style="background:#eff6ff;padding:1.5rem;border-radius:12px;text-align:center;">
                            <h3 style="color:#1e40af;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 0.5rem 0;">Score probable</h3>
                            <p style="font-size:1.5rem;font-weight:700;margin:0;color:#1e40af;">${match.scoreProbable || '—'}</p>
                            <p style="margin-top:0.5rem;font-size:0.9rem;color:#3b82f6;">${pronosticTexte}</p>
                        </div>
                        <div style="background:${match.statut === 'termine' ? '#f0fdf4' : '#f8fafc'};padding:1.5rem;border-radius:12px;text-align:center;">
                            <h3 style="color:#166534;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 0.5rem 0;">Résultat final</h3>
                            <p style="font-size:1.5rem;font-weight:700;margin:0;color:#166534;">${match.scoreFinal || '—'}</p>
                            <p style="margin-top:0.5rem;font-size:0.9rem;color:#22c55e;">${resultatReelTexte}</p>
                        </div>
                    </div>

                    <!-- VERDICT -->
                    ${match.statut === 'termine' ? `
                    <div style="padding:1.5rem;border-radius:12px;background:${verdictCouleur};margin-bottom:2rem;text-align:center;border:2px solid ${resultat === 'valide' ? '#22c55e' : '#ef4444'};">
                        <p style="font-size:1.4rem;font-weight:700;margin:0;">${verdict}</p>
                        <p style="margin-top:0.5rem;font-size:1rem;">${validationTexte}</p>
                        <p style="margin-top:0.5rem;font-size:0.9rem;color:#64748b;">Seul le résultat final compte (victoire / nul)</p>
                    </div>
                    ` : `
                    <div style="padding:1.5rem;border-radius:12px;background:#f8fafc;margin-bottom:2rem;text-align:center;">
                        <p style="font-size:1.2rem;font-weight:600;margin:0;color:#64748b;">⏳ En attente du résultat final</p>
                    </div>
                    `}

                    <!-- NIVEAU DE CONFIANCE -->
                    <div style="margin-bottom:2rem;">
                        <h3 style="color:#0f2744;margin-bottom:0.5rem;">🎯 Niveau de confiance</h3>
                        <span class="badge conf-${match.niveau}" style="font-size:1rem;padding:0.5rem 1rem;border-radius:8px;">${match.confiance}</span>
                    </div>

                    <!-- ANALYSE -->
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
// COUPONS — CLIQUABLES VERS LIEN DÉDIÉ
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
        return `<li style="cursor:pointer;" data-hash="match/${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.scoreProbable || m.pronostic}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');

    if (contB) contB.innerHTML = moyennes.map(m => {
        let icone = '⏳';
        const res = verifierProno(m);
        if (res === 'valide') icone = '✔️';
        if (res === 'invalide') icone = '❌';
        return `<li style="cursor:pointer;" data-hash="match/${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.scoreProbable || m.pronostic}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');

    document.querySelectorAll('#liste-coupon-a li, #liste-coupon-b li').forEach(li => {
        li.addEventListener('click', () => {
            naviguerVers(li.getAttribute('data-hash'));
        });
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
    console.log('✅ Liens dédiés par match activés — Ex: #match/aston-mancity');
    afficherTableau('tableau-matchs', donneesJour);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
    chargerHistorique();
    traiterHash(); // Charger la bonne page selon l'URL
    setInterval(simulerMiseAJour, 30000);
});
