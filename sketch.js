
let x = 50;   // Posição inicial X
let y = 50;   // Posição inicial Y
let pontos = 0; // Pontuação inicial

let itemX = 200; // Posição X do item
let itemY = 200; // Posição Y do item
let itemColetado = false; // Variável para verificar se o item foi coletado

let numPontos = 5; // Tente colocar um número menor que 10 para ver a validação
let Pontos = []; // Array para armazenar os pontos



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 200, 100); // Cor de fundo verde
  textSize(30)
  text("👨‍🌾", x, y); // Desenha o personagem na posição atual
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
  // Desenha o item se não foi coletado
  if (!itemColetado) {
    text("🌽", itemX, itemY);
  }
// Desenha o item se não foi coletado
  if (!itemColetado) {
  
  }
  
  // Verifica se o personagem coletou o item
  let distancia = dist(x, y, itemX, itemY);
  if (distancia < 20) { // Ajuste este valor conforme necessário
    itemColetado = true;
    pontos += 1;

    // Reposição aleatória do item após ser coletado
    itemX = random(400);
    itemY = random(400);
    itemColetado = false;
  }
  
  // Exibe a pontuação na tela
  textSize(20);
  fill(255);
  text("Pontos: " + pontos, 10, 30);
}

// Garantir que a quantidade mínima de pontos seja 10
  

  for (let i = 0; i < numPontos; i++) {
    let x = random(width); // Posição aleatória em x
    let y = random(height); // Posição aleatória em y
    pontos.push(createVector(x, y)); // Adiciona os pontos ao array
  
}  
// Desenha todos os pontos
  fill(0);
  noStroke();
  for (let i = 0; i < pontos.length; i++) {
    ellipse(pontos[i].x, pontos[i].y, 5, 5); // Desenha o ponto
  }