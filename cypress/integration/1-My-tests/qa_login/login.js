//Правильная пара Логина и пароля: german@dolnikov.ru / iLoveqastudio1
describe ('Тестирование https://login.qa.studio/', function() {
    it('Проверка работы кнопки забыли пароль', function() {
        cy.visit ('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('anton200061@gmail.com')
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon')
        cy.get('#messageHeader')
        cy.contains('Успешно отправили пароль на e-mail');
    })

    it('Проверка позитивной авторизации', function() {
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader');
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Проверка авторизации с неправильным паролем', function() {
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader');
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Проверка авторизации с неправильным логином', function() {
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('anton200061@gmail.com');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader');
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})