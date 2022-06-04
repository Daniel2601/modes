let img;
n = 1;

function setup() {
  n = 110;
  img = loadImage('export2/Stack0'+n+'.png');
  createCanvas(500, 500);
  background(100);
  textSize(16);
  b1 = createButton('Suivant');
  b1.position(150, 20);
  b1.mousePressed(addN);
  b2 = createButton('Précédent');
  b2.position(0, 20);
  b2.mousePressed(subN);

  //imageMode(CENTER);
}

function draw() {
    image(img, 50, 100);
    text("img:"+n, 75, 100);
}


function addN() {
  n = n + 1;
  img = loadImage('export2/Stack0'+n+'.png');
  background(255);
}

function subN() {
  n = n - 1;
  img = loadImage('export2/Stack0'+n+'.png');
  background(255);
}
