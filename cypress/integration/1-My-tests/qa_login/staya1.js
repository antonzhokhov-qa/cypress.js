describe ('Тестирование https://staya.dog/', function() {
    it('Проверка работы кнопки забыли пароль', function() {
        cy.visit ('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('anton200061@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('anton366');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы')
    })
})