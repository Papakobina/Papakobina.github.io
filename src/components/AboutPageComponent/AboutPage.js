import React from "react";
import denis from "./imagesOnAboutPage/denis (1).jpg";
import daniel from "./imagesOnAboutPage/daniel.jpg";
import john from "./imagesOnAboutPage/john.jpg";
import adriana from "./imagesOnAboutPage/adriana.jpg";
import "./AboutPage.css"


function AboutPageComponent(){
    return(
        <>
  <div className="aboutuspage">
  <div className="firstrow">
  <div class="firstImagecontainer">
  <div class="image-container">
    <img src={denis} alt='denis' width={280} height={280}/>
    <div class="image-overlay">
      <div class="image-button">Contact</div>
    </div>
  </div>
  <div class="card">
    <h1 className="firstimageheading">CEO</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
</div>
<div class="SecondImagecontainer">
  <div class="image-container">
  <img src={daniel} alt='daniel' width={280} height={280}/>
    <div class="image-overlay">
      <div class="image-button">Contact</div>
    </div>
  </div>
  <div class="card">
    <h1 className="firstimageheading">CEO</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
</div>
  </div>
  <div className="secondrow">
  <div class="thirdImagecontainer">
  <div class="image-container">
  <img src={john} alt='john' width={280} height={280}/>
    <div class="image-overlay">
      <div class="image-button">Contact</div>
    </div>
  </div>
  <div class="card">
    <h1 className="firstimageheading">CFO</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
</div>
<div class="fourthImagecontainer">
  <div class="image-container">
  <img src={adriana} alt='adriana' width={280} height={280}/>
    <div class="image-overlay">
      <div class="image-button">Contact</div>
    </div>
  </div>
  <div class="card">
    <h1 className="firstimageheading">Marketing</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
</div>
  </div>
</div>
        </>
    );
}

export default AboutPageComponent;