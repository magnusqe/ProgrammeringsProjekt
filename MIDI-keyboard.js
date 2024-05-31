class MidiHandler 
{
  constructor() 
  {
    this.myInput = null;
    this.noteIdentifier = null;
    this.velocity = null;
    this.pressure = null;
  }

  initialize() 
  {
    WebMidi.enable().then(() => this.onEnabled()).catch(err => alert(err));
  }

  onEnabled() 
  {
    this.myInput = WebMidi.getInputByName("APC Key 25");

    if (this.myInput) 
    {
      this.myInput.addListener("noteon", e => {
        this.noteIdentifier = e.note.identifier;
        this.velocity = e.velocity;
        this.noteOff = false;
        //console.log(`Note On - Note: ${this.noteIdentifier}, Velocity: ${this.velocity}`);
      });

      this.myInput.addListener("noteoff", e => {
        this.noteOff = true;
      });

      this.myInput.addListener("controlchange", e => {
        if (e.controller.number === 128) 
        {
          this.pressure = e.value;
          console.log(`Aftertouch pressure: ${this.pressure}`);
        }
      });

      this.myInput.addListener("keyaftertouch", e => {
        this.noteIdentifier = e.note.identifier;
        this.pressure = e.value;
        console.log(`Key Aftertouch - Note: ${this.noteIdentifier}, Pressure: ${this.pressure}`);
      });
    } 
    else 
    {
      console.log("MIDI-input not found");
    }
  }
}
