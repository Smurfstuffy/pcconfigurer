const loginPage = require("../../src/po/loginPage");

describe('Incorrect login username test', () => {
  it('Must display message of incorrect username', async () => {
      await loginPage.open();
      await loginPage.signIn('logintest', '12345679');

      const expectedErrorMessage = await loginPage.incorrectLabel;
      await expectedErrorMessage.waitForExist(); 
      const text = await expectedErrorMessage.getText(); 
      expect(text).toContain('Incorrect username or password'); 
  });
});

describe('Incorrect login password test', () => {
  it('Must display message of incorrect password', async () => {
      await loginPage.open();
      await loginPage.signIn('incorrectlogintest', '12345678');

      const expectedErrorMessage = await loginPage.incorrectLabel;
      await expectedErrorMessage.waitForExist(); 
      const text = await expectedErrorMessage.getText(); 
      expect(text).toContain('Incorrect username or password'); 
  });
});

describe('Correct login test', () => {
  it('Must navigate to top rated page', async () => {
      await loginPage.open();
      await loginPage.signIn('logintest', '12345678');

      const logOutBotton = await $('nav > div > div > button');
      await logOutBotton.waitForExist(); 
      const text = await logOutBotton.getText(); 
      expect(text).toContain('Logout'); 
  });
});