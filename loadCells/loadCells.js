let img;
n = 1;

function setup() {
  n = 110;
  img = loadImage('export2/Stack0'+n+'.png');
  createCanvas(500, 500);
  background(100);
  textSize(16);
  b1 = createButton('Suivant');
  b1.position(150, 150);
  b1.mousePressed(addN);
  b2 = createButton('Précédent');
  b2.position(0, 150);
  b2.mousePressed(subN);

  //imageMode(CENTER);
}

function draw() {
    image(img, 50, 250);
    text("img:"+n, 75, 250);
}


function addN() {
  n = n + 1;
  img = loadImage('export2/Stack0'+n+'.png');
  background(255);
}

function subN() {
  n = n - 1;
  //img = loadImage('export2/Stack0'+n+'.png');
  background(255);
}
