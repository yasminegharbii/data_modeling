// EXERCICES LIVRES

function creerLivre(titre, auteurs, prix, genre, nombreDePages, description) {
  return {
    titre: titre,
    auteurs: auteurs,
    prix: prix,
    genre: genre,
    nombreDePages: nombreDePages,
    description: description,
  };
}

function afficherLivre(livre) {
  return (
    livre.titre +
    ",par " +
    livre.auteurs +
    "--" +
    livre.genre +
    "," +
    livre.prix
  );
}

let livres = [
  creerLivre(
    "Harry Potter à l’école des sorciers",
    ["J.K. Rowling"],
    "24.99DT",
    "fantasy",
    "2000",
    "story",
  ),
  creerLivre(
    "Roméo et Juliette",
    ["William Shakespeare"],
    "25DT",
    "DRAMA",
    "350",
    "theatre",
  ),
  creerLivre(
    "Structure et interprétation des programmes informatiques",
    ["Gerald Jay Sussman, Hal Abelson"],
    "40DT",
    "education",
    "500",
    "learning",
  ),
];

function afficherTousLesLivres(livres) {
  for (var i = 0; i < livres.length; i++) {
    console.log(i + 1 + ". " + afficherLivre(livres[i]));
  }
}

function correspondLivre(recherche, livre) {
  var text = recherche.toLowerCase();
  if (livre.titre.toLowerCase().includes(text)) {
    return true;
  }
  if (livre.genre.toLowerCase().includes(text)) {
    return true;
  }
  for (var i = 0; i < livre.auteurs.length; i++) {
    if (livre.auteurs[i].toLowerCase().includes(text)) {
      return true;
    }
  }
  return false;
}

function rechercherLivres(recherche, livres) {
  var resultat = [];

  for (var i = 0; i < livres.length; i++) {
    if (correspondLivre(recherche, livres[i])) {
      resultat.push(livres[i]);
    }
  }

  return resultat;
}

function supprimerLivre(titre, livres) {
  return livres.filter(function (livre) {
    return livre.titre !== titre;
  });
}

// EXERCICES FILMS

function creerFilm(
  titre,
  realisateur,
  duree,
  dateSortie,
  acteurs,
  studios,
  resume,
  note,
) {
  return {
    titre: titre,
    realisateur: realisateur,
    duree: duree,
    dateSortie: dateSortie,
    acteurs: acteurs,
    studios: studios,
    resume: resume,
    note: note,
  };
}

function afficherFilm(film) {
  return (
    film.titre +
    ", par " +
    film.realisateur +
    "--" +
    film.duree +
    " " +
    film.dateSortie +
    " " +
    " note: " +
    film.note
  );
}

var filmExemple = creerFilm(
  "Titanic",
  "James Cameron",
  "3h14",
  1997,
  [
    { acteur: "Leonardo DiCaprio", role: "Jack Dawson" },
    { acteur: "Kate Winslet", role: "Rose DeWitt Bukater" },
  ],
  "20th Century Fox",
  "Une histoire d'amour sur le Titanic.",
  8,
);

function afficherCasting(film) {
  for (var i = 0; i < film.acteurs.length; i++) {
    console.log(film.acteurs[i].role + " : " + film.acteurs[i].acteur);
  }
}

let films = [
  {
    titre: "Inception",
    realisateur: "Christopher Nolan",
    duree: "2h28",
    dateSortie: 2010,
    acteurs: [
      { acteur: "Leonardo DiCaprio", role: "Dom Cobb" },
      { acteur: "Joseph Gordon-Levitt", role: "Arthur" },
    ],
    studios: "Warner Bros",
    resume: "Un voleur infiltre les rêves.",
    note: 9,
  },
  {
    titre: "Titanic",
    realisateur: "James Cameron",
    duree: "3h14",
    dateSortie: 1997,
    acteurs: [
      { acteur: "Leonardo DiCaprio", role: "Jack Dawson" },
      { acteur: "Kate Winslet", role: "Rose DeWitt Bukater" },
    ],
    studios: "20th Century Fox",
    resume: "Une histoire d'amour sur le Titanic.",
    note: 8,
  },
  {
    titre: "The Matrix",
    realisateur: "Wachowski",
    duree: "2h16",
    dateSortie: 1999,
    acteurs: [
      { acteur: "Keanu Reeves", role: "Neo" },
      { acteur: "Laurence Fishburne", role: "Morpheus" },
    ],
    studios: "Warner Bros",
    resume: "Un hacker découvre la vérité du monde.",
    note: 9,
  },
  {
    titre: "Interstellar",
    realisateur: "Christopher Nolan",
    duree: "2h49",
    dateSortie: 2014,
    acteurs: [
      { acteur: "Matthew McConaughey", role: "Cooper" },
      { acteur: "Anne Hathaway", role: "Amelia Brand" },
    ],
    studios: "Paramount",
    resume: "Voyage spatial pour sauver l'humanité.",
    note: 9,
  },
  {
    titre: "Avatar",
    realisateur: "James Cameron",
    duree: "2h42",
    dateSortie: 2009,
    acteurs: [
      { acteur: "Sam Worthington", role: "Jake Sully" },
      { acteur: "Zoe Saldana", role: "Neytiri" },
    ],
    studios: "20th Century Fox",
    resume: "Un soldat explore la planète Pandora.",
    note: 8,
  },
];

function afficherTousLesFilms(films) {
  va 
  for (var i = 0; i < films.length; i++) {
    console.log(i + 1 + ". " + films[i].titre + "\n");
  }
}

