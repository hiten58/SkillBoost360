import banner from "../assets/banner2.png"
import Banner from "../components/Banner"

function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mt-28" id="home">
        <Banner 
            banner={banner}
            heading="Develop your skills without dilligence"
            subheading="A good example of paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals life in China."
            btn1="Get Started"
            btn2="Discount"
        />
    </div>
  )
}

export default Home