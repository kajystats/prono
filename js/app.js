// ==============================================
// KAJY STATS — DONNÉES DU 26/10/2026
// Mis à jour : 26/10/2026 à 10h00
// ==============================================

// --------------------------
// 🔴 MATCHS D'HIER (25 oct) — Terminés, résultats réels + validation
// --------------------------
const donneesHier = [
  {
    id:"aston-mancity-25", ligue:"Premier League",
    equipe1:"Aston Villa", equipe2:"Manchester City",
    pronostic:"2", scoreProbable:"1-2", statut:"termine", scoreFinal:"2-1",
    cartonsProbables:"4-2", cornersProbables:"8-6", fautesProbables:"12-15",
    forme1:"Victoire, Nul, Victoire, Défaite, Victoire",
    forme2:"Victoire, Victoire, Nul, Victoire, Défaite",
    analyse:"Pronostic : Victoire Man City → Résultat réel : Victoire Aston Villa 2-1 → ❌ Manqué"
  },
  {
    id:"arsenal-everton-25", ligue:"Premier League",
    equipe1:"Arsenal", equipe2:"Everton",
    pronostic:"1", scoreProbable:"2-0", statut:"termine", scoreFinal:"2-0",
    cartonsProbables:"3-3", cornersProbables:"10-4", fautesProbables:"10-14",
    forme1:"Victoire, Victoire, Nul, Victoire, Victoire",
    forme2:"Défaite, Nul, Défaite, Victoire, Nul",
    analyse:"Pronostic : Victoire Arsenal → Résultat réel : 2-0 → ✅ Correct"
  },
  {
    id:"chelsea-tottenham-25", ligue:"Premier League",
    equipe1:"Chelsea", equipe2:"Tottenham Hotspur",
    pronostic:"1", scoreProbable:"2-1", statut:"termine", scoreFinal:"0-2",
    cartonsProbables:"4-5", cornersProbables:"9-8", fautesProbables:"11-12",
    forme1:"Victoire, Défaite, Victoire, Nul, Défaite",
    forme2:"Victoire, Victoire, Nul, Victoire, Victoire",
    analyse:"Pronostic : Victoire Chelsea → Résultat réel : 0-2 → ❌ Manqué"
  },
  {
    id:"valencia-villarreal-25", ligue:"La Liga",
    equipe1:"Valencia CF", equipe2:"Villarreal",
    pronostic:"N", scoreProbable:"1-1", statut:"termine", scoreFinal:"1-0",
    cartonsProbables:"4-3", cornersProbables:"9-7", fautesProbables:"12-13",
    forme1:"Victoire, Victoire, Nul, Défaite, Victoire",
    forme2:"Nul, Défaite, Victoire, Nul, Victoire",
    analyse:"Pronostic : Match nul → Résultat réel : 1-0 → ❌ Manqué"
  },
  {
    id:"napoli-roma-25", ligue:"Serie A",
    equipe1:"Napoli", equipe2:"AS Roma",
    pronostic:"N", scoreProbable:"1-1", statut:"termine", scoreFinal:"2-2",
    cartonsProbables:"5-5", cornersProbables:"9-8", fautesProbables:"12-12",
    forme1:"Nul, Victoire, Nul, Défaite, Victoire",
    forme2:"Victoire, Nul, Victoire, Nul, Nul",
    analyse:"Pronostic : Match nul → Résultat réel : 2-2 → ✅ Correct"
  },
  {
    id:"augsburg-union-25", ligue:"Bundesliga",
    equipe1:"Augsburg", equipe2:"Union Berlin",
    pronostic:"1", scoreProbable:"2-1", statut:"termine", scoreFinal:"1-2",
    cartonsProbables:"5-4", cornersProbables:"7-8", fautesProbables:"13-14",
    forme1:"Victoire, Nul, Défaite, Victoire, Nul",
    forme2:"Nul, Victoire, Victoire, Défaite, Victoire",
    analyse:"Pronostic : Victoire Augsburg → Résultat réel : 1-2 → ❌ Manqué"
  },
  {
    id:"mainz-werder-25", ligue:"Bundesliga",
    equipe1:"Mainz 05", equipe2:"Werder Brême",
    pronostic:"N", scoreProbable:"1-1", statut:"termine", scoreFinal:"3-1",
    cartonsProbables:"4-4", cornersProbables:"9-7", fautesProbables:"12-13",
    forme1:"Nul, Défaite, Nul, Victoire, Victoire",
    forme2:"Nul, Nul, Victoire, Défaite, Nul",
    analyse:"Pronostic : Match nul → Résultat réel : 3-1 → ❌ Manqué"
  },
  {
    id:"paderborn-hsv-25", ligue:"Bundesliga",
    equipe1:"Paderborn", equipe2:"Hamburger SV",
    pronostic:"N", scoreProbable:"1-1", statut:"termine", scoreFinal:"2-1",
    cartonsProbables:"5-4", cornersProbables:"7-7", fautesProbables:"15-14",
    forme1:"Nul, Victoire, Nul, Défaite, Victoire",
    forme2:"Nul, Nul, Victoire, Nul, Défaite",
    analyse:"Pronostic : Match nul → Résultat réel : 2-1 → ❌ Manqué"
  }
];

