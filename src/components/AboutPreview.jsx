    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { info_personal } from "../data/data.js";
    import { nombre } from "../data/data.js";


    export const AboutPreview = () => {
        const navigate = useNavigate();

        return (
            <section id="aboutPreview" className="bg-(--fondo-color) text-(--texto-color) montserrat-title-light scroll-mt-[10vh]">
                <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 items-start gap-16">
                    <div className="self-start">
                        <h2 className="text-5xl font-bold mb-4 uppercase">
                            Acerca de mí
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-4xl text-(--acento-color) font-bold montserrat-title-bold uppercase w-5xl mb-4">
                            Quién soy y qué hago
                        </h3>
                        <p className="">
                            {info_personal.descripcion}
                        </p>
                        <button className="bg-(--acento-color) text-black uppercase px-6 py-3 rounded-full hover:bg-(--acento-color-hover) transition-all duration-300 ease-in-out mt-4 cursor-pointer"
                                onClick={() => navigate("/about")}
                        >
                            Ver más
                        </button>
                    </div>
                </div>
            </section>
        );
    };