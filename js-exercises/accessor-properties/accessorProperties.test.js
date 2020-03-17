import { accessorProperties } from "./accessorProperties";

describe("Template Test", () => {
  test("Template Test", () => {
    const person = {};
    person.name = 'balaji';
    person.age = 26;
    const modifiedPerson = accessorProperties(person);
    modifiedPerson.number = 36;
    expect(modifiedPerson.number).toBe('100100');
    expect(modifiedPerson.name).toBe('balaji');
    expect(modifiedPerson.age).toBe(26);
  });
});
