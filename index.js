// Write your solution in this file!
const driver = {
  name : 'Bill',
}

function updateDriverWithKeyAndValue() {
const newDriver = Object.assign ({}, driver, {name: 'Sam'}, {address: '11 Broadway'});
return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue() {
  driver.address = '12 Broadway';
  return driver
}

function deleteFromDriverByKey() {
  const newDriver = Object.assign ({}, driver, {address: '11 Broadway'});
  return newDriver;
}
