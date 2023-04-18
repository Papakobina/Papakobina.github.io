import React, { useState } from 'react';
import './AboutPage.css';
import marketing from "./imagesOnAboutPage/marketing.webp";
import Modals from "./CardComponents/CardComponent.js";
import team from "./imagesOnAboutPage/team.jpg";
import cfo from "./imagesOnAboutPage/cfo.webp";
import { FaBars, FaTimes } from "react-icons/fa";



const AboutPageComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setModalOpen(true);
    console.log(modalOpen)
  }
  
  const handleModalClose = () => {
    setModalOpen(false);
  }
  return (
    <>
    <div className='aboutPagewholecontainer'>

      <div className='imageonAboutUsPage'>
          <h1 className='textonAboutusImage'>Our Mission Is to eat us much pizza and banana as possible</h1>
      </div>
      <div className='introwhoweare'>
      
        <div className='introwhoweareLeft'>
          <h1>Zoox, from the ground up</h1>
        </div>
        <div className='introwhoweareRight'>
          <p>Zoox was founded to make personal transportation safer, cleaner, and more enjoyable—for everyone. To achieve that goal, the team created a whole new form of transportation.
            Zoox will provide mobility-as-a-service in dense urban environments. We will handle the driving, charging, maintenance, and upgrades for our fleet of vehicles. The rider will simply pay for the service.
            In 2020, Zoox joined forces with Amazon. And in the process, solidified our future in the autonomous vehicle industry.
            We are focused on testing on private and public roads as we move towards launching the first Zoox ride-hailing service.</p>
        </div>
      </div>
      <div className='ourPeople'>
        <h1 className='ourpeopletitle'>Our Team</h1>
        <div className="card-row">
          <div className="card-column">
          <div style={{ position: 'relative', width: '560px', height: '478px', borderRadius: '5px', overflow: 'hidden' }}>
            <img src={cfo} alt="Card background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <button style={{ cursor:'pointer', position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#333', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', opacity: '0.8' }} onClick={() => setModalOpen(true)}>{ <p> <FaBars /> Learn More</p>}</button>
          </div>
          <div style={{ position: 'relative', width: '560px', height: '478px', borderRadius: '5px', overflow: 'hidden' }}>
            <img src={cfo} alt="Card background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <button style={{ cursor:'pointer', position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#333', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', opacity: '0.8' }}>{ <p> <FaBars /> Learn More</p>}</button>
          </div>        
        </div>
          <div className="card-column">
            <div style={{ position: 'relative', width: '560px', height: '478px', borderRadius: '5px', overflow: 'hidden' }}>
              <img src={cfo} alt="Card background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button style={{ cursor:'pointer', position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#333', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', opacity: '0.8' }}>{ <p> <FaBars /> Learn More</p>}</button>
            </div>
            <div style={{ position: 'relative', width: '560px', height: '478px', borderRadius: '5px', overflow: 'hidden' }}>
              <img src={marketing} alt="Card background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button style={{ cursor:'pointer', position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', color: '#333', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', opacity: '0.8' }}>{ <p> <FaBars /> Learn More</p>}</button>
            </div>
            </div>
      </div>
      {modalOpen ? (
        <Modals />
					) : (
						null
					)}
      </div>
    </div>
    </>
  );
};

export default AboutPageComponent;



// import React from "react";
// import denis from "./imagesOnAboutPage/denis (1).jpg";
// import daniel from "./imagesOnAboutPage/daniel.jpg";
// import john from "./imagesOnAboutPage/john.jpg";
// import adriana from "./imagesOnAboutPage/adriana.jpg";
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';



// import "./AboutPage.css"


// function AboutPageComponent(){
//     return(
//         <>
//         <div className="aboutuscontainer">
//           <div className="whoarewe">
//             <div className="whoarewetitle">
//               <h1> Who Are we? </h1>
//             </div>
//             <div className="whoareweparagraph">
//               It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.

//               Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.

//               If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.
//             </div>
//           </div>
//             <Carousel interval={4000}>

//       <Carousel.Item>
//         <div className="carouselSlideInfo">
//           <div className="carouselSLideImage">

//           <img src={denis} alt='daniel' width={600} height={600}/>
//           </div>
//           <div className="carouselSlideCaptions">
//             <h2>Hello world</h2>
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>

//           </div>

//         </div>

//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={daniel} alt='daniel' width={600} height={600}/>


//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={john} alt='daniel' width={600} height={600}/>


//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={adriana} alt='daniel' width={600} height={600}/>


//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//         </div>
//         </>
//     );
//   }
  
//   export default AboutPageComponent;
  {/* <div className="aboutuspage">
    <div className="team">
      <h1>Our Team</h1>
    </div>
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
        <h1 className="secondimageheading">COO</h1>
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
        <h1 className="thirdimageheading">CFO</h1>
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
        <h1 className="fourthimageheading">Marketing</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
  </div>
  </div>
</div> */}