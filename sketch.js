let sound;

function preload()
{
  soundFormats('mp3', 'ogg')
  vineboom = loadSound('assets/vineboom.mp3')
}

function setup() 
{
  cnv = createCanvas(400, 400);
  sound = new VisualSound(vineboom, 0, 0 ,0);

  cnv.mousePressed(canvasPressed);
}

function draw() 
{
  background(220);
}

function canvasPressed()
{
  sound.play();
}