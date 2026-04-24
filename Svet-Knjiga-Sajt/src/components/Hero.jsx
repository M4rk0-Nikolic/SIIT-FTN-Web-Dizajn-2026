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
                <Bookcard className_ = "hero-book-card1" book={{
                    title: "1984",
                    firstName: "George",
                    lastName: "Orwell",
                    images: ["https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"]
                }} />
                <Bookcard className_ = "hero-book-card2" book={{
                    title: "Pride and Prejudice",
                    firstName: "Jane",
                    lastName: "Austen",
                    images: ["https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"]
                }} />
                <Bookcard className_ = "hero-book-card3" book={{
                    title: "The Alchemist",
                    firstName: "Paulo",
                    lastName: "Coelho",
                    images: ["https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"]
                }} />
            </div>
        </section>
    );
};

export default Hero;