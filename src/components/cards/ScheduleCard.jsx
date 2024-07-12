import React from 'react';

const ScheduleCard = ({ schedules, handleStatusChange, width = '40', height = '40' }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mt-6 mb-2">Your Schedules</h2>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id} className="mb-4 p-4 border rounded-lg shadow-sm flex items-center">
            <img 
              src={schedule.imageUrl} 
              alt={`${schedule.dormName}`} 
              className={`w-${width} h-${height} mr-4 object-cover rounded-lg`} 
            />
            <div className="flex-grow">
              <div>
                <span className="font-semibold">Dorm Name:</span> {schedule.dormName}
              </div>
              <div>
                <span className="font-semibold">Time:</span> {schedule.time}
              </div>
              <div>
                <span className="font-semibold">Date:</span> {schedule.date}
              </div>
              <div>
                {schedule.status === 'visited' ? (
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleStatusChange(schedule.id, 'cancel')}
                  >
                    Visited
                  </button>
                ) : (
                  <button
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleStatusChange(schedule.id, 'visited')}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleCard;
