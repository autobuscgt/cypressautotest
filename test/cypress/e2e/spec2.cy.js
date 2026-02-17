const API_URL = 'http://127.0.0.1:5500/test/index.html'
describe('Мой статический сайт', () => {
  it('Успешо находит контейнер', () => {
    cy.visit('/');
    cy.contains('div', 'Как у вас дела?');
  });
});