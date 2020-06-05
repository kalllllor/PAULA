import React, { Component } from 'react'
import "../styles/components/slider.css"
import image from "../img/slider_example1.jpg"
import image2 from "../img/slider_example2.png"
import image3 from "../img/slider_example3.jpg"
import arrowRight from "../img/next.png"
import arrowLeft from "../img/back.png"
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
                    url: image,
                    title: "X lat doświadczenia",
                    description: "Sed fringilla ac sapien at pellentesque. Morbi sit amet turpis sapien. Sed feugiat, magna non dictum hendrerit, sapien dolor fringilla sem, convallis elementum nulla urna nec nibh."
                },
                {
                    url: image2,
                    title: "Najwyższej jakości produkty",
                    description: "Sed felis ipsum, mattis vel egestas nec, vehicula ac risus. Cras vel justo sagittis, tincidunt est eu, ullamcorper sem."
                },
                {
                    url: image3,
                    title: "Tylko zadowolony klient",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, efficitur nec metus et, congue posuere risus. Duis tristique facilisis purus eleifend rutrum."
                },
                {
                    url: image2,
                    title: "Miła obsługa",
                    description: "Mauris in laoreet felis, nec malesuada turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mollis at odio ac rutrum."
                },

            ],
            arrowNext: arrowRight,
            arrowPrev: arrowLeft
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.tick = this.tick.bind(this);

        this.state.timerID = setInterval(
            () => this.tick(),
            4000
        );
    }

    tick() {
        this.nextSlide()
    }

    prevSlide() {
        const lastIndex = this.state.sliderData.length - 1;

        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
        this.setState({
            isDisabled: true,
            className: "Slider__elements Slider__go__left"
        })
        clearInterval(this.state.timerID);
        setTimeout(() => {
            this.setState({
                currentImageIndex: index,
                className: "Slider__elements Slider__transform",
                isDisabled: false
            })
        }, 1000);
        this.state.timerID = setInterval(
            () => this.tick(),
            4000
        );
    }

    nextSlide() {
        const lastIndex = this.state.sliderData.length - 1;
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        clearInterval(this.state.timerID);
        this.setState({
            isDisabled: true,
            className: "Slider__elements Slider__go__right"
        })
        setTimeout(() => {
            this.setState({
                currentImageIndex: index,
                className: "Slider__elements Slider__transform",
                isDisabled: false
            })
        }, 1000);
        this.state.timerID = setInterval(
            () => this.tick(),
            4000
        );
    }
    render() {
        const { sliderData } = this.state;
        const index = this.state.currentImageIndex;
        const index_left = (index - 1 < 0 ? this.state.sliderData.length - 1 : index - 1);
        const index_right = (index + 1 > this.state.sliderData.length - 1 ? 0 : index + 1);
        return (
            <div className="Slider">
                <img className="Slider__Arrow prevArrow" src={this.state.arrowPrev} onClick={this.state.isDisabled ? "" : this.prevSlide} />
                <img className="Slider__Arrow nextArrow" src={this.state.arrowNext} onClick={this.state.isDisabled ? "" : this.nextSlide} />
                <div className={this.state.className}>
                    <div className="Slider__element Slider__left" style={{ backgroundImage: `url(${sliderData[index_left].url})` }}>
                        <div className="Slider__box">
                            <h2>{sliderData[index_left].title}</h2>
                            <p>{sliderData[index_left].description}</p>
                        </div>
                    </div>

                    <div className="Slider__element Slider__center" style={{ backgroundImage: `url(${sliderData[index].url})` }}>
                        <div className="Slider__box">
                            <h2>{sliderData[index].title}</h2>
                            <p>{sliderData[index].description}</p>
                        </div>
                    </div>


                    <div className="Slider__element Slider__right" style={{ backgroundImage: `url(${sliderData[index_right].url})` }}>
                        <div className="Slider__box">
                            <h2>{sliderData[index_right].title}</h2>
                            <p>{sliderData[index_right].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider