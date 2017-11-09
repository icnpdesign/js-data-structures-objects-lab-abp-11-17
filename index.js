// Write your solution in this file!
const driver = {
  name : 'Bill',
}

function updatedriverWithKeyAndValue (driver, newDriver) {
  return Object.assign ({}, driver, newDriver);

}

const newdriver = {
  name : 'Sam',
  address : '11 Broadway'
}

const updatedDriver = updatedriverWithKeyAndValue(driver, newDriver);
