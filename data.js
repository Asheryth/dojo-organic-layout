function createData() {

  const entreprises = [];

  for (i = 0; i < NB_ENTREPRISES; ++i) {
    entreprises.push({
      x: WIDTH / 2,
      y: HEIGHT / 2,
      dx: 0,
      dy: 0,
      size: getRandomIntBetween(1, 4)
    });
  }

  const transactions = [];

  for (i = 0; i < NB_ENTREPRISES-1; ++i) {
    const e = getRandomIntBetween(i + 1, NB_ENTREPRISES);
    const count = getRandomIntBetween(1, 4);
    transactions.push({
      e1: i, 
      e2: e, 
      count: count
    });
  }

  return {
    entreprises: entreprises,
    transactions: transactions
  };
}
