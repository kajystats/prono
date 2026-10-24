// ==============================================
// DONNÉES
// ==============================================
// Heures en UTC. `date` au format AAAA-MM-JJ.
// Les scores / statuts ci-dessous ont été vérifiés contre une source de scores réelle
// le 24/10/2026 vers 17h47 UTC. Ils ne sont PAS mis à jour tout seuls :
// c'est le rôle de l'agent (voir CONFIG_AGENT plus bas).
const DATE_JOUR = '2026-10-24';
const DATE_DEMAIN = '2026-10-25';
const SNAPSHOT = 'verifie-2026-10-24-17h47-UTC';

const donneesJour = [
  {"id":"aston-mancity","date":DATE_JOUR,"ligue":"Premier League","equipe1":"Aston Villa","equipe2":"Man City","heure":"11:30","pronostic":"2","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1"},
  {"id":"arsenal-everton","date":DATE_JOUR,"ligue":"Premier League","equipe1":"Arsenal","equipe2":"Everton","heure":"14:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"2-0"},
  {"id":"coventry-fulham","date":DATE_JOUR,"ligue":"Premier League","equipe1":"Coventry","equipe2":"Fulham","heure":"14:00","pronostic":"N","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"0-1"},
  {"id":"chelsea-tottenham","date":DATE_JOUR,"ligue":"Premier League","equipe1":"Chelsea","equipe2":"Tottenham","heure":"16:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":0,"eq2":0}},
  {"id":"rayo-elche","date":DATE_JOUR,"ligue":"La Liga","equipe1":"Rayo Vallecano","equipe2":"Elche","heure":"12:00","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"0-3"},
  {"id":"racing-espanyol","date":DATE_JOUR,"ligue":"La Liga","equipe1":"Racing Santander","equipe2":"Espanyol","heure":"14:15","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1"},
  {"id":"valencia-villarreal","date":DATE_JOUR,"ligue":"La Liga","equipe1":"Valencia","equipe2":"Villarreal","heure":"16:30","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":1,"eq2":0}},
  {"id":"atletico-deportivo","date":DATE_JOUR,"ligue":"La Liga","equipe1":"Atlético Madrid","equipe2":"Deportivo La Corogne","heure":"19:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Atlético est le favori clair à domicile."},
  {"id":"cagliari-bologna","date":DATE_JOUR,"ligue":"Serie A","equipe1":"Cagliari","equipe2":"Bologna","heure":"13:00","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"0-2"},
  {"id":"como-sassuolo","date":DATE_JOUR,"ligue":"Serie A","equipe1":"Como","equipe2":"Sassuolo","heure":"13:00","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-0"},
  {"id":"napoli-roma","date":DATE_JOUR,"ligue":"Serie A","equipe1":"Napoli","equipe2":"Roma","heure":"16:00","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":3,"eq2":2}},
  {"id":"lazio-parma","date":DATE_JOUR,"ligue":"Serie A","equipe1":"Lazio","equipe2":"Parma","heure":"18:45","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Lazio largement favorite à domicile."},
  {"id":"koln-schalke","date":DATE_JOUR,"ligue":"Bundesliga","equipe1":"Köln","equipe2":"Schalke 04","heure":"13:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"0-0"},
  {"id":"augsburg-union","date":DATE_JOUR,"ligue":"Bundesliga","equipe1":"Augsburg","equipe2":"Union Berlin","heure":"13:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1"},
  {"id":"mainz-werder","date":DATE_JOUR,"ligue":"Bundesliga","equipe1":"Mainz 05","equipe2":"Werder Brême","heure":"13:30","pronostic":"N","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"2-3"},
  {"id":"rbleipzig-elversberg","date":DATE_JOUR,"ligue":"Bundesliga","equipe1":"RB Leipzig","equipe2":"Elversberg","heure":"13:30","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"4-0"},
  {"id":"paderborn-hsv","date":DATE_JOUR,"ligue":"Bundesliga","equipe1":"Paderborn","equipe2":"HSV","heure":"13:30","pronostic":"N","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"1-0"},
  {"id":"dortmund-frankfort","date":DATE_JOUR,"ligue":"Bundesliga","equipe1":"Dortmund","equipe2":"Eintracht Francfort","heure":"16:30","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"direct","score":{"eq1":0,"eq2":0}}
];

// ⚠️ À CORRIGER PAR TOI : ces 5 affiches n'existent pas à ces dates dans la source de scores
// consultée le 24/10/2026 (vérification faite sur PL, Liga, Serie A, Bundesliga, Ligue 1).
// Affiches réelles du 25/10 vues dans cette source :
//   PL : Crystal Palace–Newcastle, Hull–Brentford, Liverpool–Brighton (14:00), Man Utd–Bournemouth (14:00), Sunderland–Leeds (16:30)
//   Liga : Athletic–Getafe (13:00), Celta–Betis (15:15), Real Sociedad–Levante (17:30), Barcelone–Real Madrid (20:00)
//   Serie A : Inter–Fiorentina (11:30), Atalanta–Frosinone, Genoa–Venezia (14:00), Lecce–Juventus (17:00), Udinese–Milan (19:45)
//   Ligue 1 : Monaco–Lille (14:00), Angers–Lorient, Auxerre–Le Mans, Marseille–Le Havre, Rennes–Strasbourg, Toulouse–Troyes (16:15)
//   Bundesliga : Hoffenheim–Leverkusen (14:30), Freiburg–Bayern (16:30)
//   (PSG–Lyon est le 26/10 à 19:30.)
const MSG_AFFICHE = "Affiche introuvable à cette date dans la source de scores (vérifié le 24/10/2026). À corriger.";
const donneesDemain = [
  {"id":"liverpool-nottingham","date":DATE_DEMAIN,"ligue":"Premier League","equipe1":"Liverpool","equipe2":"Nottingham","heure":"13:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Liverpool est le grand favori à domicile.","alerteSource":MSG_AFFICHE},
  {"id":"manu-leicester","date":DATE_DEMAIN,"ligue":"Premier League","equipe1":"Man Utd","equipe2":"Leicester","heure":"15:30","pronostic":"1","niveau":"moyenne","confiance":"moyenne","statut":"avenir","analyse":"Man Utd devrait s'imposer mais attention à la forme de Leicester.","alerteSource":MSG_AFFICHE},
  {"id":"barcelone-seville","date":DATE_DEMAIN,"ligue":"La Liga","equipe1":"Barcelone","equipe2":"Séville","heure":"17:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Barcelone largement favorite au Camp Nou.","alerteSource":MSG_AFFICHE},
  {"id":"inter-juventus","date":DATE_DEMAIN,"ligue":"Serie A","equipe1":"Inter Milan","equipe2":"Juventus","heure":"20:45","pronostic":"N","niveau":"moyenne","confiance":"moyenne","statut":"avenir","analyse":"Le classique italien s'annonce très serré.","alerteSource":MSG_AFFICHE},
  {"id":"psg-marseille","date":DATE_DEMAIN,"ligue":"Ligue 1","equipe1":"PSG","equipe2":"Marseille","heure":"21:00","pronostic":"1","niveau":"elevee","confiance":"élevée","statut":"avenir","analyse":"Le PSG est le favori au Parc des Princes.","alerteSource":MSG_AFFICHE}
];

// Les matchs terminés ci-dessus ont été lus comme « final » dans la source réelle : on les verrouille.
// Sans verrouillage, verifierProno() renvoie « non-confirmé » et ne compte pas le match.
donneesJour.forEach(m => {
    if (m.statut === 'termine') { m.verrouille = true; m.source = SNAPSHOT; }
});

// ==============================================
// OUTILS COMMUNS
// ==============================================
function echapper(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function parserScore(texte) {
    const m = /^\s*(\d{1,2})\s*[-–:]\s*(\d{1,2})\s*$/.exec(String(texte ?? ''));
    return m ? { s1: Number(m[1]), s2: Number(m[2]) } : null;
}

function resultatDepuisScore(sc) {
    return sc.s1 > sc.s2 ? '1' : sc.s1 < sc.s2 ? '2' : 'N';
}

// Retourne '1', 'N', '2' ou null si le pronostic n'est pas reconnu (au lieu de le compter faux en silence)
function normaliserPronostic(p) {
    const s = String(p ?? '').trim().toUpperCase();
    if (s === 'N' || s === 'X' || s.startsWith('NUL')) return 'N';
    const m = /^([12])(?:\s*-.*)?$/.exec(s);
    return m ? m[1] : null;
}

// ==============================================
// RÈGLE DE VALIDATION : UNIQUEMENT RÉSULTAT FINAL (1/N/2)
// ==============================================
// 'attente' | 'valide' | 'invalide' | 'non-confirme' (terminé mais pas verrouillé par l'agent) | 'erreur' (données illisibles)
function verifierProno(match) {
    if (!match || match.statut !== 'termine') return 'attente';
    const score = parserScore(match.scoreFinal);
    if (!score) return 'erreur';
    if (match.verrouille !== true) return 'non-confirme';
    const prono = normaliserPronostic(match.pronostic);
    if (!prono) return 'erreur';
    return resultatDepuisScore(score) === prono ? 'valide' : 'invalide';
}

// ==============================================
// AGENT DE RÉSULTATS FINAUX
// ==============================================
// Rôle : récupérer les scores auprès d'une (ou deux) source(s), les contrôler, et ne
// « verrouiller » un résultat final que s'il passe tous les contrôles :
//   1. l'enregistrement est valide (statut connu, scores entiers 0-30)
//   2. le match est bien identifié (équipes + date, domicile/extérieur dans le bon sens)
//   3. le statut « final » n'arrive pas avant coup d'envoi + 90 min
//   4. le même score final est lu N fois de suite (confirmationsFinal, 2 par défaut)
//   5. si plusieurs sources sont configurées, elles doivent toutes être d'accord
// Un score verrouillé n'est modifié que si la source donne N fois de suite un autre score final.
//
// Contrat d'une source : un tableau JSON de
//   { "equipe1": "Arsenal", "equipe2": "Everton", "date": "2026-10-24",
//     "statut": "scheduled" | "in_progress" | "final", "score1": 2, "score2": 0 }
// (equipe1 = domicile). Si ton API a un autre format, fournis un `adapter(json)` qui le convertit.
// Depuis un navigateur, la plupart des API de scores exigent une clé et bloquent le CORS :
// pointe plutôt vers un petit endpoint de ton côté (proxy) qui renvoie ce format.
const CONFIG_AGENT = {
    intervalleMs: 60000,
    timeoutMs: 10000,
    confirmationsFinal: 2,
    minutesMinAvantFinal: 90,
    minutesToleranceAvantCoupEnvoi: 5,
    exigerDeuxSources: false,
    // Exemple :
    // sources: [{ nom: 'principale', url: '/api/resultats' }, { nom: 'secours', url: '/api/resultats-2', adapter: j => j.matches.map(...) }]
    sources: []
};

const etatAgent = { suivi: {}, dernierRapport: null, enCours: false };

// Alias : chaque ligne = un même club écrit de différentes façons (noms FR / EN / officiels)
const GROUPES_ALIAS = [
    ['aston villa'], ['man city', 'manchester city'], ['arsenal', 'arsenal fc'], ['everton', 'everton fc'],
    ['coventry', 'coventry city'], ['fulham', 'fulham fc'], ['chelsea', 'chelsea fc'],
    ['tottenham', 'tottenham hotspur', 'spurs'], ['liverpool', 'liverpool fc'],
    ['nottingham', 'nottingham forest'], ['man utd', 'manchester united', 'man united'], ['leicester', 'leicester city'],
    ['rayo vallecano', 'rayo'], ['elche', 'elche cf'], ['racing santander', 'racing'],
    ['espanyol', 'espanyol barcelona'], ['valencia', 'valencia cf'], ['villarreal', 'villarreal cf'],
    ['atletico madrid', 'atletico'], ['deportivo la corogne', 'deportivo la coruna', 'rc deportivo de a coruna', 'deportivo'],
    ['barcelone', 'barcelona', 'fc barcelona'], ['seville', 'sevilla', 'sevilla fc'],
    ['cagliari', 'cagliari calcio'], ['bologna', 'bologna fc'], ['como', 'como 1907'],
    ['sassuolo', 'sassuolo calcio'], ['napoli', 'ssc napoli'], ['roma', 'as roma'],
    ['lazio', 'lazio rome'], ['parma', 'parma calcio'], ['inter milan', 'inter milano', 'inter'],
    ['juventus', 'juventus turin', 'juve'],
    ['koln', 'cologne', '1 fc cologne', '1 fc koln', 'fc koln'], ['schalke 04', 'schalke'],
    ['augsburg', 'fc augsburg'], ['union berlin'], ['mainz 05', 'mainz', 'fsv mainz', 'fsv mainz 05'],
    ['werder breme', 'werder bremen'], ['rb leipzig', 'leipzig'], ['elversberg', 'sv 07 elversberg', 'sv elversberg'],
    ['paderborn', 'sc paderborn 07'], ['hsv', 'hamburger sv', 'hamburg'],
    ['dortmund', 'borussia dortmund'], ['eintracht francfort', 'eintracht frankfurt'],
    ['psg', 'paris saint germain', 'paris saint-germain'], ['marseille', 'olympique marseille', 'om']
];

function normaliserNom(nom) {
    return String(nom ?? '').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

const INDEX_ALIAS = {};
GROUPES_ALIAS.forEach(g => g.forEach(a => { INDEX_ALIAS[normaliserNom(a)] = normaliserNom(g[0]); }));

// Un nom inconnu reste tel quel (normalisé) : il ne « ressemble » donc jamais à un autre club par erreur.
function cleEquipe(nom) {
    const n = normaliserNom(nom);
    return INDEX_ALIAS[n] || n;
}

function validerEnregistrement(r) {
    const erreurs = [];
    if (!r || typeof r !== 'object') return { ok: false, erreurs: ['enregistrement illisible'] };
    if (!r.equipe1 || !r.equipe2) erreurs.push('équipes manquantes');
    if (!/^\d{4}-\d{2}-\d{2}/.test(String(r.date ?? ''))) erreurs.push('date invalide');
    if (!['scheduled', 'in_progress', 'final'].includes(r.statut)) erreurs.push('statut inconnu : ' + r.statut);
    const entier = v => Number.isInteger(v) && v >= 0 && v <= 30;
    if ((r.statut === 'in_progress' || r.statut === 'final') && !(entier(r.score1) && entier(r.score2))) erreurs.push('score invalide');
    return { ok: erreurs.length === 0, erreurs };
}

function coupEnvoi(match) {
    return Date.parse(`${match.date}T${match.heure}:00Z`);
}

function trouverCorrespondance(match, enregistrements) {
    const k1 = cleEquipe(match.equipe1), k2 = cleEquipe(match.equipe2);
    const directs = [], inverses = [];
    for (const r of enregistrements) {
        if (String(r.date ?? '').slice(0, 10) !== match.date) continue;
        const r1 = cleEquipe(r.equipe1), r2 = cleEquipe(r.equipe2);
        if (r1 === k1 && r2 === k2) directs.push(r);
        else if (r1 === k2 && r2 === k1) inverses.push(r);
    }
    if (directs.length === 1) return { type: 'ok', enregistrement: directs[0] };
    if (directs.length > 1) return { type: 'ambigu' };
    if (inverses.length) return { type: 'inverse' };
    return { type: 'absent' };
}

function consolider(recs) {
    const ref = recs[0];
    const concordent = recs.every(r => r.statut === ref.statut &&
        (ref.statut === 'scheduled' || (r.score1 === ref.score1 && r.score2 === ref.score2)));
    return concordent ? { ok: true, rec: ref } : { ok: false };
}

function appliquerLecture(match, rec, maintenant, cfg, verrouillagePermis = true) {
    const coup = coupEnvoi(match);
    const etat = etatAgent.suivi[match.id] || (etatAgent.suivi[match.id] = { finalScore: null, finalN: 0, divScore: null, divN: 0 });
    const texte = `${rec.score1}-${rec.score2}`;

    // Match déjà verrouillé : on ne le touche que pour une correction confirmée
    if (match.verrouille) {
        if (rec.statut === 'final' && texte !== match.scoreFinal) {
            if (etat.divScore === texte) etat.divN++; else { etat.divScore = texte; etat.divN = 1; }
            if (etat.divN >= cfg.confirmationsFinal && verrouillagePermis) {
                const ancien = match.scoreFinal;
                match.scoreFinal = texte;
                etat.divScore = null; etat.divN = 0;
                return { action: 'correction', detail: `${ancien} → ${texte}` };
            }
            return { action: 'alerte', detail: `score final divergent (gardé ${match.scoreFinal}, source ${texte}) — en attente de confirmation` };
        }
        etat.divScore = null; etat.divN = 0;
        return { action: 'inchange' };
    }

    if (rec.statut === 'scheduled') return { action: 'inchange' };

    if (maintenant < coup - cfg.minutesToleranceAvantCoupEnvoi * 60000) {
        return { action: 'rejete', detail: 'statut « en cours/final » avant le coup d\'envoi' };
    }

    if (rec.statut === 'in_progress') {
        match.statut = 'direct';
        match.score = { eq1: rec.score1, eq2: rec.score2 };
        delete match.scoreFinal;
        match.enAttenteConfirmation = false;
        etat.finalScore = null; etat.finalN = 0;
        return { action: 'direct', detail: texte };
    }

    // rec.statut === 'final'
    if (maintenant < coup + cfg.minutesMinAvantFinal * 60000) {
        return { action: 'rejete', detail: `« final » reçu moins de ${cfg.minutesMinAvantFinal} min après le coup d'envoi` };
    }
    if (!verrouillagePermis) {
        return { action: 'alerte', detail: 'verrouillage suspendu (deux sources exigées)' };
    }
    if (etat.finalScore === texte) etat.finalN++; else { etat.finalScore = texte; etat.finalN = 1; }
    if (etat.finalN >= cfg.confirmationsFinal) {
        match.statut = 'termine';
        match.scoreFinal = texte;
        delete match.score;
        match.verrouille = true;
        match.enAttenteConfirmation = false;
        match.source = 'agent';
        return { action: 'verrouille', detail: texte };
    }
    match.statut = 'direct';
    match.score = { eq1: rec.score1, eq2: rec.score2 };
    match.enAttenteConfirmation = true;
    return { action: 'attente-confirmation', detail: `${etat.finalN}/${cfg.confirmationsFinal}` };
}

async function lireSource(source, cfg) {
    let brut;
    if (typeof source.charger === 'function') {
        brut = await source.charger();
    } else {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), cfg.timeoutMs);
        try {
            const r = await fetch(source.url, { signal: ctrl.signal, cache: 'no-store' });
            if (!r.ok) throw new Error('HTTP ' + r.status);
            brut = await r.json();
        } finally { clearTimeout(t); }
    }
    const liste = typeof source.adapter === 'function' ? source.adapter(brut) : brut;
    if (!Array.isArray(liste)) throw new Error('format inattendu (tableau attendu)');
    const valides = liste.filter(r => validerEnregistrement(r).ok);
    if (valides.length < liste.length) console.warn(`[agent] ${liste.length - valides.length} enregistrement(s) ignoré(s) car invalides`);
    if (liste.length && !valides.length) throw new Error('aucun enregistrement valide');
    return valides;
}

async function executerAgent(options = {}) {
    const cfg = { ...CONFIG_AGENT, ...options };
    const maintenant = options.maintenant ?? Date.now();
    const matchs = options.matchs ?? [...donneesJour, ...donneesDemain];
    const rapport = { heure: new Date(maintenant).toISOString(), sourcesOk: 0, sourcesKo: 0, actions: [], alertes: [] };
    etatAgent.dernierRapport = rapport;

    if (!cfg.sources.length) {
        rapport.alertes.push('Aucune source de résultats configurée : les scores ne sont pas actualisés.');
        return rapport;
    }

    const lectures = await Promise.allSettled(cfg.sources.map(s => lireSource(s, cfg)));
    const jeux = [];
    lectures.forEach((l, i) => {
        const nom = cfg.sources[i].nom || `source${i + 1}`;
        if (l.status === 'fulfilled') { rapport.sourcesOk++; jeux.push({ nom, recs: l.value }); }
        else { rapport.sourcesKo++; rapport.alertes.push(`${nom} : ${l.reason?.message || l.reason}`); }
    });
    if (rapport.sourcesOk === 0) return rapport;

    const verrouillagePermis = !cfg.exigerDeuxSources || rapport.sourcesOk >= 2;
    if (!verrouillagePermis) rapport.alertes.push('Deux sources sont exigées mais une seule répond : aucun résultat final ne sera verrouillé.');

    for (const m of matchs) {
        const trouves = [];
        let inverse = 0, ambigu = 0;
        for (const jeu of jeux) {
            const c = trouverCorrespondance(m, jeu.recs);
            if (c.type === 'ok') trouves.push(c.enregistrement);
            else if (c.type === 'inverse') inverse++;
            else if (c.type === 'ambigu') ambigu++;
        }
        if (!trouves.length) {
            const sourceCouvreLaDate = jeux.some(j => j.recs.some(r => String(r.date).slice(0, 10) === m.date));
            if (sourceCouvreLaDate) {
                m.alerteSource = inverse ? 'Domicile/extérieur inversé dans la source : vérifier l\'affiche'
                    : ambigu ? 'Plusieurs correspondances dans la source : vérifier l\'affiche'
                    : MSG_AFFICHE;
                rapport.alertes.push(`${m.id} : ${m.alerteSource}`);
            }
            continue;
        }
        if (inverse || ambigu) {
            m.alerteSource = 'Les sources ne sont pas d\'accord sur l\'affiche';
            rapport.alertes.push(`${m.id} : ${m.alerteSource}`);
            continue;
        }
        delete m.alerteSource;
        const cons = consolider(trouves);
        if (!cons.ok) {
            rapport.alertes.push(`${m.id} : sources en désaccord sur le score/statut — aucune mise à jour`);
            continue;
        }
        const res = appliquerLecture(m, cons.rec, maintenant, cfg, verrouillagePermis);
        rapport.actions.push({ id: m.id, ...res });
    }
    return rapport;
}

// ==============================================
// ANALYSE AUTOMATIQUE (jamais de texte écrit à la main pour un match commencé)
// ==============================================
function analyseAuto(m) {
    if (m.statut === 'avenir') return m.analyse || 'Analyse à venir…';
    const brut = m.statut === 'termine' ? m.scoreFinal : (m.score ? `${m.score.eq1}-${m.score.eq2}` : null);
    const sc = parserScore(brut);
    if (!sc) return 'Score indisponible.';
    const reel = resultatDepuisScore(sc);
    const nomReel = reel === '1' ? `victoire de ${m.equipe1}` : reel === '2' ? `victoire de ${m.equipe2}` : 'match nul';
    if (m.statut === 'direct') return `Match en cours — score actuel ${sc.s1}-${sc.s2} (${nomReel} à cet instant). Rien n'est définitif.`;
    const v = verifierProno(m);
    const verdict = v === 'valide' ? 'Le pronostic est confirmé.' : v === 'invalide' ? 'Le pronostic est manqué.' : 'Résultat pas encore confirmé.';
    return `Score final ${sc.s1}-${sc.s2} — ${nomReel}. ${verdict}`;
}

// ==============================================
// AFFICHAGE
// ==============================================
let idDetailOuvert = null;

function badgeValidation(res) {
    return ({
        valide: '<span class="badge-valide">✔️ Correct</span>',
        invalide: '<span class="badge-invalide">❌ Manqué</span>',
        'non-confirme': '<span class="badge-attente">🔓 Non confirmé</span>',
        erreur: '<span class="badge-invalide">⚠️ Données invalides</span>'
    })[res] || '<span class="badge-attente">⏳ En attente</span>';
}

function iconeValidation(res) {
    return ({ valide: '✔️', invalide: '❌', erreur: '⚠️', 'non-confirme': '🔓' })[res] || '⏳';
}

function afficherTableau(idConteneur, matches, opts = {}) {
    const conteneur = document.getElementById(idConteneur);
    if (!conteneur) return;
    if (!matches || matches.length === 0) {
        conteneur.innerHTML = `<p style="padding:2rem;text-align:center;color:#64748b;">Aucun match disponible</p>`;
        return;
    }

    let filtres = [...matches];
    if (opts.filtrer) {   // les filtres ne concernent que le tableau principal
        const filtreStatut = document.getElementById('filtre-statut')?.value || 'tout';
        const filtreLigue = document.getElementById('filtre-ligue')?.value || 'tout';
        if (filtreStatut !== 'tout') filtres = filtres.filter(m => m.statut === filtreStatut);
        if (filtreLigue !== 'tout') filtres = filtres.filter(m => m.ligue === filtreLigue);
    }

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
                }[m.statut] || '';

                let scoreAffiche = '<span style="color:#94a3b8;">—</span>';
                if (m.statut === 'direct' && m.score) {
                    scoreAffiche = `<span class="score-affiche">${Number(m.score.eq1)} - ${Number(m.score.eq2)}</span>`;
                } else if (m.statut === 'termine' && m.scoreFinal) {
                    scoreAffiche = `<span class="score-affiche" style="font-weight:700;color:#0f2744;">${echapper(m.scoreFinal)}</span>`;
                }
                const alerte = m.alerteSource ? ` <span title="${echapper(m.alerteSource)}" style="cursor:help;">⚠️</span>` : '';

                return `
                <tr class="${statutClass}" style="cursor:pointer;" data-match-id="${echapper(m.id)}">
                    <td>${statutTexte}</td>
                    <td>${echapper(m.ligue)}</td>
                    <td><strong>${echapper(m.equipe1)}</strong> – ${echapper(m.equipe2)}${alerte}</td>
                    <td>${echapper(m.heure)}</td>
                    <td>${scoreAffiche}</td>
                    <td>${echapper(m.pronostic)}<br><span class="badge conf-${echapper(m.niveau)}" style="margin-top:0.3rem;display:inline-block;">${echapper(m.confiance)}</span></td>
                    <td style="font-weight:700;">${badgeValidation(resultat)}</td>
                </tr>`;
            }).join('')}
            </tbody>
        </table>`;

    conteneur.querySelectorAll('tr[data-match-id]').forEach(row => {
        row.addEventListener('click', () => afficherDetailMatch(row.getAttribute('data-match-id')));
    });
}

function creerSectionDetail() {
    const section = document.createElement('section');
    section.id = 'section-detail';
    section.className = 'page';
    document.querySelector('main').appendChild(section);
    return section;
}

function afficherDetailMatch(matchId) {
    const match = [...donneesJour, ...donneesDemain].find(m => m.id === matchId);
    if (!match) return;
    idDetailOuvert = matchId;

    const resultat = verifierProno(match);
    const sc = parserScore(match.scoreFinal);
    let resultatReelTexte = '—';
    if (match.statut === 'termine' && sc) {
        const r = resultatDepuisScore(sc);
        resultatReelTexte = r === '1' ? `Victoire ${match.equipe1}` : r === '2' ? `Victoire ${match.equipe2}` : 'Match nul';
    }

    const prono = normaliserPronostic(match.pronostic);
    const pronosticTexte = prono === '1' ? `Victoire ${match.equipe1}` : prono === '2' ? `Victoire ${match.equipe2}` : prono === 'N' ? 'Match nul' : match.pronostic;

    const enteteScore = match.statut === 'termine' ? `<strong>Score final : ${echapper(match.scoreFinal)}</strong>`
        : match.statut === 'direct' && match.score ? `<strong style="color:#fbbf24;">🔴 En direct : ${Number(match.score.eq1)} - ${Number(match.score.eq2)}</strong>`
        : '⏳ À venir';
    const avertissement = match.alerteSource
        ? `<p style="margin:0 0 1.5rem 0;padding:0.8rem 1rem;border-radius:8px;background:#fffbeb;color:#92400e;">⚠️ ${echapper(match.alerteSource)}</p>` : '';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const sectionDetail = document.getElementById('section-detail') || creerSectionDetail();

    sectionDetail.innerHTML = `
        <div style="max-width:800px;margin:0 auto;padding:2rem 1rem;">
            <button class="btn-retour" style="background:none;border:none;color:#10b981;font-size:1rem;cursor:pointer;padding:0.5rem 0;margin-bottom:1.5rem;">← Retour aux matchs</button>
            <div style="background:#fff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden;">
                <div style="background:linear-gradient(135deg,#0f2744,#1e40af);color:#fff;padding:2rem;">
                    <p style="opacity:0.8;margin:0 0 0.5rem 0;font-size:0.95rem;">${echapper(match.ligue)} — ${echapper(match.heure)} UTC</p>
                    <h2 style="margin:0;font-size:1.8rem;">${echapper(match.equipe1)} <span style="opacity:0.6;">vs</span> ${echapper(match.equipe2)}</h2>
                    <p style="margin-top:1rem;font-size:1.1rem;">${enteteScore}</p>
                </div>
                <div style="padding:2rem;">
                    ${avertissement}
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem;">
                        <div>
                            <h3 style="color:#64748b;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Pronostic</h3>
                            <p style="font-size:1.3rem;font-weight:700;margin:0;">${echapper(pronosticTexte)}</p>
                            <span class="badge conf-${echapper(match.niveau)}" style="margin-top:0.5rem;display:inline-block;">${echapper(match.confiance)}</span>
                        </div>
                        <div>
                            <h3 style="color:#64748b;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.5rem;">Résultat réel</h3>
                            <p style="font-size:1.3rem;font-weight:700;margin:0;">${echapper(resultatReelTexte)}</p>
                        </div>
                    </div>
                    <div style="padding:1.5rem;border-radius:12px;background:${resultat === 'valide' ? '#f0fdf4' : resultat === 'invalide' ? '#fef2f2' : '#f8fafc'};margin-bottom:2rem;text-align:center;">
                        <h3 style="margin:0 0 0.5rem 0;font-size:1rem;color:#475569;">Validation</h3>
                        <p style="font-size:1.5rem;font-weight:700;margin:0;">${badgeValidation(resultat)}</p>
                        <p style="margin-top:0.5rem;font-size:0.9rem;color:#64748b;">Seul le résultat final compte (victoire / nul)</p>
                    </div>
                    <div>
                        <h3 style="color:#0f2744;margin-bottom:1rem;">📊 Analyse du match</h3>
                        <p style="line-height:1.7;color:#334155;">${echapper(analyseAuto(match))}</p>
                    </div>
                </div>
            </div>
        </div>`;
    sectionDetail.classList.add('active');
}

// ==============================================
// STATISTIQUES GLOBALES
// ==============================================
function calculerStats(matchs) {
    const termines = matchs.filter(m => m.statut === 'termine');
    const valides = matchs.filter(m => verifierProno(m) === 'valide');
    const invalides = matchs.filter(m => verifierProno(m) === 'invalide');
    const enDirect = matchs.filter(m => m.statut === 'direct');
    const nbJuges = valides.length + invalides.length;   // seuls les résultats verrouillés comptent
    const taux = nbJuges > 0 ? Math.round((valides.length / nbJuges) * 100) : null;
    return { termines, valides, invalides, enDirect, nbJuges, taux };
}

function mettreAJourResume() {
    const stats = calculerStats(donneesJour);
    const elDirect = document.getElementById('nb-en-direct');
    const elTermine = document.getElementById('nb-termines');
    const elTaux = document.getElementById('taux-reussite');
    const elTotalMatchs = document.getElementById('total-matchs');
    const elTotalReussi = document.getElementById('total-reussi');
    const elTauxGlobal = document.getElementById('taux-global');
    const tauxTexte = stats.taux === null ? '—' : `${stats.taux}%`;   // 0 % s'affiche bien « 0% »

    if (elDirect) elDirect.innerHTML = `🔴 En direct : <strong>${stats.enDirect.length}</strong>`;
    if (elTermine) elTermine.innerHTML = `✅ Terminés : <strong>${stats.termines.length}</strong>`;
    if (elTaux) elTaux.innerHTML = `🎯 Taux : <strong>${tauxTexte}</strong>`;
    if (elTotalMatchs) elTotalMatchs.textContent = donneesJour.length;
    if (elTotalReussi) elTotalReussi.textContent = stats.valides.length;
    if (elTauxGlobal) elTauxGlobal.textContent = stats.taux === null ? '— %' : `${stats.taux}%`;
}

// ==============================================
// COUPONS
// ==============================================
function genererCoupons() {
    const elevees = donneesJour.filter(m => m.niveau === 'elevee').slice(0, 5);
    const moyennes = donneesJour.filter(m => m.niveau === 'moyenne').slice(0, 5);
    const ligne = m => `<li style="cursor:pointer;" data-match-id="${echapper(m.id)}"><span><strong>${echapper(m.equipe1)} – ${echapper(m.equipe2)}</strong><br>${echapper(m.pronostic)}</span><span style="font-size:1.3rem;">${iconeValidation(verifierProno(m))}</span></li>`;

    const contA = document.getElementById('liste-coupon-a');
    const contB = document.getElementById('liste-coupon-b');
    if (contA) contA.innerHTML = elevees.map(ligne).join('');
    if (contB) contB.innerHTML = moyennes.map(ligne).join('');

    document.querySelectorAll('#liste-coupon-a li, #liste-coupon-b li').forEach(li => {
        li.addEventListener('click', () => afficherDetailMatch(li.getAttribute('data-match-id')));
    });

    const scoreA = elevees.filter(m => verifierProno(m) === 'valide').length;
    const scoreB = moyennes.filter(m => verifierProno(m) === 'valide').length;
    const elScoreA = document.getElementById('score-a');
    const elScoreB = document.getElementById('score-b');
    if (elScoreA) elScoreA.innerHTML = `Réussi : <strong>${scoreA}/${elevees.length}</strong>`;
    if (elScoreB) elScoreB.innerHTML = `Réussi : <strong>${scoreB}/${moyennes.length}</strong>`;
}

// ==============================================
// BANDEAU D'ÉTAT DE L'AGENT
// ==============================================
function afficherBandeauAgent() {
    const main = document.querySelector('main');
    if (!main) return;
    let el = document.getElementById('bandeau-agent');
    if (!el) {
        el = document.createElement('div');
        el.id = 'bandeau-agent';
        el.style.cssText = 'margin:0 auto 1rem;max-width:1100px;padding:0.6rem 1rem;border-radius:10px;font-size:0.9rem;';
        main.insertBefore(el, main.firstChild);
    }
    const r = etatAgent.dernierRapport;
    let texte, fond, couleur;
    if (!CONFIG_AGENT.sources.length) {
        texte = '⚠️ Aucune source de scores configurée : les résultats sont figés au 24/10/2026 vers 17h47 UTC. Les matchs « en direct » ne sont plus à jour.';
        fond = '#fffbeb'; couleur = '#92400e';
    } else if (!r || r.sourcesOk === 0) {
        texte = '⚠️ Source de scores injoignable : ' + ((r && r.alertes[0]) || 'en attente de la première lecture') + '. Derniers résultats connus conservés.';
        fond = '#fef2f2'; couleur = '#991b1b';
    } else {
        const nbAlertes = r.alertes.length;
        texte = `✅ Résultats vérifiés à ${r.heure.slice(11, 19)} UTC (${r.sourcesOk} source${r.sourcesOk > 1 ? 's' : ''})` + (nbAlertes ? ` — ⚠️ ${nbAlertes} alerte(s), voir la console` : '');
        fond = nbAlertes ? '#fffbeb' : '#f0fdf4'; couleur = nbAlertes ? '#92400e' : '#166534';
    }
    el.textContent = texte;
    el.style.background = fond;
    el.style.color = couleur;
}

// ==============================================
// RAFRAÎCHISSEMENT + LANCEMENT
// ==============================================
function rafraichirAffichage() {
    afficherTableau('tableau-matchs', donneesJour, { filtrer: true });
    afficherTableau('tableau-matchs-demain', donneesDemain);
    afficherTableau('tableau-historique', donneesJour);
    genererCoupons();
    mettreAJourResume();
    afficherBandeauAgent();
    if (idDetailOuvert && document.getElementById('section-detail')?.classList.contains('active')) {
        afficherDetailMatch(idDetailOuvert);
    }
}

async function cycleAgent() {
    if (etatAgent.enCours) return;
    etatAgent.enCours = true;
    try {
        const rapport = await executerAgent();
        rapport.alertes.forEach(a => console.warn('[agent]', a));
        rapport.actions.filter(a => a.action !== 'inchange').forEach(a => console.log('[agent]', a.id, a.action, a.detail || ''));
    } catch (e) {
        console.error('[agent] erreur inattendue', e);
        etatAgent.dernierRapport = { heure: new Date().toISOString(), sourcesOk: 0, sourcesKo: 0, actions: [], alertes: ['Erreur agent : ' + e.message] };
    } finally {
        etatAgent.enCours = false;
        rafraichirAffichage();
    }
}

function initialiserInterface() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cible = document.getElementById('section-' + btn.id.replace('nav-', ''));
            if (!cible) return;
            idDetailOuvert = null;
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
            btn.classList.add('actif');
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            cible.classList.add('active');
        });
    });

    document.addEventListener('click', e => {
        if (e.target.closest('.btn-retour')) {
            idDetailOuvert = null;
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
            document.getElementById('nav-jour')?.classList.add('actif');
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById('section-jour')?.classList.add('active');
        }
    });

    ['filtre-ligue', 'filtre-statut'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour, { filtrer: true }));
    });

    rafraichirAffichage();
    cycleAgent();
    setInterval(cycleAgent, CONFIG_AGENT.intervalleMs);
}

if (typeof document !== 'undefined') {
    window.addEventListener('DOMContentLoaded', initialiserInterface);
}

if (typeof module !== 'undefined') {
    module.exports = { donneesJour, donneesDemain, verifierProno, normaliserPronostic, parserScore, calculerStats,
        cleEquipe, trouverCorrespondance, validerEnregistrement, appliquerLecture, executerAgent, analyseAuto, etatAgent, CONFIG_AGENT };
}
