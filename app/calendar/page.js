"use client"
import React, { useState } from 'react';
import { CCalendar } from '@coreui/react-pro';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const CalendarRangeSelectionExample = () => {
  const [startDate, setStartDate] = useState(new Date(2022, 7, 23)); 
  const [endDate, setEndDate] = useState(new Date(2022, 8, 8));

  const handleDateChange = (range) => {
    if (range && range.length === 2) {
      setStartDate(range[0]);
      setEndDate(range[1]);
    }
  };

  // Format dates consistently
  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
  };

  return (
    <div className="d-flex flex-column align-items-center justify-around w-full rounded-lg">
      <h2 className="my-4 text-primary">Select Date Range</h2>
      <CCalendar
        calendars={2}
        className="border rounded mx-auto flex justify-around text-3xl shadow-lg w-[90%] h-[90%] mb-6 pb-10"
        locale="en-US"
        range
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
      />
      <div className="mt-4">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-primary">
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formatDate(startDate)}</td>
              <td>{formatDate(endDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarRangeSelectionExample;
