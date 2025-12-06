// @flow
type User = {| id: number, name: string |};
function greet(u: User) { console.log(u.username); }
greet({ id: 1, name: "Ada" });
