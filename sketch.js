let sound, ampSlider;

function preload()
{
  
  soundFormats('mp3', 'ogg');
  vineboom = loadSound('assets/vineboom.mp3')
  
}

function setup() 
{
  cnv = createCanvas(800, 800);
  sound = new VisualSound(vineboom, 0, 0 ,0);

  ampSlider = createSlider(0, 1, 0.5, 0.1);
  ampSlider.position(10, 10);
  ampSlider.style('width', '100px');
  ampSlider.style('height', '300px');
  ampSlider.style('transform', 'rotate(270deg)');

  cnv.mousePressed(Playsound);

  keyboard = new Piano(5,5,1);

}

function draw() 
{
  background(220);

  keyboard.VisualKeys();

  sound.InputModifications(ampSlider.value());
  sound.StandardSinusVisual();
  sound.SoundFileVisual();

}

function Playsound()
{
  vineboom.setVolume(ampSlider.value());
  vineboom.play();
  console.log(vineboom.getLevel());
}
