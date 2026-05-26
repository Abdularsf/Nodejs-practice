import {z} from "zod"

const ageSchema = z.number().min(18).max(100).int();
const studentAge = 19;
const validAge = ageSchema.parse(studentAge);
console.log(validAge); 