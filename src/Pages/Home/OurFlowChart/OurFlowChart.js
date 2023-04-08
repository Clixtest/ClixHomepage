import React from 'react';
import flowChartImg from '../../../Assets/img/our flow chart-img.png'
import flowChartBg from '../../../Assets/img/flowchart-bg-img.png'
import shape02 from '../../../Assets/shape/shape-img02.png'
import './OurFlowChart.css'
const OurFlowChart = () => {
    return (
        <div className="flow-chart-bg hero  h-auto py-14 mt-[-2px]  " style={{ backgroundImage: `url(${flowChartBg})` }} id='Flowchart'>
            <div className='absolute top-[-165px] right-0'>
                <img src={shape02} className='w-[500px]' alt='' />
            </div>
            <div className=' w-11/12 mx-auto'>
                <div className=' flex justify-center mb-8'>
                    <h3 className='Innovation-top-title text-white text-center mb-6 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>our</span> flow chart</h3>
                </div>
                <div className=' relative z-[25px] flex justify-center items-center'>
                    <img src={flowChartImg} className='' alt='' />
                </div>
            </div>
        </div>
    );
};

export default OurFlowChart;