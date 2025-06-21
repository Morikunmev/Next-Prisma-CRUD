import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = await prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear tarea" },
      { status: 500 }
    );
  }
}
