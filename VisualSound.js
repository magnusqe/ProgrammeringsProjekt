class VisualSound
{
    constructor(soundFile)
    {
        this.soundFile = soundFile;
        this.tone;
        this.octave;
        this.amp;
    }

    InputModifications(osc, amp)
    {
        this.osc = osc;
        this.type = this.osc.getType();
        this.freq = this.osc.getFreq();
        if(!keyIsPressed)
        {
            this.amp = 0;
        }
        else
        {
            this.amp = amp;
        }
    }

    OscVisual()
    {
        if(this.type == "sine")
        {
            for(let i = 0; i <= 100; i = i + 1)
            {
                line(this.lastSinX, this.lastSinY, i, (sin(i * (0.001 * this.freq)) * this.amp * 10) + (height / 3));
                this.lastSinX = i;
                this.lastSinY = (sin(i * (0.001 * this.freq)) * this.amp * 10) + (height / 3);
            }   
        
            this.lastSinX = 0;
            this.lastSinY = (sin(0 * (0.001 * this.freq) * 10) * this.amp) + (height / 3);
        }

        if(this.type == "triangle")
        {
            for(let x = 0; x <= 100; x += (this.freq * 0.02))
            {
                for(let y = 0; y <= 1; y++)
                {
                    soundTriangle(x, height / 3, x + ((this.freq * 0.02) / 2), height / 3 - (15 * this.amp), x + (this.freq * 0.02), height / 3);
                }
            }
        }

        if(this.type == "square")
        {
            for(let x = 0; x <= 100; x += (2 * (this.freq * 0.02)))
            {
                for(let y = 0; y <= 1; y++)
                {
                    //soundSquare(x, height / 3, x, (height / 3) - (15 * this.amp), x + (this.freq * 0.02), (height / 3) - (15 * this.amp), x + (this.freq * 0.02), height / 3, x + (2 * (this.freq * 0.02)), height / 3);
                    soundSquare(x, height / 3, x + (this.freq * 0.02), height / 3, x + (this.freq * 0.02), (height / 3) - (15 * this.amp), x + (2 * (this.freq * 0.02)), (height / 3) - (15 * this.amp), x + (2 * (this.freq * 0.02)), height / 3)
                }
            }
        }

        if(this.type == "sawtooth")
        {
            for(let x = 0; x <= 100; x += (this.freq * 0.02))
                {
                    for(let y = 0; y <= 1; y++)
                    {
                        soundTriangle(x, height / 3, x + ((this.freq * 0.02)), height / 3 - (15 * this.amp), x + (this.freq * 0.02), height / 3);
                    }
                }
        }
    }

    SoundFileVisual()
    {
        for(let i = 0; i <= this.peaks.length; i++)
        {
            line(this.lastSoundX, this.lastSoundY, i, (this.peaks[i] * 20 * this.amp) + (height / 2));
            this.lastSoundX = i;
            this.lastSoundY = (this.peaks[i] * 20 * this.amp) + (height / 2);
        }

        this.lastSoundX = 0;
        this.lastSoundY = (this.peaks[0] * 20 * this.amp) + (height / 2);
    }
}

function soundTriangle(x1, y1, x2, y2, x3, y3)
{
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  console.log(x3)
}

function soundSquare(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)
{
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);
    line(x4, y4, x5, y5);
    console.log(x5)
}