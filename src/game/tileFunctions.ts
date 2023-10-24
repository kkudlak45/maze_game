export function drawPlayer(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const xPos = x * w;
  const yPos = y * h;
  ctx.fillStyle = "blue";
  ctx.fillRect(xPos, yPos, w, h);
}

export function drawEnemy(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const xPos = x * w;
  const yPos = y * h;
  ctx.fillStyle = "red";
  ctx.fillRect(xPos, yPos, w, h);
}

export function drawWall(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const xPos = x * w;
  const yPos = y * h;
  ctx.fillStyle = "black";
  ctx.fillRect(xPos, yPos, w, h);
}

export function drawOpen(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const xPos = x * w;
  const yPos = y * h;
  ctx.fillStyle = "white";
  ctx.fillRect(xPos, yPos, w, h);
}

export function drawGoal(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
  const xPos = x * w;
  const yPos = y * h;
  ctx.fillStyle = "green";
  ctx.fillRect(xPos, yPos, w, h);
}
