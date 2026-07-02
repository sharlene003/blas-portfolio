import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
    >
      <ArrowLeftIcon className="h-6 w-6" />
      <span>Back</span>
    </button>
  );
}