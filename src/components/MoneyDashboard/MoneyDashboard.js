import React from "react";
import money from "../../assets/money.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import arrow3 from "../../assets/arrow3.png";
import cross from "../../assets/delete.png";
import error from "../../assets/error.png";
import export1 from "../../assets/export.png";
import goal from '../../assets/goal.png';

const MoneyDashboard = () => {
  return (
    <div className="p-12">
      <div className=" border-2 border-sky-500 rounded-xl p-12">
        <div className="w-[30%]">
          <p className="text-xl font-semibold">Processing</p>
          <h3 className="text-3xl font-bold">$0.00 USD</h3>
          {/* money details */}
          <div className="border border-[#EAEAEA] rounded-lg p-3 my-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="p-2 bg-[#EAEAEA] rounded-full"
                  src={money}
                  alt=""
                />
                <p className="mx-3">See details about money thats on the way</p>
              </div>
              <img
                className="p-2 bg-[#EAEAEA] rounded-full"
                src={cross}
                alt=""
              />
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="p-2 bg-[#EAEAEA] rounded-full"
                  src={money}
                  alt=""
                />
                <p className="mx-3 font-semibold">Demo</p>
              </div>
              <p className="font-semibold">$0.00</p>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <p className="mx-3 font-semibold">Pending</p>
                <img
                  className=" bg-[#EAEAEA] rounded-full w-[16px] h-[16px]"
                  src={error}
                  alt=""
                />
              </div>
              <p className="font-semibold">$0.00</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="mx-3 font-semibold">On the way</p>
              <p className="font-semibold">$0.00</p>
            </div>
            <div className="flex items-center justify-between  text-[#787777]">
              <div className="flex items-center">
                <p className="mx-3 font-semibold">Ready for payout</p>
                <img
                  className=" bg-[#EAEAEA] rounded-full w-[16px] h-[16px]"
                  src={error}
                  alt=""
                />
              </div>
              <p className="font-semibold">$0.00</p>
            </div>
            <div className="flex items-center justify-between my-3 text-[#787777]">
              <div className="flex items-center">
                <p className="mx-3 font-semibold">Sent to payout account</p>
                <img
                  className=" bg-[#EAEAEA] rounded-full w-[16px] h-[16px]"
                  src={error}
                  alt=""
                />
              </div>
              <p className="font-semibold">$0.00</p>
            </div>
            <hr className="mb-3" />
            <div className="flex items-center justify-between my-3">
              <p className="mx-3 font-semibold text-[#928CF9]">See details</p>
              <img src={arrow3} alt="" />
            </div>
          </div>
          <h3 className="text-3xl font-bold">Goal</h3>
          <div className="border border-[#EAEAEA] rounded-lg p-3 my-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="p-2 bg-[#EAEAEA] rounded-full"
                  src={goal}
                  alt=""
                />
                <p className="mx-3 font-semibold text-[#787777]">Set an earnings goal</p>
              </div>
              <p className="mx-3 font-semibold text-[#928CF9]">Create goal</p>
            </div>
            <hr  className="my-3"/>
            <div>
                <p className="mx-3 font-semibold text-[#787777]">Earn my first $10</p>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className="w-[70%]"></div>
      </div>
    </div>
  );
};

export default MoneyDashboard;
