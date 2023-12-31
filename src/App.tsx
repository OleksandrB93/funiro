import "./App.css";
import Explains from "./components/Explains";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MasonryList from "./components/MasonryList";
import OurProduct from "./components/OurProduct";
import Slider from "./components/Slider";
import ToTop from "./components/ToTop";
import {
  autoplay,
  explainsSliderBreackpoints,
  heroSliderBreackpoints,
  navigation,
  navigationExplains,
  pagination,
  tipsSliderBreackpoints,
} from "./configs/sliderConfigs";
import { explainsSlider } from "./data/explainsSlider";
import { features } from "./data/features";
import { heroSlides } from "./data/heroSlides";
import { masonryList } from "./data/masonryList";
import { ourProduct } from "./data/ourProduct";
import { tipsSlider } from "./data/tipsSlider";

function App() {
  return (
    <>
      <Header />
      <Slider
        effect={"slide"}
        slides={heroSlides}
        title={"Hero slider"}
        breackpoints={heroSliderBreackpoints}
        arrowNavigation={true}
        autoplay={autoplay}
        navigation={navigation}
        pagination={pagination}
        heroSlides={true}
      />
      <div className="bg-bgPrimary">
        <Features features={features} />
        <OurProduct ourProduct={ourProduct} />
        <section
          id="Rooms"
          className="maxSm:flex-col flex justify-center items-center mx-auto bg-gradientEnd max-w-[1440px] scroll-mt-[50px] "
        >
          <Explains />
          <Slider
            effect={"slide"}
            slides={explainsSlider}
            title={"Beautiful rooms inspiraiton"}
            breackpoints={explainsSliderBreackpoints}
            autoplay={autoplay}
            navigation={navigationExplains}
            arrowNavigation={true}
            pagination={pagination}
            explainsSliderBoll={true}
          />
        </section>
        <Slider
          effect={"slide"}
          slides={tipsSlider}
          title="Tips & Tricks"
          breackpoints={tipsSliderBreackpoints}
          autoplay={autoplay}
          navigation={navigation}
          arrowNavigation={true}
          pagination={pagination}
          tipsSliderBool={true}
        />
        <MasonryList masonryList={masonryList} />
      </div>
      <ToTop />
      <div className="bg-footerBg">
        <Footer />
      </div>
    </>
  );
}

export default App;
