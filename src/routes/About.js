import React from 'react';
import NavBar from '../Components/NavBar';


export default function About() {
  return (
    <>
    <NavBar/>
     <div className='head'>
      <b>MyMonthly</b>
    </div>
    <div className='head-body'>
        <p>A period tracker application is a tool that helps people track their menstrual cycles, including period start and end dates, symptoms, and ovulation. It may also offer features like fertility tracking, reminders for pill or other contraceptive use, and general health information related to menstruation. The application is typically designed to be user-friendly and accessible, with a range of customization options to suit individual needs. Overall, the goal of a period tracker application is to empower people to better understand and manage their menstrual health.</p>
    </div>
    </>
  );
}
