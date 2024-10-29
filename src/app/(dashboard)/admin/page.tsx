import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"></UserCard>
          <UserCard type="teachers"></UserCard>
          <UserCard type="parents"></UserCard>
          <UserCard type="staff"></UserCard>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart></CountChart>
          </div>
          {/* Attendance CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart></AttendanceChart>
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className=" w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar></EventCalendar>
        <Announcements></Announcements>
      </div>
    </div>
  );
};

export default AdminPage;
