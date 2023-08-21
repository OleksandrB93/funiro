import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Slider from "./components/Slider";
import {
  autoplay,
  heroSliderBreackpoints,
  navigation,
  pagination,
} from "./configs/sliderConfigs";
import { features } from "./data/features";
import { heroSlides } from "./data/heroSlides";

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
      <Features features={features}/>
    </>
  );
}

export default App;
