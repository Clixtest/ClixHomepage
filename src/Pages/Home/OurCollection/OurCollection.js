import React from 'react';
import CollectionBgImg from '../../../Assets/img/collection-bg-img.png'
import OurCollectionCard from './OurCollectionCard';
import CollectionImg1 from '../../../Assets/img/collection-01.png'
import CollectionImg2 from '../../../Assets/img/collection-02.png'
import CollectionImg3 from '../../../Assets/img/collection-03.png'
import CollectionImg4 from '../../../Assets/img/collection-04.png'
import CollectionGif1 from '../../../Assets/img/gif/Platinum.gif'
import CollectionGif2 from '../../../Assets/img/gif/Red.gif'
import CollectionGif3 from '../../../Assets/img/gif/Gold.gif'
import CollectionGif4 from '../../../Assets/img/gif/Green.gif'
import CollectionGif5 from '../../../Assets/img/gif/Silver.gif'

import shape01 from '../../../Assets/shape/shape-img01.png'
import Pattern from '../../../Assets/img/pattern.png'
import Icon from '../../../Assets/social media icons/right-arrow.png'
import './OurCollection.css'
import { Link } from 'react-router-dom';

const OurCollection = () => {
    const collectionData = [
        {
            id: 1,
            img: CollectionGif1,
            title: "Platinum Proprietor",
            qty: 111
        },
        {
            id: 2,
            img: CollectionGif2,
            title: "Crimson Connection",
            qty: 555
        },
        {
            id: 3,
            img: CollectionGif3,
            title: "Gilded Gateway",
            qty: 1111
        },
        {
            id: 4,
            img: CollectionGif4,
            title: "Emerald Empire",
            qty: 3333
        },
        {
            id: 5,
            img: CollectionGif5,
            title: "Silver Society",
            qty: 5399
        }
    ];

    return (
        <div className=' h-auto overflow-hidden hero mt-[-2px] collection-Bg' style={{ backgroundImage: `url(${CollectionBgImg})` }} id='Collections'>
            <div className='absolute top-[170px] left-0'>
                <img className='w-[400px]' src={shape01} alt='' />
            </div>
            <div className='absolute z-10  bottom-[-205px] ml-2 pointer-none'>
                <img className='w-[611px] pointer-none' src={Pattern} alt='' />
            </div>
            <div className='w-11/12 mx-auto'>
                <div className=' flex justify-center mt-20 mb-8'>
                    <h3 className='Innovation-top-title text-white text-center relative z-10 mb-6 font-roboto text-[42px] uppercase '><span className=' text-[#079E01]'>our</span> Collection</h3>
                </div>
                <div className='gifCard grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 gap-10'>
                    {
                        collectionData.map(collection => <OurCollectionCard
                            key={collection.id}
                            collection={collection}
                        ></OurCollectionCard>)
                    }
                </div>

                <div className='flex justify-center relative z-[20px] pb-12 position-relative'>
                </div>
            </div>
        </div>
    );
};

export default OurCollection;