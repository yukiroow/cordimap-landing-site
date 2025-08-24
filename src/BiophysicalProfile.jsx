import { Phone, Mail, Facebook } from "lucide-react";

const BiophysicalProfile = () => {
    return (
        <div>
            <div className="mt-8 mx-16">
            <div className="min-h-screen w-full bg-white text-gray-900 px-8 py-12">
                {/* Title */}
                <div className="relative flex items-center mb-20 w-full">
                    <button className="btn btn-circle absolute left-0 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <h1 className="text-5xl font-extrabold tracking-wide text-blue-900 text-center w-full">
                        BIOPHYSICAL PROFILE
                    </h1>
                </div>

                {/* Geographical Location */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Geographical Location, Land Area, and Political Subdivision
                    </h2>
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                        {/* Text on the left */}
                        <p className="text-lg text-justify leading-relaxed flex-1">
                            The Cordillera Administrative Region (CAR) is the only landlocked region in the Philippines, 
                            situated in the rugged mountain ranges of north-central Luzon. Its strategic location in the Cordillera 
                            mountains gives it a unique geography characterized by high elevations, rolling terrains, and river valleys. 
                            The region is bordered on the north by the province of Cagayan, on the east by Isabela and Nueva Vizcaya, on the 
                            south by Pangasinan, and on the west by La Union, Ilocos Sur, and Ilocos Norte. This placement makes CAR a vital link 
                            between the Cagayan Valley and the Ilocos Region. Because of its mountainous terrain, it is home to rich watersheds, 
                            vast forest reserves, and scenic landscapes that play a significant role in the country’s water and energy resources.
                        </p>

                        {/* Image aligned to 4th grid column */}
                        <div className="flex flex-col items-center w-full lg:w-1/4 ml-auto">
                            <img
                                src="src/assets/Biophysical-images/anguib.png"
                                alt="Anguib Beach Cagayan"
                                className="w-80 object-cover rounded-lg"
                            />
                            <p className="mt-2 text-sm font-medium text-center">
                                Anguib Beach Cagayan
                            </p>
                        </div>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-8">
                        {[
                            { src: "src/assets/Biophysical-images/enchanted.png", label: "Enchanted Cave Pangasinan" },
                            { src: "src/assets/Biophysical-images/bangui.png", label: "Bangui Windmills Ilocos Norte" },
                            { src: "src/assets/Biophysical-images/malusong.png", label: "Mt. Malusong Summit Nueva Viscaya" },
                            { src: "src/assets/Biophysical-images/calle.png", label: "Calle Crisologo Ilocos Sur" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-100 object-cover rounded-lg"
                                />
                                <p className="mt-2 text-sm font-medium text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Accessibility */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Accessibility
                    </h2>
                    <p className="text-lg text-justify leading-relaxed">
                        Cordillera Administrative Region is the only landlocked region in the
                        Philippines, located in the mountain ranges of the north central part
                        of Luzon. It is bounded on the north by the province of Cagayan, on
                        the East by Isabela and Nueva Viscaya, on the South by Pangasinan and
                        on the West by La Union, Ilocos Sur and Ilocos Norte.
                    </p>
                </section>

                {/* Slope */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Slope
                    </h2>
                    <p className="text-lg text-justify leading-relaxed">
                        Being dubbed as the "Watershed Cradle of the North", the Cordillera
                        has a mountainous topography characterized by towering peaks, plateaus
                        and intermittent patches of valleys. About 80% of its area is above
                        18% slope ranging from gently sloping to very steep slopes.
                    </p>
                </section>

                {/* Elevation */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Elevation
                    </h2>
                    <p className="text-lg text-justify leading-relaxed">
                        The region is predominantly characterized by high elevation terrain. It has over a hundred peaks,
                        ten of which are among the highest in the country. About 33% of the region’s table land lies 1,000
                        meters or more above sea level; this is predominant in the provinces of Benguet and Mt. Province. This
                        generally gives the cool temperate climate of these provinces. Only 40% of its lowland areas are on elevations
                        less than 500 meters above sea level. It has 239 large and small mountains which include Mt. Pulag, the third
                        highest in the country having an elevation of 2,922 meters above sea level.
                    </p>
                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-8">
                        {[
                            { src: "src/assets/Biophysical-images/mt-pulag.jpg", label: "Mt. Pulag" },
                            { src: "src/assets/Biophysical-images/baguio-city.jpg", label: "Baguio City" },
                            { src: "src/assets/Biophysical-images/banaue.jpg", label: "Banaue Rice Terraces" },
                            { src: "src/assets/Biophysical-images/sungang.jpg", label: "Sungang View Point" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-100 h-60 object-cover rounded-lg"
                                />
                                <p className="mt-2 text-sm font-medium text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seismicity */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Seismicity
                    </h2>
                    <p className="text-lg text-justify leading-relaxed">
                        CAR lies in a seismically active region of the Philippine archipelago making human habitation in certain areas vulnerable to earthquake hazards.
                        The region attributes its seismicity to the active faults along the branches of the northern segments of the Philippine Fault Zone such as the Digdig
                        Fault and the active subduction along the Manila Trench. The devastating earthquake of July 1990 was believed to have originated from the Digdig Fault.
                    </p>
                </section>

                {/* Climate and Weather */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Climate and Weather
                    </h2>
                    <p className="text-lg text-justify leading-relaxed">
                        The region is known for its very cool climate which is mainly due to its high mean elevation. It is governed by two (2) climatic type where Type I (red) covers
                        about 64% and Type III (white) covers 33% of the total area. Type I is characterized by two (2) pronounced seasons: dry season from November to April and wet season
                        for the rest of the year.The provinces that fall under this type are Benguet including Baguio City; eastern part of Abra, Ifugao and Mountain Province. Type III has
                        no pronounced maximum rain period with a short dry season lasting only from one to three months.
                    </p>
                </section>  
            </div>
            </div>
            
        {/* FOOTER */}
      <div className="w-full">
        <div className="bg-green-700 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 p-3">
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
                    <span>DENR-CAR</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full bg-blue-900 text-white py-3">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-m font-medium">
              © Copyright @ 2025 Kotl. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiophysicalProfile;