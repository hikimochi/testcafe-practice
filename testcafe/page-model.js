import { Selector, t } from 'testcafe'; // tはtest controller

const label = Selector('label');

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class Page {
  constructor () { // initialize
    this.nameInput = Selector('#developer-name');

    this.featureList = [
      new Feature('Support for testing on remote devices'),
      new Feature('Re-using existing JavaScript code for testing'),
      new Feature('Easy embedding into a Continuous integration system')
    ];

    this.submitButton = Selector('#submit-button')
  }
  async submitName (name) {
    await t
      .typeText(this.nameInput, name)
      .wait(1000)
      .click(this.submitButton);
  }
}

export default new Page(); // モジュール化