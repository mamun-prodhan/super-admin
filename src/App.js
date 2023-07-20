import React from "react";
import menuHome from '../src/assets/home-menu.svg';
import contractors from '../src/assets/engineer.png';

function App() {
  return (
    <div className="lg:flex">
      {/* menu div */}
      <div className="w-[100%] lg:w-[20%] flex lg:block items-center justify-around py-3 bg-red-300">
        <div className="flex flex-col items-center">
          <img className="w-[56px] h-[49px] hover:bg-[#3F8825] rounded-xl p-3  hover:bg-opacity-[31%]" src={menuHome} alt="dashboard" />
          <p className="text-xs font-semibold mt-1">Dashboard</p>
        </div>
        <div className="flex flex-col items-center  lg:my-16">
          <img className="w-[56px] h-[49px] hover:bg-[#3F8825] rounded-xl p-3  hover:bg-opacity-[31%]" src={menuHome} alt="contractors" />
          <p className="text-xs font-semibold mt-1">Contractors</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[56px] h-[49px] hover:bg-[#3F8825] rounded-xl p-3  hover:bg-opacity-[31%]" src={menuHome} alt="users" />
          <p className="text-xs font-semibold mt-1">Users</p>
        </div> 
      </div>
      {/* graph div */}
      <div className="w-[80%] h-[200px] bg-red-700">

      </div>
    </div>
  );
}

export default App;
