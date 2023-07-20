import React from 'react';

const Contractors = () => {
    return (
        <div>
            <h3 className='text-sm mb-5'>Contractors</h3>
            {/* graph */}
            <div>
                <div className='flex'>
                    <div className='me-5'>
                        <p className='text-xs font-semibold text-[#1E1EE6]'>Users</p>
                        <p className='text-xl font-semibold'>39</p>
                        <p className='text-xs font-semibold text-[#B5342A]'>9.3%</p>
                    </div>
                    <div>
                        <p className='text-xs font-semibold text-[#1E1EE6]'>Users</p>
                        <p className='text-xl font-semibold'>39</p>
                        <p className='text-xs font-semibold text-[#606367]'>9.3%</p>
                    </div>
                </div>
                <div>
                    <p>Graph</p>
                </div>
                <div>
                    <hr className='w-[5px] border-[#1E1EE6]' />
                    <p>Last 7 days</p>
                    <hr />
                    <hr />
                    <p>Preceding period</p>
                </div>
                <p>Las 7 days</p>
            </div>
        </div>
    );
};

export default Contractors;