import React, { Component } from 'react'
import "../styles/components/slider.css"
import image from "../img/slider_example1.jpg"
import image2 from "../img/slider_example2.png"
import arrowRight from "../img/next.png"
import arrowLeft from "../img/back.png"
class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            currentImageIndex: 0,

            className : "Slider__elements Slider__transform",
            
            sliderData : [
                {
                    url: image,
                    title: "20 lat doświadczenia",
                    description: "Lorem ipsum1"
                },
                {
                    url: image2,
                    title: "21 lat doświadczenia",
                    description: "Lorem ipsum2"
                },
                {
                    url: image,
                    title: "22 lat doświadczenia",
                    description: "Lorem ipsum3"
                },                
                {
                    url: image2,
                    title: "23 lat doświadczenia",
                    description: "Lorem ipsum4"
                },

            ],
            arrowNext: arrowRight,
            arrowPrev: arrowLeft
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    prevSlide() {
        const lastIndex = this.state.sliderData.length - 1;

        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

        this.setState({
            className : "Slider__elements Slider__go__left"
        })
        setTimeout(() => {
            this.setState({
                currentImageIndex: index,
                className : "Slider__elements Slider__transform"
            })
          }, 1000);
    }

    nextSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.sliderData.length - 1;
        // check if we need to start over from the first index
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            className : "Slider__elements Slider__go__right"
        })
        setTimeout(() => {
            this.setState({
                currentImageIndex: index,
                className : "Slider__elements Slider__transform"
            })
          }, 1000);
    }
    render() {
        const { sliderData } = this.state;
        const index = this.state.currentImageIndex;
        const index_left = (index - 1 < 0 ? this.state.sliderData.length - 1 : index - 1);
        const index_right = (index + 1 > this.state.sliderData.length -1 ? 0 : index + 1);        
        return (
            <div className="Slider">
                <img className="Slider__Arrow prevArrow" src={this.state.arrowPrev} onClick={this.prevSlide} />
                <img className="Slider__Arrow nextArrow" src={this.state.arrowNext} onClick={this.nextSlide} />
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