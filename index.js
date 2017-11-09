// Write your solution in this file!


function updatedriverWithKeyAndValue (driver, newDriver) {
  return Object.assign ({}, driver, newDriver);

}
const driver = {
  name : 'Bill',
}

const newDriver = {
  name : 'Sam',
  address : '11 Broadway'
};

const updatedDriver = updatedriverWithKeyAndValue(driver, newDriver);
