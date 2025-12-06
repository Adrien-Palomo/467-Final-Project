// @flow
function maybeUpper(x: ?string) {
  if (x != null) { x.toUpperCase(); }
  x.toUpperCase();
}
