import type { CSSProperties } from 'react';
import heladoArcoiris from '../assets/imgs/Helado arcoíris.jpeg';
import heladoChocolate from '../assets/imgs/Helado de chocolate con toppings.jpg';
import heladoCucurucho from '../assets/imgs/Helado de cucurucho especial.jpg';
import heladoVarios from '../assets/imgs/helado de varias sabores.jpeg';
import heladoPopsicle from '../assets/imgs/Helados tipo popsicle (colores vivos).jpg';
const imageStyle: CSSProperties = {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.15)"
};

function IceCreamInfo() {
    return (
        <section>
            <h2>¿Cómo funciona?</h2>
            <p>
                En esta aplicación podrás elegir cuántas bolas quieres,
                escoger sabores y colocar tus bolas de helado en un cucurucho.
                ¡Es divertido, sencillo y muy colorido!
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1rem',
                    marginTop: '1.5rem',
                }}
            >
                <img src={heladoArcoiris} style={imageStyle} alt="Helado arcoiris" />
                <img src={heladoChocolate} style={imageStyle} alt="Helado chocolate" />
                <img src={heladoCucurucho} style={imageStyle} alt="Helado cucurucho" />
                <img src={heladoPopsicle} style={imageStyle} alt="Helado popsicle" />
                <img src={heladoVarios} style={imageStyle} alt="Helado varios" />

            </div>
        </section>
    );
}

export default IceCreamInfo;
