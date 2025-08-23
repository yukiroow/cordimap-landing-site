import { Users, TrendingUp, ComponentIcon, Gem, LibraryBig, Car, Podcast, PickaxeIcon, Binoculars } from "lucide-react";

const SocioCultural = () => {
    return (
        <div className="min-h-screen ml-15 mr-15">
            {/* SOCIO CULTURAL AND ECONOMIC PROFILE */}
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Socio-Cultural and Economic Profile</h1>
            <h2 className="text-xl font-semibold mb-4">Demography</h2>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-black-600" />
                    Population
                </div>
                <div className="collapse-content text-sm text-justify">
                    The population of the region as of August 1, 2015 was 1,718,444 based
                    on the 2015 Census of Population (POPCEN 2015). It is higher by 105,624
                    compared with the population of 1,612,820 in 2010 with an annual growth
                    rate of 1.21 at present.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-black-600" />
                    Income Class
                </div>
                <div className="collapse-content text-sm text-justify">
                    Income class of the provinces in the region is determined based on the
                    Department of Finance, Department Order No.23-08. <br></br><br></br>
                    Benguet belongs to the 2nd class province; Abra, Apayao and Ifugao are
                    3rd income class provinces while Kalinga and Mt. Province belong
                    to the 4th income class provinces.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <ComponentIcon className="w-5 h-5 text-black-600" />
                    Major Ethnic Tribes
                </div>
                <div className="collapse-content text-sm text-justify">
                    The indigenous population of the Cordillera region is collectively known
                    as Igorots, meaning “mountain people”. These groups are largely swidden
                    cultivators who depend on farming rice, root crops, and vegetables.
                    (Indigenous-Peoples-in-the-Philippines.pdf). <br></br> <br></br>
                    There are twelve (12) ethno-linguistic groups in the region, namely, Bontoc, Applais,
                    Isnegs, Kalingas, Balangaos, Kankanaey, Tingguian, Ibaloi, Karaos,
                    Iowaks, Kalanguyas and Ifugaos. <br></br> <br></br> These groupings, while convenient,
                    do not fully reflect the real particularities and the extent of
                    diversity among the region's peoples. In fact, most of the indigenous peoples
                    identify themselves primarily with specific communities called ili (literally,
                    home village, hometown, or home territory). Each ili is a self-identifying community
                    with a specific territory, which is its ancestral land. While there are diverse types,
                    an ili usually consists of a closely-knit cluster of villages, or a core
                    village and its outlying hamlets, within a more or less defined territory.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <LibraryBig className="w-5 h-5 text-black-600" />
                    Education
                </div>
                <div className="collapse-content text-sm text-justify">
                    A highly trainable English speaking and educated work force is easily
                    available in the region. Baguio City is known as the educational
                    center north of Manila, hosting world-class learning institutions
                    like the Philippine Military Academy and Brent International School. <br></br><br></br>
                    Various colleges and universities offer different fields catering
                    to the needs of industries. Likewise, technical and vocational
                    schools abound as a rich source of skilled manpower.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <Car className="w-5 h-5 text-black-600" />
                    Transportation Services
                </div>
                <div className="collapse-content text-sm text-justify">
                    Data on the extent and coverage of transportation and communication
                    networks of an area are essential. The different modes of transportation
                    and channels and media communication are vital in the economic, social, and
                    cultural lives of peoples and institutions in the community.
                    A well-developed transportation system ensures fast and efficient
                    transfer of goods and services between traders, households and other
                    institutions within and outside the geographical limits of the community.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <Podcast className="w-5 h-5 text-black-600" />
                    Communication Services
                </div>
                <div className="collapse-content text-sm text-justify">
                    Similarly, breakthroughs in the communication system accelerates the
                    flow of information. This era of information technology enables a faster
                    access to and the dissemination of news, events, and developments
                    in the domestic and international scene. Under this situation, the citizenry
                    becomes well-informed of events and developments affecting their lives. <br></br><br></br>
                    In the area of broadband connection, internet access has been made possible
                    through the rise in the number of internet providers like PLDT – SMART
                    and GLOBE among others. Notwithstanding these accomplishments,
                    interconnection issues among telecommunication providers are
                    yet to be resolved.
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Economic Structure</h2>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <PickaxeIcon className="w-5 h-5 text-black-600" />
                    Mining Industry
                </div>
                <div className="collapse-content text-sm text-justify">
                    Cordillera has abundant mineral reserves. These include metallic ores
                    such as gold, copper, silver, zinc, and non-metallic minerals like sand,
                    gravel and sulfur. Mineral Reserves are found in all provinces. However,
                    mining is concentrated in the province of Benguet. <br></br><br></br>
                    Growth of the region’s mining industry continues to be hampered by problems
                    such as persistent anti-mining sentiments among some sectors and the issue
                    on unpaid LGU share from the proceeds of mineral wealth development and utilization.
                    This notwithstanding, mining still continued to contribute significantly
                    to the region’s economy.
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold flex items-center gap-2">
                    <Binoculars className="w-5 h-5 text-black-600" />
                    Tourism Industry
                </div>
                <div className="collapse-content text-sm text-justify">
                    The Cordillera region have much to offer than just cool weather and
                    some pine trees. Whether its nature, culture, or just the thrill of
                    finding something new, it’s definitely worth exploring, one province
                    at a time. <br></br><br></br> The region in itself is marvelous.
                    Endowed with naturally sculpted areas suited for eco-tourism,
                    the Cordillera provinces boast of caves, underground rivers and waterfalls,
                    many of which remain unexplored. Wildlife sanctuaries, scenic spots and
                    recreational sites provide perfect destinations for ecotourism.
                </div>
            </div>
            
            {/* GALLERY */}
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Gallery</h1>
            <div className="tabs tabs-box">
                {/* Abra */}
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Abra" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="abra1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\abra-river.JPG" alt="abra-river" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Abra River</h2>
                            <p className="text-sm text-center mb-4">The most popular river among the numerous rivers crisscrossing the valleys of the province, 
                                being the biggest and longest. An ideal place for swimmers as well as those fond of fishing with spacious and clear water.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#abra3" className="btn btn-circle">❮</a>
                                <a href="#abra2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="abra2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\boliney-hot-spring.JPG" alt="boliney-hot-spring" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Boliney Hot Spring</h2>
                            <p className="text-sm text-center mb-4">Located at Bani, Boliney, Abra. It can be reached by jeepneys after travelling 32 kms. The place is an ideal for swimmers 
                                who love taking a bath in hot and cold water.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#abra1" className="btn btn-circle">❮</a>
                                <a href="#abra3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="abra3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\tugot-ni-angalo.JPG" alt="tugot-ni-angalo" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Tugot ni Angalo</h2>
                            <p className="text-sm text-center mb-4">Translated as "Footprints of Angalo", the Adam in Abra mythology- it is found in Kabaruyan, San Quintin. The "footprint" is a 
                                perpetual monument of Angalo. People claim this is a real giant footprint around fifteen meters long, five meters wide and ten feet deep.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#abra2" className="btn btn-circle">❮</a>
                                <a href="#abra1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Apayao */}
                <input type="radio" name="my_tabs_6" className="tab mb-1" aria-label="Apayao" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="apayao1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\marag-rock-formation.jpg" alt="marag-rock-formation" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Marag Rock Formation</h2>
                            <p className="text-sm text-center mb-4">Located at Marag Valley, Luna, Apayao. Visitors experience thrill of climbing the rock formations and the relaxing view of Luna’s nature 
                                from the top of the rocks. This unique limestone rock formation is a historical site as it served as a fortress for the locals of Marag during the years of insurgency. 
                                The crevices and mazes offered the people shelter and safety.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao3" className="btn btn-circle">❮</a>
                                <a href="#apayao2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="apayao2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\apayao-river.jpg" alt="apayao-river" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Apayao River</h2>
                            <p className="text-sm text-center mb-4">The river is the longest river of Apayao stretching a distance of 180 kilometers traversing through all of the province’s municipalities except Conner. 
                                the I-Apayao’s conduct boat racing sports competitions during festivities in this mighty River.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao1" className="btn btn-circle">❮</a>
                                <a href="#apayao3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="apayao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\lusok-caves.jpg" alt="lusok-caves" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Lussok Caves</h2>
                            <p className="text-sm text-center mb-4">Apayao’s hidden treasure! This cave hides 7 spacious chambers each having a different tale to tell. The crystal clear underground river that runs through its 
                                chambers, passing through its opposite end and exiting through its gigantic entrance adds grandeur to its majestic gift of nature. The caves’ countless stalactites and stalagmites curved perfectly 
                                by nature continues to amaze visitors.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao2" className="btn btn-circle">❮</a>
                                <a href="#apayao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="apayao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\lusok-caves.jpg" alt="lusok-caves" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Bacut Lake</h2>
                            <p className="text-sm text-center mb-4">This body of water supplies 80 – 100 hectares of rice lands. Its exceptional islet at the lake’s core keeps it unique from the other Lakes in the Philippines. 
                                It is a potential place for camping, boating, off-road biking, resting and outing. </p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao2" className="btn btn-circle">❮</a>
                                <a href="#apayao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="apayao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\lusok-caves.jpg" alt="lusok-caves" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Manacota Cave and Underground River</h2>
                            <p className="text-sm text-center mb-4">A 20-minute hike upstream the Manacota River, this through and through underground river hides numerous chambers of crystallized and untouched stalactites and stalagmites 
                                and a hidden pool about 12 meters wide where one can dive and swim to experience its cool and refreshing water. </p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao2" className="btn btn-circle">❮</a>
                                <a href="#apayao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="apayao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\lusok-caves.jpg" alt="lusok-caves" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Gololan Falls</h2>
                            <p className="text-sm text-center mb-4">This beautiful falls with 3 successive pools rising about 30m high is hidden within the heart of Paco Valley, Lenneng, Kabugao. The drop-off point is around 45 minutes ride 
                                from Poblacion, plus another 30-minute hike </p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao2" className="btn btn-circle">❮</a>
                                <a href="#apayao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="apayao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\lusok-caves.jpg" alt="lusok-caves" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Nagan River</h2>
                            <p className="text-sm text-center mb-4">The cleanest inland river in the Cordilleras and the 1st Runner Up During the Nation-wide Search for the Cleanest Inland Body of Water in 1998. </p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#apayao2" className="btn btn-circle">❮</a>
                                <a href="#apayao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Benguet */}
                <input type="radio" name="my_tabs_6" className="tab mb-1" aria-label="Benguet" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="benguet1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mt-pulag.jpg" alt="mt-pulag" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Mt. Pulag National Park</h2>
                            <p className="text-sm text-center mb-4">Second highest peak in the Philippines, next to Mt. Apo, towering at an altitude of 9,640 feet above sea level. It is home to many highland flora and 
                                fauna, including the dwarf bamboo, which covers its bald peak.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#benguet3" className="btn btn-circle">❮</a>
                                <a href="#benguet2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="benguet2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mt-ugo.jpg" alt="mt-ugo" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Mt. Ugo</h2>
                            <p className="text-sm text-center mb-4">Located at Tinongdan, Itogon, Benguet, a thriving tourist attraction for mountain climbing.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#benguet1" className="btn btn-circle">❮</a>
                                <a href="#benguet3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="benguet3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mt-purgatory.jpg" alt="mt-purgatory" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Mt. Purgatory</h2>
                            <p className="text-sm text-center mb-4">Located in Bokod, Benguet, it features hiking under Benguet Pine forests to mossy forests. It also offers 
                                beautiful landscapes and spectacular views of other mountains in Benguet.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#benguet2" className="btn btn-circle">❮</a>
                                <a href="#benguet1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                         <div id="benguet3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mt-purgatory.jpg" alt="mt-purgatory" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Ambongdolan Caves</h2>
                            <p className="text-sm text-center mb-4">Located in in Tublay Benguet features spacious chambers and various speleothem/ speleogen formations. A unique waterfall 
                                flows from the ceiling in one chamber of Bingaongao Cave.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#benguet2" className="btn btn-circle">❮</a>
                                <a href="#benguet1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                         <div id="benguet3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mt-purgatory.jpg" alt="mt-purgatory" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Burial Caves in Kabayan and Buguias</h2>
                            <p className="text-sm text-center mb-4">These are considered sacred grounds and home to naturally preserved mummies and skulls.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#benguet2" className="btn btn-circle">❮</a>
                                <a href="#benguet1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ifugao */}
                <input type="radio" name="my_tabs_6" className="tab mb-1" aria-label="Ifugao" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="ifugao1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\banaue-rice-terraces.jpg" alt="banaue-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Banaue Rice Terraces</h2>
                            <p className="text-sm text-center mb-4">Best seen at the viewpoint in Banaue, the rice terraces rise steeply from the base of the mountain range to a 
                                height of a few thousand feet. The viewpoint is a short 15-minute drive from the Banaue town center.</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao3" className="btn btn-circle">❮</a>
                                <a href="#ifugao2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\bangaan-rice-terraces.jpg" alt="bangaan-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Bangaan Rice Terraces</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao1" className="btn btn-circle">❮</a>
                                <a href="#ifugao3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Hapao Rice Terraces</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Bakung “Spider Web” Rice Terraces</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Mount Napulawan</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Dakkitan Rice Terraces and Natural Pool</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Tappiyah Waterfalls</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Bangaan Village</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Batad Village</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="ifugao3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\batad-rice-terraces.jpg" alt="batad-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Nahtoban Caves</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#ifugao2" className="btn btn-circle">❮</a>
                                <a href="#ifugao1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Kalinga */}
                <input type="radio" name="my_tabs_6" className="tab mb-1" aria-label="Kalinga" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="kalinga1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\chico-river.jpg" alt="chico-river" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Chico River</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#kalinga3" className="btn btn-circle">❮</a>
                                <a href="#kalinga2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="kalinga2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\bruh.jpg" alt="wala akong mahanap na landscape search: banga banga falls" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Banga-Banga, Matambong & Panpanay Falls</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#kalinga1" className="btn btn-circle">❮</a>
                                <a href="#kalinga3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="kalinga3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\guilum-canyon-falls.jpg" alt="guilum-canyon-falls" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Guilum Canyon Falls</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#kalinga2" className="btn btn-circle">❮</a>
                                <a href="#kalinga1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                         <div id="kalinga3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\guilum-canyon-falls.jpg" alt="guilum-canyon-falls" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Malalao Rolling Hills</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#kalinga2" className="btn btn-circle">❮</a>
                                <a href="#kalinga1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mt. Province */}
                <input type="radio" name="my_tabs_6" className="tab mb-1" aria-label="Mt. Province" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="mtprovince1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mabarotbot-oil-seepage.jpg" alt="mabarotbot-oil-seepage" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Mabarotbot Oil Seepage</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#mtprovince2" className="btn btn-circle">❮</a>
                                <a href="#mtprovince2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="mtprovince2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\natonin-and-apatan-rice-terraces.jpg" alt="natonin-and-apatan-rice-terraces" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Natonin and Apatan Rice Terraces</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#mtprovince1" className="btn btn-circle">❮</a>
                                <a href="#mtprovince1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Man-Made */}
                <input type="radio" name="my_tabs_6" className="tab mb-1" aria-label="Man-Made" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="carousel w-full">
                        <div id="manmade1" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\tangadan-tunnel.jpg" alt="tangadan-tunnel" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Tangadan Tunnel</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade3" className="btn btn-circle">❮</a>
                                <a href="#manmade2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade2" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\victoria-national-park.jpg" alt="victoria-national-park" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Victoria National Park</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade1" className="btn btn-circle">❮</a>
                                <a href="#manmade3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Emilia Church Ruins And The Mataguisi Church</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">WINACA Eco Cultural Village</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Half Tunnel and Highest Point</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Philippine War Memorial Shrine</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Ifugao Museum</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Magat Dam</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Kalinga Capitol Tourism Plaza</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Naneng Heritage Village</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Grand Zion Garden Resort Hotel, Inc.</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="manmade3" className="carousel-item relative w-full flex flex-col items-center">
                            <img src="src\assets\SCEP-Gallery\mataguisi-church-ruins.jpg" alt="mataguisi-church-ruins" className="w-full" />
                            <h2 className="text-lg font-semibold mt-2">Chico River Diversion Dam</h2>
                            <p className="text-sm text-center mb-4">DESCRIPTION HERE</p>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#manmade2" className="btn btn-circle">❮</a>
                                <a href="#manmade1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                     <p className="text-sm text-center mb-4">These tourist sites supplement the natural sites and serves as potential tourist destinations. 
                        Remnants of Spanish settlements are preserved in the old church ruins of Barangays Mataguisi and Poblacion, Pudtol respectively. </p>
                </div>
            </div>
        </div>
    );
};

export default SocioCultural;