class StepVoter extends Voter {
  constructor({elem, step}) {
     super({elem});
     this._step = step;
  }

  _increase() {
      this._state += this._step;
  }

  _decrease() {
      this._state -= this._step;
  }

}
