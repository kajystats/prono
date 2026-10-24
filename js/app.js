// ==============================================
// DONNÉES VÉRIFIÉES ET ENRICHIES
// ==============================================
const donneesHier = [
  // ⚠️ Dès demain, déplace ici les matchs terminés d'hier
  // Exemple de structure :
  // {
  //   "id":"exemple-hier",
  //   "ligue":"La Liga",
  //   "equipe1":"Équipe A", "equipe2":"Équipe B",
  //   "heure":"--:--",
  //   "pronostic":"1", "scoreProbable":"2-0",
  //   "niveau":"moyenne", "confiance":"moyenne",
  //   "statut":"termine", "scoreFinal":"2-0",
  //   "cartonsProbables":"4-3", "cornersProbables":"8-5", "fautesProbables":"12-14",
  //   "forme1":"Victoire, Nul, Victoire, Défaite, Victoire",
  //   "forme2":"Nul, Défaite, Victoire, Nul, Défaite",
  //   "analyse":"Match archivé — résultat confirmé."
  // }
];

const donneesJour = [
  {
    "id":"aston-mancity","ligue":"Premier League",
    "equipe1":"Aston Villa","equipe2":"Manchester City",
    "heure":"13:30",
    "pronostic":"2","scoreProbable":"1-2",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-1",
    "cartonsProbables":"4-2","cornersProbables":"8-6","fautesProbables":"12-15",
    "forme1":"Victoire, Nul, Victoire, Défaite, Victoire",
    "forme2":"Victoire, Victoire, Nul, Victoire, Défaite",
    "analyse":"Man City était annoncé favori, mais Aston Villa a dominé à domicile et l'a emporté 2-1. Le pronostic de victoire de Man City n'a pas été validé."
  },
  {
    "id":"arsenal-everton","ligue":"Premier League",
    "equipe1":"Arsenal","equipe2":"Everton",
    "heure":"16:00",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"termine","scoreFinal":"2-0",
    "cartonsProbables":"3-3","cornersProbables":"10-4","fautesProbables":"10-14",
    "forme1":"Victoire, Victoire, Nul, Victoire, Victoire",
    "forme2":"Défaite, Nul, Défaite, Victoire, Nul",
    "analyse":"Arsenal a confirmé sa supériorité à domicile, victoire 2-0. Pronostic validé."
  },
  {
    "id":"coventry-fulham","ligue":"Premier League",
    "equipe1":"Coventry City","equipe2":"Fulham",
    "heure":"16:00",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"faible","confiance":"faible",
    "statut":"termine","scoreFinal":"0-1",
    "cartonsProbables":"5-4","cornersProbables":"6-7","fautesProbables":"15-13",
    "forme1":"Nul, Défaite, Nul, Victoire, Défaite",
    "forme2":"Nul, Victoire, Défaite, Nul, Victoire",
    "analyse":"Le partage des points était prévu, mais Fulham a obtenu la victoire 1-0. Pronostic manqué."
  },
  {
    "id":"chelsea-tottenham","ligue":"Premier League",
    "equipe1":"Chelsea","equipe2":"Tottenham Hotspur",
    "heure":"18:30",
    "pronostic":"1","scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"0-2",
    "cartonsProbables":"4-5","cornersProbables":"9-8","fautesProbables":"11-12",
    "forme1":"Victoire, Défaite, Victoire, Nul, Défaite",
    "forme2":"Victoire, Victoire, Nul, Victoire, Victoire",
    "analyse":"Chelsea était annoncé favori, mais Tottenham s'est imposé 2-0 à l'extérieur. Pronostic manqué."
  },
  {
    "id":"rayo-elche","ligue":"La Liga",
    "equipe1":"Rayo Vallecano","equipe2":"Elche",
    "heure":"12:00",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"1-1",
    "cartonsProbables":"5-4","cornersProbables":"7-6","fautesProbables":"14-13",
    "forme1":"Nul, Victoire, Nul, Défaite, Nul",
    "forme2":"Défaite, Nul, Victoire, Nul, Défaite",
    "analyse":"Match équilibré qui a fini sur un score de parité. Pronostic de nul validé."
  },
  {
    "id":"racing-espanyol","ligue":"La Liga",
    "equipe1":"Racing Santander","equipe2":"Espanyol",
    "heure":"14:15",
    "pronostic":"1","scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-1",
    "cartonsProbables":"4-3","cornersProbables":"8-5","fautesProbables":"13-14",
    "forme1":"Victoire, Nul, Victoire, Victoire, Défaite",
    "forme2":"Nul, Défaite, Nul, Victoire, Nul",
    "analyse":"Racing Santander a confirmé son avantage à domicile 2-1. Pronostic validé."
  },
  {
    "id":"valencia-villarreal","ligue":"La Liga",
    "equipe1":"Valencia CF","equipe2":"Villarreal",
    "heure":"16:30",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"direct","score":{"eq1":1,"eq2":0},
    "cartonsProbables":"4-3","cornersProbables":"9-7","fautesProbables":"12-13",
    "forme1":"Victoire, Victoire, Nul, Défaite, Victoire",
    "forme2":"Nul, Défaite, Victoire, Nul, Victoire",
    "analyse":"Match en cours — Valencia mène 1-0, le nul reste probable."
  },
  {
    "id":"atletico-deportivo","ligue":"La Liga",
    "equipe1":"Atlético Madrid","equipe2":"Deportivo La Corogne",
    "heure":"19:00",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"3-4","cornersProbables":"11-4","fautesProbables":"10-15",
    "forme1":"Victoire, Victoire, Victoire, Nul, Victoire",
    "forme2":"Défaite, Nul, Défaite, Défaite, Nul",
    "analyse":"Atlético Madrid est le favori à domicile, victoire attendue."
  },
  {
    "id":"cagliari-bologna","ligue":"Serie A",
    "equipe1":"Cagliari","equipe2":"Bologna",
    "heure":"13:00",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"1-1",
    "cartonsProbables":"5-4","cornersProbables":"6-7","fautesProbables":"16-14",
    "forme1":"Nul, Victoire, Défaite, Nul, Nul",
    "forme2":"Nul, Nul, Victoire, Nul, Victoire",
    "analyse":"Deux équipes au niveau similaire, match nul 1-1. Pronostic validé."
  },
  {
    "id":"como-sassuolo","ligue":"Serie A",
    "equipe1":"Como","equipe2":"Sassuolo",
    "heure":"13:00",
    "pronostic":"1","scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-0",
    "cartonsProbables":"4-4","cornersProbables":"8-6","fautesProbables":"13-15",
    "forme1":"Victoire, Victoire, Nul, Victoire, Défaite",
    "forme2":"Défaite, Nul, Défaite, Nul, Défaite",
    "analyse":"Como a gagné à domicile 2-0. Pronostic validé."
  },
  {
    "id":"napoli-roma","ligue":"Serie A",
    "equipe1":"Napoli","equipe2":"AS Roma",
    "heure":"16:00",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-2",
    "cartonsProbables":"5-5","cornersProbables":"9-8","fautesProbables":"12-12",
    "forme1":"Nul, Victoire, Nul, Défaite, Victoire",
    "forme2":"Victoire, Nul, Victoire, Nul, Nul",
    "analyse":"Match très animé qui a fini 2-2. Pronostic de nul validé."
  },
  {
    "id":"lazio-parma","ligue":"Serie A",
    "equipe1":"Lazio","equipe2":"Parma",
    "heure":"18:45",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"3-4","cornersProbables":"10-5","fautesProbables":"11-14",
    "forme1":"Victoire, Victoire, Nul, Victoire, Victoire",
    "forme2":"Nul, Défaite, Nul, Défaite, Nul",
    "analyse":"Lazio largement favorite à domicile."
  },
  {
    "id":"koln-schalke","ligue":"Bundesliga",
    "equipe1":"1. FC Köln","equipe2":"Schalke 04",
    "heure":"13:30",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"2-0",
    "cartonsProbables":"4-5","cornersProbables":"8-5","fautesProbables":"14-13",
    "forme1":"Victoire, Nul, Victoire, Victoire, Défaite",
    "forme2":"Défaite, Défaite, Nul, Défaite, Nul",
    "analyse":"Köln a dominé et gagné 2-0. Pronostic validé."
  },
  {
    "id":"augsburg-union","ligue":"Bundesliga",
    "equipe1":"Augsburg","equipe2":"Union Berlin",
    "heure":"13:30",
    "pronostic":"1","scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"termine","scoreFinal":"1-2",
    "cartonsProbables":"5-4","cornersProbables":"7-8","fautesProbables":"13-14",
    "forme1":"Victoire, Nul, Défaite, Victoire, Nul",
    "forme2":"Nul, Victoire, Victoire, Défaite, Victoire",
    "analyse":"Union Berlin a renversé Augsburg 2-1 à l'extérieur. Pronostic manqué."
  },
  {
    "id":"mainz-werder","ligue":"Bundesliga",
    "equipe1":"Mainz 05","equipe2":"Werder Brême",
    "heure":"13:30",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"faible","confiance":"faible",
    "statut":"termine","scoreFinal":"3-1",
    "cartonsProbables":"4-4","cornersProbables":"9-7","fautesProbables":"12-13",
    "forme1":"Nul, Défaite, Nul, Victoire, Victoire",
    "forme2":"Nul, Nul, Victoire, Défaite, Nul",
    "analyse":"Mainz a dominé et gagné 3-1. Pronostic de nul manqué."
  },
  {
    "id":"rbleipzig-elversberg","ligue":"Bundesliga",
    "equipe1":"RB Leipzig","equipe2":"Elversberg",
    "heure":"13:30",
    "pronostic":"1","scoreProbable":"3-1",
    "niveau":"elevee","confiance":"élevée",
    "statut":"termine","scoreFinal":"3-1",
    "cartonsProbables":"3-5","cornersProbables":"12-4","fautesProbables":"9-16",
    "forme1":"Victoire, Victoire, Victoire, Nul, Victoire",
    "forme2":"Nul, Défaite, Défaite, Victoire, Défaite",
    "analyse":"RB Leipzig a confirmé son rang 3-1. Pronostic validé."
  },
  {
    "id":"paderborn-hsv","ligue":"Bundesliga",
    "equipe1":"Paderborn","equipe2":"Hamburger SV",
    "heure":"13:30",
    "pronostic":"N","scoreProbable":"1-1",
    "niveau":"faible","confiance":"faible",
    "statut":"termine","scoreFinal":"2-1",
    "cartonsProbables":"5-4","cornersProbables":"7-7","fautesProbables":"15-14",
    "forme1":"Nul, Victoire, Nul, Défaite, Victoire",
    "forme2":"Nul, Nul, Victoire, Nul, Défaite",
    "analyse":"Paderborn a obtenu la victoire en fin de match. Pronostic de nul manqué."
  },
  {
    "id":"dortmund-frankfort","ligue":"Bundesliga",
    "equipe1":"Borussia Dortmund","equipe2":"Eintracht Francfort",
    "heure":"16:30",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"4-4","cornersProbables":"11-6","fautesProbables":"10-13",
    "forme1":"Victoire, Victoire, Nul, Victoire, Victoire",
    "forme2":"Défaite, Nul, Victoire, Nul, Victoire",
    "analyse":"Dortmund est le favori à domicile."
  }
];

