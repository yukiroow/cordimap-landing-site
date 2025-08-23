// Touch me
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import BiophysicalProfile from "./BiophysicalProfile";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/"
            element={
        <>
        {/* LANDING PAGE */}
        <section className="relative flex flex-col items-center justify-center w-full h-screen text-center text-gray-900 overflow-hidden">
            <img src="src/assets/Landing-page/bgleft.png" alt="background" className="absolute left-0 top-0 h-full object-contain -z-10"/>
            <img src="src/assets/Landing-page/bgright.png" alt="background" className="absolute right-0 top-0 h-full object-contain -z-10"/>
            <img src="src/assets/Landing-page/igorot.png" alt="background" className="absolute right-0 bottom-0 w-1/2 object-contain -z-15"/>

            <div className="relative bottom-17 right-35">
                <h1 className="text-7xl pb-5 font-bold">One Cordillera</h1>
                <h2 className="text-4xl md:text-5xl pb-3 mt-2">A Glimpse of the <br /> Mountainous Region</h2>
                <p className="text-3xl mt-2">DENR - CAR <br/> 2025 </p>

                <div className="flex justify-center gap-4 mt-6">
                    <button className="text-xl px-6 py-2 rounded-lg bg-green-600 text-white cursor-pointer hover:scale-110 transition">
                        Land Cover
                    </button>
                    <button className="text-xl px-6 py-2 rounded-lg bg-blue-600 text-white cursor-pointer hover:scale-110 transition">
                        Water Cover
                    </button>
                </div>
            </div>
        </section>
        
        {/* ABOUT */}
        <section className="relative flex flex-col items-center justify-center space-y-6 h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/About-images/Falls.png')" }} >

            <div className="absolute inset-0 bg-black/40 -z-0"></div>

            <div className="relative z-10 flex flex-col items-center space-y-20">
                <h1 className="text-5xl font-bold text-white">ABOUT</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
                <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
                    <img src="src/assets/About-images/CAR.svg" alt="CAR" className="w-23 h-20" />
                    <span className="text-lg font-medium">CAR</span>
                </button>

                {/* Biophysical Profile */}
                <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
                    <img src="src/assets/About-images/Biophysical.svg" alt="Biophysical Profile" className="w-20 h-20" />
                    <span className="text-lg font-medium">Biophysical Profile</span>
                </button>

                {/* ENR Resources */}
                <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
                    <img src="src/assets/About-images/Earth.svg" alt="ENR Resources" className="w-23 h-20" />
                    <span className="text-lg font-medium">ENR Resources</span>
                </button>

                {/* Socio-Cultural and Economic Profile */}
                <button className="flex flex-col items-center space-y-3 text-white hover:scale-110 transition">
                    <img src="src/assets/About-images/SCE.svg" alt="Socio-Cultural and Economic Profile" className="w-29 h-20" />
                    <span className="text-lg font-medium text-center">
                    Socio-Cultural and Economic Profile
                    </span>
                </button>
                </div>
            </div>
        </section>
        
        {/* CAR */}
        <section className="flex flex-col items-center justify-center space-y-6 pl-25 pr-25 py-10 bg-gradient-to-b from-[#3b82f640] to-white">
            <h1 className="text-5xl pb-5 font-bold">CORDILLERA ADMINISTRATIVE REGION</h1>
            <div className="flex flex-wrap gap-20 pb-5 justify-center">
                <img src="src/assets/Logos/Province-of-Benguet-Logo.png" alt="Province of Benguet Logo" className="w-32 h-32" />
                <img src="src/assets/Logos/Province-of-Kalinga-Logo.png" alt="Province of Kalinga Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Logos/Mountain-Province-Logo.png" alt="Mountain Province Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Logos/Province-of-Abra-Logo.png" alt="Province of Abra Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Logos/Province-of-Apayao-Logo.png" alt="Province of Apayao Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Logos/Province-of-Ifugao-Logo.png" alt="Province of Ifugao Logo" className="w-32 h-32 rounded-lg" />

            </div>
            <p className="text-xl text-justify">
                The Cordillera Administrative Region (CAR) was established on July 15, 1987
                through Executive Order No. 220, signed by then President Corazon Aquino.
            </p>
            <p className="text-xl text-justify">
                The region consists of the provinces of Abra, Apayao, Benguet, Ifugao, Kalinga, and
                Mountain Province. Its regional center is the Chartered City of Baguio, officially
                known as the Summer Capital of the Philippines. 
            </p>
            <p className="text-xl text-justify">
                Cordillera is one of the prime tourist destinations in the Philippines,It has many
                spectacular scenic views and enchantingly cool places. The world-famous Banaue Rice
                Terraces in the province of Ifugao is considered as the "Eight Wonder of the World". 
                This structure of about 2000 to 6000 years old is a United Nations Organization for 
                Education, Science and Culture (UNESCO) World Heritage Site. Other tourist attractions
                of the region include the Sumaguing Cave in Sagada and the mummy caves in Benguet and
                Mt. Province. Mount Pulag Protected Landscape is the highest mountain in Luzon.
            </p>
        </section>

        {/* BIOPHYSICAL PROFILE */}
        <div  className="relative flex flex-col items-center justify-center space-y-6 bg-repeat-x bg-contain"
        style={{ backgroundImage: "url('src/assets/Biophysical-images/bg.png')" }} >
            <h1 className="text-5xl pt-10 pb-8 font-bold text-white">BIOPHYSICAL PROFILE</h1>
 
            <div className="flex flex-col items-center mt-6 space-y-8">
                
                <div className="flex flex-col md:flex-row items-center gap-6 w-full pr-25 pl-25">
                    <p className="text-lg text-justify flex-1 pr-15">
                    <span className="text-2xl font-semibold">
                    Geographical Location, Land Area and Political Subdivision.
                    </span>
                    <br></br>Cordillera Administrative Region is the only landlocked region in the
                    Philippines, located in the mountain ranges of the north central part of
                    Luzon. It is bounded on the north by the province of Cagayan, on the East
                    by Isabela and Nueva Viscaya, on the South by Pangasinan and on the West
                    by La Union, Ilocos Sur and Ilocos Norte.
                    </p>
                    <div className="flex flex-col items-center">
                    <img
                        src="src/assets/Biophysical-images/Anguib Beach Cagayan.png"
                        alt="Anguib Beach Cagayan"
                        className="w-70 h-50 object-cover rounded-lg shadow"
                    />
                    <p className="text-sm mt-2">Anguib Beach Cagayan</p>
                    </div>
                </div>

                {/* Row 2: 4 Images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-13">
                    <div className="flex flex-col items-center">
                    <img
                        src="src/assets/Biophysical-images/Enchanted Cave Pangasinan.png"
                        alt="Enchanted Cave Pangasinan"
                        className="w-70 h-50 object-cover rounded-lg shadow"
                    />
                    <p className="text-sm mt-2">Enchanted Cave Pangasinan</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <img
                        src="src/assets/Biophysical-images/Bangui Windmills Ilocos Norte.png"
                        alt="Bangui Windmills Ilocos Norte"
                        className="w-70 h-50 object-cover rounded-lg shadow"
                    />
                    <p className="text-sm mt-2">Bangui Windmills Ilocos Norte</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <img
                        src="src/assets/Biophysical-images/Mt. Malusong Summit Nueva Viscaya.png"
                        alt="Mt. Malusong Summit Nueva Viscaya"
                        className="w-70 h-50 object-cover rounded-lg shadow"
                    />
                    <p className="text-sm mt-2">Mt. Malusong Summit Nueva Viscaya</p>
                    </div>
                    <div className="flex flex-col items-center">
                    <img
                        src="src/assets/Biophysical-images/Calle Crisologo Ilocos Sur.png"
                        alt="Calle Crisologo Ilocos Sur"
                        className="w-70 h-50 object-cover rounded-lg shadow"
                    />
                    <p className="text-sm mt-2">Calle Crisologo Ilocos Sur</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center pl-25 pr-25 pb-10">
                <p className="flex text-xl text-justify pb-5">
                    It is politically subdivided into 77 municipalities and 1,176 barangays that makes up to 6.6 percent of the total land area of
                    the Philippines. The total area of the region of about 1,865,454 hectares based on the approved cadastral boundary map. The 
                    Alienable and Disposable lands is 15.05% of the total land area while 84.95% is forestland. Mountain Province has the least 
                    area coverage with a total of 231,486 hectares. The chartered city of Baguio is less than 1% of the total area of the region.
                </p>
                <Link to="/biophysical">
                    <button className="px-10 py-2 mt-4 rounded-lg bg-blue-600 text-white cursor-pointer hover:scale-110 transition">
                        See More
                    </button>
                </Link>
            </div>
        </div>

        {/* DENR RESOURCES */}
        <section>
            <div className="flex flex-row items-center justify-center space-x-6 pl-20 pr-15"> 
                <h1 className="text-5xl font-bold">DENR RESOURCES</h1>
                    <p className="text-xl text-justify">
                        The Cordillera Region is very rich in natural resources. It is especially famed for its huge gold
                        deposits, pure stands of pine forest, and rich soils and water sources that have enabled its people
                        to sustain agriculture on mountainside rice terraces.
                    </p>
            </div>
            {/* Land Resources */}
            <div className="flex flex-col space-y-6 py-12 pl-20 pr-15">
                <h2 className="text-3xl">Land Resources</h2>
                <article>
                    <h3 className="text-2xl">Land Classification</h3>
                    <p className="text-xl">
                        Table 7 presents that the Cordillera Administrative Region is classified as fifty-five percent 
                        (55%) forestland and forty-five percent (45%) alienable and disposable (A & D) lands.
                    </p>
                </article>
                <article>
                <h3 className="text-2xl">Land Use</h3>
                <p className="text-xl">
                    Table 8 categorizes the land in the region into uses following a land classification system 
                    based on land use suitability analysis.
                </p>
                </article>
            </div>
            {/* Water Resources */}
            <div className="flex flex-col space-y-6 pl-20 pr-15">
                <h2 className="text-3xl">Water Resources</h2>
                <h3 className="text-2xl">Major River Basins</h3>
                <p className="text-xl text-justify">
                There are four (4) major river basins covering the region namely: Cagayan River Basin, Apayao-Abulug 
                River Basin, Abra Riverbasin and Agno River basin. It is home to 13 major watersheds,
                playing a key role in maintaining ecological-balance in Northern Philippines.Most of the major 
                river basins drain to Regions 1 and 2 that serves as the major sources of water for domestic,
                agricultural, power generation and industrial needs.
                </p>
                <div className="flex gap-4 mt-4">
                    <img src="src/assets/Water-resources/cagayan-river-basin.png" alt="Cagayan River Basin" className="w-[200px]" />
                    <img src="src/assets/Water-resources/abra-river-basin.png" alt="Abra River Basin" className="w-[200px]" />
                    <img src="src/assets/Water-resources/agno-river-basin.png" alt="Agno River Basin" className="w-[200px]" />
                    <img src="src/assets/Water-resources/abulog-river-basin.png" alt="Abulog River Basin" className="w-[200px]" />
                </div>
            </div>
            {/* Watershed */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12">
                <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg max-w-md">
                    <h1 className="text-3xl font-bold mb-4">Watersheds</h1>
                    <p className="text-lg leading-relaxed">
                        CAR serves as the watershed of North Luzon. The region cradles 13
                        watersheds which have been affirmed to have enormous water-bearing
                        capacity. These watersheds make CAR a major contributor to the Luzon
                        Power Grid and are also a source of irrigation for the region’s
                        agricultural lands. It is also a source of water for domestic
                        consumption, agriculture and industrial needs of the region.
                    </p>
                </div>
            </div>
            {/* Biodiversity */}
            <div className="flex flex-col space-y-8 pl-20 pr-15">
                <h1 className="text-3xl">Biodiversity (Flora / Fauna)</h1>
                <p className="text-xl text-justify">
                    The Philippines is a treasure trove of biodiversity or the variety of
                    life on earth. It is believed to harbor more diversity of life than
                    any other country on earth on a per hectare basis. It is in fact one
                    of the 17 megadiverse countries which host 70–80% of the world’s
                    biodiversity. Yet, Philippine biodiversity is alarmingly endangered,
                    making it a biodiversity hotspot as well.
                </p>
                <p className="text-xl text-justify">
                    The Cordillera Administrative Region is not spared from this
                    situation. Four initial protected areas are found in the region
                    namely: Cassamata Hill National Park, Mt. Pulag National Park,
                    Balbalasang-Balbalan National Park, and Mt. Data National Park.
                </p>
                {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Biodiversity-images/cassamata.png" alt="Cassamata Hill National Park" className="w-48 h-32 object-cover rounded-lg shadow-lg"/>
                            <p className="mt-2 text-sm">Cassamata Hill National Park</p>
                         </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Biodiversity-images/mt-pulag.png" alt="Mt. Pulag National Park" className="w-48 h-32 object-cover rounded-lg shadow-lg" />
                            <p className="mt-2 text-sm">Mt. Pulag National Park</p>
                         </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Biodiversity-images/balbalasang.png" alt="Balbalasang-Balbalan National Park" className="w-48 h-32 object-cover rounded-lg shadow-lg"/>
                            <p className="mt-2 text-sm">Balbalasang Balbalan National Park</p>
                         </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Biodiversity-images/mt-data.png" alt="Mt. Data National Park" className="w-48 h-32 object-cover rounded-lg shadow-lg" />
                            <p className="mt-2 text-sm">Mt. Data National Park</p>
                        </div>
                    </div>
                <div className="border-2 border-blue-800 p-6 rounded-lg text-center">
                    <p className="text-lg text-justify">
                        CAR’s Biodiversity is constantly threatened with undue pressure from
                        human activities such as timber poaching and forest lands conversion
                        to agricultural use, among others, that are inimical to the
                        intrinsic requirement for biodiversity and its sustainable
                        existence. The abundance, distribution and degree of threat to which
                        these resources are exposed calls for a rapid and effective response
                        to accelerate the coverage of conservation efforts in the region.
                    </p>
                </div>
            </div>
        </section>

        {/* SOCIO-CULTURAL and ECONOMIC PROFILE */}
        <section>
            <div className="flex flex-col pl-20 pr-15">
                <h1 className="text-5xl font-bold text-center"> SOCIO-CULTURAL AND ECONOMIC PROFILE </h1>
                <div className="space-y-3 text-lg text-justify">
                    <h2 className="text-3xl">Demography</h2>
                    <h3 className="text-xl font-semibold">Population</h3>
                    <p className="text-xl text-justify">
                        The population of the region as of August 1, 2015 was 1,718,444
                        based on the 2015 Census of Population (POPCEN 2015). It is higher
                        by 105,624 compared with the population of 1,612,820 in 2010 with an
                        annual growth rate of 1.21 at present.
                    </p>
                    <h3 className="text-xl font-semibold">Income Class</h3>
                    <p  className="text-xl text-justify">
                        Income class of the provinces in the region is determined based on
                        the Department of Finance, Department Order No. 23-08. Benguet belongs 
                        to the 2nd class province; Abra, Apayao and Ifugao
                        are 3rd income class provinces while Kalinga and Mt. Province belong
                        to the 4th income class provinces.
                    </p>
                    <div className="flex justify-center">
                        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer">
                        Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <div className="w-full bg-green-800 text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Left: Address */}
                <div className="text-center md:text-left space-y-2">
                    <p className="text-lg font-semibold">DENR Compound, Gibraltar Rd, <br></br>Baguio, Benguet</p>
                </div>
                {/* Right: Directory */}
                <div className="text-center md:text-right space-y-2 mt-6 md:mt-0">
                <h3 className="font-semibold">Directory</h3>
                <ul className="space-y-1">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                {/* Social Icons */}
                <div className="flex justify-center md:justify-end space-x-4 mt-3 text-xl">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-times"></i></a>
                </div>
                </div>
            </div>
            {/* Bottom copyright */}
            <div className="text-center text-sm text-white mt-6">
                © 2025 Kotl. All rights reserved
            </div>
        </div>

        </>
            }
        />

        <Route path="/biophysical" element={<BiophysicalProfile/>} />
        </Routes>
        </BrowserRouter>
    );
};
export default App;