"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h3 className="text-lg font-semibold text-black mb-2">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(task.createdAt).toLocaleString()}
      </p>
    </div>
  );
}

export default TaskCard;
