/*

 Truthy and Falsy Values
            JavaScript treats certain values as true or false in conditions:

Falsy Values:

    false, 0, "" (empty string), null, undefined, NaN , BigINt 0n

Truthy Values:

    Everything else (non-zero numbers, non-empty strings, objects, arrays)

    */


// The nullish coalescing operator (??) returns the right-hand operand 
// when the left-hand operand is null or undefined. 
// Otherwise, it returns the left-hand operand.


// let result = value ?? defaultValue;

const name = null;
const displayName = name ?? "Guest";
console.log(displayName); // "Guest"

const a = null;
const b = undefined;
const c = 0;
const d = "";
const e = false;

console.log(a ?? "default");  // "default" (null is nullish)
console.log(b ?? "default");  // "default" (undefined is nullish)
console.log(c ?? "default");  // 0 (0 is NOT nullish)
console.log(d ?? "default");  // "" (empty string is NOT nullish)
console.log(e ?? "default");  // false (false is NOT nullish)

const dbResult = null; // No data from DB
const cachedResult = "cached_value";

const finalResult = dbResult ?? cachedResult;
console.log(finalResult); // "cached_value"


const userInput = "";
const savedValue = null;

const finalValue = userInput ?? savedValue ?? "default";
console.log(finalValue); // " "


const response = { data: null };
const data = response.data ?? [];
console.log(data); // []


const user = {
  profile: null
};

// Without nullish coalescing
const profileName = user.profile?.name;
console.log(profileName); // undefined

// With nullish coalescing
const displayName2 = user.profile?.name ?? "No Profile";
console.log(displayName2); // "No Profile"