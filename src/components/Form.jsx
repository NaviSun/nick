import PersonIcon from '../assets/img/Person.png';
import EmailIcon from "../assets/img/mail.png";
import PaperAirplane from '../assets/img/paper-airplane.svg';
import ErrorIcon from "../assets/img/ErrorIcon.svg"

const Form = () => {
    return (
        <section className="mt-25 sm:mt-33" id='getin'>
            <div className="md:flex justify-center bg-[image:url(../public/img/bg-cover.svg)] bg-no-repeat max-md:bg-cover bg-center lg:bg-right py-16 px-2.5 sm:py-17 sm:px-10">
                <div className="bg-white rounded-2xl py-12 px-3 lg:px-12 lg:w-7/12">
                    <h3 className="font-bold text-xl sm:text-4xl text-center sm:text-left">
                        Let’s discuss your project
                    </h3>
                    <form action="/">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 mt-9 sm:mt-12 ">
                            <div className="">
                                <p className="text-sm sm:text-base font-semibold">
                                    Your full name <i className="text-lavender-red">*</i>
                                </p>
                                <div className="relative flex items-center mt-2">
                                    <img
                                        className="w-6 h-6 absolute ml-6"
                                        src={PersonIcon}
                                        alt=""
                                    />
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Name Surname"
                                        required
                                        className="border border-grey-light py-3 pl-14 sm:px-14 rounded-2xl w-full placeholder:text-grey-dark"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-0">
                                <p className="text-sm sm:text-base font-semibold">
                                    Your email <i className="text-lavender-red">*</i>
                                </p>
                                <div className="relative flex items-center mt-2">
                                    <img
                                        className="w-6 h-6 absolute ml-6"
                                        src={ErrorIcon}
                                        alt=""
                                    />
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="name@exemple.com"
                                        required
                                        className="border disabled:border-grey-light disabled:bg-grey-light disabled:text-gray-500 disabled:shadow-none focus:invalid:outline-lavender-red invalid:border-lavender-red focus:invalid:border-lavender-red focus-visible:border-lavender-red py-3 pl-14 sm:px-14 rounded-2xl w-full placeholder:text-grey-dark"
                                    />                            </div>
                                <div className='text-lavender-red font-semibold text-xs mt-1'>
                                Please fill this mandatory field
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 font-semibold">
                            <label className='text-left text-sm sm:text-base' for="about">Tell me About Your Project</label>
                            <div className="mt-6">
                                <textarea
                                    name="about"
                                    placeholder="Add here a general description of your idea and target aim"
                                    id="about"
                                    className="border border-grey-light w-full h-32 p-5 rounded-2xl bg-white placeholder:text-grey-dark placeholder:text-sm font-monserat"
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-12">
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
                                         sm:w-[147px]
                                                sm:h-13
                                                sm:text-base
                                                sm:px-6"
                                type="button"
                            >
                                <b>Submit</b>
                                <img
                                    className="block ml-2"
                                    src={PaperAirplane}
                                    alt="airplane"
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;
