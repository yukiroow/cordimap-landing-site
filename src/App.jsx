// Touch me
import { Phone, Mail, Facebook } from "lucide-react";

const App = () => {
  return (
    <>
      {/* LANDING PAGE */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen text-center text-gray-900 overflow-hidden">
        <img
          src="src/assets/Landing-page/bgleft.png"
          alt="background"
          className="absolute left-0 top-0 h-full object-contain -z-10"
        />
        <img
          src="src/assets/Landing-page/bgright.png"
          alt="background"
          className="absolute right-0 top-0 h-full object-contain -z-10"
        />
        <img
          src="src/assets/Landing-page/igorot.png"
          alt="background"
          className="absolute right-0 bottom-0 w-1/2 object-contain -z-15"
        />

        <h1 className="text-5xl font-bold">One Cordillera</h1>
        <h2 className="text-2xl md:text-3xl mt-2">
          A Glimpse of the <br /> Mountainous Region
        </h2>
        <p className="text-xl mt-2">
          DENR - CAR <br /> 2025{" "}
        </p>

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-2 rounded-lg bg-green-600 text-white cursor-pointer">
            Land Cover
          </button>
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white cursor-pointer">
            Water Cover
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="relative flex flex-col items-center justify-center space-y-6 h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/About-images/Falls.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 -z-0"></div>

        <div className="relative z-10 flex flex-col items-center space-y-20">
          <h1 className="text-5xl font-bold text-white">ABOUT</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
            <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
              <img
                src="src/assets/About-images/CAR.svg"
                alt="CAR"
                className="w-23 h-20"
              />
              <span className="text-lg font-medium">CAR</span>
            </button>

            {/* Biophysical Profile */}
            <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
              <img
                src="src/assets/About-images/Biophysical.svg"
                alt="Biophysical Profile"
                className="w-20 h-20"
              />
              <span className="text-lg font-medium">Biophysical Profile</span>
            </button>

            {/* ENR Resources */}
            <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
              <img
                src="src/assets/About-images/Earth.svg"
                alt="ENR Resources"
                className="w-23 h-20"
              />
              <span className="text-lg font-medium">ENR Resources</span>
            </button>

            {/* Socio-Cultural and Economic Profile */}
            <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
              <img
                src="src/assets/About-images/SCE.svg"
                alt="Socio-Cultural and Economic Profile"
                className="w-27 h-20"
              />
              <span className="text-lg font-medium text-center">
                Socio-Cultural and Economic Profile
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CAR */}
      <section className="flex flex-col items-center justify-center space-y-6 pl-25 pr-25 py-10 bg-gradient-to-b from-[#3b82f640] to-white">
        <h1 className="text-5xl pb-5 font-bold">
          CORDILLERA ADMINISTRATIVE REGION
        </h1>
        <div className="flex flex-wrap gap-20 pb-5 justify-center">
          <img
            src="src/assets/Logos/Province-of-Benguet-Logo.png"
            alt="Province of Benguet Logo"
            className="w-32 h-32"
          />
          <img
            src="src/assets/Logos/Province-of-Kalinga-Logo.png"
            alt="Province of Kalinga Logo"
            className="w-32 h-32 rounded-lg"
          />
          <img
            src="src/assets/Logos/Mountain-Province-Logo.png"
            alt="Mountain Province Logo"
            className="w-32 h-32 rounded-lg"
          />
          <img
            src="src/assets/Logos/Province-of-Abra-Logo.png"
            alt="Province of Abra Logo"
            className="w-32 h-32 rounded-lg"
          />
          <img
            src="src/assets/Logos/Province-of-Apayao-Logo.png"
            alt="Province of Apayao Logo"
            className="w-32 h-32 rounded-lg"
          />
          <img
            src="src/assets/Logos/Province-of-Ifugao-Logo.png"
            alt="Province of Ifugao Logo"
            className="w-32 h-32 rounded-lg"
          />
        </div>
        <p className="text-xl text-justify">
          The Cordillera Administrative Region (CAR) was established on July 15,
          1987 through Executive Order No. 220, signed by then President Corazon
          Aquino.
        </p>
        <p className="text-xl text-justify">
          The region consists of the provinces of Abra, Apayao, Benguet, Ifugao,
          Kalinga, and Mountain Province. Its regional center is the Chartered
          City of Baguio, officially known as the Summer Capital of the
          Philippines.
        </p>
        <p className="text-xl text-justify">
          Cordillera is one of the prime tourist destinations in the
          Philippines,It has many spectacular scenic views and enchantingly cool
          places. The world-famous Banaue Rice Terraces in the province of
          Ifugao is considered as the "Eight Wonder of the World". This
          structure of about 2000 to 6000 years old is a United Nations
          Organization for Education, Science and Culture (UNESCO) World
          Heritage Site. Other tourist attractions of the region include the
          Sumaguing Cave in Sagada and the mummy caves in Benguet and Mt.
          Province. Mount Pulag Protected Landscape is the highest mountain in
          Luzon.
        </p>
      </section>

      {/* BIOPHYSICAL PROFILE */}
      <div className="flex flex-col items-center justify-center space-y-6 pl-20 pr-15">
        <h1 className="text-5xl font-bold">BIOPHYSICAL PROFILE</h1>
        <div className="flex flex-col w-full">
          <h2 className="text-2xl">
            Geographical Location, Land Area and Political Subdivision
          </h2>
          <p className="text-xl text-justify">
            Cordillera Administrative Region is the only landlocked region in
            the Philippines, located in the mountain ranges of the north central
            part of Luzon. It is bounded on the north by the province of
            Cagayan, on the East by Isabela and Nueva Viscaya, on the South by
            Pangasinan and on the West by La Union, Ilocos Sur and Ilocos Norte.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img
                src="src/assets/Biophysical-images/Anguib Beach Cagayan.png"
                alt="Anguib Beach Cagayan"
                className="w-64 h-48 rounded-lg"
              />
              <p className="text-sm">Anguib Beach Cagayan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/Biophysical-images/Enchanted Cave Pangasinan.png"
                alt="Enchanted Cave Pangasinan"
                className="w-64 h-48 rounded-lg"
              />
              <p className="text-sm">Enchanted Cave Pangasinan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/Biophysical-images/Bangui Windmills Ilocos Norte.png"
                alt="Bangui Windmills Ilocos Norte"
                className="w-64 h-48 rounded-lg"
              />
              <p className="text-sm">Bangui Windmills Ilocos Norte</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/Biophysical-images/Mt. Malusong Summit Nueva Viscaya.png"
                alt="Mt. Malusong Summit Nueva Viscaya"
                className="w-64 h-48 rounded-lg"
              />
              <p className="text-sm">Mt. Malusong Summit Nueva Viscaya</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/Biophysical-images/Calle Crisologo Ilocos Sur.png"
                alt="Calle Crisologo Ilocos Sur"
                className="w-64 h-48 rounded-lg"
              />
              <p className="text-sm">Calle Crisologo Ilocos Sur</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex text-xl text-justify">
            It is politically subdivided into 77 municipalities and 1,176
            barangays that makes up to 6.6 percent of the total land area of the
            Philippines. The total area of the region of about 1,865,454
            hectares based on the approved cadastral boundary map. The Alienable
            and Disposable lands is 15.05% of the total land area while 84.95%
            is forestland. Mountain Province has the least area coverage with a
            total of 231,486 hectares. The chartered city of Baguio is less than
            1% of the total area of the region.
          </p>
          <button className="px-4 py-2 mt-4 rounded-lg bg-blue-600 text-white cursor-pointer">
            See More
          </button>
        </div>
      </div>

      {/* DENR RESOURCES */}
      <section>
        <div className="flex flex-row items-center justify-center space-x-6 pl-20 pr-15">
          <h1 className="text-5xl font-bold">DENR RESOURCES</h1>
          <p className="text-xl text-justify">
            The Cordillera Region is very rich in natural resources. It is
            especially famed for its huge gold deposits, pure stands of pine
            forest, and rich soils and water sources that have enabled its
            people to sustain agriculture on mountainside rice terraces.
          </p>
        </div>

        {/* Land Resources */}
        <div
          className="relative bg-cover bg-center min-h-screen flex items-center justify-start"
          style={{
            backgroundImage: "url('src/assets/Map-images/Land.png')",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none ml-12 mr-12">
            <div className="absolute top-20 left-20 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative z-10 ml-35">
            <div className="group relative">
              <div className="relative bg-green-900/20 backdrop-blur-xl border border-white/10 w-full max-w-2xl p-10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-green-500/20">
                <div className="relative mb-8">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Land Resources
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-800/30 backdrop-blur-sm rounded-xl p-4 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl font-bold text-green-300 mb-1">
                      85%
                    </div>
                    <div className="text-sm text-green-100/80">Forestland</div>
                  </div>
                  <div className="bg-emerald-800/30 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-3xl font-bold text-emerald-300 mb-1">
                      15%
                    </div>
                    <div className="text-sm text-emerald-100/80">
                      A & D Lands
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="space-y-8">
                  <article className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-3 animate-pulse" />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 hover:text-green-300 transition-colors duration-300">
                          Land Classification
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-lg font-light">
                          Cordillera Administrative Region is classified as{""}
                          <span className="font-semibold text-green-300 bg-green-900/30 px-2 py-1 rounded">
                            eighty-five percent (85%) forestland
                          </span>{" "}
                          and{" "}
                          <span className="font-semibold text-emerald-300 bg-emerald-900/30 px-2 py-1 rounded">
                            fifteen percent (15%) alienable and disposable (A &
                            D) lands.
                          </span>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-3 animate-pulse delay-500" />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4 hover:text-emerald-300 transition-colors duration-300">
                          Land Use
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-lg font-light">
                          Land classification in the region follows a systematic
                          approach based on comprehensive{" "}
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
        </div>

        {/* Water Resources Section */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 grid grid-cols-4">
            <div className="relative">
              <img
                src="src/assets/Water-resources/cagayan-river-basin.png"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-5 left-0 w-full text-white text-center py-2 text-lg font-bold text-shadow-lg/20">
                Cagayan River Basin
              </div>
            </div>
            <div className="relative">
              <img
                src="src/assets/Water-resources/abulog-river-basin.png"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-5 left-0 w-full text-white text-center py-2 text-lg font-bold text-shadow-lg/20">
                Apayao-Abulog River Basin
              </div>
            </div>
            <div className="relative">
              <img
                src="src/assets/Water-resources/abra-river-basin.png"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-5 left-0 w-full text-white text-center py-2 text-lg font-bold text-shadow-lg/20">
                Abra River Basin
              </div>
            </div>
            <div className="relative">
              <img
                src="src/assets/Water-resources/agno-river-basin.png"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-5 left-0 w-full text-white text-center py-2 text-lg font-bold text-shadow-lg/20">
                Agno River Basin
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="max-w-7xl text-white py-5">
              <h2 className="text-6xl font-bold mb-4">Water Resources</h2>
              <h3 className="text-3xl font-semibold mb-2">
                Major River Basins
              </h3>
              <p className="text-shadow-lg/30 text-2xl leading-relaxed text-justify">
                There are four (4) major river basins covering the region
                namely: Cagayan River Basin, Apayao-Abulug River Basin, Abra
                Riverbasin and Agno River basin. It is home to 13 major
                watersheds, playing a key role in maintaining ecological balance
                in Northern Philippines. Most of the major river basins drain to
                Regions 1 and 2 that serves as the major sources of water for
                domestic, agricultural, power generation and industrial needs.
              </p>
            </div>
          </div>
        </div>

        {/* Watershed */}
        <div
          className="relative bg-cover bg-center min-h-screen flex items-center justify-start"
          style={{
            backgroundImage: "url('src/assets/Map-images/Watershed 1.png')",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none ml-12 mr-12">
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/50  rounded-full animate-pulse" />
          </div>

          {/* Content*/}
          <div className="relative z-10 ml-40">
            <div className="group relative">
              <div className="relative bg-blue-500/20 backdrop-blur-xl border border-white/10 w-full max-w-2xl p-10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"/>

                <div className="relative mb-6">
                  <h1 className="text-4xl font-bold text-white mb-3">
                    Watersheds
                  </h1>
                  <div className="flex space-x-1 mb-4">
                    <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  </div>

                  <p className="text-gray-100 leading-relaxed text-base font-light">
                    CAR serves as the{" "}
                    <span className="font-semibold text-cyan-300">
                      watershed of North Luzon.
                    </span>{" "}
                    The region cradles 13 watersheds which have been affirmed to
                    have{" "}
                    <span className="font-semibold text-cyan-200">
                      enormous water-bearing capacity.
                    </span>
                  </p>
                </div>

                <div className="bg-cyan-800/30 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 mb-6">
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
                  <div className="bg-blue-800/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 flex flex-col justify-center text-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-2 animate-pulse" />
                    <h4 className="font-bold text-yellow-300 mb-2 text-sm">
                      Power Generation
                    </h4>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Major contributor to Luzon Power Grid
                    </p>
                  </div>

                  <div className="bg-emerald-800/20 backdrop-blur-sm rounded-lg p-4 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105 flex flex-col justify-center text-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse delay-300"/>
                    <h4 className="font-bold text-green-300 mb-2 text-sm">
                      Agricultural Support
                    </h4>
                    <p className="text-xs text-emerald-100/80 leading-relaxed">
                      Irrigation for regional farmlands
                    </p>
                  </div>

                  <div className="bg-purple-800/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 flex flex-col justify-center text-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mx-auto mb-2 animate-pulse delay-600" />
                    <h4 className="font-bold text-purple-300 mb-2 text-sm">
                      Domestic Use
                    </h4>
                    <p className="text-xs text-purple-100/80 leading-relaxed">
                      Household water consumption
                    </p>
                  </div>

                  <div className="bg-orange-800/20 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:scale-105 flex flex-col justify-center text-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mx-auto mb-2 animate-pulse delay-900" />
                    <h4 className="font-bold text-orange-300 mb-2 text-sm">
                      Industrial Needs
                    </h4>
                    <p className="text-xs text-orange-100/80 leading-relaxed">
                      Regional industrial water supply
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BIODIVERSITY  */}
        <section className="relative bg-white text-gray-900 py-16 px-8 md:px-30">
          <h1 className="text-3xl font-bold mb-10">
            Biodiversity (Flora / Fauna)
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg leading-relaxed text-justify mb-4">
                The Philippines is a treasure trove of biodiversity or the
                variety of life on earth. It is believed to harbor more
                diversity of life than any other country on earth on a per
                hectare basis. It is in fact one of the 17 megadiverse countries
                which host 70–80% of the world’s biodiversity. Yet, Philippine
                biodiversity is alarmingly endangered, making it a biodiversity
                hotspot as well.
              </p>

              <p className="text-lg leading-relaxed text-justify">
                The Cordillera Administrative Region is not spared from this
                situation. Four initial protected areas are found in the region
                namely: Cassamata Hill National Park, Mt. Pulag National Park,
                Balbalasang-Balbalan National Park, and Mt. Data National Park.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Biodiversity-images/cassamata.png"
                  alt="Cassamata Hill"
                  className="w-full h-40 object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
                <p className="mt-2 text-sm text-gray-700">
                  Cassamata Hill National Park
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Biodiversity-images/mt-pulag.png"
                  alt="Mt. Pulag"
                  className="w-full h-40 object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
                <p className="mt-2 text-sm text-gray-700">
                  Mt. Pulag National Park
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Biodiversity-images/balbalasang.png"
                  alt="Balbalasang"
                  className="w-full h-40 object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
                <p className="mt-2 text-sm text-gray-700">
                  Balbalasang-Balbalan National Park
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="src/assets/Biodiversity-images/mt-data.png"
                  alt="Mt. Data"
                  className="w-full h-40 object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
                <p className="mt-2 text-sm text-gray-700">
                  Mt. Data National Park
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 mr-7 ml-7 border-2 border-blue-800 bg-blue-50/30 p-6 rounded-lg">
            <p className="text-lg leading-relaxed text-justify text-gray-800">
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
                timber poaching and forest landuse conversion to agricultural
                use{" "}
              </span>
              among others, that are inimical to the pristine requirement for
              rich biodiversity and its sustainable existence. The abundance,
              distribution and degree of threat to which these resources are
              <span className="text-blue-700 font-semibold">
                exposed calls for a rapid and effective response{" "}
              </span>
              to accelerate the coverage of conservation efforts in the region.
            </p>
          </div>
        </section>
      </section>

      {/* SOCIO-CULTURAL AND ECONOMIC PROFILE */}
      <section className="relative flex flex-col items-center text-white text-center mt-0 pt-0">
        <div className="relative w-full h-[150px] flex items-center justify-center">
          <img
            src="src/assets/Biodiversity-images/economic.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Economic Profile"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
            SOCIO-CULTURAL and ECONOMIC PROFILE
          </h1>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl px-8 py-12 text-black text-justify bg-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Demographics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-30">
            <div>
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Population</h3>
              </div>

              {/* Population */}
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

            {/* Income Classification  */}
            <div>
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Income Classification
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-justify">
                Income classification determined by Department of Finance Order
                No. 23-08, reflecting the economic status of provinces in the
                region.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 mb-10">
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
                <div className="text-center p-4 bg-red-50 rounded-lg 0 col-span-2">
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

          {/* Button */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 mt-10 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="w-full">
        <div className="bg-green-700 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-50 h-50 rounded-full flex items-center justify-center flex-shrink-0 p-3">
                <img
                  src="src/assets/Logos/DENR.png"
                  alt="DENR Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold leading-tight">
                  DENR Compound, Gibraltar
                  <br />
                  Rd, Baguio, Benguet
                </h3>
              </div>
            </div>

            {/* Directory */}
            <div className="text-left mt-6 md:mt-0 md:mr-30">
              <h3 className="font-semibold text-xl mb-5">Directory</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-start space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>(074) 442 4531</span>
                </li>
                <li className="flex items-center justify-start space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>car@denr.gov.ph</span>
                </li>
                <li className="flex items-center justify-start space-x-2">
                  <Facebook className="w-5 h-5" />
                  <a
                    href="https://www.facebook.com/DENRCAROfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gray-200"
                  >
                    <span>DENR-CAR</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-sm">
              © Copyright @ 2025 Kotl. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;