import {z} from "zod"

const ageSchema = z.number().min(18).max(100).int();
const studentAge = 17;
const validAge = ageSchema.parse(studentAge);
console.log(validAge);