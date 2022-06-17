import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel_1 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        {/* 1 */}
        <div>
          <img
            style={{ height: "400px", width: "550px", borderRadius: "35px" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_334275008-2-opt2-1900px_720x.jpg?v=1627119119"
            alt=""
          />
          <h4 style={{ color: "white", marginTop: "-20%", textDecoration:"none" }}>
            Top Fruits Safety Tips You Should Be Swearing <br /> By Everytime You
            Consume Them.
          </h4>
          <p>
            Fresh fruits bring with them a horde of health benefits, but it's
            the way <br /> we consume them that is...
          </p>
        </div>
        {/* 2 */}
        <div>
          <img
            style={{ height: "400px", width: "550px", borderRadius: "35px" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_201343750_copy__66kb-1000px_720x.jpg?v=1626676701"
            alt=""
          />
          <h4 style={{ color: "white", marginTop: "-20%", textDecoration:"none" }}>
            Fruits Rich In Vitamin C That You Should Be <br /> Eating EveryDay
          </h4>
          <p>
            Remember the times when our mothers used to chase us everyday with a{" "}
            <br />
            bowl of fruits when we...
          </p>
        </div>
        {/* 3 */}
        <div>
          <img
            style={{ height: "400px", width: "550px", borderRadius: "35px" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_720x.jpg?v=1625638895"
            alt=""
          />
          <h4 style={{ color: "white", marginTop: "-20%" }}>
            How To Remove And Clean Harmful Pesticides <br /> From Fruits
          </h4>
          <p>
            Summers have arrived and so have the days where we can soak
            ourselves <br /> in the pleasure of treating ourselves
          </p>
        </div>
        {/* 4 */}
        <div>
          <img
            style={{ height: "400px", width: "550px", borderRadius: "35px" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_720x.jpg?v=1614342193"
            alt=""
          />
          <h4 style={{ color: "white", marginTop: "-20%" }}>
            Why Should You Fruits More Often?
          </h4>
          <p>
            David Thoreau once stated , "Live in each season as it passes: breathe the <br /> air, drink the drink, taste the... "
          </p>
        </div>
        {/* 5 */}
        <div>
          <img
            style={{ height: "400px", width: "550px", borderRadius: "35px" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_720x.jpg?v=1614342435"
            alt=""
          />
          <h4 style={{ color: "white", marginTop: "-20%" }}>
            Grapes, How They Reached India, types and <br /> health benefits
          </h4>
          <p>
            Grapes are one of the most diverse and devoured fruits in India. Known for <br /> its sweet flavours and nutrients...
          </p>
        </div>
        {/* 6 */}
        <div>
          <img
            style={{ height: "400px", width: "550px", borderRadius: "35px" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/healthy_heart-min_720x.jpg?v=1614342271"
            alt=""
          />
          <h4 style={{ color: "white", marginTop: "-20%" }}>
            Make immunity ypur best friend
          </h4>
          <p>
            Immunity in the new normal the pandemic's biggest mystery is our <br /> immune system. But, do we really understand how...
          </p>
        </div>
      </Carousel>
      ;
    </>
  );
};

export default Carousel_1;
