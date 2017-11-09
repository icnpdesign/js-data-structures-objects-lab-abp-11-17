// Write your solution in this file!
const driver = {
  name : 'Sam',
}

function updatedriverWithKeyAndValue (driver, newDriver) {
  return Object.assign ({}, driver, newDriver);

}
const driver = {
  name : 'Sam',
}

const newdriver = {
  name : 'Sam',
  address : '11 Broadway'
}

const updatedDriver = updatedriverWithKeyAndValue(driver, newDriver);
