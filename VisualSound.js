class VisualSound
{
    constructor(soundFile)
    {
        this.soundFile = soundFile;
        this.tone;
        this.octave;
        this.amp;
        this.peaks = this.soundFile.getPeaks(256);
        
        this.lastSoundX = 0;
        this.lastSoundY = this.peaks[0];
        this.lastSinX = 0;
        this.lastSinY = sin(0);
        this.lastSinX = 0;
        this.lastSinY = 0;
    }

    InputModifications(amp, tone, octave)
    {
        this.amp = amp;
        this.tone = tone;
        this.octave = octave;
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

    StandardSinusVisual()
    {
        for(let i = 0; i <= this.peaks.length; i = i + 0.1)
        {
            line(this.lastSinX, this.lastSinY, i, (sin(i * 0.1) * 20 * this.amp) + (height / 3));
            this.lastSinX = i;
            this.lastSinY = (sin(i * 0.1) * 20 * this.amp) + (height / 3);
        }   

        this.lastSinX = 0;
        this.lastSinY = (sin(0 * 0.1) * 20 * this.amp) + (height / 3);
    }

    StandardTriangleVisual()
    {
        let coefficient = 1;
        
        for(let i = 0; i <= this.peaks.length; i = i + 0.1)
        {
            line(this.lastTriX, this.lastTriY, i, (i * this.amp * coefficient) + (height / 1.5));
            this.lastTriX = i;
            this.lastTriY = (i * this.amp * coefficient) + (height / 1.5);
        }

        this.lastTriX = 0;
        this.lastTriY = (0 * this.amp * coefficient) + (height / 1.5);
    }
}