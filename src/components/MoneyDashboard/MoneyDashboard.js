import React from "react";
import money from "../../assets/money.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import arrow3 from "../../assets/arrow3.png";
import cross from "../../assets/delete.png";
import error from "../../assets/error.png";
import export1 from "../../assets/export.png";
import goal from "../../assets/goal.png";
import home from '../../assets/home.png';

const MoneyDashboard = () => {
  return (
    <div className="lg:p-12">
      <div className=" border-2 lg:flex gap-10 border-sky-500 rounded-xl p-5 lg:p-12">
        <div className="w-[100%] md:w-[100%] lg:w-[30%]">
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
                <p className="mx-3 font-semibold text-[#787777]">
                  Set an earnings goal
                </p>
              </div>
              <p className="mx-3 font-semibold text-[#928CF9]">Create goal</p>
            </div>
            <hr className="my-3" />
            <div>
              <p className="mx-3 font-semibold text-[#787777]">
                Earn my first $10
              </p>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className="w-[100%] md:w-[100%] lg:w-[70%]">
          {/* graph div */}
          <div className="h-[300px]"></div>
          {/* transaction div */}
          <div>
            <div className="md:flex lg:flex items-center justify-between">
              <div>
                <h3 className="text-3xl text-center md:text-start lg:text-start  font-bold">Transactions</h3>
              </div>
              <div className="md:flex lg:flex items-center">
                <div className="flex items-center justify-center my-3 md:my-0 lg:my-0 mr-3 py-2 px-4 rounded-3xl bg-[#EAEAEA]">
                  <img src={export1} alt="export" />
                  <p className="ms-2 font-semibold">Export</p>
                </div>
                <div className="flex items-center justify-center mb-3 md:mb-0 lg:mb-0 mr-3 py-2 px-4 rounded-3xl bg-[#EAEAEA]">
                  <p className="me-2 font-semibold">All activity</p>
                  <img src={arrow1} alt="export" />
                </div>
                <div className="flex items-center justify-center mb-3 md:mb-0 lg:mb-0 py-2 px-4 rounded-3xl bg-[#EAEAEA]">
                  <p className="me-2 font-semibold">All time</p>
                  <img src={arrow1} alt="export" />
                </div>
              </div>
            </div>
            <div className="my-5">
              <table className="w-[100%] font-semibold text-[#787777]">
                <tr className="text-left text-xs md:text-sm lg:text-sm">
                  <th>TYPE</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img className="me-2 md:me-5 lg:me-5 p-1 bg-[#EAEAEA] rounded-full" src={money} alt="" />
                    <span>Payout from Demo to STRIPE TEST BANK 6789</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4"><span>$18.22</span> <span className="md:ms-5 lg:ms-5 rounded-md px-1 py-0.5 text-sm bg-[#D3F3CD]">Settled</span></td>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img className="me-2 md:me-5 lg:me-5 p-1 bg-[#EAEAEA] rounded-full" src={money} alt="" />
                    <span>Guitter Lesson</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4"><span>$38.22</span> <span className="md:ms-5 lg:ms-5 rounded-md px-1 py-0.5 text-sm bg-[#D3F3CD]">Settled</span></td>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img className="me-2 md:me-5 lg:me-5 p-1 bg-[#EAEAEA] rounded-full" src={money} alt="" />
                    <span>Payout from Demo to STRIPE TEST BANK 6789</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4"><span>$20.22</span> <span className="md:ms-5 lg:ms-5 rounded-md px-1 py-0.5 text-sm bg-[#D3F3CD]">Settled</span></td>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img className="me-2 md:me-5 lg:me-5 p-1 bg-[#EAEAEA] rounded-full" src={money} alt="" />
                    <span>Guitter Lesson</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4"><span>$10.22</span> <span className="md:ms-5 lg:ms-5 rounded-md px-1 py-0.5 text-sm bg-[#D3F3CD]">Settled</span></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyDashboard;
