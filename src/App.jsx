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
        </>
    );
};

export default App;