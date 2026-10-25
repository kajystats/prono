// ==============================================
// DONNÉES VÉRIFIÉES ET ENRICHIES
// ==============================================
const donneesHier = [];

const donneesJour = [
  {"id":"aston-mancity","ligue":"Premier League","equipe1":"Aston Villa","equipe2":"Manchester City","heure":"13:30","pronostic":"2","scoreProbable":"1-2","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1","cartonsProbables":"4-2","cornersProbables":"8-6","fautesProbables":"12-15","forme1":"Victoire, Nul, Victoire, Défaite, Victoire","forme2":"Victoire, Victoire, Nul, Victoire, Défaite","analyse":"Man City était annoncé favori, mais Aston Villa a dominé à domicile et l'a emporté 2-1."},
  {"id":"arsenal-everton","ligue":"Premier League","equipe1":"Arsenal","equipe2":"Everton","heure":"16:00","pronostic":"1","scoreProbable":"2-0","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"2-0","cartonsProbables":"3-3","cornersProbables":"10-4","fautesProbables":"10-14","forme1":"Victoire, Victoire, Nul, Victoire, Victoire","forme2":"Défaite, Nul, Défaite, Victoire, Nul","analyse":"Arsenal a confirmé sa supériorité à domicile, victoire 2-0. Pronostic validé."},
  {"id":"coventry-fulham","ligue":"Premier League","equipe1":"Coventry City","equipe2":"Fulham","heure":"16:00","pronostic":"N","scoreProbable":"1-1","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"0-1","cartonsProbables":"5-4","cornersProbables":"6-7","fautesProbables":"15-13","forme1":"Nul, Défaite, Nul, Victoire, Défaite","forme2":"Nul, Victoire, Défaite, Nul, Victoire","analyse":"Fulham a obtenu la victoire 1-0. Pronostic manqué."},
  {"id":"chelsea-tottenham","ligue":"Premier League","equipe1":"Chelsea","equipe2":"Tottenham Hotspur","heure":"18:30","pronostic":"1","scoreProbable":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"0-2","cartonsProbables":"4-5","cornersProbables":"9-8","fautesProbables":"11-12","forme1":"Victoire, Défaite, Victoire, Nul, Défaite","forme2":"Victoire, Victoire, Nul, Victoire, Victoire","analyse":"Tottenham s'est imposé 2-0 à l'extérieur. Pronostic manqué."},
  {"id":"rayo-elche","ligue":"La Liga","equipe1":"Rayo Vallecano","equipe2":"Elche","heure":"12:00","pronostic":"N","scoreProbable":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1","cartonsProbables":"5-4","cornersProbables":"7-6","fautesProbables":"14-13","forme1":"Nul, Victoire, Nul, Défaite, Nul","forme2":"Défaite, Nul, Victoire, Nul, Défaite","analyse":"Match équilibré, nul 1-1. Pronostic validé."},
  {"id":"racing-espanyol","ligue":"La Liga","equipe1":"Racing Santander","equipe2":"Espanyol","heure":"14:15","pronostic":"1","scoreProbable":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-1","cartonsProbables":"4-3","cornersProbables":"8-5","fautesProbables":"13-14","forme1":"Victoire, Nul, Victoire, Victoire, Défaite","forme2":"Nul, Défaite, Nul, Victoire, Nul","analyse":"Racing Santander 2-1. Pronostic validé."},
  {"id":"valencia-villarreal","ligue":"La Liga","equipe1":"Valencia CF","equipe2":"Villarreal","heure":"16:30","pronostic":"N","scoreProbable":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"direct","score":{"eq1":1,"eq2":0},"cartonsProbables":"4-3","cornersProbables":"9-7","fautesProbables":"12-13","forme1":"Victoire, Victoire, Nul, Défaite, Victoire","forme2":"Nul, Défaite, Victoire, Nul, Victoire","analyse":"Match en cours — Valencia mène 1-0."},
  {"id":"atletico-deportivo","ligue":"La Liga","equipe1":"Atlético Madrid","equipe2":"Deportivo La Corogne","heure":"19:00","pronostic":"1","scoreProbable":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"3-4","cornersProbables":"11-4","fautesProbables":"10-15","forme1":"Victoire, Victoire, Victoire, Nul, Victoire","forme2":"Défaite, Nul, Défaite, Défaite, Nul","analyse":"Atlético Madrid favori à domicile."},
  {"id":"cagliari-bologna","ligue":"Serie A","equipe1":"Cagliari","equipe2":"Bologna","heure":"13:00","pronostic":"N","scoreProbable":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-1","cartonsProbables":"5-4","cornersProbables":"6-7","fautesProbables":"16-14","forme1":"Nul, Victoire, Défaite, Nul, Nul","forme2":"Nul, Nul, Victoire, Nul, Victoire","analyse":"Match nul 1-1. Pronostic validé."},
  {"id":"como-sassuolo","ligue":"Serie A","equipe1":"Como","equipe2":"Sassuolo","heure":"13:00","pronostic":"1","scoreProbable":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-0","cartonsProbables":"4-4","cornersProbables":"8-6","fautesProbables":"13-15","forme1":"Victoire, Victoire, Nul, Victoire, Défaite","forme2":"Défaite, Nul, Défaite, Nul, Défaite","analyse":"Como 2-0. Pronostic validé."},
  {"id":"napoli-roma","ligue":"Serie A","equipe1":"Napoli","equipe2":"AS Roma","heure":"16:00","pronostic":"N","scoreProbable":"1-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-2","cartonsProbables":"5-5","cornersProbables":"9-8","fautesProbables":"12-12","forme1":"Nul, Victoire, Nul, Défaite, Victoire","forme2":"Victoire, Nul, Victoire, Nul, Nul","analyse":"Match 2-2. Pronostic de nul validé."},
  {"id":"lazio-parma","ligue":"Serie A","equipe1":"Lazio","equipe2":"Parma","heure":"18:45","pronostic":"1","scoreProbable":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"3-4","cornersProbables":"10-5","fautesProbables":"11-14","forme1":"Victoire, Victoire, Nul, Victoire, Victoire","forme2":"Nul, Défaite, Nul, Défaite, Nul","analyse":"Lazio largement favorite."},
  {"id":"koln-schalke","ligue":"Bundesliga","equipe1":"1. FC Köln","equipe2":"Schalke 04","heure":"13:30","pronostic":"1","scoreProbable":"2-0","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"2-0","cartonsProbables":"4-5","cornersProbables":"8-5","fautesProbables":"14-13","forme1":"Victoire, Nul, Victoire, Victoire, Défaite","forme2":"Défaite, Défaite, Nul, Défaite, Nul","analyse":"Köln 2-0. Pronostic validé."},
  {"id":"augsburg-union","ligue":"Bundesliga","equipe1":"Augsburg","equipe2":"Union Berlin","heure":"13:30","pronostic":"1","scoreProbable":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"termine","scoreFinal":"1-2","cartonsProbables":"5-4","cornersProbables":"7-8","fautesProbables":"13-14","forme1":"Victoire, Nul, Défaite, Victoire, Nul","forme2":"Nul, Victoire, Victoire, Défaite, Victoire","analyse":"Union Berlin 2-1. Pronostic manqué."},
  {"id":"mainz-werder","ligue":"Bundesliga","equipe1":"Mainz 05","equipe2":"Werder Brême","heure":"13:30","pronostic":"N","scoreProbable":"1-1","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"3-1","cartonsProbables":"4-4","cornersProbables":"9-7","fautesProbables":"12-13","forme1":"Nul, Défaite, Nul, Victoire, Victoire","forme2":"Nul, Nul, Victoire, Défaite, Nul","analyse":"Mainz 3-1. Pronostic manqué."},
  {"id":"rbleipzig-elversberg","ligue":"Bundesliga","equipe1":"RB Leipzig","equipe2":"Elversberg","heure":"13:30","pronostic":"1","scoreProbable":"3-1","niveau":"elevee","confiance":"élevée","statut":"termine","scoreFinal":"3-1","cartonsProbables":"3-5","cornersProbables":"12-4","fautesProbables":"9-16","forme1":"Victoire, Victoire, Victoire, Nul, Victoire","forme2":"Nul, Défaite, Défaite, Victoire, Défaite","analyse":"RB Leipzig 3-1. Pronostic validé."},
  {"id":"paderborn-hsv","ligue":"Bundesliga","equipe1":"Paderborn","equipe2":"Hamburger SV","heure":"13:30","pronostic":"N","scoreProbable":"1-1","niveau":"faible","confiance":"faible","statut":"termine","scoreFinal":"2-1","cartonsProbables":"5-4","cornersProbables":"7-7","fautesProbables":"15-14","forme1":"Nul, Victoire, Nul, Défaite, Victoire","forme2":"Nul, Nul, Victoire, Nul, Défaite","analyse":"Paderborn 2-1. Pronostic manqué."},
  {"id":"dortmund-frankfort","ligue":"Bundesliga","equipe1":"Borussia Dortmund","equipe2":"Eintracht Francfort","heure":"16:30","pronostic":"1","scoreProbable":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"4-4","cornersProbables":"11-6","fautesProbables":"10-13","forme1":"Victoire, Victoire, Nul, Victoire, Victoire","forme2":"Défaite, Nul, Victoire, Nul, Victoire","analyse":"Dortmund favori."}
];

const donneesDemain = [
  {"id":"liverpool-nottingham","ligue":"Premier League","equipe1":"Liverpool","equipe2":"Nottingham Forest","heure":"15:00","pronostic":"1","scoreProbable":"3-0","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"3-5","cornersProbables":"12-3","fautesProbables":"8-17","forme1":"Victoire, Victoire, Victoire, Nul, Victoire","forme2":"Défaite, Nul, Défaite, Nul, Défaite","analyse":"Liverpool grand favori."},
  {"id":"manu-bournemouth","ligue":"Premier League","equipe1":"Manchester United","equipe2":"Bournemouth","heure":"15:00","pronostic":"1","scoreProbable":"2-1","niveau":"moyenne","confiance":"moyenne","statut":"avenir","cartonsProbables":"4-4","cornersProbables":"9-6","fautesProbables":"12-14","forme1":"Victoire, Nul, Défaite, Victoire, Nul","forme2":"Nul, Victoire, Nul, Défaite, Victoire","analyse":"Man Utd favori."},
  {"id":"barcelone-real","ligue":"La Liga","equipe1":"FC Barcelone","equipe2":"Real Madrid","heure":"21:00","pronostic":"1","scoreProbable":"2-1","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"5-5","cornersProbables":"10-9","fautesProbables":"13-13","forme1":"Victoire, Victoire, Nul, Victoire, Victoire","forme2":"Victoire, Victoire, Nul, Victoire, Défaite","analyse":"Le Classique, Barça favorite."},
  {"id":"inter-fiorentina","ligue":"Serie A","equipe1":"Inter Milan","equipe2":"Fiorentina","heure":"12:30","pronostic":"1","scoreProbable":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"3-4","cornersProbables":"11-5","fautesProbables":"9-15","forme1":"Victoire, Victoire, Victoire, Nul, Victoire","forme2":"Nul, Défaite, Nul, Victoire, Nul","analyse":"Inter favorite."},
  {"id":"psg-lyon","ligue":"Ligue 1","equipe1":"PSG","equipe2":"Olympique Lyonnais","heure":"20:45","pronostic":"1","scoreProbable":"2-0","niveau":"elevee","confiance":"élevée","statut":"avenir","cartonsProbables":"3-4","cornersProbables":"10-5","fautesProbables":"10-14","forme1":"Victoire, Victoire, Victoire, Victoire, Nul","forme2":"Nul, Victoire, Défaite, Nul, Victoire","analyse":"PSG favori."}
];

// ==============================================
// OUTILS
// ==============================================
function verifierProno(match) {
    if (!match.scoreFinal || match.statut !== 'termine') return 'attente';
    const [s1, s2] = match.scoreFinal.split('-').map(Number);
    if (isNaN(s1) || isNaN(s2)) return 'attente';
    const reel = s1 > s2 ? '1' : s1 < s2 ? '2' : 'N';
    return match.pronostic.trim() === reel ? 'valide' : 'invalide';
}

function resultatEnTexte(code, e1, e2) {
    return code === '1' ? `Victoire ${e1}` : code === '2' ? `Victoire ${e2}` : 'Match nul';
}

function getHash() { return window.location.hash.slice(1).trim(); }
function naviguerVers(c) { window.location.hash = c; }
function revenirAccueil() { window.location.hash = ''; }
function revenirListe() { window.history.back(); }

// ✅ CORRECTION : Mapping EXACT des IDs HTML
const NAV_TO_SECTION = {
    'jour': 'section-jour',
    'hier': 'section-hier',
    'demain': 'section-demain',
    'coupons': 'section-coupons',
    'historique': 'section-historique',
    'a-propos': 'section-a-propos'
};

// ==============================================
// NAVIGATION
// ==============================================
function traiterHash() {
    const hash = getHash();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    if (hash.startsWith('match/')) {
        afficherDetailMatch(hash.replace('match/', ''), false);
        return;
    }

    const sectionId = NAV_TO_SECTION[hash] || 'section-jour';
    document.getElementById(sectionId)?.classList.add('active');

    const navId = hash ? `nav-${hash}` : 'nav-jour';
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('actif'));
    document.getElementById(navId)?.classList.add('actif');
}

window.addEventListener('hashchange', traiterHash);

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = btn.id.replace('nav-', '');
        naviguerVers(pageId === 'jour' ? '' : pageId);
    });
});

document.addEventListener('click', e => {
    if (e.target.closest('.btn-retour')) revenirListe();
});

document.getElementById('filtre-ligue')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));
document.getElementById('filtre-statut')?.addEventListener('change', () => afficherTableau('tableau-matchs', donneesJour));

// ==============================================
// AFFICHAGE TABLEAU
// ==============================================
function afficherTableau(idConteneur, matches) {
    const conteneur = document.getElementById(idConteneur);
    if (!conteneur) return;

    if (!matches.length) {
        conteneur.innerHTML = idConteneur === 'tableau-matchs-hier'
            ? `<div style="text-align:center;padding:3rem;color:#64748b;background:#f8fafc;border-radius:12px;margin:1rem 0;"><p style="font-size:1.1rem;margin:0 0 0.5rem 0;">ℹ️ Aucun match d'hier pour le moment</p><p style="font-size:0.9rem;">Cette rubrique sera active dès demain (25 oct. 2026).</p></div>`
            : `<p style="padding:2rem;text-align:center;color:#64748b;">Aucun match disponible</p>`;
        return;
    }

    let data = [...matches];
    if (idConteneur === 'tableau-matchs') {
        const fs = document.getElementById('filtre-statut')?.value || 'tout';
        const fl = document.getElementById('filtre-ligue')?.value || 'tout';
        if (fs !== 'tout') data = data.filter(m => m.statut === fs);
        if (fl !== 'tout') data = data.filter(m => m.ligue === fl);
    }

    conteneur.innerHTML = `
    <table>
        <thead>
            <tr><th>Statut</th><th>Ligue</th><th>Match</th><th>Heure</th><th>Résultat</th><th>Pronostic</th><th>Validation</th></tr>
        </thead>
        <tbody>
        ${data.map(m => {
            const r = verifierProno(m);
            const st = {avenir:'⏳ À venir',direct:'🔴 En direct',termine:'✅ Terminé'}[m.statut];
            const sc = m.statut==='direct' && m.score ? `${m.score.eq1} - ${m.score.eq2}` : (m.scoreFinal || '—');
            const vd = r==='valide'?'✔️ Correct':r==='invalide'?'❌ Manqué':'⏳ En attente';
            const vdCls = r==='valide'?'badge-valide':r==='invalide'?'badge-invalide':'badge-attente';
            return `<tr style="cursor:pointer" data-hash="match/${m.id}">
                <td><span class="statut statut-${m.statut}">${st}</span></td>
                <td>${m.ligue}</td>
                <td style="font-weight:700">${m.equipe1} <span style="opacity:0.6">vs</span> ${m.equipe2}</td>
                <td>${m.heure}</td>
                <td style="font-weight:700">${sc}</td>
                <td>${m.scoreProbable}<br><span class="badge conf-${m.niveau}">${m.confiance}</span></td>
                <td><span class="${vdCls}">${vd}</span></td>
            </tr>`;
        }).join('')}
        </tbody>
    </table>`;

    conteneur.querySelectorAll('tr[data-hash]').forEach(r => {
        r.addEventListener('click', () => naviguerVers(r.getAttribute('data-hash')));
    });
}

// ==============================================
// DÉTAIL MATCH — COULEURS CLUBS
// ==============================================
function afficherDetailMatch(matchId, pushState = true) {
    const m = [...donneesHier, ...donneesJour, ...donneesDemain].find(x => x.id === matchId);
    if (!m) return;
    if (pushState && getHash() !== `match/${matchId}`) { naviguerVers(`match/${matchId}`); return; }

    const r = verifierProno(m);
    const [s1, s2] = m.scoreFinal ? m.scoreFinal.split('-').map(Number) : [null, null];
    const reel = m.scoreFinal ? (s1>s2?'1':s1<s2?'2':'N') : null;
    const pron = m.pronostic==='1'?`Victoire ${m.equipe1}`:m.pronostic==='2'?`Victoire ${m.equipe2}`:'Match nul';
    const reelTxt = reel ? resultatEnTexte(reel, m.equipe1, m.equipe2) : '—';
    const vd = r==='valide'?'✔️ CORRECT':r==='invalide'?'❌ MANQUÉ':'⏳ En attente';
    const vdCls = r==='valide'?'badge-valide':r==='invalide'?'badge-invalide':'badge-attente';
    const vrd = r==='valide'?'#f0fdf4':'#fef2f2';
    const vbd = r==='valide'?'#22c55e':'#ef4444';
    const scTxt = m.statut==='termine'?`<strong>Score final : ${m.scoreFinal}</strong>`:
                 m.statut==='direct'?`<strong style="color:#fbbf24">🔴 En direct : ${m.score.eq1} - ${m.score.eq2}</strong>`:'⏳ À venir';

    const forme = txt => (txt||'').split(', ').map(f =>
        f.startsWith('V')?'<span style="color:#22c55e">✅</span>':
        f.startsWith('N')?'<span style="color:#eab308">➖</span>':
        f.startsWith('D')?'<span style="color:#ef4444">❌</span>':''
    ).join(' ');

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    let sec = document.getElementById('section-detail');
    if (!sec) { sec = document.createElement('section'); sec.id='section-detail'; sec.className='page'; document.querySelector('main').appendChild(sec); }

    sec.innerHTML = `
    <div style="max-width:900px;margin:0 auto;padding:2rem 1rem;">
        <button class="btn-retour" style="background:none;border:none;color:#10b981;font-size:1rem;cursor:pointer;padding:0.5rem 0;margin-bottom:1.5rem;">← Retour</button>
        <div style="background:linear-gradient(135deg,#0f2744,#1e40af);color:#fff;padding:2rem;border-radius:16px 16px 0 0;">
            <p style="opacity:0.8;margin:0 0 0.5rem;">${m.ligue} — ${m.heure}</p>
            <h2 style="margin:0;font-size:2rem;font-weight:800;color:#93c5fd;">${m.equipe1}</h2>
            <p style="text-align:center;opacity:0.7;margin:0.4rem 0;">⚽ VS ⚽</p>
            <h2 style="margin:0;font-size:2rem;font-weight:800;color:#86efac;text-align:right;">${m.equipe2}</h2>
            <p style="margin-top:1rem;text-align:center;">${scTxt}</p>
        </div>
        <div style="background:#fff;padding:2rem;border-radius:0 0 16px 16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin-bottom:2rem;">
                <div style="background:#eff6ff;padding:1.5rem;border-radius:12px;text-align:center;">
                    <h3 style="color:#1e40af;font-size:0.85rem;letter-spacing:0.5px;margin:0 0 0.5rem;">SCORE PROBABLE</h3>
                    <p style="font-size:2rem;font-weight:800;margin:0;color:#1e40af;">${m.scoreProbable}</p>
                    <p style="margin-top:0.3rem;color:#3b82f6;">${pron}</p>
                </div>
                <div style="background:${m.statut==='termine'?'#f0fdf4':'#f8fafc'};padding:1.5rem;border-radius:12px;text-align:center;">
                    <h3 style="color:#166534;font-size:0.85rem;letter-spacing:0.5px;margin:0 0 0.5rem;">RÉSULTAT FINAL</h3>
                    <p style="font-size:2rem;font-weight:800;margin:0;color:#166534;">${m.scoreFinal||'—'}</p>
                    <p style="margin-top:0.3rem;color:#22c55e;">${reelTxt}</p>
                </div>
            </div>
            ${m.statut==='termine'?`
            <div style="padding:1.5rem;border-radius:12px;background:${vrd};margin-bottom:2rem;text-align:center;border:2px solid ${vbd};">
                <p style="font-size:1.4rem;font-weight:700;margin:0;">${r==='valide'?'✅ PRONOSTIC RÉUSSI':'❌ PRONOSTIC MANQUÉ'}</p>
                <p style="margin-top:0.5rem;"><span class="${vdCls}">${vd}</span></p>
            </div>`:`
            <div style="padding:1.5rem;border-radius:12px;background:#f8fafc;margin-bottom:2rem;text-align:center;">
                <p style="font-size:1.2rem;font-weight:600;margin:0;color:#64748b;">⏳ En attente du résultat final</p>
            </div>`}
            <div style="margin-bottom:2rem;">
                <h3 style="margin-bottom:1rem;">📈 Statistiques attendues</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;">
                    <div style="background:#fef3c7;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.85rem;color:#92400e;margin:0 0 0.3rem;">🟨 Cartons</p><p style="font-weight:700;margin:0;">${m.cartonsProbables}</p></div>
                    <div style="background:#dbeafe;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.85rem;color:#1e40af;margin:0 0 0.3rem;">⚽ Corners</p><p style="font-weight:700;margin:0;">${m.cornersProbables}</p></div>
                    <div style="background:#f3e8ff;padding:1rem;border-radius:10px;text-align:center;"><p style="font-size:0.85rem;color:#6b21a8;margin:0 0 0.3rem;">🤝 Fautes</p><p style="font-weight:700;margin:0;">${m.fautesProbables}</p></div>
                </div>
            </div>
            <div style="margin-bottom:2rem;">
                <h3 style="margin-bottom:1rem;">🔥 Forme (5 derniers matchs)</h3>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;">
                    <div style="background:#eff6ff;padding:1.25rem;border-radius:10px;border-left:4px solid #2563eb;">
                        <h4 style="margin:0 0 0.75rem;color:#1e40af;">${m.equipe1}</h4>
                        <p>${forme(m.forme1)}<br><small style="color:#64748b;">${m.forme1||''}</small></p>
                    </div>
                    <div style="background:#f0fdf4;padding:1.25rem;border-radius:10px;border-left:4px solid #16a34a;">
                        <h4 style="margin:0 0 0.75rem;color:#166534;">${m.equipe2}</h4>
                        <p>${forme(m.forme2)}<br><small style="color:#64748b;">${m.forme2||''}</small></p>
                    </div>
                </div>
            </div>
            <div style="margin-bottom:2rem;">
                <h3 style="margin-bottom:0.5rem;">🎯 Confiance</h3>
                <span class="badge conf-${m.niveau}" style="font-size:1rem;padding:0.5rem 1rem;">${m.confiance}</span>
            </div>
            <div><h3 style="margin-bottom:1rem;">📊 Analyse</h3><p style="line-height:1.7;">${m.analyse}</p></div>
        </div>
    </div>`;
    sec.classList.add('active');
}

// ==============================================
// STATS & COUPONS
// ==============================================
function calculerStats(ms) {
    const t = ms.filter(m => m.statut==='termine');
    const v = t.filter(m => verifierProno(m)==='valide');
    return {t, v, d:ms.filter(m=>m.statut==='direct'), tx:t.length?Math.round(v.length/t.length*100):null};
}

function mettreAJourResume() {
    const s = calculerStats(donneesJour);
    document.getElementById('nb-en-direct').innerHTML = `🔴 En direct : <strong>${s.d.length}</strong>`;
    document.getElementById('nb-termines').innerHTML = `✅ Terminés : <strong>${s.t.length}</strong>`;
    document.getElementById('taux-reussite').innerHTML = `🎯 Taux : <strong>${s.tx||'—'}%</strong>`;
    document.getElementById('total-matchs').textContent = donneesJour.length;
    document.getElementById('total-reussi').textContent = s.v.length;
    document.getElementById('taux-global').textContent = s.tx ? `${s.tx}%` : '— %';
}

function genererCoupons() {
    const A = donneesJour.filter(m => m.niveau==='elevee').slice(0,5);
    const B = donneesJour.filter(m => m.niveau==='moyenne').slice(0,5);
    const row = m => {
        const r = verifierProno(m);
        const i = r==='valide'?'✔️':r==='invalide'?'❌':'⏳';
        return `<li style="cursor:pointer" data-hash="match/${m.id}"><span><strong>${m.equipe1} – ${m.equipe2}</strong><br>${m.scoreProbable}</span><span>${i}</span></li>`;
    };
    document.getElementById('liste-coupon-a').innerHTML = A.map(row).join('');
    document.getElementById('liste-coupon-b').innerHTML = B.map(row).join('');
    document.querySelectorAll('#liste-coupon-a li,#liste-coupon-b li').forEach(l => {
        l.addEventListener('click', () => naviguerVers(l.getAttribute('data-hash')));
    });
    document.getElementById('score-a').innerHTML = `Réussi : <strong>${A.filter(m=>verifierProno(m)==='valide').length}/5</strong>`;
    document.getElementById('score-b').innerHTML = `Réussi : <strong>${B.filter(m=>verifierProno(m)==='valide').length}/5</strong>`;
}

function simulerMiseAJour() {
    donneesJour.forEach(m => {
        if (m.statut==='direct') {
            if (!m.score) m.score = {eq1:0,eq2:0};
            if (Math.random()<0.08) Math.random()<0.5 ? m.score.eq1++ : m.score.eq2++;
            if (Math.random()<0.015) { m.statut='termine'; m.scoreFinal=`${m.score.eq1} - ${m.score.eq2}`; }
        }
    });
    afficherTableau('tableau-matchs', donneesJour);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    genererCoupons();
    mettreAJourResume();
}

// ==============================================
// LANCEMENT — TOUS LES TABLEAUX CHARGÉS
// ==============================================
window.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 KAJY STATS chargement...');

    // ✅ CHARGEMENT EXPLICITE DE TOUS LES TABLEAUX
    afficherTableau('tableau-matchs', donneesJour);
    afficherTableau('tableau-matchs-hier', donneesHier);
    afficherTableau('tableau-matchs-demain', donneesDemain);
    afficherTableau('tableau-historique', donneesJour);

    genererCoupons();
    mettreAJourResume();

    // ✅ LOGO CLIQUABLE
    const logo = document.querySelector('.logo-titre');
    if (logo) logo.addEventListener('click', revenirAccueil);

    traiterHash();
    setInterval(simulerMiseAJour, 30000);
    console.log('✅ KAJY STATS PRÊT —', donneesJour.length, 'matchs chargés');
});
