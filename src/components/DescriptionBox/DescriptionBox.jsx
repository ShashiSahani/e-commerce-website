import React from "react";
import "./DescriptionBox.scss";
import * as String from "../../Assets/Utils/Strings";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">{String.Description}</div>
        <div className="descriptionbox-nav-box fade">{String.Review}(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          necessitatibus molestias, perspiciatis veritatis dolorum dolor ad
          accusantium sed vitae commodi id labore eveniet saepe voluptatum
          tenetur nemo, a iste? Dolores modi ipsa reiciendis incidunt ducimus
          facilis aperiam, eligendi dolorem quasi, fuga nulla aliquam laboriosam
          quae porro culpa deleniti voluptate rerum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse veniam deleniti at obcaecati labore consequatur vitae consequuntur blanditiis quam! Veniam labore reiciendis suscipit. Blanditiis quae officiis quasi nulla neque.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
