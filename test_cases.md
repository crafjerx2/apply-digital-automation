### Test Case Document: **Product Purchase and Checkout Flow**

#### **Test Case Name:**  
Product Purchase and Checkout Flow

#### **Module:**  
E-commerce – Purchase and Checkout

#### **Description:**  
This test case validates the user journey of purchasing a product on an e-commerce platform from selecting a product, adding it to the cart, and completing the payment process on mobile and desktop viewports. The flow also checks for various product and cart-related details throughout the process.

### **Preconditions:**
1. The user is not logged in.
2. The product catalog is available.
3. The application supports responsive behavior for mobile and desktop.
4. The random user and product information can be fetched via predefined functions (e.g., `getProductById()`, `getRandomUser()`).
5. Valid test credit card information is available via `getRandomCreditCard()`.
6. Application URL is available (e.g., `https://automationexercise.com/`).

### **Test Steps:**

1. **Open the application in a mobile or desktop viewport:**
   - Set the viewport to `375, 812` iphone-x  Or set the viewport to `1366, 768` desktop resolution
   - Navigate to the home page: `https://automationexercise.com/`.

2. **Select a product:**
   - Click on the "Products" link using top menu.
   - Click on the specific product card, in this case (Product ID: 3) to navigate to the product details page.

3. **Validate product details:**
   - Ensure the product name, category, availability, condition, and brand are displayed correctly.

4. **Add product to cart:**
   - Enter a random quantity for the selected product.
   - Click the "Add to Cart" button.

5. **Review cart:**
   - Ensure the cart modal is displayed with correct information.
   - Click "View Cart" in the cart modal.

6. **Proceed to checkout:**
   - Verify the correct product quantity is displayed in the cart.
   - Click the "Checkout" button.

7. **Sign up a new user:**
   - On the login page, select the "Register" option.
   - Use random user data (e.g., `firstname`, `email`) to create a new account.
   - Click on Signup button for going to signup page.
   - Fill in the signup form using random user details.
   - Click on Create Account button

8. **Place an order:**
   - After registration, navigate back to the cart and proceed to checkout again.
   - Click "Place Order" on the checkout page.

9. **Complete payment:**
   - Enter payment information using a random credit card.
   - Click "Proceed Payment."

10. **Validate successful payment:**
    - Ensure a confirmation message or page is displayed indicating successful payment.

### **Expected Results:**
1. The product selection is successful, and product details are accurately shown.
2. The selected product is correctly added to the cart with the desired quantity.
3. The cart and checkout flows are completed without issues.
4. New user signup is successful, and user information is processed correctly.
5. Payment is completed successfully with a valid confirmation message or page displayed.

### **Post-Conditions:**
1. The product is purchased, and the payment is successful.
2. The user account is created, and the order is placed.
3. The system confirms the order and payment details.
