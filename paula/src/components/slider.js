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
            images: [
                image,
                image2,
                image,
                image2,
                image,
                image2,
                image,
                image2
            ],
            //SLIDER W SUMIE DZIAŁA, ALE TERAZ BĘDZIE TRZEBA TO TAK PRZEROBIĆ, ŻEBY
            //ZAMIAST SAMYCH ZDJ W IMAGES TO DZIAŁAŁO JAK OBIEKTY ŻEBY KAŻDE ZDJĘCIE
            //WIEDZIAŁO CO MA WYŚWIETLAĆ ALE JAK NAJBARDZIEJ DO DOKOŃCZENIA
            arrowNext: arrowRight,
            arrowPrev: arrowLeft
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    prevSlide() {
        const lastIndex = this.state.images.length - 1;

        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        })
    }

    nextSlide() {
        // find the index of the last image in the array
        const lastIndex = this.state.images.length - 1;
        // check if we need to start over from the first index
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
        // assign the logical index to currentImageIndex that will use in render method
        this.setState({
            currentImageIndex: index
        });
    }
    render() {
        const { images } = this.state;
        const index = this.state.currentImageIndex;
        return (
            <div className="Slider" style={{ backgroundImage: `url(${images[index]})` }}>
                <img className="Slider__Arrow prevArrow" src={this.state.arrowPrev} onClick={this.prevSlide} />
                <div className="Slider__box">
                    <h2>20 lat doświadczenia</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img className="Slider__Arrow nextArrow" src={this.state.arrowNext} onClick={this.nextSlide} />
            </div>
        )
    }
}

export default Slider