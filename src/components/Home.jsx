import PaperAirplane from '../assets/img/paper-airplane.svg';
import Nick from '../assets/img/photo.png';
// import Bg from '../assets/img/bg-cover.svg';

export default function Home() {

    return (
        <section className='px-2 sm:pl-10 sm:mt-11' id='main' >
            <div className="container overflow-hidden">
                <div className="flex flex-col items-center sm:flex-row" >
                    <div className="sm:pr-20 sm:w-8/12 pb-13">
                        <h1 className="font-bold text-2xl sm:text-6xl leading-snug">Hey, I’m Nick</h1>
                        <p className="font-normal text-grey-dark text-sm mt-4 sm:text-xl">
                            Frontend developer
                        </p>
                        <div className="w-7 h-1 bg-lavender mt-9"></div>
                        <div className="mt-6">
                            <p className="font-normal text-grey-dark text-sm sm:text-xl w-8/12 leading-relaxed">
                                Help you to create high-quality digital products that your
                                clients will love and let your business thrive
                            </p>
                        </div>
                        <div className="mt-7">
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
                    {/* Nick */}
                    <div className="relative h-[230px]">
                        <div className="absolute w-[400px] top-[-127px] right-[-225px] -z-10 sm:w-[580px] sm:top-[-120px] sm:right-[-295px]">
                            <img src={Nick} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}