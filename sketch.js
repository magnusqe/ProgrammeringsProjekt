let soundVisual, ampImpSoundSlider, ampPianoSlider, musicNote;

function preload()
{
  soundFormats('mp3', 'ogg');
  vineboom = loadSound('assets/vineboom.mp3')
}

function setup() 
{
  cnv = createCanvas(800, 800);

  soundVisual = new VisualSound(vineboom, 0, 0 ,0);

  keyboard = new Piano(5, 5, 1, "square");

  ampImpSoundSlider = createSlider(0, 1, 0.5, 0.1);
  ampImpSoundSlider.position(300, 110);
  ampImpSoundSlider.size(100, 50);
  ampImpSoundSlider.style('transform', 'rotate(270deg)');

  ampPianoSlider = createSlider(0, 1, 0.5, 0.1);
  ampPianoSlider.position(400, 110);
  ampPianoSlider.size(100, 50);
  ampPianoSlider.style('transform', 'rotate(270deg)');

  octavePianoSlider = createSlider(0, 8, 5, 1);
  octavePianoSlider.position(500, 110);
  octavePianoSlider.size(100, 50);

  cnv.mousePressed(Playsound);
}

function draw() 
{
  background(220);

  keyboard.VisualKeys(ampPianoSlider.value(), octavePianoSlider.value());

  soundVisual.InputModifications(keyboard.getOsc(), ampPianoSlider.value());
  soundVisual.OscVisual();
}

function Playsound()
{
  vineboom.setVolume(ampImpSoundSlider.value());
  vineboom.play();
  console.log(vineboom.getLevel());
}

