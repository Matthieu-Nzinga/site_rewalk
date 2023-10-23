import React from "react";
import "../css/Services.css";

function Services() {
  return (
    <div className="service_div_pricipal">
      <div className="service_div_one">
        <div>
          <h2 className="h2_nos">Nos service</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet?
            Minus, corporis recusandae unde at sed sit molestiae repellendus
            aliquid obcaecati temporibus aut modi nemo omnis dolorem! Ut, optio
            alias.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698047364/image_2-removebg-preview_hzvkir.png"
            alt="Nos service Image"
          />
        </div>
      </div>
      <div className="service_div_two">
        <div className="service_div">
          <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698049438/image_6_dyq2ov.png" alt="Image Architecture" />
          <div className="service_divEcrit">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              excepturi corrupti consectetur cumque nam ea quaerat? Amet
              assumenda ullam perferendis, labore harum odit laboriosam beatae
              aperiam ipsam reprehenderit molestiae quia Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus, aperiam! Impedit
              nesciunt, vitae aliquam qui obcaecati consectetur eveniet officiis
              aspernatur amet rem ipsa ducimus dolorem esse quod unde vel atodit
              laboriosam beatae aperiam ipsam reprehenderit molestiae .
            </p>
            <ul className="service_ul">
              <li>
                <p>Expérience</p>
                <span>5 ans</span>
              </li>
              <li>
                <p>Projet</p>
                <span>25</span>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Services;
