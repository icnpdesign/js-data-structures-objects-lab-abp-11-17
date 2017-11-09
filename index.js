// Write your solution in this file!
function updatedriverWithKeyAndValue (oldDriver, updatedDriver) {
  return Object.assign ({}, oldDriver, updatedDriver);

}
const driver = {
  name : 'Bill',
}

const newDriver = {
  name : 'Sam',
  address : '11 Broadway'
};

const updatedDriver = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
