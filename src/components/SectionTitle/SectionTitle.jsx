
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8 font-mono"> 
            <p className="text-yellow-600 border-y-4 py-4 mb-2 ">--- {subHeading} ---</p>
            
            <p className="text-4xl uppercase">{heading}</p>
        </div>
    );
};

export default SectionTitle;