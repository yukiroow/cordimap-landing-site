const BiophysicalProfile = () => {
  return (
    <div className="mt-8 mx-13">
    <div className="min-h-screen w-full bg-white text-gray-900 px-8 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide text-blue-900">
          BIOPHYSICAL PROFILE
        </h1>
      </div>

      {/* Geographical Location */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold border-l-4 border-blue-600 pl-4 mb-4">
          Geographical Location, Land Area, and Political Subdivision
        </h2>
        <p className="text-lg text-justify leading-relaxed">
          Cordillera Administrative Region is the only landlocked region in the
          Philippines, located in the mountain ranges of the north central part
          of Luzon. It is bounded on the north by the province of Cagayan, on
          the East by Isabela and Nueva Viscaya, on the South by Pangasinan and
          on the West by La Union, Ilocos Sur and Ilocos Norte.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {[
            { src: "./assets/Biophysical-images/anguib.png", label: "Anguib Beach Cagayan" },
            { src: "assets/Biophysical-images/enchanted.png", label: "Enchanted Cave Pangasinan" },
            { src: "assets/Biophysical-images/bangui.png", label: "Bangui Windmills Ilocos Norte" },
            { src: "assets/Biophysical-images/malusong.png", label: "Mt. Malusong Summit Nueva Viscaya" },
            { src: "assets/Biophysical-images/calle.png", label: "Calle Crisologo Ilocos Sur" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition p-3"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-52 h-36 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-justify leading-relaxed mt-6">
          It is politically subdivided into 77 municipalities and 1,176
          barangays that makes up to 6.6 percent of the total land area of the
          Philippines. The total area of the region of about 1,865,454 hectares
          based on the approved cadastral boundary map. The Alienable and
          Disposable lands is 15.05% of the total land area while 84.95% is
          forestland. Mountain Province has the least area coverage with a total
          of 231,486 hectares. The chartered city of Baguio is less than 1% of
          the total area of the region.
        </p>
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
        <div className="mt-6 flex justify-center">
          <img
            src="assets/Biophysical-images/Cordillera Slope Diagram.png"
            alt="Cordillera slope diagram"
            className="w-[600px] rounded-lg shadow-md"
          />
        </div>
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
        <div className="mt-6 flex justify-center">
          <img
            src="assets/Biophysical-images/Cordillera Slope Diagram.png"
            alt="Cordillera slope diagram"
            className="w-[600px] rounded-lg shadow-md"
          />
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
         about 64% and Type III (white) covers 33% of the total area.Type I is characterized by two (2) pronounced seasons: dry season from November to April and wet season 
         for the rest of the year.The provinces that fall under this type are Benguet including Baguio City; eastern part of Abra, Ifugao and Mountain Province. Type III has 
         no pronounced maximum rain period with a short dry season lasting only from one to three months.
        </p>
      </section>
    </div>
    </div>
  );
};

export default BiophysicalProfile;
