
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
  
}

/**
 * Ne modifier que dx et dy
 */
function updateMove(data) {
  
}

const MAX_MOVE_AMPL = 20;

function applyMove(data) {
  for (e of data.entreprises) {
    e.x += Math.max(-MAX_MOVE_AMPL, Math.min(e.dx, MAX_MOVE_AMPL));
    e.y += Math.max(-MAX_MOVE_AMPL, Math.min(e.dy, MAX_MOVE_AMPL));
    e.dx = 0;
    e.dy = 0;
  }
}