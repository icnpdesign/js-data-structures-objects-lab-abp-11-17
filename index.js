// Write your solution in this file!
const driver = {
  name : 'Bill',
}

function updatedriverWithKeyAndValue (oldDriver, updatedDriver) {
  return Object.assign ({}, oldDriver, updatedDriver);

}

const updatedDriver = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
 // RIPPPPPPP TEST 2//

 function destructivelyUpdateDriverWithKeyAndValue(driver, name, 'Bill') {
  driver.name = 'Sam';
  driver.address = '12 Broadway'; 
 }
