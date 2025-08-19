// Touch me

const App = () => {
    return (
        <>
        {/* LANDING PAGE */}
        <div className="flex flex-col items-center justify-center w-screen h-screen space-y-6">
            <h1 className="text-5xl">One Cordillera</h1>
            <h2 className="text-3xl">A Glimpse of the Mountainous Region</h2>
            <p className="text-xl">DENR - CAR <br></br>2025</p>
                <div className="flex gap-4 text-xl">
                    <button className="px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer">
                        Land Cover
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer">
                        Water Cover
                    </button>
                </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-5xl">ABOUT</h1>
            <div className="flex gap-6">
                <button className="">CAR</button>
                <button className="">Biophysical Profile</button>
                <button className="">DENR Resources</button>
                <button className="">Socio-Cultural and Economic Profile</button>
            </div>
        </div>
        {/* CAR */}
        <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-5xl">CORDILLERA ADMINISTRATIVE REGION</h1>
            <div className="flex gap-6">
                <img src="src/assets/Province of Benguet Logo.png" alt="Province of Benguet Logo" className="w-32 h-32" />
                <img src="src/assets/Province of Kalinga Logo.png" alt="Province of Kalinga Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Mountain Province Logo.png" alt="Mountain Province Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Province of Abra Logo.png" alt="Province of Abra Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Province of Apayao Logo.png" alt="Province of Apayao Logo" className="w-32 h-32 rounded-lg" />
                <img src="src/assets/Province of Ifugao Logo.png" alt="Province of Ifugao Logo" className="w-32 h-32 rounded-lg" />
            </div>
            <p className="text-xl">
                The Cordillera Administrative Region (CAR) was established on July 15, 1987
                through Executive Order No. 220, signed by then President Corazon Aquino.<br></br>
                The region consists of the provinces of Abra, Apayao, Benguet, Ifugao, Kalinga, and
                Mountain Province. Its regional center is the Chartered City of Baguio, officially
                known as the Summer Capital of the Philippines. <br></br>
                Cordillera is one of the prime tourist destinations in the Philippines,It has many
                spectacular scenic views and enchantingly cool places. The world-famous Banaue Rice
                Terraces in the province of Ifugao is considered as the "Eight Wonder of the World". 
                This structure of about 2000 to 6000 years old is a United Nations Organization for 
                Education, Science and Culture (UNESCO) World Heritage Site. Other tourist attractions
                of the region include the Sumaguing Cave in Sagada and the mummy caves in Benguet and
                Mt. Province. Mount Pulag Protected Landscape is the highest mountain in Luzon.
            </p>
        </div>

         {/* BIOPHYSICAL PROFILE */}
        <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-5xl">BIOPHYSICAL PROFILE</h1>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl">Geographical Location, Land Area and Political Subdivision</h2>
                    <p className="text-xl">
                        Cordillera Administrative Region is the only landlocked region in the Philippines,
                        located in the mountain ranges of the north central part of Luzon. It is bounded on 
                        the north by the province of Cagayan, on the East by Isabela and Nueva Viscaya, on 
                        the South by Pangasinan and on the West by La Union, Ilocos Sur and Ilocos Norte.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Anguib Beach Cagayan.png" alt="Anuib Beach Cagayan" className="w-64 h-48 rounded-lg" />
                            <p className="text-sm">Anguib Beach Cagayan</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Enchanted Cave Pangasinan.png" alt="Enchanted Cave Pangasinan" className="w-64 h-48 rounded-lg" />
                            <p className="text-sm">Enchanted Cave Pangasinan</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Bangui Windmills Ilocos Norte.png" alt="Bangui Windmills Ilocos Norte" className="w-64 h-48 rounded-lg" />
                            <p className="text-sm">Bangui Windmills Ilocos Norte</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Mt. Malusong Summit Nueva Viscaya.png" alt="Mt. Malusong Summit Nueva Viscaya" className="w-64 h-48 rounded-lg" />
                            <p className="text-sm">Mt. Malusong Summit Nueva Viscaya</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="src/assets/Calle Crisologo Ilocos Sur.png" alt="Calle Crisologo Ilocos Sur" className="w-64 h-48 rounded-lg" />
                            <p className="text-sm">Calle Crisologo Ilocos Sur</p>
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col items-center">
                    <p className="text-xl">
                        It is politically subdivided into 77 municipalities and 1,176 barangays that makes up to 6.6 percent of the total land area of
                        the Philippines. The total area of the region of about 1,865,454 hectares based on the approved cadastral boundary map. The 
                        Alienable and Disposable lands is 15.05% of the total land area while 84.95% is forestland. Mountain Province has the least 
                        area coverage with a total of 231,486 hectares. The chartered city of Baguio is less than 1% of the total area of the region.
                    </p>
                    <button className="px-4 py-2 mt-4 rounded-lg bg-blue-600 text-white cursor-pointer">
                        See More
                    </button>
                </div>
            </div>
        </div>

                {/* ACCESSIBILITY */}
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <h1 className="text-5xl">ACCESSIBILITY</h1>
            <p className="text-xl max-w-4xl text-center">
                Cordillera Administrative Region is the only landlocked region in the Philippines,
                located in the mountain ranges of the north central part of Luzon. It is bounded on 
                the north by the province of Cagayan, on the East by Isabela and Nueva Viscaya, on 
                the South by Pangasinan and on the West by La Union, Ilocos Sur and Ilocos Norte.
            </p>
        </div>

        {/* SLOPE */}
        <div className="flex flex-col items-center justify-center space-y-6 py-12 bg-slate-800 text-white">
            <h1 className="text-5xl">SLOPE</h1>
            <p className="text-xl max-w-4xl text-center">
                Being dubbed as the "Watershed Cradle of the North", the Cordillera has a mountainous 
                topography characterized by towering peaks, plateaus and intermittent patches of valleys. 
                About 80% of its area is above 18% slope ranging from gently sloping to very steep slopes.
            </p>
            <div className="mt-6">
                <img 
                  src="src/assets/Cordillera Slope Diagram.png" 
                  alt="Cordillera slope diagram" 
                  className="w-[600px] rounded-lg shadow-lg" 
                />
            </div>
        </div>

        {/* ELEVATION */}
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <h1 className="text-5xl">ELEVATION</h1>
            <p className="text-xl max-w-4xl text-center">
                The region is predominantly characterized by high elevation terrain. It has over a hundred 
                peaks, ten of which are among the highest in the country. About 33% of the region’s table 
                land lies 1,000 meters or more above sea level; this is predominant in the provinces of 
                Benguet and Mt. Province. This generally gives the cool temperate climate of these provinces. 
                Only 40% of its lowland areas are on elevations less than 500 meters above sea level. 
                It has 239 large and small mountains which include Mt. Pulag, the third highest in the 
                country having an elevation of 2,922 meters above sea level.
            </p>
            <div className="flex gap-6 mt-6">
                <div className="flex flex-col items-center">
                    <img src="src/assets/Mt Pulag.png" alt="Mt. Pulag" className="w-64 h-40 rounded-lg shadow-lg" />
                    <p className="mt-2 text-sm">Mt. Pulag</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="src/assets/Baguio City.png" alt="Baguio City" className="w-64 h-40 rounded-lg shadow-lg" />
                    <p className="mt-2 text-sm">Baguio City</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="src/assets/Blue Soil Hills.png" alt="Blue Soil Hills" className="w-64 h-40 rounded-lg shadow-lg" />
                    <p className="mt-2 text-sm">Blue Soil Hills</p>
                </div>
            </div>
        </div>

        {/* GEOLOGY */}
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <h1 className="text-5xl">GEOLOGY</h1>
            <p className="text-xl max-w-4xl text-center">
                Luzon is traversed by the Central Cordillera and Northern Sierra Madre Mountain ranges. 
                Mountain ranges are composed of uplifted basalts and spilites and Jurassic and Miocene 
                marine sediments. In addition, Tertiary volcanic and metamorphosed basement units are 
                also present. Sedimentary basins between uplifts make up the remainder of Luzon.
            </p>
        </div>

        {/* SEISMICITY */}
        <div className="flex flex-col items-center justify-center space-y-6 py-12 bg-slate-800 text-white">
            <h1 className="text-5xl">SEISMICITY</h1>
            <p className="text-xl max-w-4xl text-center">
                CAR lies in a seismically active region of the Philippine archipelago making human 
                habitation in certain areas vulnerable to earthquake hazards. The region attributes its 
                seismicity to the active faults along the branches of the northern segments of the Philippine 
                Fault Zone such as the Digdig Fault and the active subduction along the Manila Trench. The 
                devastating earthquake of July 1990 was believed to have originated from the Digdig Fault.
            </p>
      </div>

       {/*CLIMATE AND WEATHER*/}
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <h1 className="text-5xl">CLIMATE AND WEATHER</h1>
            <p className="text-xl max-w-4xl text-center">
                The region is known for its very cool climate which is mainly due to its high mean elevation. 
                It is governed by two (2) climatic type where Type I (red) covers about 64% and Type III (white) 
                covers 33% of the total area.Type I is characterized by two (2) pronounced seasons: dry season 
                from November to April and wet season for the rest of the year.The provinces that fall under 
                this type are Benguet including Baguio City; eastern part of Abra, Ifugao and Mountain Province.
                Type III has no pronounced maximum rain period with a short dry season lasting only from one to 
                three months.
            </p>
        </div>

        <section>
            <h1>DENR RESOURCES</h1>
                <p>
                The Cordillera Region is very rich in natural resources. It is especially famed for its huge gold
                deposits, pure stands of pine forest, and rich soils and water sources that have enabled its people
                to sustain agriculture on mountainside rice terraces.
                </p>
        </section>

         {/* LAND RESOURCES */}
      <section className="flex flex-col items-center justify-center space-y-6 py-12">
        <h2 className="text-3xl">Land Resources</h2>
        <article className="max-w-4xl text-center">
          <h3 className="text-2xl">Land Classification</h3>
          <p className="text-xl">
            Table 7 presents that the Cordillera Administrative Region is classified as fifty-five percent (55%) forestland and forty-five percent (45%) alienable and disposable (A & D) lands.
          </p>
        </article>
        <article className="max-w-4xl text-center">
          <h3 className="text-2xl">Land Use</h3>
          <p className="text-xl">
            Table 8 categorizes the land in the region into uses following a land classification system based on land use suitability analysis.
          </p>
        </article>
      </section>

         {/* WATER RESOURCES */}
      <section className="flex flex-col items-center justify-center space-y-6 py-12">
        <h2 className="text-3xl">Water Resources</h2>
        <h3 className="text-2xl">Major River Basins</h3>
        <p className="text-xl max-w-4xl text-center">
          There are four (4) major river basins covering the region namely: Cagayan River Basin, Apayao-Abulug River Basin, Abra Riverbasin and Agno River basin. It is home to 13 major watersheds,
          playing a key role in maintaining ecological-balance in Northern Philippines.Most of the major river basins drain to Regions 1 and 2 that serves as the major sources of water for domestic,
          agricultural, power generation and industrial needs.
        </p>
        <div className="flex gap-4 mt-4">
          <img src="src/assets/cagayan-river-basin.png" alt="Cagayan River Basin" className="w-[200px]" />
          <img src="src/assets/abra-river-basin.png" alt="Abra River Basin" className="w-[200px]" />
          <img src="src/assets/agno-river-basin.png" alt="Agno River Basin" className="w-[200px]" />
          <img src="src/assets/abulog-river-basin.png" alt="Abulog River Basin" className="w-[200px]" />
        </div>
      </section>

    {/* WATERSHEDS */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12">
        {/* Text box */}
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

  {/* BIODIVERSITY */}
      <div className="flex flex-col items-center justify-center space-y-8 py-12 bg-slate-900 text-white">
        <h1 className="text-4xl font-bold">Biodiversity (Flora / Fauna)</h1>

        {/* Main Text */}
        <p className="text-lg max-w-4xl text-center leading-relaxed">
          The Philippines is a treasure trove of biodiversity or the variety of
          life on earth. It is believed to harbor more diversity of life than
          any other country on earth on a per hectare basis. It is in fact one
          of the 17 megadiverse countries which host 70–80% of the world’s
          biodiversity. Yet, Philippine biodiversity is alarmingly endangered,
          making it a biodiversity hotspot as well.
        </p>
        <p className="text-lg max-w-4xl text-center leading-relaxed">
          The Cordillera Administrative Region is not spared from this
          situation. Four initial protected areas are found in the region
          namely: Cassamata Hill National Park, Mt. Pulag National Park,
          Balbalasang-Balbalan National Park, and Mt. Data National Park.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img
              src="src/assets/cassamata.png"
              alt="Cassamata Hill National Park"
              className="w-48 h-32 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-sm">Cassamata Hill National Park</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/mt-pulag.png"
              alt="Mt. Pulag National Park"
              className="w-48 h-32 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-sm">Mt. Pulag National Park</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/balbalasang.png"
              alt="Balbalasang-Balbalan National Park"
              className="w-48 h-32 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-sm">Balbalasang Balbalan National Park</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="src/assets/mt-data.png"
              alt="Mt. Data National Park"
              className="w-48 h-32 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-sm">Mt. Data National Park</p>
          </div>
        </div>

        {/* CAR’s Biodiversity description box */}
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg max-w-4xl text-center">
          <p className="text-lg leading-relaxed">
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

      {/* SOCIO-CULTURAL and ECONOMIC PROFILE */}
      <div className="bg-slate-900 text-white flex flex-col items-center justify-center py-12 px-6 space-y-10">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          SOCIO-CULTURAL and ECONOMIC PROFILE
        </h1>

        {/* Content */}
        <div className="max-w-4xl space-y-6 text-lg leading-relaxed">
          {/* Demography */}
          <h2 className="text-2xl font-semibold">Demography</h2>
          <h3 className="text-xl font-medium">Population</h3>
          <p>
            The population of the region as of August 1, 2015 was 1,718,444
            based on the 2015 Census of Population (POPCEN 2015). It is higher
            by 105,624 compared with the population of 1,612,820 in 2010 with an
            annual growth rate of 1.21 at present.
          </p>

          {/* Income Class */}
          <h3 className="text-xl font-medium">Income Class</h3>
          <p>
            Income class of the provinces in the region is determined based on
            the Department of Finance, Department Order No. 23-08.
          </p>
          <p>
            Benguet belongs to the 2nd class province; Abra, Apayao and Ifugao
            are 3rd income class provinces while Kalinga and Mt. Province belong
            to the 4th income class provinces.
          </p>

          {/* Learn More Button */}
          <div className="flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full bg-slate-800 py-8 mt-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            {/* Left: Address */}
            <div className="text-center md:text-left space-y-2">
              <p className="font-semibold">DENR Compound, Gibraltar</p>
              <p>Baguio, Benguet</p>
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
          <div className="text-center text-sm text-gray-400 mt-6">
            © 2025 Kotl. All rights reserved
          </div>
        </div>
      </div>
      </>
  );
};
export default App;