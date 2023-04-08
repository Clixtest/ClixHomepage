import React from 'react';
import icon1 from '../../../Assets/icon/icon01.png'
import icon2 from '../../../Assets/icon/icon02.png'
import icon3 from '../../../Assets/icon/icon03.png'
import icon4 from '../../../Assets/icon/icon04.png'
import './CoreValues.css'
import CoreValuesCard from './CoreValuesCard';
const CoreValues = () => {
    const coreValuesData = [
        {
            id: 1,
            icon: icon1,
            name: "Sustainability",
            title: "The Clix ecosystem is committed to promoting sustainability by investing in renewable energy sources such as solar farms. By supporting sustainable investments, Clix members can make a positive impact on the environment while earning returns on their investments.",
            link: "https://www.google.com"
        },
        {
            id: 2,
            icon: icon2,
            name: "Community",
            title: "Clix is more than just a financial platform, it's a global community of like-minded individuals who are passionate about innovation and financial freedom. By joining the Clix community, members have the opportunity to connect with other individuals and share knowledge and expertise.",
            link: "https://www.google.com"
        },
        {
            id: 3,
            icon: icon3,
            name: "Decentralization",
            title: "The Clix ecosystem is built on decentralized technology, which means that the governance of the platform is in the hands of the community. By holding the $CLIX token, members have a say in the direction of the platform and can contribute to its development and growth.",
            link: "https://www.google.com"
        },
        {
            id: 4,
            icon: icon4,
            name: "Financial Empowerment",
            title: "The Clix ecosystem empowers individuals to take control of their finances and invest in assets traditionally inaccessible to the average person. By holding a membership pass, individuals can access investment opportunities and earn income from these assets, creating a path to financial freedom.",
            link: "https://www.google.com"
        }
    ]
    return (
        <div className='hero corebg py-14 mt-[-2px]' id='CoreValues'>
            <div className='w-11/12 mx-auto'>
                <div className=' flex justify-center'>
                    <h3 className='text-area text-white text-center relative z-10 mb-10 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>Core</span> Values</h3>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 gap-5'>
                    {
                        coreValuesData.map(coreData => <CoreValuesCard
                            key={coreData.id}
                            coreData={coreData}
                        ></CoreValuesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoreValues;