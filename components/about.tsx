import {BsGithub, BsLinkedin, BsChevronDoubleRight} from "react-icons/bs"

const About = () => {
    return (
        <>
            <div id="about" className={"bg-grey-50"}>
                <div className={"container flex flex-col items-center py-16 md:py-20 lg:flex-row"}>
                    <div className={"w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left"}>
                        <h2 className={"font-header text-4xl font-semibold text-primary sm:text-5xl lg:text-6xl"}>
                            Hi, I&apos;m Jake Snipes!
                        </h2>
                        <h4 className={"pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"}>
                            I like using data to solve problems and answer questions.
                        </h4>
                        <p className="pt-6 font-body leading-relaxed text-grey-20">
                            I am searching for my next leadership role in Data & Analytics.
                        </p>
                        <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                            <div className="flex items-center justify-center sm:justify-start">
                                <p className="font-body text-lg font-semibold text-grey-20 pr-2">
                                    Connect with me.
                                </p>
                                <div className="hidden sm:block">
                                    <i className="bx bx-chevron-right text-2xl text-primary"><BsChevronDoubleRight></BsChevronDoubleRight></i>
                                </div>
                                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                                    <a
                                        href="https://www.linkedin.com/in/jake-snipes-93256737/"
                                        aria-label="LinkedIn Profile Link"
                                        title="LinkedIn Profile Link"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="text-2xl text-white hover:text-yellow">
                                        <BsLinkedin></BsLinkedin>
                                    </a>
                                    <a
                                        href="https://github.com/snipesjr"
                                        aria-label="Github Profile Link"
                                        title="Github Profile"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="pl-4 text-2xl text-white hover:text-yellow">
                                        <BsGithub></BsGithub>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About