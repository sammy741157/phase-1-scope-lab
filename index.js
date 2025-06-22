var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'john';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'jane'; // This will throw an error because leastFavoriteCustomer is a constant
}

