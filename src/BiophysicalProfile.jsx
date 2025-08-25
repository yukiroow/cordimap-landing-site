const BiophysicalProfile = ({ onClose }) => {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:mx-16">
            <div className="min-h-screen w-full bg-white text-gray-900 py-8 sm:py-12">
                {/* Title */}
                <div className="relative flex items-center mb-12 sm:mb-20 w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-blue-900 text-center w-full">
                        BIOPHYSICAL PROFILE
                    </h1>
                </div>

                {/* Geographical Location */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Geographical Location, Land Area, and Political
                        Subdivision
                    </h2>

                    <div className="flex flex-col lg:flex-row items-start gap-6">
                        {/* Text */}
                        <p className="text-base sm:text-lg text-justify leading-relaxed flex-1">
                            The Cordillera Administrative Region (CAR) is the
                            only landlocked region in the Philippines, situated
                            in the rugged mountain ranges of north-central
                            Luzon. Its strategic location in the Cordillera
                            mountains gives it a unique geography characterized
                            by high elevations, rolling terrains, and river
                            valleys. The region is bordered on the north by the
                            province of Cagayan, on the east by Isabela and
                            Nueva Vizcaya, on the south by Pangasinan, and on
                            the west by La Union, Ilocos Sur, and Ilocos Norte.
                            This placement makes CAR a vital link between the
                            Cagayan Valley and the Ilocos Region. Because of its
                            mountainous terrain, it is home to rich watersheds,
                            vast forest reserves, and scenic landscapes that
                            play a significant role in the country’s water and
                            energy resources.
                        </p>

                        {/* Image */}
                        <div className="flex flex-col items-center w-full lg:w-1/3">
                            <img
                                src="src/assets/Biophysical-images/anguib.png"
                                alt="Anguib Beach Cagayan"
                                className="w-full max-w-sm object-cover rounded-lg"
                            />
                            <p className="mt-2 text-sm font-medium text-center">
                                Anguib Beach Cagayan
                            </p>
                        </div>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                        {[
                            {
                                src: "src/assets/Biophysical-images/enchanted.png",
                                label: "Enchanted Cave Pangasinan",
                            },
                            {
                                src: "src/assets/Biophysical-images/bangui.png",
                                label: "Bangui Windmills Ilocos Norte",
                            },
                            {
                                src: "src/assets/Biophysical-images/malusong.png",
                                label: "Mt. Malusong Summit Nueva Viscaya",
                            },
                            {
                                src: "src/assets/Biophysical-images/calle.png",
                                label: "Calle Crisologo Ilocos Sur",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <p className="mt-2 text-sm font-medium text-center">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Accessibility */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Accessibility
                    </h2>
                    <p className="text-base sm:text-lg text-justify leading-relaxed">
                        Cordillera Administrative Region is the only landlocked
                        region in the Philippines, located in the mountain
                        ranges of the north central part of Luzon. It is bounded
                        on the north by the province of Cagayan, on the East by
                        Isabela and Nueva Viscaya, on the South by Pangasinan
                        and on the West by La Union, Ilocos Sur and Ilocos
                        Norte.
                    </p>
                </section>

                {/* Slope */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Slope
                    </h2>
                    <p className="text-base sm:text-lg text-justify leading-relaxed">
                        Being dubbed as the "Watershed Cradle of the North", the
                        Cordillera has a mountainous topography characterized by
                        towering peaks, plateaus and intermittent patches of
                        valleys. About 80% of its area is above 18% slope
                        ranging from gently sloping to very steep slopes.
                    </p>
                </section>

                {/* Elevation */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Elevation
                    </h2>
                    <p className="text-base sm:text-lg text-justify leading-relaxed">
                        The region is predominantly characterized by high
                        elevation terrain. It has over a hundred peaks, ten of
                        which are among the highest in the country. About 33% of
                        the region’s table land lies 1,000 meters or more above
                        sea level; this is predominant in the provinces of
                        Benguet and Mt. Province. This generally gives the cool
                        temperate climate of these provinces. Only 40% of its
                        lowland areas are on elevations less than 500 meters
                        above sea level. It has 239 large and small mountains
                        which include Mt. Pulag, the third highest in the
                        country having an elevation of 2,922 meters above sea
                        level.
                    </p>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                        {[
                            {
                                src: "src/assets/Biophysical-images/mt-pulag.jpg",
                                label: "Mt. Pulag",
                            },
                            {
                                src: "src/assets/Biophysical-images/baguio-city.jpg",
                                label: "Baguio City",
                            },
                            {
                                src: "src/assets/Biophysical-images/banaue.jpg",
                                label: "Banaue Rice Terraces",
                            },
                            {
                                src: "src/assets/Biophysical-images/sungang.jpg",
                                label: "Sungang View Point",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <p className="mt-2 text-sm font-medium text-center">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seismicity */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Seismicity
                    </h2>
                    <p className="text-base sm:text-lg text-justify leading-relaxed">
                        CAR lies in a seismically active region of the
                        Philippine archipelago making human habitation in
                        certain areas vulnerable to earthquake hazards. The
                        region attributes its seismicity to the active faults
                        along the branches of the northern segments of the
                        Philippine Fault Zone such as the Digdig Fault and the
                        active subduction along the Manila Trench. The
                        devastating earthquake of July 1990 was believed to have
                        originated from the Digdig Fault.
                    </p>
                </section>

                {/* Climate and Weather */}
                <section className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
                        Climate and Weather
                    </h2>
                    <p className="text-base sm:text-lg text-justify leading-relaxed">
                        The region is known for its very cool climate which is
                        mainly due to its high mean elevation. It is governed by
                        two (2) climatic type where Type I (red) covers about
                        64% and Type III (white) covers 33% of the total area.
                        Type I is characterized by two (2) pronounced seasons:
                        dry season from November to April and wet season for the
                        rest of the year. The provinces that fall under this
                        type are Benguet including Baguio City; eastern part of
                        Abra, Ifugao and Mountain Province. Type III has no
                        pronounced maximum rain period with a short dry season
                        lasting only from one to three months.
                    </p>
                </section>

                {/* See Less Button */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={onClose}
                        className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-10 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition"
                    >
                        See Less
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BiophysicalProfile;
