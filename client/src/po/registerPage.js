class RegisterPage {
  get usernameInput() { return $('form > input:nth-child(1)')}
  get passwordInput() { return $('form > input:nth-child(2)')}
  get confirmPasswordInput() { return $('form > input:nth-child(3)')}
  get incorrectLabel() { return $('form > label')}
  get registerButton() {return $('form > button')}

  async open() {
    await browser.url('http://localhost:3000/signup');
  }

  async signUp(username, password, confirmPassword) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.confirmPasswordInput.setValue(confirmPassword);
    await this.registerButton.click();
  }
}

module.exports = new RegisterPage();