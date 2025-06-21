import { prisma } from "../libs/prisma";

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
          <div key={task.id} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-black mb-2">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-sm text-gray-500 mt-2">{new Date(task.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;