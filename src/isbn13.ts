export function isValid(isbn13: string): boolean {
  const isbn = isbn13.replace(/[^0-9]/g, "");

  if (isbn.length !== 13) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(isbn[i]);
    if (i % 2 === 0) {
      sum += digit;
    } else {
      sum += digit * 3;
    }
  }

  // Calculate checksum
  const checksum = (10 - (sum % 10)) % 10;
  return checksum === parseInt(isbn[12]);
}
