const registerPage = require('../../src/po/registerPage');

describe('Invalid password register test', () => {
  it('Must display message of invalid password', async () => {
      await registerPage.open();
      await registerPage.signUp('registertest', '1234', '12345678');

      const expectedErrorMessage = await registerPage.incorrectLabel;
      await expectedErrorMessage.waitForExist(); 
      const text = await expectedErrorMessage.getText(); 
      expect(text).toContain('Password length must be 8-16 characters'); 
  });
});

describe('Incorrect confimration of password register test', () => {
  it('Must display message of unmatched password', async () => {
      await registerPage.open();
      await registerPage.signUp('registertest', '12345678', '1234');

      const expectedErrorMessage = await registerPage.incorrectLabel;
      await expectedErrorMessage.waitForExist(); 
      const text = await expectedErrorMessage.getText(); 
      expect(text).toContain('Incorrect password confirmation'); 
  });
});

describe('Trying to register under alredy existing username', () => {
  it('Must display message of already used username', async () => {
      await registerPage.open();
      await registerPage.signUp('logintest', '12345678', '12345678');

      const expectedErrorMessage = await registerPage.incorrectLabel;
      await expectedErrorMessage.waitForExist(); 
      const text = await expectedErrorMessage.getText(); 
      expect(text).toContain('Incorrect or already used username'); 
  });
});