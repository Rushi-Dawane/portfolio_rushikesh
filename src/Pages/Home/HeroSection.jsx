import React,{Component} from "react"
export default function HesroSectoin(){
    return <section id="heroSection" className="hero--section">
        <div className="hero--section--context--box">
            <div className="hero--section--content">
                <p className="section--title">I'm Rushikesh Dawane</p>
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">Full Stack</span>{" "}
                    <br/>
                    Developer
                </h1>
                <p className="hero--section--description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, fugiat earum recusandae laudantium sapiente fuga, quidem amet quia quas, vero tempora voluptatibus expedita dolores soluta ad atque maxime explicabo deserunt!
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/rdimg.jpeg" alt="Hero Section"/>
        </div>

    </section>   
    
}