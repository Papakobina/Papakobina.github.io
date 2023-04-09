import React,{useState} from "react";
import './SpiceBodyComponent.css'



function SpiceComponent(){
    const [showVoltaSpiceDescription, setShowVoltaSpiceDescription] = useState(false);

    const handleButtonText = () => {
        if (showVoltaSpiceDescription){
            return  'Close Description'
        }else{
            return 'Learn More +'
        }
    }

    const handleStyleForDescription = () => {
        if (showVoltaSpiceDescription){
            return 'descripofvoltaSpiceFadeIn'
        }else {
            return 'descripofvoltaSpiceFadeOut'
        }
    }

    return(
       <>
       <div className='CradcontainerSpice'>
            <div className='VoltaSpiceHeading'>
                <h1> Volta SPICE</h1>
            </div>
            { showVoltaSpiceDescription ?(
                    <div className={handleStyleForDescription()}>
                        <p>
                        She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. 
                        It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. 
                        At three years old, Sandy's stubborn personality had already bloomed into full view.
                        </p>
                    </div>            
            ): null}
            <div className='learnmorebuttonSpice'>
                <button class="plusbuttonSpice" onClick={() => setShowVoltaSpiceDescription(!showVoltaSpiceDescription)}><span class="text">{handleButtonText()}</span></button>

            </div>

       </div>
       </>
    );

}

export default SpiceComponent;