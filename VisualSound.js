class VisualSound
{
    constructor(soundFile)
    {
        this.soundFile = soundFile;
        this.tone;
        this.octave;
        this.amp;
    }

    InputModifications(osc)
    {
        this.osc = osc;
        this.type = this.osc.getType();
        this.freq = this.osc.getFreq();
        this.amp = this.osc.getAmp();
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