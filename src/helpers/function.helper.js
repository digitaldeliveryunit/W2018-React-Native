export const getShortcutName = (_firstName, _lastName, _fullName) => {
  if (_firstName && _lastName) {
    return (
      _firstName.substr(0, 1).toUpperCase() +
      _lastName.substr(0, 1).toUpperCase()
    );
  }
  if (_fullName) {
    return _fullName
      .split(" ")
      .map(item => item.substr(0, 1).toUpperCase())
      .join("");
  }
  return null;
};
