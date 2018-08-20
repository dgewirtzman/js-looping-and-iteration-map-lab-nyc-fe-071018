// Code your solution in this file.
function lowerCaseDrivers(driverList) {
  return driverList.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  let splitDrivers = drivers.map(drivers => drivers.split(" "));
  let driverObject = splitDrivers.map((val, index, splitDrivers) => {
    return {
      firstName: val[0],
      lastName: val[1]
    }
  })
  return driverObject
}

function 