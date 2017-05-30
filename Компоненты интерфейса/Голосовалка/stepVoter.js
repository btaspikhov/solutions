class StepVoter extends Voter {
  constructor(options) {
     super(options);
     this._step = options.step;
  }

  _increase() {
      this._state += 2;
  }
  
  _decrease() {
      this._state -= 2;
  }

}