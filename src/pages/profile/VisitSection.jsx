import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ScheduleCard from '../../components/cards/ScheduleCard';
import covenantGarden from '../../assets/covenantGarden.png';
import elpueblo from '../../assets/elpueblocondo.png';

const VisitSection = ({ user }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [schedules, setSchedules] = useState([
    { id: 1, dormName: 'Covenant Garden Sta. Mesa Condo for Rent near PUP & UERM', time: '10:00 AM', date: '2024-07-12', status: 'visited', imageUrl: covenantGarden },
    { id: 2, dormName: 'El Pueblo Condo For Rent', time: '2:00 PM', date: '2024-07-13', status: 'cancel', imageUrl: elpueblo },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.id === id ? { ...schedule, status: newStatus } : schedule
      )
    );
  };

  return (
    <div className="w-full h-full w-max-md min-h-screen flex">
      <div className="w-1/2">
        <h2 className="text-lg font-semibold mt-6 mb-2">Schedule a Visit</h2>
        <div className="p-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            calendarClassName="w-full pt-2 pl-11 border-none items-center"
            dayClassName={(date) =>
              date.getDay() === 0 ? 'text-red-600' : undefined
            }
          />
        </div>
      </div>
      <div className="w-1/2 mt-[-20px]">
        <ScheduleCard schedules={schedules} handleStatusChange={handleStatusChange} />
      </div>
    </div>
  );
};

export default VisitSection;
