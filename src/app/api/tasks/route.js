import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function PUT(request, { params }) {
  const { id } = await params; //const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: { id: parseInt(id) }, // 
    data: data,
  });
  return NextResponse.json(taskUpdated);
}
