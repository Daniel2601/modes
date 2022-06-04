/*
 * @name Pointillism
 * @description By Dan Shiffman. Mouse horizontal location controls size of
 * dots. Creates a simple pointillist effect using ellipses colored according
 * to pixels in an image.
 * <p><em><span class="small"> To run this example locally, you will need an
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 */
let img;
n = 1;

function setup() {
  n = 110;
  img = loadImage('export2/Stack0'+n+'.png');
  createCanvas(300, 500);
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
    image(img, 50, 50);
    text("img:"+n, 75, 250);
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