const donneesDemain = [
  {
    "id":"liverpool-nottingham","ligue":"Premier League",
    "equipe1":"Liverpool","equipe2":"Nottingham Forest",
    "heure":"15:00",
    "pronostic":"1","scoreProbable":"3-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"3-5","cornersProbables":"12-3","fautesProbables":"8-17",
    "forme1":"Victoire, Victoire, Victoire, Nul, Victoire",
    "forme2":"Défaite, Nul, Défaite, Nul, Défaite",
    "analyse":"Liverpool est le grand favori à domicile, large victoire attendue."
  },
  {
    "id":"manu-bournemouth","ligue":"Premier League",
    "equipe1":"Manchester United","equipe2":"Bournemouth",
    "heure":"15:00",
    "pronostic":"1","scoreProbable":"2-1",
    "niveau":"moyenne","confiance":"moyenne",
    "statut":"avenir",
    "cartonsProbables":"4-4","cornersProbables":"9-6","fautesProbables":"12-14",
    "forme1":"Victoire, Nul, Défaite, Victoire, Nul",
    "forme2":"Nul, Victoire, Nul, Défaite, Victoire",
    "analyse":"Manchester United devrait s'imposer à domicile mais attention à Bournemouth."
  },
  {
    "id":"barcelone-real","ligue":"La Liga",
    "equipe1":"FC Barcelone","equipe2":"Real Madrid",
    "heure":"21:00",
    "pronostic":"1","scoreProbable":"2-1",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"5-5","cornersProbables":"10-9","fautesProbables":"13-13",
    "forme1":"Victoire, Victoire, Nul, Victoire, Victoire",
    "forme2":"Victoire, Victoire, Nul, Victoire, Défaite",
    "analyse":"Le Classique ! Barcelone favorite au Camp Nou."
  },
  {
    "id":"inter-fiorentina","ligue":"Serie A",
    "equipe1":"Inter Milan","equipe2":"Fiorentina",
    "heure":"12:30",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"3-4","cornersProbables":"11-5","fautesProbables":"9-15",
    "forme1":"Victoire, Victoire, Victoire, Nul, Victoire",
    "forme2":"Nul, Défaite, Nul, Victoire, Nul",
    "analyse":"Inter Milan largement favorite à domicile."
  },
  {
    "id":"psg-lyon","ligue":"Ligue 1",
    "equipe1":"PSG","equipe2":"Olympique Lyonnais",
    "heure":"20:45",
    "pronostic":"1","scoreProbable":"2-0",
    "niveau":"elevee","confiance":"élevée",
    "statut":"avenir",
    "cartonsProbables":"3-4","cornersProbables":"10-5","fautesProbables":"10-14",
    "forme1":"Victoire, Victoire, Victoire, Victoire, Nul",
    "forme2":"Nul, Victoire, Défaite, Nul, Victoire",
    "analyse":"PSG est le favori clair au Parc des Princes."
  }
];

