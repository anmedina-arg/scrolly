import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./content.css";

function Content() {
  return (
    <div className="container__content">
      <h1>Hola soy el título</h1>
      <h3>Hola soy subtítulo</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
        similique? Ipsa consequatur quis quod asperiores laudantium, corporis
        ullam natus nisi nulla ut necessitatibus et dolore, cum maiores.
        Impedit, dicta quo?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, nemo non
        dolore cumque suscipit recusandae nobis laborum fugit esse. Unde quaerat
        obcaecati rerum incidunt atque corporis, debitis numquam blanditiis
        nostrum?
      </p>
    </div>
  );
}
export default Content;
