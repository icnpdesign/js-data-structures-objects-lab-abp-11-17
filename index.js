// Write your solution in this file!


function updateDriverWithKeyAndValue(driver, newDriver) {
  return Object.assign ( {}, driver, newDriver);
  }

  const driver = {
    name : 'Sam',
  };

  const newDriver = {
    name : 'Sam'
    address : '11 Broadway'
  };

  const updatedInfo = updateDriverWithKeyAndValue(driver, newDriver);
