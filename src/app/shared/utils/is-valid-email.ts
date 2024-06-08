export function emailIsValid(value: string) {
  console.log(value);
  const splitEmail = value.split('@');
  // verify if email has just one "@"
  if (splitEmail.length != 2) return false;

  const splitRightSide = splitEmail[1].split('.');
  // verify if email has at least one dot after the @ with strings before and after
  if (splitRightSide.length < 2) return false;
  if (splitRightSide[1].length == 0) return false;

  return true;
}
