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
    
    // 🎨 COULEURS DES NOMS DE CLUBS : Équipe 1 = BLEU, Équipe 2 = VERT
    sectionDetail.innerHTML = `
        <div style="max-width:900px;margin:0 auto;padding:2rem 1rem;">
            <button class="btn-retour" style="background:none;border:none;color:#10b981;font-size:1rem;cursor:pointer;padding:0.5rem 0;margin-bottom:1.5rem;">← Retour aux matchs</button>
            
            <!-- EN-TÊTE -->
            <div style="background:linear-gradient(135deg,#0f2744,#1e40af);color:#fff;padding:2rem;border-radius:16px 16px 0 0;">
                <p style="opacity:0.8;margin:0 0 0.5rem 0;font-size:0.95rem;">${match.ligue} — ${match.heure}</p>
                <!-- 🔵 Équipe 1 en BLEU CLAIR -->
                <h2 style="margin:0;font-size:2rem;font-weight:800;color:#93c5fd;">${match.equipe1}</h2>
                <p style="font-size:1.1rem;opacity:0.7;margin:0.3rem 0;text-align:center;">⚽ VS ⚽</p>
                <!-- 🟢 Équipe 2 en VERT CLAIR -->
                <h2 style="margin:0;font-size:2rem;font-weight:800;color:#86efac;text-align:right;">${match.equipe2}</h2>
                <p style="margin-top:1rem;font-size:1.1rem;text-align:center;">
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
                        <!-- 🔵 Forme équipe 1 -->
                        <div style="background:#eff6ff;padding:1.25rem;border-radius:10px;border-left:4px solid #2563eb;">
                            <h4 style="margin:0 0 0.75rem 0;color:#1e40af;">${match.equipe1}</h4>
                            <p style="font-size:0.95rem;line-height:1.6;">${(match.forme1 || 'Données à venir').split(', ').map(f => {
                                if (f.startsWith('Victoire')) return '<span style="color:#22c55e;">✅</span>';
                                if (f.startsWith('Nul')) return '<span style="color:#eab308;">➖</span>';
                                if (f.startsWith('Défaite')) return '<span style="color:#ef4444;">❌</span>';
                                return '';
                            }).join(' ')}<br><small style="color:#64748b;">${match.forme1 || ''}</small></p>
                        </div>
                        <!-- 🟢 Forme équipe 2 -->
                        <div style="background:#f0fdf4;padding:1.25rem;border-radius:10px;border-left:4px solid #16a34a;">
                            <h4 style="margin:0 0 0.75rem 0;color:#166534;">${match.equipe2}</h4>
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
