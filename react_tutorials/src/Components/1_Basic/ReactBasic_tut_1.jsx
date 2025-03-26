import React from "react";
import img1 from "../../assets/queen.jpg";

// conponents within the same file
// ------------------------------
const NetflixCard = (props) => {
  return (
    <>
      <img src={img1} alt="" width="40%" height="40%" />
      <h2>{props.title}</h2>
      <h3>rating: {props.rating}</h3>
      <p>
        Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio, laudantium sunt impedit aperiam, consequuntur veniam, omnis
        iusto in ratione molestiae voluptas eveniet excepturi. Dicta in vitae
        velit fugiat rem amet.
      </p>
    </>
  );
};

// ------------------------------

// React fragments

/* <React.Fragment></React.Fragment>; */
/* <> </> */ // this is now used - syntactic sugar format

// ------------------------------

export default function ReactBasic_tut_1() {
  return (
    <>
      <NetflixCard title={"faltu title1"} rating={8.2} />
      <NetflixCard title={"faltu title2"} rating={4.2} />
      <NetflixCard title={"faltu title3"} rating={5.2} />
      <NetflixCard title={"faltu title4"} rating={7.2} />
      <NetflixCard title={"faltu title5"} rating={8.9} />
    </>
  );
}
