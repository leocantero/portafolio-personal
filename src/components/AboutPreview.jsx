    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { info_personal } from "../data/data.js";
    import { nombre } from "../data/data.js";


    export const AboutPreview = () => {
        const navigate = useNavigate();

        return (
            <section id="aboutPreview" className="bg-(--fondo-color) text-(--texto-color) montserrat-title-light scroll-mt-[10vh]">
                <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:!grid-cols-2 items-start gap-4">
                    <div className="self-start">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 uppercase">
                            Acerca de mí
                        </h2>
                    </div>
                    <div>
                        <h3 className="sm:text-xl lg:text-4xl text-(--acento-color) font-bold montserrat-title-bold uppercase w-5xl mb-4">
                            Quién soy y qué hago
                        </h3>
                        <p className="">
                            {info_personal.descripcion}
                        </p>
                    </div>
                </div>
            </section>
        );
    };