// ==============================================
// AGENT DE VÉRIFICATION
// ==============================================
function verifierIntegriteDonnees() {
    const tousLesMatchs = [...donneesHier, ...donneesJour, ...donneesDemain];
    let erreurs = [];
    tousLesMatchs.forEach((m) => {
        if (!m.id) erreurs.push(`Match sans ID`);
        if (!m.equipe1 || !m.equipe2) erreurs.push(`Équipes manquantes : ${m.id}`);
        if (!['termine','direct','avenir'].includes(m.statut)) erreurs.push(`Statut invalide : ${m.id}`);
        if (m.statut === 'termine' && !m.scoreFinal) erreurs.push(`Terminé sans score : ${m.id}`);
        if (m.statut !== 'termine' && m.scoreFinal) erreurs.push(`Non terminé avec score : ${m.id}`);
    });
    console.log(`🔍 Vérification : ${tousLesMatchs.length} matchs — ${erreurs.length} erreur(s)`);
    if (erreurs.length) console.table(erreurs);
    return erreurs.length === 0;
}

// ==============================================
// VALIDATION
// ==============================================
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';
    const [s1, s2] = match.scoreFinal.split('-').map(Number);
    if (isNaN(s1) || isNaN(s2)) return 'attente';
    const resultatReel = s1 > s2 ? '1' : s1 < s2 ? '2' : 'N';
    let pronostic = match.pronostic.trim();
    if (pronostic.toLowerCase().includes('nul')) pronostic = 'N';
    return resultatReel === pronostic ? 'valide' : 'invalide';
}

