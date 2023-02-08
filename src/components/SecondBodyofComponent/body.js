import React from 'react';
import './body.css';
// import ScrollAnimation from 'react-animation-on-scroll';
import color from './VoltaColoured.png'


function SecondBodyComponent(){
    return(
        <>
        <div className='Holder'>
            <div className='Writting'> 
               
                <h1 className='title'>About us</h1>  

                
                <div>
                    <p className='FirstParagraph'>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the 
                        beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. 
                        This forces the writer to use creativity to complete one of three common writing challenges. 
                        The writer can use the paragraph as the first one of a short story and build upon it. 
                        A second option is to use the random paragraph somewhere in a short story they create. 
                        The third option is to have the random paragraph be the ending paragraph in a short story. 
                        No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
                        </p>
                </div> 
            </div>
            <div className='image'>
                <img src={color} alt='color' height={400} width={400} />
            </div>

        </div>
        </>
    )
}

export default SecondBodyComponent;