import { RiCss3Line, RiGithubLine, RiHtml5Line, RiJavascriptLine, RiNextjsLine, RiPhpFill, RiReactjsLine, RiTailwindCssLine } from "@remixicon/react";
import { SiAstro, SiMongodb, SiMysql, SiNodedotjs, SiPython, SiTypescript } from '@icons-pack/react-simple-icons';
import "../Styles/Habilidades.css";

function Habilidades () {
    return(
        <>
            <div className="Container_TitleHabilidades">
                <h1 className="Habilidades">Habilidades</h1>
            </div>
            <div>
                <div className="Container_Tec">
                    <h1 className="Tec">Front - end</h1>
                </div>
                <div className="ContainerHabilidades">
                    <button className="button-html">
                        <p className="button-html__text">
                            <span className="span" style={{ "--index": 0 }}>H</span>
                            <span className="span" style={{ "--index": 1 }}>T</span>
                            <span className="span" style={{ "--index": 2 }}>M</span>
                            <span className="span" style={{ "--index": 3 }}>L</span>
                            <span className="span" style={{ "--index": 4 }}></span>
                            <span className="span" style={{ "--index": 5 }}>H</span>
                            <span className="span" style={{ "--index": 6 }}>T</span>
                            <span className="span" style={{ "--index": 7 }}>M</span>
                            <span className="span" style={{ "--index": 8 }}>L</span>
                            <span className="span" style={{ "--index": 9 }}></span>
                            <span className="span" style={{ "--index": 10 }}>H</span>
                            <span className="span" style={{ "--index": 11 }}>T</span>
                            <span className="span" style={{ "--index": 12 }}>M</span>
                            <span className="span" style={{ "--index": 13 }}>L</span>
                        </p>
                        <div className="button-html__circle">
                            <RiHtml5Line className="button-html__icon" />
                            <RiHtml5Line className="button-html__icon button-html__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-css">
                        <p className="button-css__text">
                            <span className="span" style={{ "--index": 0 }}>C</span>
                            <span className="span" style={{ "--index": 1 }}>S</span>
                            <span className="span" style={{ "--index": 2 }}>S</span>
                            <span className="span" style={{ "--index": 3 }}></span>
                            <span className="span" style={{ "--index": 4 }}>C</span>
                            <span className="span" style={{ "--index": 5 }}>S</span>
                            <span className="span" style={{ "--index": 6 }}>S</span>
                            <span className="span" style={{ "--index": 7 }}></span>
                            <span className="span" style={{ "--index": 8 }}>C</span>
                            <span className="span" style={{ "--index": 9 }}>S</span>
                            <span className="span" style={{ "--index": 10 }}>S</span>
                            <span className="span" style={{ "--index": 11 }}></span>
                        </p>
                        <div className="button-css__circle">
                            <RiCss3Line className="button-css__icon" />
                            <RiCss3Line className="button-css__icon button-css__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-js">
                        <p className="button-js__text">
                            <span className="span" style={{ "--index": 0 }}>J</span>
                            <span className="span" style={{ "--index": 1 }}>S</span>
                            <span className="span" style={{ "--index": 2 }}></span>
                            <span className="span" style={{ "--index": 3 }}>J</span>
                            <span className="span" style={{ "--index": 4 }}>S</span>
                            <span className="span" style={{ "--index": 5 }}></span>
                            <span className="span" style={{ "--index": 6 }}>J</span>
                            <span className="span" style={{ "--index": 7 }}>S</span>
                            <span className="span" style={{ "--index": 8 }}></span>
                            <span className="span" style={{ "--index": 9 }}>J</span>
                            <span className="span" style={{ "--index": 10 }}>S</span>
                            <span className="span" style={{ "--index": 11 }}></span>
                        </p>
                        <div className="button-js__circle">
                            <RiJavascriptLine className="button-js__icon" />
                            <RiJavascriptLine className="button-js__icon button-js__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-php">
                        <p className="button-php__text">
                            <span className="span" style={{ "--index": 0 }}>P</span>
                            <span className="span" style={{ "--index": 1 }}>H</span>
                            <span className="span" style={{ "--index": 2 }}>P</span>
                            <span className="span" style={{ "--index": 3 }}></span>
                            <span className="span" style={{ "--index": 4 }}>P</span>
                            <span className="span" style={{ "--index": 5 }}>H</span>
                            <span className="span" style={{ "--index": 6 }}>P</span>
                            <span className="span" style={{ "--index": 7 }}></span>
                            <span className="span" style={{ "--index": 8 }}>P</span>
                            <span className="span" style={{ "--index": 9 }}>H</span>
                            <span className="span" style={{ "--index": 10 }}>P</span>
                            <span className="span" style={{ "--index": 11 }}></span>
                        </p>
                        <div className="button-php__circle">
                            <RiPhpFill className="button-php__icon" />
                            <RiPhpFill className="button-php__icon button-php__icon--copy" />
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div className="Container_Tec">
                    <h1 className="Tec">Back - end</h1>
                </div>
                <div className="ContainerHabilidades">
                    <button className="button-mongoDB">
                        <p className="button-mongoDB__text">
                            <span className="span" style={{ "--index": 0 }}>M</span>
                            <span className="span" style={{ "--index": 1 }}>O</span>
                            <span className="span" style={{ "--index": 2 }}>N</span>
                            <span className="span" style={{ "--index": 3 }}>G</span>
                            <span className="span" style={{ "--index": 4 }}>O</span>
                            <span className="span" style={{ "--index": 5 }}>-</span>
                            <span className="span" style={{ "--index": 6 }}>D</span>
                            <span className="span" style={{ "--index": 7 }}>B</span>
                            <span className="span" style={{ "--index": 8 }}></span>
                            <span className="span" style={{ "--index": 9 }}>M</span>
                            <span className="span" style={{ "--index": 10 }}>O</span>
                            <span className="span" style={{ "--index": 11 }}>N</span>
                            <span className="span" style={{ "--index": 12 }}>G</span>
                            <span className="span" style={{ "--index": 13 }}>O</span>
                            <span className="span" style={{ "--index": 14 }}>-</span>
                            <span className="span" style={{ "--index": 15 }}>D</span>
                            <span className="span" style={{ "--index": 16 }}>B</span>
                            <span className="span" style={{ "--index": 17 }}></span>
                        </p>
                        <div className="button-mongoDB__circle">
                            <SiMongodb className="button-mongoDB__icon"/>
                            <SiMongodb className="button-mongoDB__icon button-mongoDB__icon--copy"/>
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-python">
                        <p className="button-python__text">
                            <span className="span" style={{ "--index": 0 }}>P</span>
                            <span className="span" style={{ "--index": 1 }}>Y</span>
                            <span className="span" style={{ "--index": 2 }}>T</span>
                            <span className="span" style={{ "--index": 3 }}>H</span>
                            <span className="span" style={{ "--index": 4 }}>O</span>
                            <span className="span" style={{ "--index": 5 }}>N</span>
                            <span className="span" style={{ "--index": 6 }}></span>
                            <span className="span" style={{ "--index": 7 }}>P</span>
                            <span className="span" style={{ "--index": 8 }}>Y</span>
                            <span className="span" style={{ "--index": 9 }}>T</span>
                            <span className="span" style={{ "--index": 10 }}>H</span>
                            <span className="span" style={{ "--index": 11 }}>O</span>
                            <span className="span" style={{ "--index": 12 }}>N</span>
                            <span className="span" style={{ "--index": 13 }}></span>
                        </p>
                        <div className="button-python__circle">
                            <SiPython className="button-python__icon"/>
                            <SiPython className="button-python__icon button-python__icon--copy"/>
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-typescript">
                        <p className="button-typescript__text">
                            <span className="span" style={{ "--index": 0 }}>T</span>
                            <span className="span" style={{ "--index": 1 }}>Y</span>
                            <span className="span" style={{ "--index": 2 }}>P</span>
                            <span className="span" style={{ "--index": 3 }}>E</span>
                            <span className="span" style={{ "--index": 4 }}>S</span>
                            <span className="span" style={{ "--index": 5 }}>C</span>
                            <span className="span" style={{ "--index": 6 }}>R</span>
                            <span className="span" style={{ "--index": 7 }}>I</span>
                            <span className="span" style={{ "--index": 8 }}>P</span>
                            <span className="span" style={{ "--index": 9 }}>T</span>
                            <span className="span" style={{ "--index": 10 }}></span>
                        </p>
                        <div className="button-typescript__circle">
                            <SiTypescript className="button-typescript__icon"/>
                            <SiTypescript className="button-typescript__icon button-typescript__icon--copy"/>
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-mysgl">
                        <p className="button-mysgl__text">
                            <span className="span" style={{ "--index": 0 }}>M</span>
                            <span className="span" style={{ "--index": 1 }}>Y</span>
                            <span className="span" style={{ "--index": 2 }}>S</span>
                            <span className="span" style={{ "--index": 3 }}>Q</span>
                            <span className="span" style={{ "--index": 4 }}>L</span>
                            <span className="span" style={{ "--index": 5 }}></span>
                            <span className="span" style={{ "--index": 6 }}>M</span>
                            <span className="span" style={{ "--index": 7 }}>Y</span>
                            <span className="span" style={{ "--index": 8 }}>S</span>
                            <span className="span" style={{ "--index": 9 }}>Q</span>
                            <span className="span" style={{ "--index": 10 }}>L</span>
                            <span className="span" style={{ "--index": 11 }}></span>
                        </p>
                        <div className="button-mysgl__circle">
                            <SiMysql className="button-mysgl__icon"/>
                            <SiMysql className="button-mysgl__icon button-mysgl__icon--copy"/>
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-nodejs">
                        <p className="button-nodejs__text">
                            <span className="span" style={{ "--index": 0 }}>N</span>
                            <span className="span" style={{ "--index": 1 }}>O</span>
                            <span className="span" style={{ "--index": 2 }}>D</span>
                            <span className="span" style={{ "--index": 3 }}>E</span>
                            <span className="span" style={{ "--index": 4 }}>.</span>
                            <span className="span" style={{ "--index": 5 }}>J</span>
                            <span className="span" style={{ "--index": 6 }}>S</span>
                            <span className="span" style={{ "--index": 7 }}></span>
                            <span className="span" style={{ "--index": 8 }}>N</span>
                            <span className="span" style={{ "--index": 9 }}>O</span>
                            <span className="span" style={{ "--index": 10 }}>D</span>
                            <span className="span" style={{ "--index": 11 }}>E</span>
                            <span className="span" style={{ "--index": 12 }}>.</span>
                            <span className="span" style={{ "--index": 13 }}>J</span>
                            <span className="span" style={{ "--index": 14 }}>S</span>
                        </p>
                        <div className="button-nodejs__circle">
                            <SiNodedotjs className="button-nodejs__icon"/>
                            <SiNodedotjs className="button-nodejs__icon button-nodejs__icon--copy"/>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div className="Container_Tec">
                    <h1 className="Tec">FrameWorks y Bibliotecas</h1>
                </div>
                <div className="ContainerHabilidades">
                    <button className="button-tailwind">
                        <p className="button-tailwind__text">
                            <span className="span" style={{ "--index": 0 }}>T</span>
                            <span className="span" style={{ "--index": 1 }}>A</span>
                            <span className="span" style={{ "--index": 2 }}>I</span>
                            <span className="span" style={{ "--index": 3 }}>L</span>
                            <span className="span" style={{ "--index": 4 }}>W</span>
                            <span className="span" style={{ "--index": 5 }}>I</span>
                            <span className="span" style={{ "--index": 6 }}>N</span>
                            <span className="span" style={{ "--index": 7 }}>D</span>
                            <span className="span" style={{ "--index": 8 }}></span>
                            <span className="span" style={{ "--index": 9 }}></span>
                            <span className="span" style={{ "--index": 10 }}>C</span>
                            <span className="span" style={{ "--index": 11 }}>S</span>
                            <span className="span" style={{ "--index": 12 }}>S</span>
                            <span className="span" style={{ "--index": 13 }}></span>
                        </p>
                        <div className="button-tailwind__circle">
                            <RiTailwindCssLine className="button-tailwind__icon" />
                            <RiTailwindCssLine className="button-tailwind__icon button-tailwind__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-react">
                        <p className="button-react__text">
                            <span className="span" style={{ "--index": 0 }}>R</span>
                            <span className="span" style={{ "--index": 1 }}>E</span>
                            <span className="span" style={{ "--index": 2 }}>A</span>
                            <span className="span" style={{ "--index": 3 }}>C</span>
                            <span className="span" style={{ "--index": 4 }}>T</span>
                            <span className="span" style={{ "--index": 5 }}></span>
                            <span className="span" style={{ "--index": 6 }}>R</span>
                            <span className="span" style={{ "--index": 7 }}>E</span>
                            <span className="span" style={{ "--index": 8 }}>A</span>
                            <span className="span" style={{ "--index": 9 }}>C</span>
                            <span className="span" style={{ "--index": 10 }}>T</span>
                            <span className="span" style={{ "--index": 11 }}></span>
                        </p>
                        <div className="button-react__circle">
                            <RiReactjsLine className="button-react__icon" />
                            <RiReactjsLine className="button-react__icon button-react__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-react-native">
                        <p className="button-react-native__text">
                            <span className="span" style={{ "--index": 0 }}>R</span>
                            <span className="span" style={{ "--index": 1 }}>E</span>
                            <span className="span" style={{ "--index": 2 }}>A</span>
                            <span className="span" style={{ "--index": 3 }}>C</span>
                            <span className="span" style={{ "--index": 4 }}>T</span>
                            <span className="span" style={{ "--index": 5 }}></span>
                            <span className="span" style={{ "--index": 6 }}>N</span>
                            <span className="span" style={{ "--index": 7 }}>A</span>
                            <span className="span" style={{ "--index": 8 }}>T</span>
                            <span className="span" style={{ "--index": 9 }}>I</span>
                            <span className="span" style={{ "--index": 10 }}>V</span>
                            <span className="span" style={{ "--index": 11 }}>E</span>
                            <span className="span" style={{ "--index": 12 }}></span>
                        </p>
                        <div className="button-react-native__circle">
                            <RiReactjsLine className="button-react-native__icon" />
                            <RiReactjsLine className="button-react-native__icon button-react-native__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-next">
                        <p className="button-next__text">
                            <span className="span" style={{ "--index": 0 }}>N</span>
                            <span className="span" style={{ "--index": 1 }}>E</span>
                            <span className="span" style={{ "--index": 2 }}>X</span>
                            <span className="span" style={{ "--index": 3 }}>T</span>
                            <span className="span" style={{ "--index": 4 }}></span>
                            <span className="span" style={{ "--index": 5 }}></span>
                            <span className="span" style={{ "--index": 6 }}>N</span>
                            <span className="span" style={{ "--index": 7 }}>E</span>
                            <span className="span" style={{ "--index": 8 }}>X</span>
                            <span className="span" style={{ "--index": 9 }}>T</span>
                            <span className="span" style={{ "--index": 10 }}></span>
                            <span className="span" style={{ "--index": 11 }}></span>
                            <span className="span" style={{ "--index": 12 }}></span>
                        </p>
                        <div className="button-next__circle">
                            <RiNextjsLine className="button-next__icon" />
                            <RiNextjsLine className="button-next__icon button-next__icon--copy" />
                        </div>
                    </button>
                    {/* ==================================================== */}
                    <button className="button-astro">
                        <p className="button-astro__text">
                            <span className="span" style={{ "--index": 0 }}>A</span>
                            <span className="span" style={{ "--index": 1 }}>S</span>
                            <span className="span" style={{ "--index": 2 }}>T</span>
                            <span className="span" style={{ "--index": 3 }}>R</span>
                            <span className="span" style={{ "--index": 4 }}>O</span>
                            <span className="span" style={{ "--index": 5 }}></span>
                            <span className="span" style={{ "--index": 6 }}></span>
                            <span className="span" style={{ "--index": 7 }}>A</span>
                            <span className="span" style={{ "--index": 8 }}>S</span>
                            <span className="span" style={{ "--index": 9 }}>T</span>
                            <span className="span" style={{ "--index": 10 }}>R</span>
                            <span className="span" style={{ "--index": 11 }}>O</span>
                            <span className="span" style={{ "--index": 12 }}></span>
                        </p>
                        <div className="button-astro__circle">
                            <SiAstro className="button-astro__icon"/>
                            <SiAstro className="button-astro__icon button-astro__icon--copy"/>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div className="Container_Tec">
                    <h1 className="Tec">Control de versiones</h1>
                </div>
                <div className="ContainerHabilidades">
                    <button className="button-github">
                        <p className="button-github__text">
                            <span className="span" style={{ "--index": 0 }}>G</span>
                            <span className="span" style={{ "--index": 1 }}>I</span>
                            <span className="span" style={{ "--index": 2 }}>T</span>
                            <span className="span" style={{ "--index": 3 }}>H</span>
                            <span className="span" style={{ "--index": 4 }}>U</span>
                            <span className="span" style={{ "--index": 5 }}>B</span>
                            <span className="span" style={{ "--index": 6 }}></span>
                            <span className="span" style={{ "--index": 7 }}></span>
                            <span className="span" style={{ "--index": 8 }}>G</span>
                            <span className="span" style={{ "--index": 9 }}>I</span>
                            <span className="span" style={{ "--index": 10 }}>T</span>
                            <span className="span" style={{ "--index": 11 }}>H</span>
                            <span className="span" style={{ "--index": 12 }}>U</span>
                            <span className="span" style={{ "--index": 13 }}>B</span>
                        </p>
                        <div className="button-github__circle">
                            <RiGithubLine className="button-github__icon" />
                            <RiGithubLine className="button-github__icon button-github__icon--copy" />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export { Habilidades };
