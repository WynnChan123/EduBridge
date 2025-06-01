import { React } from 'react';
import StudentLayout from '../../components/Layouts/StudentLayout';

const StudentDashboard = () => {
  return (
    <StudentLayout>
      <div className="flex flex-col h-[calc(90vh-4rem)]">
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-200 p-4 rounded-lg">
          <div key="classes" className="text-center">
            <h3 className="text-gray-600">Classes Taken</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div key="tutors" className="text-center">
            <h3 className="text-gray-600">Number of Tutors Who Taught You</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div key="subjects" className="text-center">
            <h3 className="text-gray-600">Subjects enrolled</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Activities and Invoices Section */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {/* Activities Section */}
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col">
            <h2 className="font-semibold mb-4">Activities</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Your biology class is starting in 1 hour</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <p>Your history class ended!</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <p>Mr Anderson left you a message, open Messages to view it!</p>
              </div>
            </div>
          </div>

          {/* Recent Invoices Section */}
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col">
            <h2 className="font-semibold mb-4">Recent Invoices</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-2">Date</th>
                  <th className="pb-2">Tutor Name</th>
                  <th className="pb-2">Tutored Subject</th>
                  <th className="pb-2">Download</th>
                </tr>
              </thead>
              <tbody>
                {/* Add invoice rows here when data is available */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;