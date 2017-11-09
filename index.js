// Write your solution in this file!


function updateDriverWithKeyAndValue(oldDriver, updatedDriver) {
  return Object.assign ( {}, oldDriver, updatedDriver);
  }

  const driver = {
    name : 'Bill',
  };

  const newDriver = {
    name : 'Sam'
    address : '11 Broadway'
  };

  const updatedDriverInfo = updateDriverWithKeyAndValue (driver, newDriver);
