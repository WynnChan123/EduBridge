import React from 'react';
import Flatlist from '../../../components/FlatList/flatlist';
import StudentLayout from '../../../components/Layouts/StudentLayout';
import InputBox from '../../../components/Input/input';


const TutorsNearby = () => {
  const DATA = [
    {
      id: 1,
      name: 'John Doe',
      education: 'BSc in Mathematics',
      location: 'New York, NY',
      subjects: ['Math', 'Physics'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      education: 'MSc in Chemistry',
      location: 'Los Angeles, CA',
      subjects: ['Chemistry', 'Biology'],
    },
  ];

  return (
    <StudentLayout>
    <div className="min-h-fit">
      <div className="max-w-3xl mx-auto pt-8">
        <div className="flex flex-row space-x-10">
          <h1 className="text-2xl font-bold mb-4 text-center flex-1">Tutors Nearby</h1>
          <div>
            <InputBox className="bg-gray-100 rounded-full border-gray-300 h-10 w-full hover:bg-gray-200 justify-items-end flex" placeholder="  Search" />
          </div>
        </div>
        <Flatlist data={DATA} />
      </div>
    </div>
    </StudentLayout>
  );
};

export default TutorsNearby;