// --------------------------
// 🟢 MATCHS D'AUJOURD'HUI (26 oct)
// --------------------------
const donneesJour = [
  {
    id:"liverpool-nottingham-26", ligue:"Premier League",
    equipe1:"Liverpool", equipe2:"Nottingham Forest", heure:"15:00",
    pronostic:"1", scoreProbable:"3-0", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"3-5", cornersProbables:"12-3", fautesProbables:"8-17",
    forme1:"Victoire, Victoire, Victoire, Nul, Victoire",
    forme2:"Défaite, Nul, Défaite, Nul, Défaite",
    analyse:"Liverpool impressionnant à domicile. Nottingham très faible à l'extérieur. Victoire attendue."
  },
  {
    id:"manu-bournemouth-26", ligue:"Premier League",
    equipe1:"Manchester United", equipe2:"Bournemouth", heure:"17:30",
    pronostic:"1", scoreProbable:"2-1", niveau:"moyenne", confiance:"moyenne",
    statut:"avenir",
    cartonsProbables:"4-4", cornersProbables:"9-6", fautesProbables:"12-14",
    forme1:"Victoire, Nul, Défaite, Victoire, Nul",
    forme2:"Nul, Victoire, Nul, Défaite, Victoire",
    analyse:"Man Utd en forme à domicile mais Bournemouth dangereux. Victoire étroite attendue."
  },
  {
    id:"barcelone-real-26", ligue:"La Liga",
    equipe1:"FC Barcelone", equipe2:"Real Madrid", heure:"21:00",
    pronostic:"1", scoreProbable:"2-1", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"5-5", cornersProbables:"10-9", fautesProbables:"13-13",
    forme1:"Victoire, Victoire, Nul, Victoire, Victoire",
    forme2:"Victoire, Victoire, Nul, Victoire, Défaite",
    analyse:"Le Classique ! Barça au Camp Nou, série supérieure. Duel serré mais Barça favori."
  },
  {
    id:"inter-fiorentina-26", ligue:"Serie A",
    equipe1:"Inter Milan", equipe2:"Fiorentina", heure:"12:30",
    pronostic:"1", scoreProbable:"2-0", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"3-4", cornersProbables:"11-5", fautesProbables:"9-15",
    forme1:"Victoire, Victoire, Victoire, Nul, Victoire",
    forme2:"Nul, Défaite, Nul, Victoire, Nul",
    analyse:"Inter imparable à domicile. Fiorentina irrégulière. Victoire nette attendue."
  },
  {
    id:"psg-lyon-26", ligue:"Ligue 1",
    equipe1:"PSG", equipe2:"Olympique Lyonnais", heure:"20:45",
    pronostic:"1", scoreProbable:"2-0", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"3-4", cornersProbables:"10-5", fautesProbables:"10-14",
    forme1:"Victoire, Victoire, Victoire, Victoire, Nul",
    forme2:"Nul, Victoire, Défaite, Nul, Victoire",
    analyse:"PSG solide, Lyon encore en reconstruction. Paris favori."
  },
  {
    id:"dortmund-frankfort-26", ligue:"Bundesliga",
    equipe1:"Borussia Dortmund", equipe2:"Eintracht Francfort", heure:"18:30",
    pronostic:"1", scoreProbable:"2-0", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"4-4", cornersProbables:"11-6", fautesProbables:"10-13",
    forme1:"Victoire, Victoire, Nul, Victoire, Victoire",
    forme2:"Défaite, Nul, Victoire, Nul, Victoire",
    analyse:"Dortmund en grande forme à domicile. Francfort inconstant."
  },
  {
    id:"atletico-deportivo-26", ligue:"La Liga",
    equipe1:"Atlético Madrid", equipe2:"Deportivo La Corogne", heure:"19:00",
    pronostic:"1", scoreProbable:"2-0", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"3-4", cornersProbables:"11-4", fautesProbables:"10-15",
    forme1:"Victoire, Victoire, Victoire, Nul, Victoire",
    forme2:"Défaite, Nul, Défaite, Défaite, Nul",
    analyse:"Atlético très solide à domicile. Deportivo en difficulté."
  },
  {
    id:"lazio-parma-26", ligue:"Serie A",
    equipe1:"Lazio", equipe2:"Parma", heure:"18:45",
    pronostic:"1", scoreProbable:"2-0", niveau:"elevee", confiance:"élevée",
    statut:"avenir",
    cartonsProbables:"3-4", cornersProbables:"10-5", fautesProbables:"11-14",
    forme1:"Victoire, Victoire, Nul, Victoire, Victoire",
    forme2:"Nul, Défaite, Nul, Défaite, Nul",
    analyse:"Lazio favorite à domicile contre Parma."
  }
];

// ----------------
