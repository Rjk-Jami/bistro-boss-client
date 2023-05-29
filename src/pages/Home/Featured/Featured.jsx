import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from "../../../assets/home/featured.jpg"
import "./style.css"
const Featured = () => {
    return (
        
        <div className='featured-item text-white py-20 bg-fixed'>

            <SectionTitle heading={"Featured Item"} subHeading={"Check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-60 py-8 px-16 md:gap-12 md:w-5/6 mx-auto  ">
                <div className="">
                    <img src={featuredImage} alt="" />
                </div>
                <div className=" space-y-1">
                    <p>March 20, 2023</p>
                    <p className='uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla voluptate quidem explicabo culpa dolore ea obcaecati omnis quaerat consectetur dignissimos ut eius, quod possimus temporibus sunt! Veniam tenetur culpa ducimus incidunt voluptas labore numquam nihil animi consequatur corporis, obcaecati impedit qui aliquid, pariatur rerum. Eum veritatis placeat maxime tenetur quae.</p>
                    <button className='btn btn-outline  text-white border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;