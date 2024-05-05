import Banner from "../components/Banner"
import banner from "../assets/banner2.png"

function Newsletter() {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <Banner 
            banner={banner} 
            heading="Each student can share their discount code with their friends"
            subheading={"A simple paragraph comprised of three major components. The first sentence, which is often declarative sentence, is called 'Topic Sentence'."}
            btn1={"I have a code"}
            btn2={"Get Started"}
        />
    </div>
  )
}

export default Newsletter