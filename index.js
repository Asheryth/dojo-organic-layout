const VARIATION_SPEED = 10;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const data = createData();
init(data);

console.log(JSON.stringify(data));
setInterval(() => {

  updateMove(data);
  applyMove(data);
  draw(ctx, data);

}, 100);