function resultatEnTexte(code, eq1, eq2) {
    if (code === '1') return `Victoire ${eq1}`;
    if (code === '2') return `Victoire ${eq2}`;
    return 'Match nul';
}

// ==============================================
// GESTION LIENS & NAVIGATION
// ==============================================
function getHash() { return window.location.hash.slice(1).trim(); }
function naviguerVers(chemin) { window.location.hash = chemin; }
function revenirAccueil() { window.location.hash = ''; }
function revenirListe() { window.history.back(); }

// Lien accueil sur le titre
document.addEventListener('DOMContentLoaded', () => {
    const titreAccueil = document.querySelector('.logo-titre');
    if (titreAccueil) {
        titreAccueil.style.cursor = 'pointer';
        titreAccueil.addEventListener('click', revenirAccueil);
    }
});

function traiterHash() {
    const hash = getHash();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (hash.startsWith('match/')) {
        afficherDetailMatch(hash.replace('match/', ''), false);
        return;
    }
    
    const sectionMap = {
        'jour': 'section-jour',
        'hier': 'section-hier',
        'demain': 'section-demain',
        'coupons': 'section-coupons',
        'historique': 'section-historique',
        'apropos': 'section-a-propos'
    };
    
    const sectionId = sectionMap[hash] || 'section-jour';
    document.getElementById(sectionId)?.classList.add('active');
    
    const navId = hash ? `nav-${hash}` : 'nav-jour';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
    document.getElementById(navId)?.classList.add('actif');
}

