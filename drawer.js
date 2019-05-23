
function draw(ctx, data) {

  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  transform(ctx, data);
  
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';

  for (t of data.transactions) {
    const e1 = t.e1
    const e2 = t.e2

    ctx.lineWidth = t.count;

    ctx.beginPath();
    ctx.moveTo(data.entreprises[e1].x, data.entreprises[e1].y);
    ctx.lineTo(data.entreprises[e2].x, data.entreprises[e2].y);
    ctx.stroke()
  }

  ctx.fillStyle = 'rgb(0, 255, 0)';

  for (e of data.entreprises) {
    ctx.beginPath();
    ctx.arc(e.x, e.y, 5 * e.size, 0, 2 * Math.PI);
    ctx.fill()
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function transform(ctx, data) {
  var xMin = WIDTH;
  var yMin = HEIGHT;
  var xMax = 0;
  var yMax = 0;

  for (e of data.entreprises) {
    xMin = Math.min(xMin, e.x);
    xMax = Math.max(xMax, e.x);
    yMin = Math.min(yMin, e.y);
    yMax = Math.max(yMax, e.y);
  }

  ctx.translate(WIDTH / 2, HEIGHT / 2);

  const factor = Math.min((WIDTH - BORDER * 2) / (xMax - xMin), (HEIGHT - BORDER * 2) / (yMax - yMin));
  ctx.scale(factor, factor);
  
  ctx.translate(-(xMin + xMax) / 2, -(yMin + yMax) / 2);
}