// Write your solution in this file!
const driver = {
  name : 'Bill',
}

function updatedriverWithKeyAndValue (oldDriver, updatedDriver) {
  return Object.assign ({}, oldDriver, updatedDriver);

}

const newDriver = {
  name : 'Sam',
  address : '11 Broadway'
}

const updatedDriver = updatedriverWithKeyAndValue(driver, newDriver);
