import React from 'react';
import { Circle, CircleUserRound } from 'lucide-react';

const Flatlist = ({ data }) => {
  return (
    <div className="p-2">
      {data.map((tutor) => (
        <div
          key={tutor.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
        >
          <div className="flex flex-row items-start space-x-4">
            <CircleUserRound className="w-28 h-full" />
            <div className="flex flex-col flex-1">
              <p className="font-semibold text-lg mb-1 whitespace-nowrap">
                Tutor Name: <span className="font-normal">{tutor.name}</span>
              </p>
              <p className="mb-1 whitespace-nowrap">
                <span className="font-semibold">Education:</span>{' '}
                {tutor.education}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Location:</span>{' '}
                {tutor.location}
              </p>
              <p className="flex flex-row items-center mb-1">
                <span className="font-semibold">Subjects:</span>{' '}
                <span className="ml-1 truncate">
                  {tutor.subjects.join(', ')}
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center pl-80">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    tutor.status ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></div>
                <span>{tutor.status ? 'Active Now' : 'Inactive'}</span>
              </div>
              <a
                className="flex justify-items-end pl-72 pt-20 hover:cursor-pointer text-blue-600 whitespace-nowrap"
                href=""
              >
                View Classes{">>>"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flatlist;
