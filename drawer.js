
function draw(ctx, data) {

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';

  for (i in data.transactions) {
    const e1 = data.transactions[i].e1
    const e2 = data.transactions[i].e2

    ctx.lineWidth = data.transactions[i].count;

    ctx.beginPath();
    ctx.moveTo(data.entreprises[e1].x, data.entreprises[e1].y);
    ctx.lineTo(data.entreprises[e2].x, data.entreprises[e2].y);
    ctx.stroke()
  }

  ctx.fillStyle = 'rgb(0, 255, 0)';

  for (i in data.entreprises) {
    ctx.beginPath();
    ctx.arc(data.entreprises[i].x, data.entreprises[i].y, 5 * data.entreprises[i].size, 0, 2 * Math.PI);
    ctx.fill()
  }

}
