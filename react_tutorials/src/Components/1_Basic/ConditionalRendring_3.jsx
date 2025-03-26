import React from "react";

export default function ConditionalRendring_3() {
  let age = 17;

  // type 1
  // if (age >= 18) {
  //   return (
  //     <>
  //       <h1>Thankyou for your visit!</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>beta bade to hojao</h1>
  //     </>
  //   );
  // }
  // ---------------------------
  // type2
  // return (
  //   <>
  //     <h2>{age >= 18 ? "Thankyou for your visit!" : "Beta bade to hojao"}</h2>
  //   </>
  // );
  // ---------------------------
  // type3
  // let canWatch = "Not Available";
  // if (age >= 18) {
  //   canWatch = "Watch Now";
  // }
  // return (
  //   <>
  //     <h2>{canWatch}</h2>
  //   </>
  // );

  // ---------------------------
  // type4
  // const canWatch = () => {
  //   if (age >= 18) return "watch now";
  //   return "not available";
  // };
  // return (
  //   <>
  //     <h2>{canWatch()}</h2>
  //   </>
  // );
  // ---------------------------
}
