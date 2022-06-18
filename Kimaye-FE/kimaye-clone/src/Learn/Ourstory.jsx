import React from "react";
import styled from "styled-components";
import ourstory from "./ourstory.png";

const FirstImg = styled.img`
  margin: auto;
  width: 100%;
`;

const Paradiv = styled.div`
  display: flex;
  text-align: justify;
  margin: auto;
  line-height: 50px;
`;

const SecImg = styled.img`
  width: 350px;
  margin-top: 30%;
`;

const SecPara = styled.div`
  width: 70%;
  margin: auto;
`;

const Para = styled.p`
  font-size: 21px;
  font-family: serif;
  line-height: 30px; ;
`;

const Tridiv = styled.div`
  display: flex;
  gap: 20px;
`;

const DscDiv = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
  text-align: justify;
  margin: auto;
  padding: 12px;
`;

const Employee = styled.img`
  width: 250px;
  height: 290px;
  margin-top: 10%;
`;

const Par = styled.p`
  font-family: system-ui;
  font-size: 20px;
`;
const Storydiv = styled.div`
  width: 75%;
  margin: auto;
`;

const Story = styled.div`
  display: flex;
  width: 80%;
  text-align: justify;
  margin: auto;
  margin-top: 5%;
`;

const StoryImg = styled.img`
  width: 250px;
  height: 290px;
`;
const Stdiv = styled.div`
  display: flex;
  text-align: justify;
  margin: auto;
`;
const FounderDiv = styled.div`
  display: flex;
  width: 70%;
  gap: 20px;
  margin: auto;
  text-align: justify;
`;

const Founder = styled.div`
  background-color: rgb(240, 240, 240);
  padding: 15px;
  border-radius: 15px;
  width: 80%;
`;

const OurStory = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <FirstImg src={ourstory} alt="ourstory" />
      </div>
      <SecPara>
        <Paradiv>
          <div>
            <SecImg
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Box.png?v=1602082370"
              alt=""
            ></SecImg>
          </div>
          <div>
            <h1 style={{ fontFamily: "cursive" }}>
              KIMAYE WANTS TO GIVE YOU ASSURANCE AND EARN YOUR TRUST
            </h1>
            <Para>
              by consistently delivering the safest and highest-quality fruits
              at your doorstep. Our roots lie in the principles of cooperation
              and partnership.
            </Para>
            <Para>
              Since 2009, we have focused on building a brand that promises
            </Para>
            <Tridiv>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/safety.png?v=1600154657"
                  alt=""
                ></img>
                <Para>Unparalleled safety</Para>
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/quality.png?v=1600154658"
                  alt=""
                ></img>
                <Para>Benchmark quality</Para>
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/consistency.png?v=1600154657"
                  alt=""
                ></img>
                <Para>Highest consistency</Para>
              </div>
            </Tridiv>
          </div>
        </Paradiv>
      </SecPara>
      <div style={{ backgroundColor: "#ffbb3d" }}>
        <DscDiv>
          <div>
            <Employee
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Guy.png?v=1600760866"
              alt=""
            ></Employee>
          </div>

          <div>
            <Par>
              From being the largest exporter of pomegranates and bananas to
              stepping into the domestic retail market, we've come a long way by
              adding more colours to your plate.
              <br />
              We work with the farmers from the time they plant the seed. Our
              fruits meet international safety standards at every stage of
              growing, sourcing, packaging, and delivery. We've worked with
              farmers and innovated farming and delivery techniques for better
              shelf life and traceability while meeting the most stringent
              safety norms.
              <br />
              Our accolades are only a part of our journey. It's our mantra —
              safest fruits, always — that we wear as a badge of honour.
            </Par>
          </div>
        </DscDiv>
      </div>
      <Storydiv>
        <div>
          <h1 style={{ fontFamily: "cursive" }}>AN INSPIRING SUCCESS STORY</h1>
          <Para>The husband-wife duo who weaved a fruitful journey.</Para>
        </div>
        <Story>
          <Stdiv>
            <Par>
              Kimaye began as a collaborative effort by a husband-wife duo who
              left their cushy careers to start INI Farms. The result? Kimaye
              became India's first brand to retail fresh fruits in the USA.
              While one looks after the operations, the other manages sales and
              marketing. Meet the founders of Kimaye: Purnima and Pankaj
              Khandelwal.
            </Par>
            <StoryImg
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/story-01.png?v=1600154659"
              alt=""
            ></StoryImg>
          </Stdiv>
        </Story>
        <Story>
          <Stdiv>
            <StoryImg
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Our-Story_02.png?v=1600870829"
              alt=""
            ></StoryImg>
            <Par>
              An IIT/IIM/McKinsey Alumnus, Pankaj decided to pursue
              horticulture. He found this to be an ideal combination of art and
              science with an ability to make a real difference in the life of
              farmers. Purnima, an economics graduate and MBA comes from a
              business family. An entrepreneur at core, Purnima found her
              passion in building an Indian-origin Global Fruit Brand.
            </Par>
          </Stdiv>
        </Story>
        <Story>
          <Stdiv>
            <Par>
              Way back in 2009, both of them realized that the horticulture
              sector was highly fragmented and unorganised. The duo was firm
              about having an integrated value-chain approach with focus on
              quality over quantity. They chose the 'one fruit at a time'
              approach over a whole fruit basket and began supplying
              pomegranates to domestic and international markets. Today, INI has
              become one of the largest exporter of pomegranates, bananas, and
              coconuts.
            </Par>
            <StoryImg
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Wooden-Board.png?v=1600760867"
              alt=""
            ></StoryImg>
          </Stdiv>
        </Story>
        <Story>
          <Stdiv>
            <StoryImg
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/story-04.png?v=1600154658"
              alt=""
            ></StoryImg>
            <Par>
              Pankaj and Purnima sowed the seeds of quality and efficiency and
              reaped the fruits in the form of a loyal farmer and customer base.
              One thing has stayed consistent through the years — their promise
              of providing safe fruits.
            </Par>
          </Stdiv>
        </Story>
      </Storydiv>
      <div style={{ backgroundColor: "#00a877" }}>
        <h1 style={{ fontFamily: "cursive", color: "rgb(240, 240, 240)" }}>
          NOTEWORTHY WORDS BY THE FOUNDERS
        </h1>
        <FounderDiv>
          <Founder>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/founder-03.png?v=1600154657"
              alt=""
            ></img>
            <Par>
              This woman entrepreneur is changing the horticulture landscape of
              India
            </Par>
            <Par>
              "There were the farmers on one end, dealing with three to five
              intermediaries in the supply chain. There was no concept of food
              safety as to where the produce is coming from and how it is grown.
              That is when we realised the potential to add value at each
              level."
            </Par>
          </Founder>
          <Founder>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/founder-02.png?v=1600154657"
              alt=""
            ></img>
            <Par>InI Farms: A fruitful venture for this couple</Par>
            <Par>
              "30% of the value is added in the supply chain in the case of
              bananas, whereas it is 10% in the case of pomegranates."
            </Par>
          </Founder>
          <Founder>
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/founder-01.png?v=1600154657"
              alt=""
            ></img>
            <Par>INI Farms adds QR codes</Par>
            <Par>
              "For INI Farms, the quality and safety of our fruit has always
              been a priority and this will help in building the trust that
              customers seek while buying fruits from the market."
            </Par>
          </Founder>
        </FounderDiv>
      </div>
    </div>
  );
};

export default OurStory;
