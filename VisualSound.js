class VisualSound
{
    constructor(soundFile, tone, octave, amp)
    {
        this.soundFile = soundFile;
        this.tone = tone;
        this.octave = octave;
        this.amp = amp
    }

    play()
    {
        this.soundFile.play();
    }

}