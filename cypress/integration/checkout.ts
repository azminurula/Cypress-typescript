import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { CheckoutPage } from "./pages/checkout_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com/'

it('Test Checkout', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  dashboardPage.sauceLabsBackpack()
  dashboardPage.addTOcart()
  checkoutPage.moveToCart()
  checkoutPage.AssertCartPage()
  checkoutPage.Checkout()
  checkoutPage.InputFirstName('Jasmine')
  checkoutPage.InputLastName('Khol')
  checkoutPage.InputPostalCode('14150')
  checkoutPage.Continue()
  checkoutPage.AssertCheckoutOverview()
  checkoutPage.Finish()
  checkoutPage.AssertOrderConfirmation()
})
