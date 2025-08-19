const BiophysicalProfile = () => {
    return (
        <>
        {/* BIOPHYSICAL PROFILE */}
        <div className="flex flex-col items-center justify-center space-y-6 mt-10">
            <h1 className="text-5xl font-bold">BIOPHYSICAL PROFILE</h1>
            <div className="flex flex-col space-y-6 py-8 pl-20 pr-15 w-full">
                <div className="flex flex-col">
                    <h2 className="text-3xl">Geographical Location, Land Area, and Political Subdivision</h2>
                    <p className="text-xl text-justify">
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
                    <p className="text-xl text-justify">
                        It is politically subdivided into 77 municipalities and 1,176 barangays that makes up to 6.6 percent of the total land area of
                        the Philippines. The total area of the region of about 1,865,454 hectares based on the approved cadastral boundary map. The 
                        Alienable and Disposable lands is 15.05% of the total land area while 84.95% is forestland. Mountain Province has the least 
                        area coverage with a total of 231,486 hectares. The chartered city of Baguio is less than 1% of the total area of the region.
                    </p>
                </div> 
            </div>
        </div>

        {/* ACCESSIBILITY */}
        <div className="flex flex-col space-y-6 py-8 pl-20 pr-15">
            <h1 className="text-3xl">Accessibilty</h1>
            <p className="text-xl text-justify">
                Cordillera Administrative Region is the only landlocked region in the Philippines,
                located in the mountain ranges of the north central part of Luzon. It is bounded on 
                the north by the province of Cagayan, on the East by Isabela and Nueva Viscaya, on 
                the South by Pangasinan and on the West by La Union, Ilocos Sur and Ilocos Norte.
            </p>
        </div>

        {/* SLOPE */}
        <div className="flex flex-col space-y-6 py-8 pl-20 pr-15">
            <h1 className="text-3xl">Slope</h1>
            <p className="text-xl text-justify">
                Being dubbed as the "Watershed Cradle of the North", the Cordillera has a mountainous 
                topography characterized by towering peaks, plateaus and intermittent patches of valleys. 
                About 80% of its area is above 18% slope ranging from gently sloping to very steep slopes.
            </p>
            <div className="mt-6">
                <img src="src/assets/Cordillera Slope Diagram.png" alt="Cordillera slope diagram" className="w-[600px] rounded-lg shadow-lg"/>
            </div>
        </div>

        {/* ELEVATION */}
        <div className="flex flex-col space-y-6 py-8 pl-20 pr-15">
            <h1 className="text-3xl">Elevation</h1>
            <p className="text-xl text-justify">
                The region is predominantly characterized by high elevation terrain. It has over a hundred 
                peaks, ten of which are among the highest in the country. About 33% of the region’s table 
                land lies 1,000 meters or more above sea level; this is predominant in the provinces of 
                Benguet and Mt. Province. This generally gives the cool temperate climate of these provinces. 
                Only 40% of its lowland areas are on elevations less than 500 meters above sea level. 
                It has 239 large and small mountains which include Mt. Pulag, the third highest in the 
                country having an elevation of 2,922 meters above sea level.
            </p>
            <div className="flex gap-6 mt-6">
                <div className="flex flex-col justify-center items-center">
                    <img src="src/assets/Mt Pulag.png" alt="Mt. Pulag" className="w-64 h-40 rounded-lg shadow-lg" />
                    <p className="mt-2 text-sm">Mt. Pulag</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="src/assets/Baguio City.png" alt="Baguio City" className="w-64 h-40 rounded-lg shadow-lg" />
                    <p className="mt-2 text-sm">Baguio City</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="src/assets/Blue Soil Hills.png" alt="Blue Soil Hills" className="w-64 h-40 rounded-lg shadow-lg" />
                    <p className="mt-2 text-sm">Blue Soil Hills</p>
                </div>
            </div>
        </div>

        {/* GEOLOGY */}
        <div className="flex flex-col space-y-6 py-8 pl-20 pr-15">
            <h1 className="text-3xl">Geology</h1>
            <p className="text-xl text-justify">
                Luzon is traversed by the Central Cordillera and Northern Sierra Madre Mountain ranges. 
                Mountain ranges are composed of uplifted basalts and spilites and Jurassic and Miocene 
                marine sediments. In addition, Tertiary volcanic and metamorphosed basement units are 
                also present. Sedimentary basins between uplifts make up the remainder of Luzon.
            </p>
        </div>

        {/* SEISMICITY */}
        <div className="flex flex-col space-y-6 py-8 pl-20 pr-15">
            <h1 className="text-3xl">Seismicity</h1>
            <p className="text-xl text-justify">
                CAR lies in a seismically active region of the Philippine archipelago making human 
                habitation in certain areas vulnerable to earthquake hazards. The region attributes its 
                seismicity to the active faults along the branches of the northern segments of the Philippine 
                Fault Zone such as the Digdig Fault and the active subduction along the Manila Trench. The 
                devastating earthquake of July 1990 was believed to have originated from the Digdig Fault.
            </p>
        </div>

        {/*CLIMATE AND WEATHER*/}
        <div className="flex flex-col space-y-6 py-8 pl-20 pr-15">
            <h1 className="text-3xl">Climate and Weather</h1>
            <p className="text-xl text-justify">
                The region is known for its very cool climate which is mainly due to its high mean elevation. 
                It is governed by two (2) climatic type where Type I (red) covers about 64% and Type III (white) 
                covers 33% of the total area.Type I is characterized by two (2) pronounced seasons: dry season 
                from November to April and wet season for the rest of the year.The provinces that fall under 
                this type are Benguet including Baguio City; eastern part of Abra, Ifugao and Mountain Province.
                Type III has no pronounced maximum rain period with a short dry season lasting only from one to 
                three months.
            </p>
        </div>
        </>
    );
};
export default BiophysicalProfile;