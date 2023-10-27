import { ChangeEventHandler } from "react";

type DashboardProps = {
  inputName: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const Dashboard = ({ inputName, handleChange }: DashboardProps) => {
  return (
    <form
      className="flex flex-col gap-4 bg-primary-10 text-white"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="font-bold">Class Name</label>
        <input
          name={inputName}
          className="w-full"
          type="text"
          value={inputName}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Dashboard;
