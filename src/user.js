// @flow
export type User = {| id: number, name: string, age: number |};
export function getAge(u: User): string { return u.age; }
