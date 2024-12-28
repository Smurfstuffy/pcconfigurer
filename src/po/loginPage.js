class LoginPage {
  get usernameInput() { return $('form > input:nth-child(1)')}
  get passwordInput() { return $('form > input:nth-child(2)')}
  get incorrectLabel() { return $('form > label')}
  get loginButton() {return $('form > button')}

  async open() {
    await browser.url('http://localhost:3000/signin');
  }

  async signIn(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();