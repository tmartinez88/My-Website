import React from 'react';
const Music = () =>{
  return (
  <article>
      <h1>Music</h1>
      <section>
        <h3>live set on <a href="https://www.youtube.com/watch?v=H0iwGVKfe0k&ab_channel=DustRadio" target='_blank'> Dust</a></h3>
        <figure>
          <img src={require('../images/dust.png')}/>
        </figure>
      </section>
      <section>
      <h3>original mix on 
        <a href="https://www.mixcloud.com/otherdesertradi0/tommy-martinez-special-set-august-22-2022/" target='_blank'> Other Desert Radio</a>
      </h3>
      <figure>
        <img src={require('../images/odr.jpg')}/>
      </figure>
      </section>
      <section>
        <h3>live performance at <a href="https://pageant.space/" target='_blank'> Pageant</a></h3>
        <figure>
          <img src={require('../images/pag.JPG')}/>
          <figcaption>poster by Alexa West</figcaption>
        </figure>
      </section>
      <section>
        <h3>live performance at Performance Space New York</h3>
        <figure>
          <img src={require('../images/220320TommySpannMano333.jpg')}/>
          <figcaption>poster by Maxine De La Pozas</figcaption>
        </figure>
      </section>
    </article>
  );
}
export default Music;
