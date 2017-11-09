// Write your solution in this file!
const driver = {
  name : 'Sam',
}

function updatedriverWithKeyAndValue (driver) {
  return Object.assign ({}, driver, {address: '11 Broadway'});

}

const newDriver = updatedriverWithKeyAndValue(driver);