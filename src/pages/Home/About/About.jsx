import bg from "../../../assets/home/chef-service.jpg"
const About = () => {
    return (
        <div className="hero min-h-max mb-12"   style={{ backgroundImage: `url(${bg})` }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" md:my-20 my-8 md:mx-16  bg-white">
      <div className=" text-black m-8 w-4/5 mx-auto">
      <h1 className="mb-5 text-4xl font-thin uppercase font-serif">Bistro Boss</h1>
      <p className="mb-5">Food order websites or online food delivery platforms allow users to order food from various restaurants or eateries in their area. These platforms typically have a website or mobile app where users can browse menus, select their desired dishes, customize their orders, and proceed to checkout. The platforms may offer delivery or pickup options depending on the restaurant and location.</p>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default About;