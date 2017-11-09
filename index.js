// Write your solution in this file!


function updateDriverWithKeyAndValue(oldDriver, updatedDriver) {
  return Object.assign ( {}, oldDriver, updatedDriver);
  }
  
  const driver = {
    name : 'Sam',
  };
  
  const newDriver = {
    address : '11 Broadway'
  };

  const updatedDriverInfo = updateDriverWithKeyAndValue (driver, newDriver);
  
