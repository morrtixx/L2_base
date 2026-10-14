function createPhoneNumber(numbers) {
  let areaCode = "" + numbers[0] + numbers[1] + numbers[2];
  let firstPart = "" + numbers[3] + numbers[4] + numbers[5];
  let secondPart = "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  return "(" + areaCode + ") " + firstPart + "-" + secondPart;
}