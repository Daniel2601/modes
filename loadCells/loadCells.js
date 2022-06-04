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
let smallPoint, largePoint;

function setup() {
  n = 110;
  img = loadImage('export2/Stack0'+n+'.png');
  createCanvas(300, 300);
  //imageMode(CENTER);
}

function draw() {
    image(img, 0, 0);
}

function mousePressed() {
  n = n + 1;
  if (n > 207) n = 110;
  img = loadImage('export2/Stack0'+n+'.png');
}
