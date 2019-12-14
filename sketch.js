
let pic, img;
let mov, vid;

function preload() {
  vid = createVideo('contents/fingers.mov');
  img = loadImage('contents/brazil.svg');
}

function setup() {
  createCanvas(1200, 800);

  pic = new Media();
  pic.setup(img);

  mov = new Media();
  vid.hide();
  mov.setup(vid);
  vid.loop();
}

function draw() {
  background(55);
  pic.show();
  mov.show();

  mov.x += random(-1, 1);
  mov.y += random(-1, 1);
}
