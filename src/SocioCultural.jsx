import {
    Users,
    TrendingUp,
    ComponentIcon,
    LibraryBig,
    Car,
    Podcast,
    PickaxeIcon,
    Binoculars,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Reveal = ({ delay = 0, children, className = "" }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={[
                "transition-all duration-700 ease-out will-change-transform",
                inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6",
                className,
            ].join(" ")}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const SocioCultural = ({ onClose }) => {
    return (
        <>
            <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
                {/* SOCIO CULTURAL AND ECONOMIC PROFILE */}
                <Reveal>
                    <div className="relative flex items-center w-full pt-6 sm:pt-8 mb-10 sm:mb-16">
                        <h1 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 tracking-wide">
                            SOCIO-CULTURAL AND ECONOMIC PROFILE
                        </h1>
                    </div>
                </Reveal>

                <div className="w-full max-w-5xl mx-auto">
                    <Reveal delay={80}>
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Demography
                        </h2>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <Users className="w-5 h-5 text-black-600" />
                                Population
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                The population of the region as of August 1,
                                2015 was 1,718,444 based on the 2015 Census of
                                Population (POPCEN 2015). It is higher by
                                105,624 compared with the population of
                                1,612,820 in 2010 with an annual growth rate of
                                1.21 at present.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={180}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-black-600" />
                                Income Class
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                Income class of the provinces in the region is
                                determined based on the Department of Finance,
                                Department Order No.23-08. <br />
                                <br />
                                Benguet belongs to the 2nd class province; Abra,
                                Apayao and Ifugao are 3rd income class provinces
                                while Kalinga and Mt. Province belong to the 4th
                                income class provinces.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={220}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <ComponentIcon className="w-5 h-5 text-black-600" />
                                Major Ethnic Tribes
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                The indigenous population of the Cordillera
                                region is collectively known as Igorots, meaning
                                “mountain people”. These groups are largely
                                swidden cultivators who depend on farming rice,
                                root crops, and vegetables.
                                (Indigenous-Peoples-in-the-Philippines.pdf).
                                <br /> <br />
                                There are twelve (12) ethno-linguistic groups in
                                the region, namely, Bontoc, Applais, Isnegs,
                                Kalingas, Balangaos, Kankanaey, Tingguian,
                                Ibaloi, Karaos, Iowaks, Kalanguyas and Ifugaos.
                                <br /> <br />
                                These groupings, while convenient, do not fully
                                reflect the real particularities and the extent
                                of diversity among the region's peoples. In
                                fact, most of the indigenous peoples identify
                                themselves primarily with specific communities
                                called ili (literally, home village, hometown,
                                or home territory). Each ili is a
                                self-identifying community with a specific
                                territory, which is its ancestral land. While
                                there are diverse types, an ili usually consists
                                of a closely-knit cluster of villages, or a core
                                village and its outlying hamlets, within a more
                                or less defined territory.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={260}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <LibraryBig className="w-5 h-5 text-black-600" />
                                Education
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                A highly trainable English speaking and educated
                                work force is easily available in the region.
                                Baguio City is known as the educational center
                                north of Manila, hosting world-class learning
                                institutions like the Philippine Military
                                Academy and Brent International School. <br />{" "}
                                <br />
                                Various colleges and universities offer
                                different fields catering to the needs of
                                industries. Likewise, technical and vocational
                                schools abound as a rich source of skilled
                                manpower.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <Car className="w-5 h-5 text-black-600" />
                                Transportation Services
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                Data on the extent and coverage of
                                transportation and communication networks of an
                                area are essential. The different modes of
                                transportation and channels and media
                                communication are vital in the economic, social,
                                and cultural lives of peoples and institutions
                                in the community. A well-developed
                                transportation system ensures fast and efficient
                                transfer of goods and services between traders,
                                households and other institutions within and
                                outside the geographical limits of the
                                community.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={340}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <Podcast className="w-5 h-5 text-black-600" />
                                Communication Services
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                Similarly, breakthroughs in the communication
                                system accelerates the flow of information. This
                                era of information technology enables a faster
                                access to and the dissemination of news, events,
                                and developments in the domestic and
                                international scene. Under this situation, the
                                citizenry becomes well-informed of events and
                                developments affecting their lives. <br />{" "}
                                <br />
                                In the area of broadband connection, internet
                                access has been made possible through the rise
                                in the number of internet providers like PLDT –
                                SMART and GLOBE among others. Notwithstanding
                                these accomplishments, interconnection issues
                                among telecommunication providers are yet to be
                                resolved.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={380}>
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Economic Structure
                        </h2>
                    </Reveal>

                    <Reveal delay={420}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <PickaxeIcon className="w-5 h-5 text-black-600" />
                                Mining Industry
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                Cordillera has abundant mineral reserves. These
                                include metallic ores such as gold, copper,
                                silver, zinc, and non-metallic minerals like
                                sand, gravel and sulfur. Mineral Reserves are
                                found in all provinces. However, mining is
                                concentrated in the province of Benguet. <br />{" "}
                                <br />
                                Growth of the region’s mining industry continues
                                to be hampered by problems such as persistent
                                anti-mining sentiments among some sectors and
                                the issue on unpaid LGU share from the proceeds
                                of mineral wealth development and utilization.
                                This notwithstanding, mining still continued to
                                contribute significantly to the region’s
                                economy.
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={460}>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold flex items-center gap-2">
                                <Binoculars className="w-5 h-5 text-black-600" />
                                Tourism Industry
                            </div>
                            <div className="collapse-content text-sm sm:text-base text-justify leading-relaxed">
                                The Cordillera region have much to offer than
                                just cool weather and some pine trees. Whether
                                its nature, culture, or just the thrill of
                                finding something new, it’s definitely worth
                                exploring, one province at a time. <br /> <br />
                                The region in itself is marvelous. Endowed with
                                naturally sculpted areas suited for eco-tourism,
                                the Cordillera provinces boast of caves,
                                underground rivers and waterfalls, many of which
                                remain unexplored. Wildlife sanctuaries, scenic
                                spots and recreational sites provide perfect
                                destinations for ecotourism.
                            </div>
                        </div>
                    </Reveal>

                    {/* GALLERY */}
                    <Reveal>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 mb-6 sm:mb-8">
                            Gallery
                        </h1>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="flex w-full justify-center mb-6 sm:mb-8 px-4 sm:px-6">
                            <div className="tabs tabs-boxed w-full sm:w-5/6 lg:w-4/5 max-w-6xl flex justify-center">
                                {/* Abra */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab"
                                    aria-label="Abra"
                                    defaultChecked
                                />
                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        <div
                                            id="abra1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\abra-river.JPG"
                                                alt="abra-river"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Abra River
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The most popular river among the
                                                numerous rivers crisscrossing
                                                the valleys of the province,
                                                being the biggest and longest.
                                                An ideal place for swimmers as
                                                well as those fond of fishing
                                                with spacious and clear water.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#abra3"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#abra2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="abra2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\boliney-hot-spring.JPG"
                                                alt="boliney-hot-spring"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Boliney Hot Spring
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located at Bani, Boliney, Abra.
                                                It can be reached by jeepneys
                                                after travelling 32 kms. The
                                                place is an ideal for swimmers
                                                who love taking a bath in hot
                                                and cold water.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#abra1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#abra3"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="abra3"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\abra-kaparkan-falls.JPG"
                                                alt="kaparkan-falls"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Kaparkan Falls
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Kaparkan Falls, also known as Mulawin 
                                                Falls, is a stunning multi-tiered 
                                                waterfall located in Tineg, Abra, 
                                                Philippines. Known for its natural 
                                                terraces resembling rice paddies, the 
                                                falls become beautiful during 
                                                the rainy season
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#abra2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#abra1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Apayao */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab mb-1"
                                    aria-label="Apayao"
                                />
                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        <div
                                            id="apayao1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\marag-rock-formation.jpg"
                                                alt="marag-rock-formation"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Marag Rock Formation
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located at Marag Valley, Luna,
                                                Apayao. Visitors experience
                                                thrill of climbing the rock
                                                formations and the relaxing view
                                                of Luna’s nature from the top of
                                                the rocks. This rock formation 
                                                is a historical site as it served 
                                                as a fortress for the locals.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao7"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="apayao2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\apayao-river.jpg"
                                                alt="apayao-river"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Apayao River
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The river is the longest river
                                                of Apayao stretching a distance
                                                of 180 kilometers traversing
                                                through all of the province’s
                                                municipalities except Conner.
                                                the I-Apayao’s conduct boat
                                                racing sports competitions
                                                during festivities in this
                                                mighty River.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao3"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="apayao3"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\lussok-caves.jpg"
                                                alt="lussok-caves"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Lussok Caves
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                This
                                                cave hides 7 spacious chambers
                                                each having a different tale to
                                                tell. The crystal clear
                                                underground river that runs
                                                through its chambers, passing
                                                through its opposite end and
                                                exiting through its gigantic
                                                entrance adds grandeur to its
                                                majestic gift of nature.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao4"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="apayao4"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\apayao-bayugao-falls.jpg"
                                                alt="bayugao-falls"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Bayugao Falls
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Bayugao Falls revealed itself as a 
                                                beautiful three-tiered cascade, 
                                                with natural pools at each level. 
                                                The sound of the rushing water 
                                                echoed through the area.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao3"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao5"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="apayao5"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\apayao-mt-sicapoo.png"
                                                alt="mt-sicapoo"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Mt. Sicapoo
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Mount Sicapoo is a prominent peak 
                                                in the Cordillera mountain range 
                                                of the Philippines, standing at 
                                                approximately 2,354 meters above 
                                                sea level. It is located in the 
                                                rovince of Apayao.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao4"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao6"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="apayao6"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\galolan-falls.jpg"
                                                alt="galolan-falls"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Gololan Falls
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                This beautiful falls with 3
                                                successive pools rising about
                                                30m high is hidden within the
                                                heart of Paco Valley, Lenneng,
                                                Kabugao. The drop-off point is
                                                around 45 minutes ride from
                                                Poblacion, plus another
                                                30-minute hike{" "}
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao5"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao7"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="apayao7"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\apayao-nagan-river.jpg"
                                                alt="nagan-river"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Nagan River
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The cleanest inland river in the
                                                Cordilleras and the 1st Runner
                                                Up During the Nation-wide Search
                                                for the Cleanest Inland Body of
                                                Water in 1998.{" "}
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#apayao6"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#apayao1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Benguet */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab mb-1"
                                    aria-label="Benguet"
                                />

                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        {/* Slide 1 */}
                                        <div
                                            id="benguet1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\mt-pulag.jpg"
                                                alt="mt-pulag"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Mt. Pulag National Park
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Second highest peak in the
                                                Philippines, next to Mt. Apo,
                                                towering at an altitude of 9,640
                                                feet above sea level. It is home
                                                to many highland flora and
                                                fauna, including the dwarf
                                                bamboo, which covers its bald
                                                peak.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#benguet5"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#benguet2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 2 */}
                                        <div
                                            id="benguet2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\benguet-farm.png"
                                                alt="northern-blossoms"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Northern Blossom
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Northern Blossom has a two-hectares 
                                                wide plantation. Northern Blossom is 
                                                located in Sayangan, Atok, Benguet. It 
                                                is approximately 1.5 hours away from 
                                                Baguio City.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#benguet1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#benguet3"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 3 */}
                                        <div
                                            id="benguet3"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\mt-purgatory.jpg"
                                                alt="mt-purgatory"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Mt. Purgatory
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located in Bokod, Benguet, it
                                                features hiking under Benguet
                                                Pine forests to mossy forests.
                                                It also offers beautiful
                                                landscapes and spectacular views
                                                of other mountains in Benguet.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#benguet2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#benguet4"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 4 */}
                                        <div
                                            id="benguet4"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\ambongdolan.jpg"
                                                alt="ambongdolan-caves"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Ambongdolan Caves
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located in in Tublay Benguet
                                                features spacious chambers and
                                                various speleothem/ speleogen
                                                formations. A unique waterfall
                                                flows from the ceiling in one
                                                chamber of Bingaongao Cave.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#benguet3"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#benguet5"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 5 */}
                                        <div
                                            id="benguet5"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\benguet-straberry-farm.png"
                                                alt="strawberry-farm"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Strawberry Farm
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Strawberries are famous in Baguio 
                                                and the surrounding La Trinidad 
                                                area of Benguet province because 
                                                the cool climate and high altitude 
                                                are ideal for growing strawberries, 
                                                which isn't possible in most other 
                                                parts of the Philippines.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#benguet4"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#benguet1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Ifugao */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab mb-1"
                                    aria-label="Ifugao"
                                />
                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        {/* Slide 1 */}
                                        <div
                                            id="ifugao1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/banaue-rice-terraces.jpg"
                                                alt="banaue-rice-terraces"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Banaue Rice Terraces
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Best seen at the viewpoint in
                                                Banaue, the rice terraces rise
                                                steeply from the base of the
                                                mountain range to a height of a
                                                few thousand feet. The viewpoint
                                                is a short 15-minute drive from
                                                the Banaue town center.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao10"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 2 */}
                                        <div
                                            id="ifugao2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/bangaan-rice-terraces.jpg"
                                                alt="bangaan-terraces"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Bangaan Rice Terraces
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Surrounded by scenic terraced rice 
                                                fields is a picturesque village 
                                                whose inhabitants continue to 
                                                preserve their traditional way of 
                                                life. Unfortunately, the indigenous 
                                                architectural assembly of traditional 
                                                Ifugao huts is undergoing a 
                                                transformation with the construction 
                                                of new houses using modern 
                                                materials and designs.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao3"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 3 */}
                                        <div
                                            id="ifugao3"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/batad-rice-terraces.jpg"
                                                alt="batad-rice-terraces"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Hapao Rice Terraces
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                This terrace cluster is one of
                                                the few stone-walled terraces of
                                                the province that date back to
                                                650 A.D. The stone walls protect
                                                the rice terraces from erosion
                                                caused by the meandering Hapao
                                                River.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao4"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 4 */}
                                        <div
                                            id="ifugao4"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/ifugao-hawang-village.jpg"
                                                alt="hiwang-village"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Hiwang Village
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Hiwang Village, located in Banaue, 
                                                Ifugao, Philippines, is an indigenous 
                                                community with a history spanning 
                                                approximately 250 years. The purpose of 
                                                the proprietors in building this village is to 
                                                preserve these Ifugao Native Houses 
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao3"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao5"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 5 */}
                                        <div
                                            id="ifugao5"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/ifugao-kiangan-shrine.jpg"
                                                alt="kiangan-shrine"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Kiangan Shrine
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The Kiangan National Shrine also known as the 
                                                Yamashita Shrine is a war memorial in Kiangan, 
                                                Ifugao, Philippines. This shrine commemorates 
                                                the bravery and sacrifices made during World War II.

                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao4"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao6"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 6 */}
                                        <div
                                            id="ifugao6"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/ifugao-tenogtog-falls.jpg"
                                                alt="tenogtog-falls"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Tenogtog Falls
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Tenogtog Falls is a natural waterfall 
                                                with three-tiered natural pools, each 
                                                about 12 meters apart, cascading 
                                                beautifully into one another amidst 
                                                lush greenery.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao5"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao7"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 7 */}
                                        <div
                                            id="ifugao7"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/tappiyah-waterfalls.jpg"
                                                alt="tappiyah-waterfalls"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Tappiyah Waterfalls
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                This spectacular waterfall drops
                                                to a natural swimming pool. A
                                                visit to Batad would not be
                                                complete without enjoying a dip
                                                in the cool and refreshing
                                                waters of the Tappiyah
                                                waterfall.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao6"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao8"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 8 */}
                                        <div
                                            id="ifugao8"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/bangaan-village.jpg"
                                                alt="bangaan-village"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Bangaan Village
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                It represents the typical native
                                                Ifugao village surrounded by
                                                terraces. It is a 40minute drive
                                                from Banaue town center and is
                                                also a walking distance from
                                                Ducligan Hot Springs.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao7"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao9"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 9 */}
                                        <div
                                            id="ifugao9"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/batad-village.jpg"
                                                alt="batad-rice-terraces"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Batad Village
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The village is at the center of
                                                the gigantic amphitheater rice
                                                terraces of Batad. It can be
                                                reached by a two (2) hours hike
                                                from the Banaue-Mayoyao road
                                                starting at the Batad junction.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao8"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao10"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 10 */}
                                        <div
                                            id="ifugao10"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/ifugao-ambuwaya-lake.jpg"
                                                alt="ambuwaya-lake"
                                                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Ambuwaya Lake
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Ambuwaya Lake is a serene 
                                                destination located in a quiet village 
                                                within the Kiangan municipality. The people of 
                                                Kiangan call the lake Ambuwayya because it is believed the small 
                                                body of water was once the habitation of a fierce crocodile
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#ifugao9"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#ifugao1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Kalinga */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab mb-1"
                                    aria-label="Kalinga"
                                />
                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        <div
                                            id="kalinga1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\chico-river.jpg"
                                                alt="chico-river"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Chico River
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                It is referred to as a "river of
                                                life" for the Kalinga people and is
                                                well known among development
                                                workers because of the Chico
                                                River Dam Project, an electric
                                                power generation project which
                                                local residents resisted for
                                                three decades before it was
                                                finally shelved in the 1980s.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#kalinga4"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#kalinga2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="kalinga2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\kalinga-patiking-tunnel.jpg"
                                                alt="patiking-tunnel"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Patiking Tunnel
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Patiking Tunnel is one of the century-old 
                                                artificial tunnels found in Barangay Dupag, 
                                                Tabuk City. It has boosted tourism activities 
                                                because of its importance to the community 
                                                and majestic view.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#kalinga1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#kalinga3"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="kalinga3"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\guilum.jpg"
                                                alt="guilum-canyon-falls"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Guilum Canyon Falls
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Considered one of the hidden
                                                gems of Tabuk City, it is a
                                                series of waterfalls and slides
                                                cascading into water sculpted
                                                rocks and stones that created
                                                natural pools, and descends down
                                                to meet the Chico River, it is
                                                located at Bagumbayan.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#kalinga2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#kalinga4"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            id="kalinga4"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\kalinga-malalao-hills.png"
                                                alt="malalao-hills"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Malalao Rolling Hills
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The Malalao hills form a rolling
                                                terrain of haycock hills –
                                                mounds of generally conical and
                                                almost symmetrical shape covered
                                                in green grass. The domes vary
                                                in sizes, these unique
                                                mound-shaped hills are scattered
                                                throughout the barangay of
                                                Malalao.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#kalinga3"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#kalinga1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mt. Province */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab mb-1"
                                    aria-label="Mt. Province"
                                />
                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        {/* Slide 1 */}
                                        <div
                                            id="mtprovince1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/mtprovince-sumaguing-cave.png"
                                                alt="sumaguing-cave"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Sumaguing Cave
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located in the mountain town of 
                                                Sagada in the Cordillera region, 
                                                Often referred to as the "Big Cave," 
                                                it is the largest of several caves in the area 
                                                and is a must-visit for adventure seekers 
                                                who want to explore the dramatic underground world 
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#mtprovince2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#mtprovince2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 2 */}
                                        <div
                                            id="mtprovince2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src/assets/SCEP-Gallery/mtprovince-hanging-coffins.jpg"
                                                alt="hanging-conffins"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2">
                                                Hanging Coffins
                                            </h2>
                                            <p className="text-xs sm:text-sm text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Hanging coffins of Sagada are small 
                                                as the corpse is buried in the 
                                                foetal position. Members of the Igorot tribe bury 
                                                their dead in a coffin, nailed to 
                                                the sides of cliff faces high above 
                                                the ground. 
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#mtprovince1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#mtprovince1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Man-Made */}
                                <input
                                    type="radio"
                                    name="my_tabs_6"
                                    className="tab mb-1"
                                    aria-label="Man-Made"
                                />
                                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                                    <p className="text-xs sm:text-sm md:text-base text-center mb-4 sm:mb-6 px-4 sm:px-[10%] leading-relaxed">
                                        These tourist sites supplement the
                                        natural sites and serves as potential
                                        tourist destinations. Remnants of
                                        Spanish settlements are preserved in the
                                        old church ruins of Barangays Mataguisi
                                        and Poblacion, Pudtol respectively.
                                    </p>

                                    <div className="carousel w-full mx-auto rounded-lg shadow-md">
                                        {/* Slide 1 */}
                                        <div
                                            id="manmade1"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\tangadan-tunnel.jpg"
                                                alt="tangadan-tunnel"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Tangadan Tunnel
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                This is a 40-meter tunnel
                                                located along the Abra-Ilocos
                                                Sur National Road. The tunnel is
                                                a popular benchmark to most of
                                                the provinces' populace as well
                                                as to visitors where dignitaries
                                                and other prominent visitors are
                                                being welcomed.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade12"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade2"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 2 */}
                                        <div
                                            id="manmade2"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\victoria-national-park.jpg"
                                                alt="victoria-national-park"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Victoria National Park
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located atop a hill overlooking
                                                the town of Bangued and
                                                neighboring municipalities of
                                                Tayum, La Paz, Pidigan and
                                                Peñarrubia. A shrine of the
                                                blessed mother cradling Infant
                                                Jesus was built near a reservoir
                                                of Bangued waterworks.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade1"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade3"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 3 */}
                                        <div
                                            id="manmade3"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg"
                                                alt="mataguisi-church-ruins"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Emilia Church Ruins And The
                                                Mataguisi Church
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                These two churches are the only
                                                landmarks of the spread of
                                                Christianity in Apayao and the
                                                conversion of local’s beliefs
                                                from paganism to Christianity.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade2"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade4"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 4 */}
                                        <div
                                            id="manmade4"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\winaca.jpg"
                                                alt="winaca-eco-cultural-village"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                WINACA Eco Cultural Village
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Located in Tublay, Benguet province, 
                                                this 42-hectare private property is the 
                                                perfect venue for travelers looking for 
                                                an authentic cultural experience in the 
                                                Philippine highlands.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade3"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade5"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 5 */}
                                        <div
                                            id="manmade5"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\half-tunnel.jpg"
                                                alt="half-tunnel-and-highest-point"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Halsema's Half Tunnel
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The Natumpukan Half Tunnel stands as a 
                                                testament to resilience and creativity 
                                                in the face of natural calamities. It is 
                                                also known as Halsema’s Half Tunnel 
                                                Portion as it is located in Halsema Highway.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade4"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade6"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 6 */}
                                        <div
                                            id="manmade6"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\ph-war.jpg"
                                                alt="philippine-war-memorial-shrine"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Philippine War Memorial Shrine
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Following the architectural
                                                design of the native Ifugao hut,
                                                the memorial shrine was built to
                                                commemorate the end of World War
                                                II and the beginning of peace.
                                                From its rooftop, one can view
                                                nearby villages and the pastoral
                                                scenery of the municipalities of
                                                Kiangan and Lagawe.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade5"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade7"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 7 */}
                                        <div
                                            id="manmade7"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\ifugao-mus.jpg"
                                                alt="ifugao-museum"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Ifugao Museum
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Within the same vicinity as the
                                                Philippine War Memorial Shrine
                                                is the Ifugao Museum, which
                                                showcases native artifacts
                                                ranging from farming and hunting
                                                equipment, household utensils,
                                                weaving and war implements of
                                                the olden days.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade6"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade8"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 8 */}
                                        <div
                                            id="manmade8"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\magat-dam.jpg"
                                                alt="magat-dam"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Magat Dam
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                Magat Dam is a large rock-fill dam on 
                                                the island of Luzon in the Philippines. 
                                                Construction of  the dam started in 1975 and completed in 1982. 
                                                Magat Dam is one of the largest dams in the Philippines 
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade7"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade9"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 9 */}
                                        <div
                                            id="manmade9"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\kalinga-tourism.jpg"
                                                alt="kalinga-capitol-tourism-plaza"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Kalinga Capitol Tourism Plaza
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                A refreshing park located in
                                                front of the Provincial Capitol
                                                Building, Barangay Bulanao,
                                                where one can have a scenic view
                                                of the valley of Tabuk City.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade8"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade10"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 10 */}
                                        <div
                                            id="manmade10"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\neneng-heritage.jpg"
                                                alt="naneng-heritage-village"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Naneng Heritage Village
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The only declared heritage
                                                village in Kalinga, established
                                                by the Catholic Church in the
                                                1920’s. Homes were built using
                                                narra, guijo, and lauan hardwood
                                                which are now very rare. Known
                                                for hospitality and native rice
                                                cake “Inandila”.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade9"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade11"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>

                                        {/* Slide 11 */}
                                        <div
                                            id="manmade11"
                                            className="carousel-item relative w-full flex flex-col items-center"
                                        >
                                            <img
                                                src="src\assets\SCEP-Gallery\grand-zion.jpg"
                                                alt="grand-zion-garden-resort-hotel"
                                                className="object-cover w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] transition-transform duration-500 ease-out hover:scale-[1.01]"
                                            />
                                            <h2 className="text-base sm:text-lg font-semibold mt-2 text-center">
                                                Grand Zion Garden Resort Hotel,
                                                Inc.
                                            </h2>
                                            <p className="text-xs sm:text-sm md:text-base text-center mb-4 px-4 sm:px-[10%] leading-relaxed">
                                                The only DOT accredited resort
                                                in Kalinga, with complete
                                                amenities of a standard hotel
                                                resort. The resort also offers
                                                function rooms for meetings and
                                                special occasions.
                                            </p>
                                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                <a
                                                    href="#manmade10"
                                                    className="btn btn-circle"
                                                >
                                                    ❮
                                                </a>
                                                <a
                                                    href="#manmade1"
                                                    className="btn btn-circle"
                                                >
                                                    ❯
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* See Less Button */}
            {onClose && (
                <div className="flex justify-center mt-10 mb-8">
                    <button
                        onClick={onClose}
                        className="px-6 sm:px-8 py-2 mt-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition"
                    >
                        See Less
                    </button>
                </div>
            )}
        </>
    );
};

export default SocioCultural;
