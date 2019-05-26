
/**
 *  data = {
 *    entreprises: [{     | Noeuds du graph
 *      x: int,           | Position en X
 *      y: int,           | Position en Y
 *      dx: int,          | Deplacement en Y
 *      dy: int,          | Deplacement en Y
 *      size: int         | Taille (taille de l'entreprise)
 *    }],
 *    transactions: [{    | Liens du graph
 *      e1: int,          | Index du premier noeud
 *      e2: int,          | Index du deuxième noeud
 *      count: int        | Taille (nombre de transactions entre deux entreprises)
 *    }] 
 *  }
 */

 /**
 * Ne modifier que x et y
 */
function init(data) {
  for (e of data.entreprises) {
    e.x = getRandomInt(WIDTH);
    e.y = getRandomInt(HEIGHT);
  }
}

/**
 * Ne modifier que dx et dy
 */
function updateMove(data) {
  // dx et dy sont déjà remis à zero 

  for (i = 0; i < data.entreprises.length; ++i) {
    const e1 = data.entreprises[i];
    for (j = i + 1; j < data.entreprises.length; ++j) {
      const e2 = data.entreprises[j];

      e1.dx += 0; // A REMPLIR
      e1.dy += 0; // A REMPLIR
      e2.dx += 0; // A REMPLIR
      e2.dy += 0; // A REMPLIR
    }
  }

  for (t of data.transactions) {
    const e1 = data.entreprises[t.e1];
    const e2 = data.entreprises[t.e2];

    e1.dx += 0; // A REMPLIR
    e1.dy += 0; // A REMPLIR
    e2.dx += 0; // A REMPLIR
    e2.dy += 0; // A REMPLIR
  }
}

function applyMove(data) {
  for (e of data.entreprises) {
    e.x += Math.max(-MAX_MOVE_AMPL, Math.min(e.dx, MAX_MOVE_AMPL));
    e.y += Math.max(-MAX_MOVE_AMPL, Math.min(e.dy, MAX_MOVE_AMPL));
    e.dx = 0;
    e.dy = 0;
  }
}