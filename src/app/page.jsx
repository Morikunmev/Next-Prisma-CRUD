import { prisma } from "../libs/prisma";
import TaskCard from "../components/TaskCard";

async function loadTasks() {
  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic"; 
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
