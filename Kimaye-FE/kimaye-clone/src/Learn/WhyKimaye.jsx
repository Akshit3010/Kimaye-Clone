import React from 'react'
import styled from "styled-components";
import whykimaye from'./whykimaye.png'
import promise from './promise.png'
const FirstImg = styled.img`
  margin: auto;
  width :100% `;

  const Para = styled.p`
  font-size:22px;
  font-family: serif;
  line-height:30px;
  font-weight: bold;`

   const DscDiv = styled.div`
   display :flex; 
   width :70%;
   gap:20px;
   text-align: justify;
   margin: auto;
   padding :12px;`
  
   const Deliver = styled.img`
   width :230px;
   height: 230px;
   margin-Top:10%`;


   const Par = styled.p`
   font-family: system-ui;;
   font-size:18px;
   text-align: justify;
`
const StepDiv = styled.div`
display :flex;
width :80%;
 gap:15px;
 margin: auto;
 text-align: justify;`

const Step = styled.div`
padding:20px;

color:whitesmoke
`;

const MapDiv = styled.div`
width:70%;
margin: auto;`


const Brand = styled.div`
display :flex; 
width :55%;
gap:15px;
margin: auto;`

const ImgDiv =styled.div`
border: 1px solid grey;
border-radius:10px;
margin-top:5px`


const WhyKimaye = () => {
  return (
    <div>
        <div>
          <FirstImg src={whykimaye}alt=""/>
        </div>
        <div>
            <img style={{marginLeft:250}} src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/green-leaves.png?v=1600154657'alt=''></img>
            <h1 style={{fontFamily: "cursive"}}>Every time you eat a Kimaye fruit,</h1>
            <Para>we want you to feel free of any worries related to fruit safety and hygiene.</Para>
            <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/girl.png?v=1600179109' alt=''></img>
        </div>
        <div style={{ backgroundColor:"#ffbb3d"}}>
        <img style={{marginLeft:250}} src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/green-leaves.png?v=1600154657'alt=''></img>
                  <h1 style={{fontFamily: "cursive"}}>We Always Deliver</h1>
                  <Para>Kimaye stands tall on three essential pillars</Para>
            <DscDiv>
                    <div>
                        <Deliver src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/safety_4664f0b6-22c9-46e4-9552-6eacfe1cc78d.png?v=1600179109' alt=''></Deliver>
                        <Para>Safety</Para>
                        <Par>We have set stringent standards for all our fruits throughout the entire farm to home journey.</Par>
                    </div>
                    <div>
                        <Deliver src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/technology.png?v=1600179109' alt=''></Deliver>
                        <Para>Technology</Para>
                        <Par>Our innovations enabling 100% product traceability and longer shelf life keeping the fruits fresh.</Par>
                    </div>
                    <div>
                        <Deliver src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/social_impact.png?v=1600179109' alt=''></Deliver>
                        <Para>Social Impact</Para>
                        <Par>We do good for our farmers, create rural jobs, drive gender equality and protect the environment.</Par>
                    </div>
            </DscDiv>
        </div>
        <div>
            <FirstImg src={promise}alt></FirstImg>    
        </div>
        <div style={{ backgroundColor:"#648c11"}}>
            <h1 style={{fontFamily: "cursive",color:"whitesmoke"}}>Four Steps to Perfection</h1>
            <StepDiv>
                <Step>
                    <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/step1.png?v=1600179108' alt=''></img>
                    <Para>Grown responsibly</Para>
                    <Par>       We follow Global Good Agricultural Practices (G.A.P) and train our farmers
                                to undertake activities that ensure the growth of healthy fruits. We test multiple lots
                                in accredited labs for over 180 chemicals. This ensures that our fruits are 100% safe to
                                consume.
                    </Par>
                </Step>
                <Step>
                    <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/step2.png?v=1600179108' alt=''></img>
                    <Para>Handpicked at farms</Para>
                    <Par>       Our trained Harvesting teams ensure only the best fruits are picked from the
                                tree. Our fruits have no need to travel to the mandis! The fruit selection is done at
                                the farm itself to deliver consistent freshness and taste.
                    </Par>
                </Step>
                <Step>
                    <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/step3.png?v=1600179108' alt=''></img>
                    <Para>Earning the Kimaye badge</Para>
                    <Par>       Quality checks at our automated state-of-art packhouse ensure only the best
                                fruits earn the Kimaye badge. All our fruits are sorted and graded in these facilities
                                which are FSSC 22000, HACCP, BRC certified. These certifications are a testimony that we
                                follow world-class practices at our unit.</Par>
                </Step>
                <Step>
                    <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/step4.png?v=1600179108' alt=''></img>
                    <Para>Zero-touch processes</Para>
                    <Par>       Our fruits are packaged with care so that they remain fresh and safe during
                                the transit. We follow a contamination-free supply chain to deliver delightful, yummy,
                                and safe fruits.
                    </Par>
                </Step>
            </StepDiv>
        </div>
        <MapDiv>
            <h1 style={{fontFamily: "cursive"}}>We’ve Made it to the World Map</h1>
            <Para>35 countries | Delivering 40,000 tons of fruit annually</Para>
            <FirstImg src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/map.png?v=1600179108"alt=""/>
            <div>
                <h1 style={{fontFamily: "cursive",color:"whitesmoke",background:"brown"}}>ALSO, A HUMBLEBRAG:</h1>
                <Par>We deliver to the most demanding markets in the world including Europe and Middle East and are proud to work directly with most premium retailers. We have achieved extremely high standards thanks to our farmers and stringent process controls. Domestically also we work with major retailers such as Big Bazaar, Foodhall, More, and Star Bazaar in Mumbai, Delhi, Hyderabad, and Bengaluru.</Par>
            </div>
        </MapDiv>
        <div style={{ backgroundColor:"#ffbb3d"}}>
            <br/>
            <StepDiv>
                    <div>
                        <FirstImg src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/words_revised_img.png?v=1600870298"alt=""/>
                    </div>
                    <div>
                            <h1 style={{fontFamily: "cursive"}}>We’re Not All Words</h1>
                            <Par>Still not convinced? Well, take a sneak peek at our accolades, which will keep you longing for more fruits.</Par>
                    </div>
            </StepDiv>
        </div>
        <h1 style={{fontFamily: "cursive"}}>The Signs of a Brand You Can Trust</h1>
        <Brand>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/01.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/02.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/03.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/04.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
        </Brand> 
        <Brand>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/05.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/06.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/07.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/08.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
        </Brand> 
        <Brand>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/09.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/10.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
                    <ImgDiv>
                        <img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/11.jpg?v=1600179108' alt=''></img>
                    </ImgDiv>
        </Brand> 


    </div>
  )
}

export default WhyKimaye