import React from "react";
import Bookcard from "./Bookcard";
import "../css/Hero.css";

function Hero () {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="hero-top">Knjizara sa dusom</p>
                <h1>
                    Tvoj sledeci omiljeni naslov
                    ceka u Svet Knjiga
                </h1>
                <p className="hero-bottom">
                    Biraj iz hiljade naslova, od klasika do savremenih hitova.
                </p>
            </div>

            <div className="hero-right">
                <Bookcard className = "hero-book-card1" book={{
                    title: "1984",
                    author: "George Orwell",
                    description: "A dystopian classic about surveillance, truth, and resistance.",
                    image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
                }} />
                <Bookcard className = "hero-book-card2" book={{
                    title: "Pride and Prejudice",
                    author: "Jane Austen",
                    description: "A witty romance about first impressions, class, and growing up.",
                    image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
                }} />
                <Bookcard className = "hero-book-card3" book={{
                    title: "The Alchemist",
                    author: "Paulo Coelho",
                    description: "An inspiring fable about purpose, courage, and following your path.",
                    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
                }} />
            </div>
        </section>
    );
};

export default Hero;