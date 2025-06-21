import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache"; // ← Agregar este import
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
  try {
    const data = await request.json();
    const taskUpdated = await prisma.task.update({
      where: { id: parseInt(params.id) },
      data: data,
    });
    
    revalidatePath('/'); // ← Agregar esto
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al actualizar tarea" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath('/'); // ← Agregar esto
    return NextResponse.json({ message: "Tarea eliminada" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al eliminar tarea" },
      { status: 500 }
    );
  }
}