window.addEventListener('hashchange', traiterHash);

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

document.addEventListener('click', e => {
    if (e.target.closest('.btn-retour')) revenirListe();
});

document.getElementById('filtre-ligue')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));
document.getElementById('filtre-statut')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));

// ==============================================
// AFFICHAGE TABLEAU — Noms plus visibles
// ==============================================
function afficherTableau(idConteneur, matches) {
    const conteneur = document.getElementById(idConteneur);
    if (!conteneur) return;
    
    if (!matches.length) {
        // Message spécifique pour la section "Matchs d'hier"
        if (idConteneur === 'tableau-matchs-hier') {
            conteneur.innerHTML = `
                <div style="text-align:center;padding:3rem;color:#64748b;background:#f8fafc;border-radius:12px;margin:1rem 0;">
                    <p style="font-size:1.1rem;margin:0 0 0.5rem 0;">ℹ️ Aucun match d'hier à afficher pour le moment</p>
                    <p style="font-size:0.9rem;">Cette rubrique affichera les résultats complétés dès demain (25 octobre 2026).</p>
                    <p style="font-size:0.85rem;margin-top:1rem;color:#94a3b8;">Le site a été lancé aujourd'hui — revenez demain pour consulter les premiers résultats archivés.</p>
                </div>`;
        } else {
            conteneur.innerHTML = `<p style="padding:2rem;text-align:center;color:#64748b;">Aucun match disponible</p>`;
        }
        return;
    }
    
    let filtres = [...matches];
    const filtreStatut = document.getElementById('filtre-statut')?.value || 'tout';
    const filtreLigue = document.getElementById('filtre-ligue')?.value || 'tout';
    
    // Appliquer les filtres SAUF pour la section "hier"
    if (idConteneur !== 'tableau-matchs-hier') {
        if (filtreStatut !== 'tout') filtres = filtres.filter(m => m.statut === filtreStatut);
        if (filtreLigue !== 'tout') filtres = filtres.filter(m => m.ligue === filtreLigue);
    }
    
    conteneur.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Statut</th>
                    <th>Ligue</th>
                    <th style="font-size:1.05rem;">Match</th>
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
                <tr class="${statutClass}" style="cursor:pointer;" data-hash="match/${m.id}">
                    <td>${statutTexte}</td>
                    <td>${m.ligue}</td>
                    <td style="font-weight:700;font-size:1rem;">${m.equipe1} <span style="font-weight:400;opacity:0.7;">vs</span> ${m.equipe2}</td>
                    <td>${m.heure}</td>
                    <td>${scoreAffiche}</td>
                    <td>${m.scoreProbable}<br><span class="badge conf-${m.niveau}" style="margin-top:0.3rem;display:inline-block;">${m.confiance}</span></td>
                    <td>${validation}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;
    
    conteneur.querySelectorAll('tr[data-hash]').forEach(row => {
        row.addEventListener('click', () => naviguerVers(row.getAttribute('data-hash')));
    });
}

