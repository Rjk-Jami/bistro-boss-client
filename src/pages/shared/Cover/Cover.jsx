import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ bg, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bg}
            bgImageAlt="the menu"
            strength={-300}
        >
            <div className="hero min-h-max " >
                <div className=" bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" md:my-20  md:mx-16  bg-black bg-opacity-40">
                        <div className=" text-white md:px-52 md:py-24 p-4   w-full mx-auto">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold  uppercase font-serif">{title}</h1>
                            <p className="">{subTitle}</p>
                        </div>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;