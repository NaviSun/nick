import RoundedNick from '../assets/img/round-photo.png';
import PaperAirplane from '../assets/img/paper-airplane.svg';
import MusicIcon from '../assets/img/MusicIcon.svg';
import ArtIcon from '../assets/img/ArtIcon.svg';
import PhotoIcon from '../assets/img/PhotoIcon.svg';

const About = () => {
    return (
        <section className='px-2 mt-12 sm:px-10 sm:mt-20' id='about' >
            <div className="">
                <h2 className="font-bold text-4xl">About Me</h2>
            </div>

            <div className="mt-9 sm:mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2  items-center">
                    <div className="w-[25,75rem] h-[25,75rem]">
                        <img className="" src={RoundedNick} alt="" />
                    </div>
                    <div className='sm:ml-11'>
                        <div className="w-7 h-1 bg-lavender mt-9"></div>
                        <div className="mt-6">
                            <p className="font-normal text-grey text-sm sm:text-xl leading-relaxed">
                                <span className="font-semibold">Nick Richardson</span> -
                                specialist in Frontend development. Clear code is my passion.
                                Solving issues through negotiations
                            </p>
                            <div className="mt-11 max-sm:hidden">
                                <button
                                    className="
                                               flex
                                               justify-between
                                               items-center
                                               w-[139px]
                                               h-10
                                               cursor-pointer
                                               mt-7
                                               rounded-3xl
                                               bg-lavender
                                               py-2
                                               px-3
                                               text-center text-sm
                                               text-white
                                               transition-all
                                               shadow-md
                                               hover:shadow-lg
                                               hover:opacity-90
                                               focus:opacity-90
                                               focus:shadow-none
                                               hover:bg-slate-700
                                               active:shadow-none
                                               disabled:pointer-events-none
                                               disabled:opacity-50
                                               disabled:shadow-none
                                               sm:w-[188px]
                                                sm:h-13
                                                sm:text-base
                                                sm:px-6"
                                    type="button"
                                >
                                    <b>Get in touch</b>
                                    <img
                                        className="block ml-2"
                                        src={PaperAirplane}
                                        alt="airplane"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 sm:mt-16">
                    <div>
                        <h3 className="font-bold text-xl sm:text-2xl">Interests</h3>
                        <div className="flex flex-row items-center mt-7 text-sm sm:text-xl sm:mt-11">
                            <img src={MusicIcon} alt="" />
                            <div className="ml-2 md:ml-4">
                                <p className="font-bold ">Music</p>
                                <p className=" mt-1 sm:mt-2">Indie rock | Reggae</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mt-7 text-sm sm:text-xl sm:mt-11">
                            <img src={ArtIcon} alt="" />
                            <div className="ml-2 md:ml-4">
                                <p className="font-bold">Art</p>
                                <p className="mt-1 sm:mt-2">Edvard Munch | Frida Kahlo</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mt-7 text-sm sm:text-xl sm:mt-11">
                            <img src={PhotoIcon} alt="" />
                            <div className="ml-2 md:ml-4">
                                <p className="font-bold">Photography</p>
                                <p className="mt-1 sm:mt-2">Portraits</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-sm:mt-12 '>
                        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl">Education & Experience</h3>
                        <div className="flex flex-auto gap-3 mt-7 text-sm sm:text-xl sm:mt-11">
                            <div className="text-sm md:text-xl w-40">2008 - Present</div>
                            <div className="">
                                <p className="text-sm font-bold md:text-xl">Middle Frontend developer</p>
                                <p className="text-sm md:text-xl mt-2">Ozon</p>
                            </div>
                        </div>
                        <div className="border-b border-b-grey-light mt-3 sm:mt-8"></div>
                        <div className="flex flex-auto gap-3 mt-3 text-sm sm:text-xl sm:mt-11">
                            <div className="w-40">2006 - 2007</div>
                            <div>
                                <p className="font-bold">
                                    Frontend development courses
                                </p>
                                <p className="mt-2">Stepik</p>
                            </div>
                        </div>
                        <div className="border-b border-b-grey-light mt-3 sm:mt-8"></div>
                        <div className="flex flex-auto gap-3 mt-3 text-sm sm:text-xl sm:mt-11">
                            <div className="w-40">2000 - 2005</div>
                            <div>
                                <p className="font-bold">Frontend developer</p>
                                <p className="mt-2">Saint Petersburg State University</p>
                            </div>
                        </div>
                        <div className="sm:hidden border-b border-b-grey-light mt-3 sm:mt-8"></div>
                        <div className="mt-12 sm:hidden">
                            <button
                                className="
                                               flex
                                               justify-between
                                               items-center
                                               w-[139px]
                                               h-10
                                               cursor-pointer
                                               mt-7
                                               rounded-3xl
                                               bg-lavender
                                               py-2
                                               px-3
                                               text-center text-sm
                                               text-white
                                               transition-all
                                               shadow-md
                                               hover:shadow-lg
                                               hover:opacity-90
                                               focus:opacity-90
                                               focus:shadow-none
                                               hover:bg-slate-700
                                               active:shadow-none
                                               disabled:pointer-events-none
                                               disabled:opacity-50
                                               disabled:shadow-none
                                               sm:w-[188px]
                                                sm:h-13
                                                sm:text-xl
                                                sm:px-6
                                "
                                type="button"
                            >
                                <b>Get in touch</b>
                                <img
                                    className="block ml-2"
                                    src={PaperAirplane}
                                    alt="airplane"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