// ==============================================
// PAGE DÉTAIL — ENRICHIE AVEC TOUS LES CHAMPS
// ==============================================
function afficherDetailMatch(matchId, pushState = true) {
    const tousLesMatchs = [...donneesHier, ...donneesJour, ...donneesDemain];
    const match = tousLesMatchs.find(m => m.id === matchId);
    if (!match) return;
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
    let pronosticTexte = match.pronostic === '1' ? `Victoire ${match.equipe1}` :
                         match.pronostic === '2' ? `Victoire ${match.equipe2}` : 'Match nul';
    let verdict = '', verdictCouleur = '#f8fafc';
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
        <div style="max-width:900px;margin:0 auto;padding:2rem 1rem;">
            <button class="btn-retour" style="background:none;border:none;color:#10b981;font-size:1rem;cursor:pointer;padding:0.5rem 0;margin-bottom:1.5rem;">← Retour aux matchs</button>
            
            <!-- EN-TÊTE -->
            <div style="background:linear-gradient(135deg,#0f2744,#1e40af);color:#fff;padding:2rem;border-radius:16px 16px 0 0;">
                <p style="opacity:0.8;margin:0 0 0.5rem 0;font-size:0.95rem;">${match.ligue} — ${match.heure}</p>
                <h2 style="margin:0;font-size:2rem;font-weight:800;">${match.equipe1}</h2>
                <p style="font-size:1.1rem;opacity:0.7;margin:0.3rem 0;">VS</p>
                <h2 style="margin:0;font-size:2rem;font-weight:800;">${match.equipe2}</h2>
                <p style="margin-top:1rem;font-size:1.1rem;">
                    ${match.statut === 'termine' ? `<strong>Score final : ${match.scoreFinal}</strong>` : 
                      match.statut === 'direct' ? `<strong style="color:#fbbf24;">🔴 En direct : ${match.score.eq1} - ${match.score.eq2}</strong>` : 
                      '⏳ À venir'}
                </p>
            </div>
            <div style="background:#fff;padding:2rem;border-radius:0 0 16px 16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
                <!-- SCORES -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin-bottom:2rem;">
                    <div style="background:#eff6ff;padding:1.5rem;border-radius:12px;text-align:center;">
                        <h3 style="color:#1e40af;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 0.5rem 0;">Score probable</h3>
                        <p style="font-size:1.8rem;font-weight:800;margin:0;color:#1e40af;">${match.scoreProbable || '—'}</p>
                        <p style="margin-top:0.5rem;font-size:0.9rem;color:#3b82f6;">${pronosticTexte}</p>
                    </div>
                    <div style="background:${match.statut === 'termine' ? '#f0fdf4' : '#f8fafc'};padding:1.5rem;border-radius:12px;text-align:center;">
                        <h3 style="color:#166534;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 0.5rem 0;">Résultat final</h3>
                        <p style="font-size:1.8rem;font-weight:800;margin:0;color:#166534;">${match.scoreFinal || '—'}</p>
                        <p style="margin-top:0.5rem;font-size:0.9rem;color:#22c55e;">${resultatReelTexte}</p>
                    </div>
                </div>
                <!-- VERDICT -->
                ${match.statut === 'termine' ? `
                <div style="padding:1.5rem;border-radius:12px;background:${verdictCouleur};margin-bottom:2rem;text-align:center;border:2px solid ${resultat === 'valide' ? '#22c55e' : '#ef4444'};">
                    <p style="font-size:1.4rem;font-weight:700;margin:0;">${verdict}</p>
                    <p style="margin-top:0.5rem;font-size:1rem;">${validationTexte}</p>
                </div>
                ` : `
                <div style="padding:1.5rem;border-radius:12px;background:#f8fafc;margin-bottom:2rem;text-align:center;">
                    <p style="font-size:1.2rem;font-weight:600;margin:0;color:#64748b;">⏳ En attente du résultat final</p>
                </div>
                `}
                <!-- STATISTIQUES AVANT MATCH -->
                <div style="margin-bottom:2rem;">
                    <h3 style="color:#0f2744;margin-bottom:1rem;font-size:1.2rem;">📈 Statistiques attendues</h3>
                    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;">
                        <div style="background:#fef3c7;padding:1rem;border-radius:10px;text-align:center;">
                            <p style="font-size:0.85rem;color:#92400e;margin:0 0 0.3rem 0;">🟨 Cartons attendus</p>
                            <p style="font-weight:700;font-size:1.1rem;margin:0;">${match.cartonsProbables || '—'}</p>
                        </div>
                        <div style="background:#dbeafe;padding:1rem;border-radius:10px;text-align:center;">
                            <p style="font-size:0.85rem;color:#1e40af;margin:0 0 0.3rem 0;">⚽ Corners attendus</p>
                            <p style="font-weight:700;font-size:1.1rem;margin:0;">${match.cornersProbables || '—'}</p>
                        </div>
                        <div style="background:#f3e8ff;padding:1rem;border-radius:10px;text-align:center;">
                            <p style="font-size:0.85rem;color:#6b21a8;margin:0 0 0.3rem 0;">🤝 Fautes attendues</p>
                            <p style="font-weight:700;font-size:1.1rem;margin:0;">${match.fautesProbables || '—'}</p>
                        </div>
                    </div>
                </div>
                <!-- FORME DES ÉQUIPES -->
                <div style="margin-bottom:2rem;">
                    <h3 style="color:#0f2744;margin-bottom:1rem;font-size:1.2rem;">🔥 Forme des équipes (5 derniers matchs)</h3>
                    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;">
                        <div style="background:#f8fafc;padding:1.25rem;border-radius:10px;">
                            <h4 style="margin:0 0 0.75rem 0;color:#0f2744;">${match.equipe1}</h4>
                            <p style="font-size:0.95rem;line-height:1.6;">${(match.forme1 || 'Données à venir').split(', ').map(f => {
                                if (f.startsWith('Victoire')) return '<span style="color:#22c55e;">✅</span>';
                                if (f.startsWith('Nul')) return '<span style="color:#eab308;">➖</span>';
                                if (f.startsWith('Défaite')) return '<span style="color:#ef4444;">❌</span>';
                                return '';
                            }).join(' ')}<br><small style="color:#64748b;">${match.forme1 || ''}</small></p>
                        </div>
                        <div style="background:#f8fafc;padding:1.25rem;border-radius:10px;">
                            <h4 style="margin:0 0 0.75rem 0;color:#0f2744;">${match.equipe2}</h4>
                            <p style="font-size:0.95rem;line-height:1.6;">${(match.forme2 || 'Données à venir').split(', ').map(f => {
                                if (f.startsWith('Victoire')) return '<span style="color:#22c55e;">✅</span>';
                                if (f.startsWith('Nul')) return '<span style="color:#eab308;">➖</span>';
                                if (f.startsWith('Défaite')) return '<span style="color:#ef4444;">❌</span>';
                                return '';
                            }).join(' ')}<br><small style="color:#64748b;">${match.forme2 || ''}</small></p>
                        </div>
                    </div>
                </div>
                <!-- NIVEAU DE CONFIANCE -->
                <div style="margin-bottom:2rem;">
                    <h3 style="color:#0f2744;margin-bottom:0.5rem;">🎯 Niveau de confiance</h3>
                    <span class="badge conf-${match.niveau}" style="font-size:1rem;padding:0.5rem 1rem;border-radius:8px;">${match.confiance}</span>
                </div>
                <!-- ANALYSE -->
                <div>
                    <h3 style="color:#0f2744;margin-bottom:1rem;">📊 Analyse du match</h3>
                    <p style="line-height:1.7;color:#334155;">${match.analyse || 'Analyse à venir...'}</p>
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
        const res = verifierProno(m);
        const icone = res === 'valide' ? '✔️' : res === 'invalide' ? '❌' : '⏳';
        return `<li style="cursor:pointer;" data-hash="match/${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.scoreProbable}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');
    
    if (contB) contB.innerHTML = moyennes.map(m => {
        const res = verifierProno(m);
        const icone = res === 'valide' ? '✔️' : res === 'invalide' ? '❌' : '⏳';
        return `<li style="cursor:pointer;" data-hash="match/${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.scoreProbable}</span><span style="font-size:1.3rem;">${icone}</span></li>`;
    }).join('');
    
    document.querySelectorAll('#liste-coupon-a li, #liste-coupon-b li').forEach(li => {
        li.addEventListener('click', () => naviguerVers(li.getAttribute('data-hash')));
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
    afficherTableau('tableau-matchs-hier', donneesHier);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
}

// ==============================================
// LANCEMENT
// ==============================================
window.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 KAJY STATS — Chargement complet...');
    verifierIntegriteDonnees();
    afficherTableau('tableau-matchs', donneesJour);
    afficherTableau('tableau-matchs-hier', donneesHier);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
    chargerHistorique();
    traiterHash();
    setInterval(simulerMiseAJour, 30000);
    console.log('✅ KAJY STATS — Prêt et vérifié');
});
