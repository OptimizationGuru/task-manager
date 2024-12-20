import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface NoTasksCardProps {
  onCreateTaskClick: () => void;
  msg: string;
}

const NoTasksCard: React.FC<NoTasksCardProps> = ({
  onCreateTaskClick,
  msg,
}) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col gap-4 items-center justify-center mx-auto shadow-2xl rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 sm:p-8 m-4 md:m-8 border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-3xl">
      <div className="flex flex-col items-center justify-center w-full p-4 border border-gray-600 rounded-lg shadow-md">
        <AiOutlinePlusCircle size={40} className="text-blue-400 mb-2" />
        <p className="text-lg sm:text-xl font-semibold text-gray-300 text-center">
          {msg}
        </p>
        <p className="text-sm sm:text-base text-gray-400 mt-2 text-center">
          Start by creating a new task to get organized!
        </p>
        <button
          onClick={onCreateTaskClick}
          className="mt-4 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default NoTasksCard;
