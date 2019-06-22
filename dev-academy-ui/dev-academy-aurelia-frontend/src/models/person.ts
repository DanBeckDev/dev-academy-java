import { computedFrom } from "aurelia-framework";

export class Person implements IPerson {
  constructor(person: IPerson) {
    this.id = person.id;
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.authorised = person.authorised;
    this.enabled = person.enabled;
    this.colours = person.colours;
  }

  id: number;
  firstName: string;
  lastName: string;
  authorised: boolean;
  enabled: boolean;
  colours: IColour[];

  @computedFrom("firstName", "lastName")
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @computedFrom("fullName")
  get palindrome(): boolean {

    // TODO: Step 5
    //
    // Implement the palindrome computed field.
    // True should be returned When the FullName is spelt the same
    // forwards as it is backwards. The match should ignore any
    // spaces and should also be case insensitive.
    //
    // Example: "Bo Bob" is a palindrome.
    const fullName = this.firstName + this.lastName;
    const sanitizedName = fullName.toLowerCase().replace(/ /g, '');
    const result =
      Array.from(sanitizedName).toString() ===
      Array.from(sanitizedName)
        .reverse()
        .toString();
    return result;
  }
}
