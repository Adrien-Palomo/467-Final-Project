// @flow
function handle(v: number | string) {
  if (typeof v === "string") v.toUpperCase();
  else v.toFixed(2);
}
handle("abc");
handle(123);
handle(true);
