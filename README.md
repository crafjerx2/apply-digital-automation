# Apply Digital Automated Testing Project Using Cypress

## Overview
This project automates the testing of a product purchase and checkout flow on both mobile and desktop viewports using the Cypress testing framework.

### Key Features:
- Tests the full product purchase workflow, including product details, cart, and checkout.
- Supports both desktop and mobile viewports using dynamic viewport settings.
- Includes environment variable configuration for running tests in different viewports.
- Uses mock data for users and products to simulate real-world usage scenarios.

## Technologies Used:
- [Cypress](https://www.cypress.io/) - JavaScript End-to-End Testing Framework.
- Node.js - Runtime environment.
- Faker.js - Library for generating fake data (optional).
- cypress-mochawesome-reporter - Library for reports in cypress
- @cypress-audit/lighthouse has provided tools and metrics concerning applications performances
- @cypress-audit/pa11y has provided tools to analyze and improve the accessibility status of applications

## Prerequisites
- Node.js (v14+)
- npm or yarn installed globally
- Cypress (v10.0.0 or later)

### Installation

1. Clone this repository:
   ```bash
    git clone git@github.com:crafjerx2/apply-digital-automation.git

    cd cypress-automated-testing
    
    npm install

    npm run test:desktop or npm run test:mobile

    ```



