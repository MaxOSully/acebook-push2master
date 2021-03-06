describe('Timeline', function() {
  it('can submit posts and view them', function() {
    cy.visit('/users/login');
    cy.get('#login-form').find('[id="email"]').type('joe@gmail.com');
    cy.get('#login-form').find('[id="password"]').type('password123');
    cy.get('#login-form').submit();
    cy.contains('New post').click();

    cy.get('#new-post-form').find('[name="message"]').type('Hello, world!');
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', 'Hello, world!');
  });
});
