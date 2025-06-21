import { prisma } from "../libs/prisma";
import TaskCard from "../components/TaskCard";
async function loadTasks() {
  // Obteniendo de la base de datos
  // const res = await fetch("http://localhost:3000/api/tasks");
  // const data = await res.json();
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold text-black mb-6">Lista de Tareas</h1>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
