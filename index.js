// Write your solution in this file!
const driver = {
  name : 'Sam',
}

function updateDriverWithKeyAndValue(driver, newDriver) {
  return Object.assign ( {}, driver, newDriver);
  }



  const newDriver = {
    name : 'Sam'
    address : '11 Broadway'
  };

  const updatedInfo = updateDriverWithKeyAndValue(driver, newDriver);
