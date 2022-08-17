import Container from './container'
import {GithubIcon} from "./icons";

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                <div className="py-8 flex flex-col lg:flex-row items-container">
                    <h6 className="text-4xl lg:text-[2.5rem] dark:text-white font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Next.js + Github Pages
                    </h6>
                    <div className="flex flex-col lg:flex-row justify-center items-center dark:text-white lg:pl-4 lg:w-1/2">
                        <a
                            href="https://nextjs.org/docs/basic-features/pages"
                            className="mx-3 bg-black hover:bg-white hover:text-black dark:text-white border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                        >
                            Read Documentation
                        </a>
                        <a
                            href={`https://github.com/snipesjr/snipesjr.github.io`}
                            className="mx-3 border px-2 py-2 flex align-middle font-bold hover:underline"
                        >
                            View Source GitHub <span className={"px-2 py-1"}><GithubIcon></GithubIcon></span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer