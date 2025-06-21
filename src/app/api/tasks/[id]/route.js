import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json(task);
}


export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdated = await prisma.task.update({
    where: { id: parseInt(params.id) },
    data: data,
  });
  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Tarea eliminada" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar tarea" },
      { status: 500 }
    );
  }
}
