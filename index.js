function isValidCode(code) {
  if (code.length !== 7) 
    return false;

  // Check first 3 characters: letters A-Z (case-insensitive)
  for (let i = 0; i < 3; i++) {
    const char = code[i].toUpperCase();
    if (char < 'A' || char > 'Z') {
      return false;
    }
  }

  // Check last 4 characters: digits 0-9
  for (let i = 3; i < 7; i++) {
    const char = code[i];
    if (char < '0' || char > '9') {
      return false;
    }
  }

  return true;
}

function normalizeCode(code) {
  const letters = code.slice(0, 3).toUpperCase();
  const digits = code.slice(3);
  return letters + digits;
}

function processData(data) {
  const normalizedValidCodes = [];
  let validCount = 0;
  let invalidCount = 0;

  for (const code of data) {
    if (isValidCode(code)) {
      normalizedValidCodes.push(normalizeCode(code));
      validCount++;
    } else {
      invalidCount++;
    }
  }

  normalizedValidCodes.sort();

  return {
    totalCodes: data.length,
    validCodes: validCount,
    invalidCodes: invalidCount,
    normalizedValidCodes: normalizedValidCodes
  };
}

// Sample input
const sampleData = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"];
const result = processData(sampleData);
console.log(result);
