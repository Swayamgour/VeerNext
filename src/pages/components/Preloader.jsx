import React from "react";

const Preloader = () => {
    const text = ["V", "E", "E", "R", "N", "X", "T"];

    return (
        <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="animation-preloader">

                    {/* Spinner */}
                    <div className="spinner"></div>

                    {/* Logo inside spinner */}
                    <div className="img_insidespinner">
                        <img
                            src="/assets/img/logo/logo.png"
                            style={{ height: "5rem" }}
                            alt="logo"
                        />
                    </div>

                    {/* Animated Text */}
                    <div className="txt-loading">
                        {text.map((letter, i) => (
                            <span
                                key={i}
                                className="letters-loading"
                                data-text-preloader={letter} // 👈 IMPORTANT
                            >
                                {letter}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Preloader;
