import React from "react";
import "./styles.css";

import InfoCard from "./Info";
import experience from "./Experience";
import CVComponent from "./CVComponent";
import education from "./Education";
import SkillsList from "./SkillList";

const info = {
  imgSrc: "./Profiilikuva.jpg",
  name: "Riku Myllymaa",
  profession: "Opiskelija",
  address: "Vaasa",
  phone: "+358456253630",
  email: "ripa.95@hotmail.com",
  about:
    "Olen 28-vuotias tietotekniikan opiskelija Vaasan ammattikorkeakoulusta. Persoonanana olen sosiaalinen ja rauhallinen. Tulen hyvin toimeen erilaisten ihmisten kanssa. Työntekijänä olen ahkera ja tunnollinen. Minulla on työkokemusta erilaisilta aloilta, mikä kuvastaa sitä, että olen aina valmis oppimaan uutta ja haastamaan itseäni."
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2> Osaaminen </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1> Työ kokemus{" "} </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1> {" "}Koulutus{" "} </h1>
            {educationComponent}
          </section>
        </section>
      </main>
    </div>
  );
}
