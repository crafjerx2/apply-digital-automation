describe('Accessibility Test', () => {
    it('should pass the accessibility audit', () => {
      cy.visit('/');
      cy.lighthouse({
        performance: 40,
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
        pwa: 20,
      });

    });
  });