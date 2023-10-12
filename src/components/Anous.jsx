import React from "react";
import "../css/Anous.css";
import { AdvancedImage } from "@cloudinary/react";
import { arrieurPlan, myImage } from "../images/Image";


function Anous() {
  return (
    <div className="divs">
      <div>
        <h2 className="h2_a">A propos de nous</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ullam
          culpa reiciendis accusantium tempore quae, quod quos vel natus
          quisquam minus aliquam consequuntur rerum, blanditiis architecto
          facere rem! Non, qui!
        </p>
        <button>En savoir plus</button>
      </div>
      <div>
          <AdvancedImage className="imgs" cldImg={myImage} />
          <div>
            <AdvancedImage className="ar_plan" cldImg={arrieurPlan} />
          </div>
      </div>
    </div>
  );
}

export default Anous;
