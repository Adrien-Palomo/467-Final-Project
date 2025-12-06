// @flow
import { add } from "./math.js";
import { getAge } from "./user.js";
console.log(add("a", 3));
console.log(getAge({ id: 1, name: "Ada", age: 30 }));
