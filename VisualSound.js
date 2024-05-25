class VisualSound
{
    constructor()
    {

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
            SoundFrame(0, (height / 3) - 15, 100, 30)
        
            this.lastSinX = 0;
            this.lastSinY = (sin(0 * (0.001 * this.freq) * 10) * this.amp) + (height / 3);
        }

        if(this.type == "triangle")
        {
            stroke(0);
            noFill();
            beginShape();
            let period = 100 / (this.freq  * 0.01);
            for (let x = 0; x < 100; x = x + 1) 
            {
                let y = this.amp * 10 * abs(((x / period) % 1) * 2 - 1);
                vertex(x, (height / 3) - y);
            }
            endShape();

            SoundFrame(0, (height / 3) - 15, 100, 30);
        }

        if(this.type == "square")
        {
            for(let x = 0; x <= 100; x += (2 * (this.freq * 0.02)))
            {
                for(let y = 0; y <= 1; y++)
                {
                    soundSquare(x, height / 3, x + (this.freq * 0.02), height / 3, x + (this.freq * 0.02), (height / 3) - (15 * this.amp), x + 2 * (this.freq * 0.02), (height / 3) - (15 * this.amp), x + 2 * (this.freq * 0.02), height / 3);
                }
            }

            SoundFrame(0, (height / 3) - 15, 170, 30);
        }

        if(this.type == "sawtooth")
        {
            stroke(0);
            noFill();
            beginShape();
            let period = 100 / (this.freq * 0.02);
            for (let x = 0; x < 100; x++) 
            {
                let phase = (x / period) % 1;
                let y = this.amp * 25 * (2 * phase - 1);
                vertex(x, height / 3 - y);
            }
            endShape();
            
            SoundFrame(0, (height / 3) - 15, 100, 30);
        }
    }
}

function soundSquare(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5)
{
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);
    line(x4, y4, x5, y5);
}

function SoundFrame(x, y, frameWidth, frameHeight)
{
    noFill()
    rect(x, y, frameWidth, frameHeight);
}