import aboutImg1 from "./assets/aboutImg1.png"
import aboutImg2 from "./assets/aboutImg2.png"

function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-x-8" id="about">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
            <div className="md:w-1/2">
                <img src={aboutImg1} alt="" />
            </div>
            {/* Abount Content */}
            <div className="md:w-2/5 ">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
                <p className="text-tartiary text-lg mb-7">A good example of paragraph contains contains a topic conclustion. There are many different kinds of animals in China.</p>
                <button className="btnPrimary">Get Started</button>
            </div>
        </div>
        
        {/* 2nd Paragraph */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8">
            <div className="md:w-1/2">
                <img src={aboutImg2} alt="" />
            </div>
            {/* Abount Content */}
            <div className="md:w-2/5 ">
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You can practice at any <span className="text-secondary">time convinient for You</span></h2>
                <p className="text-tartiary text-lg mb-7">A good example of paragraph contains contains a topic conclustion. There are many different kinds of animals in China.</p>
                <button className="btnPrimary">Get Started</button>
            </div>  
        </div>



    </div>
  )
}

export default About