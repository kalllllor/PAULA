import React from "react";
import "../styles/components/slider.css";
import image1 from "../img/photos/PAULA1.jpg";
import image2 from "../img/photos/PAULA2.jpg";
import image3 from "../img/photos/PAULA3.jpg";
import arrowRight from "../img/next.png";
import arrowLeft from "../img/back.png";
class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
      timerID: 0,
      currentImageIndex: 0,

      className: "Slider__elements Slider__transform",

      sliderData: [
        {
          url: image1,
          title: "DOŚWIADCZENIE",
          description:
            "Hurtownie PAULA to przede wszystkim doradcy budowlani z wieloletnim, praktycznym doświadczeniem w branży zapewniający doradctwo i fachowe wyliczenie ilości materiałów budowlanych niezbędnych do budowy domu, od fundamentu aż po dach.",
        },
        {
          url: image2,
          title: "RZETELNOŚĆ",
          description:
            "W działalności naszej firmy przykładamy szczególną uwagę do fachowości, rzetelności, terminowości oraz solidności.",
        },
        {
          url: image3,
          title: "NISKIE CENY",
          description:
            "Wieloletnia współpraca z najważniejszymi producentami na rynku, pozzwala nam nie tylko oferować materiały po korzystnych cenach, ale także wdrażać wspólnie nowe, innowacyjne technologie.",
        },
      ],
      arrowNext: arrowRight,
      arrowPrev: arrowLeft,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.tick = this.tick.bind(this);

    this.state.timerID = setInterval(() => this.tick(), 4000);
  }

  tick() {
    this.nextSlide();
  }

  prevSlide() {
    const lastIndex = this.state.sliderData.length - 1;

    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      isDisabled: true,
      className: "Slider__elements Slider__go__left",
    });
    clearInterval(this.state.timerID);
    setTimeout(() => {
      this.setState({
        currentImageIndex: index,
        className: "Slider__elements Slider__transform",
        isDisabled: false,
      });
    }, 1000);
    this.setState({
      timerID: setInterval(() => this.tick(), 5000),
    });
  }

  nextSlide() {
    const lastIndex = this.state.sliderData.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    clearInterval(this.state.timerID);
    this.setState({
      isDisabled: true,
      className: "Slider__elements Slider__go__right",
    });
    setTimeout(() => {
      this.setState({
        currentImageIndex: index,
        className: "Slider__elements Slider__transform",
        isDisabled: false,
      });
    }, 1000);
    this.setState({
      timerID: setInterval(() => this.tick(), 5000),
    });
  }
  render() {
    const { sliderData } = this.state;
    const index = this.state.currentImageIndex;
    const index_left =
      index - 1 < 0 ? this.state.sliderData.length - 1 : index - 1;
    const index_right =
      index + 1 > this.state.sliderData.length - 1 ? 0 : index + 1;
    return (
      <div className="Slider">
        <img
          className="Slider__Arrow prevArrow"
          src={this.state.arrowPrev}
          onClick={this.state.isDisabled ? "" : this.prevSlide}
          alt="prev arrow"
        />
        <img
          className="Slider__Arrow nextArrow"
          src={this.state.arrowNext}
          onClick={this.state.isDisabled ? "" : this.nextSlide}
          alt="next arrow"
        />
        <div className={this.state.className}>
          <div
            className="Slider__element Slider__left"
            style={{ backgroundImage: `url(${sliderData[index_left].url})` }}
          >
            <div className="Slider__box">
              <h2>{sliderData[index_left].title}</h2>
              <p>{sliderData[index_left].description}</p>
            </div>
          </div>

          <div
            className="Slider__element Slider__center"
            style={{ backgroundImage: `url(${sliderData[index].url})` }}
          >
            <div className="Slider__box">
              <h2>{sliderData[index].title}</h2>
              <p>{sliderData[index].description}</p>
            </div>
          </div>

          <div
            className="Slider__element Slider__right"
            style={{ backgroundImage: `url(${sliderData[index_right].url})` }}
          >
            <div className="Slider__box">
              <h2>{sliderData[index_right].title}</h2>
              <p>{sliderData[index_right].description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
