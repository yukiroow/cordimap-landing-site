import { Phone, Mail, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import BiophysicalProfile from "./BiophysicalProfile";
import SocioCultural from "./SocioCultural";

import {
  Reveal,
  useScrolledPastLanding,
  useActiveSection,
  useHideNavOnTitle,
  useEntered,
} from "./components/Animations";

const MainPage = () => {
  const landingRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [showSocio, setShowSocio] = useState(false);

  const showButtons = useScrolledPastLanding(landingRef);
  const activeSection = useActiveSection([showMore, showSocio]);
  const hideNavOnTitle = useHideNavOnTitle(".section-title", 120);
  const entered = useEntered();

  return (
    <div className="relative">
      {/* STICKY QUICK NAV */}
      {showButtons && !hideNavOnTitle && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600/85 backdrop-blur-sm shadow-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center h-12 sm:h-14">
              <div className="flex items-center gap-3 sm:gap-6">
                <button
                  onClick={() =>
                    document
                      .getElementById("car")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`px-3 sm:px-4 py-1 rounded-md text-white text-sm sm:text-base font-bold tracking-wide transition
              ${
                activeSection === "car"
                  ? "bg-white/20 ring-1 ring-white/40"
                  : "hover:bg-blue-700"
              }`}
                >
                  CAR
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("biophysical")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`px-3 sm:px-4 py-1 rounded-md text-white text-sm sm:text-base font-bold tracking-wide transition
              ${
                activeSection === "biophysical"
                  ? "bg-white/20 ring-1 ring-white/40"
                  : "hover:bg-blue-700"
              }`}
                >
                  Biophysical
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("enr")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`px-3 sm:px-4 py-1 rounded-md text-white text-sm sm:text-base font-bold tracking-wide transition
              ${
                activeSection === "enr"
                  ? "bg-white/20 ring-1 ring-white/40"
                  : "hover:bg-blue-700"
              }`}
                >
                  ENR
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("socio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`px-3 sm:px-4 py-1 rounded-md text-white text-sm sm:text-base font-bold tracking-wide transition
              ${
                activeSection === "socio"
                  ? "bg-white/20 ring-1 ring-white/40"
                  : "hover:bg-blue-700"
              }`}
                >
                  Socioculture
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* BACK TO TOP ARROW */}
      {showButtons && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 rounded-full p-3 sm:p-3.5 bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* LANDING SECTION */}
      <section
        ref={landingRef}
        className={[
          "relative flex flex-col items-center justify-center w-full min-h-screen text-center text-gray-900 overflow-hidden px-4 sm:px-8",
          "transition-all duration-700 ease-out",
          entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        ].join(" ")}
      >
        <style>{`
    @keyframes floatY { 
      0% { transform: translateY(0) }
      50% { transform: translateY(-8px) }
      100% { transform: translateY(0) }
    }
    @keyframes softIn { 
      from { opacity: 0; transform: translateY(12px) } 
      to { opacity: 1; transform: translateY(0) } 
    }
  `}</style>
        {/* Backgrounds */}
        <img
          src="src/assets/Landing-page/Bgleft.png"
          alt="background"
          className={[
            "absolute left-0 bottom-0 max-h-[60%] sm:max-h-[70%] object-contain z-2",
            "opacity-0 animate-[softIn_700ms_ease-out_200ms_forwards]",
          ].join(" ")}
        />

        <img
          src="src/assets/Landing-page/Bgright.png"
          alt="background right"
          className={[
            "absolute z-10 object-contain pointer-events-none select-none",
            "right-0 top-0 h-1/2",
            "sm:right-2 sm:top-2",
            "md:top-0 md:right-0 md:h-full",
            "opacity-0 animate-[softIn_700ms_ease-out_300ms_forwards]",
          ].join(" ")}
        />

        <img
          src="src/assets/Landing-page/igorot.png"
          alt="igorot"
          className={[
            "absolute right-0 bottom-0 object-contain z-10 opacity-80",
            "w-4/5 sm:w-3/3",
            "md:w-1/2 lg:w-2/4",
            "opacity-0 animate-[softIn_700ms_ease-out_400ms_forwards]",
          ].join(" ")}
          style={{
            animation: entered
              ? "softIn 700ms ease-out 400ms forwards, floatY 6s ease-in-out 1s infinite"
              : undefined,
          }}
        />

        {/* Text and Buttons */}
        <div className="relative z-30 max-w-3xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pb-4 leading-tight opacity-0"
            style={{
              animation: entered
                ? "softIn 600ms ease-out 180ms forwards"
                : undefined,
            }}
          >
            One Cordillera
          </h1>

          <h2
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pb-3 mt-2 leading-snug opacity-0"
            style={{
              animation: entered
                ? "softIn 600ms ease-out 320ms forwards"
                : undefined,
            }}
          >
            A Glimpse of the <br className="hidden sm:block" /> Mountainous
            Region
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 opacity-0"
            style={{
              animation: entered
                ? "softIn 600ms ease-out 460ms forwards"
                : undefined,
            }}
          >
            DENR - CAR <br /> 2025
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-6 opacity-0"
            style={{
              animation: entered
                ? "softIn 600ms ease-out 600ms forwards"
                : undefined,
            }}
          >
            <button className="text-sm sm:text-base md:text-lg px-6 md:px-8 py-2 rounded-lg bg-green-600 text-white hover:scale-105 transition">
              Land Cover
            </button>
            <button className="text-sm sm:text-base md:text-lg px-6 md:px-8 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition">
              Water Cover
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-title relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 sm:px-8 md:px-12">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          src="src/assets/About-images/Falls.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20 transition-opacity duration-700" />
        {/* Content */}
        <div className="relative z-30 flex flex-col items-center space-y-12 sm:space-y-16 md:space-y-20 max-w-6xl w-full">
          {/* Title */}
          <Reveal>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white pb-6 sm:pb-10 md:pb-12 text-center">
              ABOUT
            </h1>
          </Reveal>
          {/* About Icons */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12 text-center w-full">
              {[
                { src: "CAR.svg", label: "CAR" },
                { src: "Biophysical.svg", label: "Biophysical Profile" },
                { src: "Earth.svg", label: "ENR Resources" },
                { src: "SCE.svg", label: "Socio-Cultural & Economic Profile" },
              ].map((item, idx) => (
                <Reveal key={item.label} delay={180 + idx * 80}>
                  <a
                    href={`#${item.label.toLowerCase().split(" ")[0]}`}
                    className="flex flex-col items-center space-y-3 text-white transition-transform duration-500 hover:scale-105"
                  >
                    <img
                      src={`src/assets/About-images/${item.src}`}
                      alt={item.label}
                      className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto will-change-transform"
                    />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center">
                      {item.label}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAR */}
      <section
        id="car"
        className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden m-0 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#3b82f640] to-white"
      >
        <Reveal>
          <h1 className="section-title text-3xl sm:text-5xl mt-5 md:text-6xl lg:text-7xl xl:text-8xl pb-10 sm:pb-16 font-bold text-center">
            CORDILLERA ADMINISTRATIVE REGION
          </h1>
        </Reveal>

        {/* Province Logos */}
        <div className="flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 pb-10 sm:pb-16 justify-center">
          {[
            {
              src: "src/assets/Logos/Province-of-Benguet-Logo.png",
              alt: "Province of Benguet Logo",
              cls: "",
            },
            {
              src: "src/assets/Logos/Province-of-Kalinga-Logo.png",
              alt: "Province of Kalinga Logo",
              cls: "rounded-lg",
            },
            {
              src: "src/assets/Logos/Mountain-Province-Logo.png",
              alt: "Mountain Province Logo",
              cls: "rounded-lg",
            },
            {
              src: "src/assets/Logos/Province-of-Abra-Logo.png",
              alt: "Province of Abra Logo",
              cls: "rounded-lg",
            },
            {
              src: "src/assets/Logos/Province-of-Apayao-Logo.png",
              alt: "Province of Apayao Logo",
              cls: "rounded-lg",
            },
            {
              src: "src/assets/Logos/Province-of-Ifugao-Logo.png",
              alt: "Province of Ifugao Logo",
              cls: "rounded-lg",
            },
          ].map((logo, i) => (
            <Reveal key={logo.alt} delay={80 + i * 60}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 ${logo.cls} transition-transform duration-500 hover:scale-105`}
              />
            </Reveal>
          ))}
        </div>

        {/* Text Content */}
        <Reveal delay={120}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify pb-4 sm:pb-6 md:pb-8">
            The Cordillera Administrative Region (CAR) was established on July
            15, 1987 through Executive Order No. 220, signed by then President
            Corazon Aquino.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify pb-4 sm:pb-6 md:pb-8">
            The region consists of the provinces of Abra, Apayao, Benguet,
            Ifugao, Kalinga, and Mountain Province. Its regional center is the
            Chartered City of Baguio, officially known as the Summer Capital of
            the Philippines.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify pb-4 sm:pb-6">
            Cordillera is one of the prime tourist destinations in the
            Philippines. It has many spectacular scenic views and enchantingly
            cool places. The world-famous Banaue Rice Terraces in the province
            of Ifugao is considered as the "Eight Wonder of the World". This
            structure of about 2000 to 6000 years old is a United Nations
            Organization for Education, Science and Culture (UNESCO) World
            Heritage Site. Other tourist attractions of the region include the
            Sumaguing Cave in Sagada and the mummy caves in Benguet and Mt.
            Province. Mount Pulag Protected Landscape is the highest mountain in
            Luzon.
          </p>
        </Reveal>
      </section>

      {/* BIOPHYSICAL PROFILE */}
      <section
        id="biophysical"
        className="section-title flex flex-col items-center justify-center w-full"
      >
        {/* Title with background */}
        <Reveal className="w-full">
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="flex items-center justify-center py-6 sm:py-10 bg-cover bg-center px-4"
              style={{
                backgroundImage: "url('src/assets/Biophysical-images/bg.png')",
              }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
                BIOPHYSICAL PROFILE
              </h1>
            </div>
          </div>
        </Reveal>

        {/* Short preview content */}
        <div className="flex flex-col items-center mt-6 space-y-8 w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full px-4 sm:px-8 md:px-12 lg:px-20">
            <Reveal delay={80} className="flex-1">
              <p className="text-base sm:text-lg md:text-xl text-justify">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Geographical Location, Land Area and Political Subdivision.
                </span>
                <br />
                Cordillera Administrative Region is the only landlocked region
                in the Philippines, located in the mountain ranges of the north
                central part of Luzon. It is bounded on the north by the
                province of Cagayan, on the East by Isabela and Nueva Viscaya,
                on the South by Pangasinan and on the West by La Union, Ilocos
                Sur and Ilocos Norte.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Biophysical-images/anguib.png"
                  alt="Anguib Beach Cagayan"
                  className="w-72 sm:w-80 h-48 sm:h-56 object-cover rounded-lg shadow transition-transform duration-500 ease-out hover:scale-[1.02]"
                />
                <p className="text-sm mt-2">Anguib Beach Cagayan</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Toggle button */}
        <Reveal delay={200}>
          <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 mt-8 w-full">
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-10 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition"
              >
                See More
              </button>
            )}

            {/* Show BiophysicalProfile.jsx when expanded */}
            {showMore && (
              <div className="mt-8 w-full">
                <BiophysicalProfile
                  onClose={() => {
                    setShowMore(false);
                    document
                      .getElementById("biophysical") 
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ENR RESOURCES */}
      <div>
        <section
          id="enr"
          className="section-title mt-12 mb-6 px-4 sm:px-6 md:px-12 lg:px-20"
        >
          <Reveal>
            <div
              className="relative w-full rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center py-8 sm:py-10 md:py-12"
              style={{
                backgroundImage: "url('src/assets/Biophysical-images/ENR.png')",
              }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
                ENR RESOURCES
              </h1>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-6">
              <p className="text-base sm:text-lg md:text-xl text-justify">
                The Cordillera Region is very rich in natural resources. It is
                especially famed for its huge gold deposits, pure stands of pine
                forest, and rich soils and water sources that have enabled its
                people to sustain agriculture on mountainside rice terraces.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Land Resources */}
        <div
          className="relative bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center"
          style={{
            backgroundImage: "url('src/assets/Map-images/Land.png')",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none ml-4 sm:ml-8 mr-4 sm:mr-8">
            <div className="absolute top-10 sm:top-20 left-6 sm:left-20 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" />
          </div>

          {/* Content */}
          <Reveal>
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="group relative max-w-full md:max-w-2xl lg:max-w-3xl md:ml-8 lg:ml-12 xl:ml-16">
                <div
                  className="relative bg-green-900/20 backdrop-blur-xl border border-white/10 
                  w-full p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl
                  my-8 sm:my-12 md:my-16 
                  transform transition-all duration-500 
                  hover:scale-[1.01] hover:shadow-green-500/20"
                >
                  <div className="relative mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                      Land Resources
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-green-800/30 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-2xl sm:text-3xl font-bold text-green-300 mb-1">
                        85%
                      </div>
                      <div className="text-sm sm:text-base text-green-100/80">
                        Forestland
                      </div>
                    </div>
                    <div className="bg-emerald-800/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-1">
                        15%
                      </div>
                      <div className="text-sm sm:text-base text-emerald-100/80">
                        A & D Lands
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-8">
                    <article className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2 sm:mt-3 animate-pulse" />
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 hover:text-green-300 transition-colors duration-300">
                            Land Classification
                          </h3>
                          <p className="text-gray-200 leading-relaxed text-base sm:text-lg font-light">
                            Cordillera Administrative Region is classified as{" "}
                            <span className="font-semibold text-green-300 bg-green-900/30 px-2 py-1 rounded">
                              eighty-five percent (85%) forestland
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-emerald-300 bg-emerald-900/30 px-2 py-1 rounded">
                              fifteen percent (15%) alienable and disposable (A
                              & D) lands.
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>

                    <article className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-2 sm:mt-3 animate-pulse delay-500" />
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 hover:text-emerald-300 transition-colors duration-300">
                            Land Use
                          </h3>
                          <p className="text-gray-200 leading-relaxed text-base sm:text-lg font-light">
                            Land classification in the region follows a
                            systematic approach based on comprehensive{" "}
                            <span className="font-semibold text-emerald-300 underline decoration-emerald-500/50">
                              land use suitability analysis
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Water Resources */}
        <div className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center">
          {/* Background grid of river basins */}
          <div
            className="
              absolute inset-0 grid
              grid-cols-1 grid-rows-4           /* base: 1 column, 4 rows (all 4 visible) */
              sm:grid-cols-2 sm:grid-rows-2     /* sm+: 2 columns, 2 rows (2×2) */
              lg:grid-cols-4 lg:grid-rows-1     /* lg+: 4 columns, 1 row (1×4) */"
          >
            {/* Tile 1 */}
            <div className="relative overflow-hidden group">
              <img
                src="src/assets/Water-resources/cagayan-river-basin.png"
                alt="Cagayan River Basin"
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 sm:top-5 left-0 w-full text-white text-center py-1 sm:py-2 text-sm sm:text-lg font-bold bg-black/30/80 backdrop-blur-[1px] pointer-events-none transition-opacity duration-500">
                Cagayan River Basin
              </div>
            </div>

            {/* Tile 2 */}
            <div className="relative overflow-hidden group">
              <img
                src="src/assets/Water-resources/abulog-river-basin.png"
                alt="Apayao-Abulog River Basin"
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 sm:top-5 left-0 w-full text-white text-center py-1 sm:py-2 text-sm sm:text-lg font-bold bg-black/30/80 backdrop-blur-[1px] pointer-events-none transition-opacity duration-500">
                Apayao-Abulog River Basin
              </div>
            </div>

            {/* Tile 3 */}
            <div className="relative overflow-hidden group">
              <img
                src="src/assets/Water-resources/abra-river-basin.png"
                alt="Abra River Basin"
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 sm:top-5 left-0 w-full text-white text-center py-1 sm:py-2 text-sm sm:text-lg font-bold bg-black/30/80 backdrop-blur-[1px] pointer-events-none transition-opacity duration-500">
                Abra River Basin
              </div>
            </div>

            {/* Tile 4 */}
            <div className="relative overflow-hidden group">
              <img
                src="src/assets/Water-resources/agno-river-basin.png"
                alt="Agno River Basin"
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-3 sm:top-5 left-0 w-full text-white text-center py-1 sm:py-2 text-sm sm:text-lg font-bold bg-black/30/80 backdrop-blur-[1px] pointer-events-none transition-opacity duration-500">
                Agno River Basin
              </div>
            </div>
          </div>

          {/* Dark overlay across the whole mosaic */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Foreground Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
            <div
              className="max-w-5xl text-white text-center sm:text-left 
                    bg-black/30 backdrop-blur-[2px] rounded-xl p-4 sm:p-6 shadow-lg
                    transition-transform duration-700"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                Water Resources
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                Major River Basins
              </h3>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-justify">
                There are four (4) major river basins covering the region
                namely: Cagayan River Basin, Apayao-Abulug River Basin, Abra
                River Basin and Agno River Basin. It is home to 13 major
                watersheds, playing a key role in maintaining ecological balance
                in Northern Philippines. Most of the major river basins drain to
                Regions 1 and 2 that serve as the major sources of water for
                domestic, agricultural, power generation and industrial needs.
              </p>
            </div>
          </div>
        </div>

        {/* Watershed */}
        {(() => {
          const Section = () => {
            const sectionRef = useRef(null);
            const [inView, setInView] = useState(false);

            useEffect(() => {
              const el = sectionRef.current;
              if (!el) return;
              const obs = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) setInView(true);
                },
                { threshold: 0.25 }
              );
              obs.observe(el);
              return () => obs.disconnect();
            }, []);

            return (
              <div
                ref={sectionRef}
                className="relative bg-cover bg-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-start"
                style={{
                  backgroundImage:
                    "url('src/assets/Map-images/Watershed 1.png')",
                }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none px-4 sm:px-8">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse" />
                </div>
                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20">
                  <div className="group relative max-w-full md:max-w-2xl lg:max-w-3xl md:ml-6 lg:ml-12">
                    <div
                      className={[
                        "relative bg-blue-500/20 backdrop-blur-xl border border-white/10 w-full rounded-2xl shadow-2xl",
                        "p-6 sm:p-8 md:p-10 my-8 sm:my-12 md:my-16",
                        "transform transition-all duration-700 ease-out",
                        inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6",
                        "hover:scale-105 hover:shadow-cyan-500/20",
                      ].join(" ")}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                      <div className="relative mb-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                          Watersheds
                        </h1>
                        <div className="flex space-x-1 mb-4">
                          <div className="w-24 sm:w-28 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                        </div>

                        <p className="text-gray-100 leading-relaxed text-base font-light">
                          CAR serves as the{" "}
                          <span className="font-semibold text-cyan-300">
                            watershed of North Luzon.
                          </span>{" "}
                          The region cradles 13 watersheds which have been
                          affirmed to have{" "}
                          <span className="font-semibold text-cyan-200">
                            enormous water-bearing capacity.
                          </span>
                        </p>
                      </div>
                      <div
                        className={[
                          "bg-cyan-800/30 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/20",
                          "transition-all duration-700",
                          inView
                            ? "opacity-100 translate-y-0 delay-100"
                            : "opacity-0 translate-y-4",
                          "hover:border-cyan-400/40",
                          "mb-6",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-cyan-300 mb-1">
                              13
                            </div>
                            <div className="text-xs text-cyan-100/80">
                              Major Watersheds
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-base font-semibold text-blue-300">
                              North Luzon
                            </div>
                            <div className="text-xs text-blue-200/70">
                              Primary Watershed
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          {
                            colorBox:
                              "bg-blue-800/20 border-blue-500/20 hover:border-blue-400/40",
                            dot: "bg-yellow-400",
                            title: "Power Generation",
                            desc: "Major contributor to Luzon Power Grid",
                            delay: 150,
                            titleColor: "text-yellow-300",
                            descColor: "text-blue-100/80",
                          },
                          {
                            colorBox:
                              "bg-emerald-800/20 border-emerald-500/20 hover:border-emerald-400/40",
                            dot: "bg-green-400",
                            title: "Agricultural Support",
                            desc: "Irrigation for regional farmlands",
                            delay: 200,
                            titleColor: "text-green-300",
                            descColor: "text-emerald-100/80",
                          },
                          {
                            colorBox:
                              "bg-purple-800/20 border-purple-500/20 hover:border-purple-400/40",
                            dot: "bg-purple-400",
                            title: "Domestic Use",
                            desc: "Household water consumption",
                            delay: 250,
                            titleColor: "text-purple-300",
                            descColor: "text-purple-100/80",
                          },
                          {
                            colorBox:
                              "bg-orange-800/20 border-orange-500/20 hover:border-orange-400/40",
                            dot: "bg-orange-400",
                            title: "Industrial Needs",
                            desc: "Regional industrial water supply",
                            delay: 300,
                            titleColor: "text-orange-300",
                            descColor: "text-orange-100/80",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className={[
                              "backdrop-blur-sm rounded-lg p-4 border transition-all duration-700",
                              item.colorBox,
                              "flex flex-col justify-center text-center hover:scale-105",
                              inView
                                ? `opacity-100 translate-y-0`
                                : `opacity-0 translate-y-4`,
                            ].join(" ")}
                            style={{ transitionDelay: `${item.delay}ms` }}
                          >
                            <div
                              className={`w-3 h-3 ${item.dot} rounded-full mx-auto mb-2 animate-pulse`}
                            />
                            <h4
                              className={`font-bold ${item.titleColor} mb-2 text-sm`}
                            >
                              {item.title}
                            </h4>
                            <p
                              className={`text-xs ${item.descColor} leading-relaxed`}
                            >
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          return <Section />;
        })()}

        {/* BIODIVERSITY */}
        {(() => {
          const Biodiversity = () => {
            const rootRef = useRef(null);
            const [inView, setInView] = useState(false);

            useEffect(() => {
              const el = rootRef.current;
              if (!el) return;
              const obs = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) setInView(true);
                },
                { threshold: 0.25 }
              );
              obs.observe(el);
              return () => obs.disconnect();
            }, []);

            const enterBase =
              "transform transition-all duration-700 ease-out will-change-transform";
            const hidden = "opacity-0 translate-y-6";
            const shown = "opacity-100 translate-y-0";

            return (
              <section
                ref={rootRef}
                className="relative bg-white text-gray-900 py-12 sm:py-16 px-6 sm:px-8 md:px-12 lg:px-20"
              >
                <h1
                  className={[
                    "text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10",
                    enterBase,
                    inView ? shown : hidden,
                  ].join(" ")}
                >
                  Biodiversity (Flora / Fauna)
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
                  {/* Left text column */}
                  <div
                    className={[enterBase, inView ? shown : hidden].join(" ")}
                    style={{ transitionDelay: inView ? "50ms" : "0ms" }}
                  >
                    <p className="text-base sm:text-lg leading-relaxed text-justify mb-4">
                      The Philippines is a treasure trove of biodiversity or the
                      variety of life on earth. It is believed to harbor more
                      diversity of life than any other country on earth on a per
                      hectare basis. It is in fact one of the 17 megadiverse
                      countries which host 70–80% of the world’s biodiversity.
                      Yet, Philippine biodiversity is alarmingly endangered,
                      making it a biodiversity hotspot as well.
                    </p>

                    <p className="text-base sm:text-lg leading-relaxed text-justify">
                      The Cordillera Administrative Region is not spared from
                      this situation. Four initial protected areas are found in
                      the region namely: Cassamata Hill National Park, Mt. Pulag
                      National Park, Balbalasang-Balbalan National Park, and Mt.
                      Data National Park.
                    </p>
                  </div>

                  {/* Right image grid */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      {
                        src: "src/assets/Biodiversity-images/cassamata.png",
                        alt: "Cassamata Hill",
                        label: "Cassamata Hill National Park",
                        delay: 100,
                      },
                      {
                        src: "src/assets/Biodiversity-images/mt-pulag.png",
                        alt: "Mt. Pulag",
                        label: "Mt. Pulag National Park",
                        delay: 150,
                      },
                      {
                        src: "src/assets/Biodiversity-images/balbalasang.png",
                        alt: "Balbalasang",
                        label: "Balbalasang-Balbalan National Park",
                        delay: 200,
                      },
                      {
                        src: "src/assets/Biodiversity-images/mt-data.png",
                        alt: "Mt. Data",
                        label: "Mt. Data National Park",
                        delay: 250,
                      },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        className={[
                          enterBase,
                          inView ? shown : hidden,
                          "flex flex-col items-center",
                        ].join(" ")}
                        style={{
                          transitionDelay: inView ? `${card.delay}ms` : "0ms",
                        }}
                      >
                        <img
                          src={card.src}
                          alt={card.alt}
                          className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                        <p className="mt-2 text-xs sm:text-sm text-gray-700 text-center">
                          {card.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Callout box */}
                <div
                  className={[
                    enterBase,
                    inView ? shown : hidden,
                    "mt-10 sm:mt-12 mx-0 sm:mx-4 md:mx-6 border-2 border-blue-800 bg-blue-50/30 p-4 sm:p-6 rounded-lg",
                  ].join(" ")}
                  style={{ transitionDelay: inView ? "300ms" : "0ms" }}
                >
                  <p className="text-base sm:text-lg leading-relaxed text-justify text-gray-800">
                    CAR’s Biodiversity is{" "}
                    <span className="text-blue-700 font-semibold">
                      constantly threatened{" "}
                    </span>
                    with undue pressure from{" "}
                    <span className="text-blue-700 font-semibold">
                      human activities{" "}
                    </span>
                    such as{" "}
                    <span className="text-blue-700 font-semibold">
                      timber poaching and forest landuse conversion to
                      agricultural use{" "}
                    </span>
                    among others, that are inimical to the pristine requirement
                    for rich biodiversity and its sustainable existence. The
                    abundance, distribution and degree of threat to which these
                    resources are
                    <span className="text-blue-700 font-semibold">
                      {" "}
                      exposed calls for a rapid and effective response{" "}
                    </span>
                    to accelerate the coverage of conservation efforts in the
                    region.
                  </p>
                </div>
              </section>
            );
          };

          return <Biodiversity />;
        })()}
      </div>

      {/* SOCIO-CULTURAL AND ECONOMIC PROFILE */}
      <section
        id="socio"
        className="section-title relative flex flex-col items-center text-white text-center mt-0 pt-0 w-full"
      >
        {/* Banner */}
        <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] flex items-center justify-center">
          <img
            src="src/assets/Biodiversity-images/economic.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Economic Profile"
          />
          <div className="absolute inset-0 bg-black/30" />
          <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold">
            SOCIO-CULTURAL and ECONOMIC PROFILE
          </h1>
        </div>

        {/* Preview content */}
        <div className="relative z-10 max-w-6xl w-full px-6 sm:px-8 md:px-12 lg:px-16 py-10 text-black text-justify bg-white">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Demographics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Population preview */}
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Population
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-600 leading-relaxed text-justify">
                  Based on the 2015 Census of Population (POPCEN 2015), showing
                  significant growth compared to the 2010 population of
                  1,612,820.
                </p>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-600 font-medium">
                    2015 Population
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    1,718,444
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-600 font-medium">
                    Growth from 2010
                  </span>
                  <span className="text-lg font-bold text-green-600">
                    +105,624
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-gray-600 font-medium">
                    Annual Growth Rate
                  </span>
                  <span className="text-lg font-bold text-purple-600">
                    1.21%
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Income preview */}
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Income Classification
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-justify">
                Income classification determined by Department of Finance Order
                No. 23-08, reflecting the economic status of provinces in the
                region.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 mb-2">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">2nd</div>
                  <div className="text-sm text-gray-600">Benguet</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">3rd</div>
                  <div className="text-sm text-gray-600">
                    Abra, Apayao, Ifugao
                  </div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg col-span-2">
                  <div className="text-2xl font-bold text-red-600">
                    4th Class
                  </div>
                  <div className="text-sm text-gray-600">
                    Kalinga, Mt. Province
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle button */}
          {!showSocio && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowSocio(true)}
                className="px-6 sm:px-8 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition"
              >
                See More
              </button>
            </div>
          )}

          {/* Expanded SocioCultural.jsx */}
          {showSocio && (
            <div className="mt-8">
              <SocioCultural
                onClose={() => {
                  setShowSocio(false);
                  document
                    .getElementById("socio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <Reveal>
        <footer className="w-full bg-green-700 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
            <div className="grid gap-8 md:grid-cols-[auto,1fr] items-start md:items-center">
              {/* Address + Logo */}
              <Reveal delay={60} className="flex items-center gap-4 sm:gap-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2 sm:p-3 shrink-0 ring-1 ring-white/15 bg-white/5">
                  <img
                    src="src/assets/Logos/DENR.png"
                    alt="DENR Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                  DENR Compound, Gibraltar
                  <br className="hidden sm:block" />
                  Rd, Baguio, Benguet
                </h3>
              </Reveal>

              {/* Directory */}
              <Reveal
                delay={120}
                className="justify-self-start md:justify-self-end"
              >
                <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-5">
                  Directory
                </h3>
                <ul className="space-y-3 sm:space-y-3.5">
                  <li className="flex items-center gap-3 group">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-0.5" />
                    <span className="text-sm sm:text-base">(074) 442 4531</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-0.5" />
                    <span className="text-sm sm:text-base">
                      car@denr.gov.ph
                    </span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-y-0.5" />
                    <a
                      href="https://www.facebook.com/DENRCAROfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base hover:underline hover:text-gray-200"
                    >
                      DENR-CAR
                    </a>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <Reveal delay={180}>
            <div className="w-full bg-blue-900 text-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3">
                <p className="text-center text-xs sm:text-sm md:text-base font-medium tracking-wide">
                  © Copyright @ 2025 Kotl &amp; Acetone. All Rights Reserved.
                </p>
              </div>
            </div>
          </Reveal>
        </footer>
      </Reveal>
    </div>
  );
};

export default MainPage;
