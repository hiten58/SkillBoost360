import insta from "../assets/instagram.png";
import face from "../assets/facebook.png";
import link from "../assets/LinkedIn.png";
import twitter from "../assets/Twitter.png";


function Footer() {
  return (
    <div className="bg-secondary md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-0"
          >
            <span className="text-white">SkillBoost360</span>
          </a>
          <p className="md:w-1/2">
            A simple paragraph comprised of three major components. The first
            sentence, which is often declarative sentence, is called "Topic
            Sentence".
          </p>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#1b0b4947] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              name="Subscribe"
              id="Subscribe"
              className="bg-[#8516d447] px-4 py-2 rounded-md cursor-pointer hover:bg-primary duration-300 transition-all"
            />
          </div>
        </div>

        {/* Footer navigation */}

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-10 items-start"> 
            <div className="space-y-4  mt-5">
                <h4 className="text-xl text-primary">Platform</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-400 ">Overview</a>
                    <a href="/" className="block hover:text-gray-400 ">Features</a>
                    <a href="/" className="block hover:text-gray-400 ">About</a>
                    <a href="/" className="block hover:text-gray-400 ">Pricing</a>
                </ul>
            </div>

            <div className="space-y-4 mt-5">
                <h4 className="text-xl text-primary">Help</h4>
                <ul className="space-y-3 grid grid-rows">
                    <a href="/" className="hover:text-gray-400 ">How does it work?</a>
                    <a href="/" className="hover:text-gray-400 ">where to ask questions?</a>
                    <a href="/" className="hover:text-gray-400 ">How to play?</a>
                    <a href="/" className="hover:text-gray-400 ">What is needed for this?</a>
                </ul>
            </div>

            <div className="space-y-4 mt-5">
                <h4 className="text-xl text-primary">Contacts</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-400 ">+41 05798523</a>
                    <a href="/" className="block hover:text-gray-400 ">156 Winston St. NY</a>
                    <a href="/" className="block hover:text-gray-400 "></a>
                    <a href="/" className="block hover:text-gray-400 ">Pricing</a>
                </ul>
            </div>
            
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ SkillBoost360 2021 --- 2024. All rights reserved.</p>
        <div className="flex item-center space-x-5">
            <img src={insta} alt="intagram" className="w-8 cursor-pointer hover:-translate-y-2 transition-all duration-300"/>
            <img src={face} alt="Facebook" className="w-8 cursor-pointer hover:-translate-y-2 transition-all duration-300"/>
            <img src={link} alt="LinkedIn" className="w-8 cursor-pointer hover:-translate-y-2 transition-all duration-300"/>
            <img src={twitter} alt="Twitter" className="w-8 cursor-pointer hover:-translate-y-2 transition-all duration-300"/>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
