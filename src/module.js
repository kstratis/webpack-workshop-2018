import { value, fn } from "./index";


console.log(fn());
console.log(value);
// try {
//   console.log(fn());
//   console.log("Works correctly");
// } catch(e) {
//   console.log("Broken " + e);
// }

// try {
//   console.log(value); // should throw a TDZ error
//   console.log("Broken");
// } catch(e) {
//   console.log("Works correctly");
// }
