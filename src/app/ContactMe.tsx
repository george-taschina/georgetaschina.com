import Link from "next/link";

const ContactMe = () => {


    return (
        <div className="bg-neutral-900	">
            <div className="w-full text-black mt-8 | xl:mt-12">
                <svg className="w-full fill-background transform -translate-y-1 scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 162"><path d="M1600 0v113.868c-91.328-1.407-173.577 60.877-297.907 45.57-124.33-15.308-103.654-33.11-207.373-63.606-69.147-20.33-143.387-20.33-222.72 0-56.554 17.89-114.692 23.901-174.415 18.036-89.585-8.798-84.69-15.89-199.92-48.532-89.414-25.328-211.396-25.328-247.427-27.283-68.21-3.7-151.622 9.683-250.238 40.15V0h1600z"></path>
                </svg>
            </div>
            <div className="grid md:grid-cols-2 w-screen h-screen">
                <div className="flex flex-col justify-center items-center text-center">
                    <img src="/contact-me.webp" alt="logo" className="w-full" />
                </div>
                <div className="px-2 flex flex-col justify-center items-center text-center text-white">
                    <h2 className="text-5xl md:text-6xl font-bold ">Let's Make something great together.</h2>
                    <p className="text-2xl  mt-10">Whether it’s a new venture or existing brand.</p>
                    <div className="mt-5 md:mt-10">
                        <a href="#contact" className="button-background text-special font-bold py-3 px-10 rounded-full shadow-lg uppercase tracking-wider transition-all ease-in-out delay-150 duration-500">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;