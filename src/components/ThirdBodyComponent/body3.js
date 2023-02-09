import './body3.css';
import React,{useState} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function ThirdBodyComponent() {
    const [showVoltaInsiteDescription, setShowVoltaInsiteDescription] = useState(false);

    const handleButtonText = () => {
        if (showVoltaInsiteDescription){
            return  'Close Description'
        }else{
            return 'Learn More +'
        }
    }

    const handleStyleForDescription = () => {
        if (showVoltaInsiteDescription){
            return 'descripofvoltainsiteFadeIn'
        }else {
            return 'descripofvoltainsiteFadeOut'
        }
    }

    return(
       <>
       <div className='Cradcontainer'>
            <div className='VoltainsiteHeading'>
                <h1> Volta Insite</h1>
            </div>
            { showVoltaInsiteDescription ?(
                    <div className={handleStyleForDescription()}>
                        <p>
                        She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. 
                        It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. 
                        At three years old, Sandy's stubborn personality had already bloomed into full view.
                        </p>
                    </div>            
            ): null}
            <div className='learnmorebutton'>
                <button class="plusbutton" role="button" onClick={() => setShowVoltaInsiteDescription(!showVoltaInsiteDescription)}><span class="text">{handleButtonText()}</span></button>

            </div>

       </div>
       </>
    );
}

export default ThirdBodyComponent;