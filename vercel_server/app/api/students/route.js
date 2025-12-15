import { connectDB } from '../../../lib/db.js';
import { Student } from '../../../model/index.js';

export async function GET() {
  await connectDB();
  const students = await Student.find();
  return Response.json(students);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { initialBalance } = body;
  const balance = parseFloat(initialBalance) || 0;
  const student = new Student({ ...body, balance });
  await student.save();
  return Response.json(student);
}
