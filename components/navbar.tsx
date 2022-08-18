import type {NextComponentType, NextPageContext} from "next";
import Link from "next/link";

import {linkProps} from "../interfaces/links.types";

import {BsGithub, BsLinkedin, BsChevronDoubleRight} from "react-icons/bs";
import Container from "./container";

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
    text,
    url,
}) => {
    return (
        <a
            href={url}
            className="cursor-pointer rounded-md px-4 py-[0.10.rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
        >
            {text}
        </a>
    );
};

const Navbar: NextComponentType = () => {
    return (
        <Container>
        <header
            className={`font-jost py-8 pr-4 sm:flex sm:flex-row sm:items-center sm:justify-between`}
            >
            <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
                <TextLink text="Home" url="#"/>
                <TextLink text="About" url="#about"/>
                <TextLink text="Skills" url="#skills"/>
            </p>

            <div className="flex items-center justify center">
            <Link href="https://github.com/snipesjr" passHref>
                <a
                    className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github-repo"
                >
                    <BsGithub/>
                </a>
            </Link>

            <Link href="https://www.linkedin.com/in/jake-snipes-93256737/" passHref>
                <a
                    className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin-profile"
                >
                    <BsLinkedin/>
                </a>
            </Link>
            </div>
        </header>
        </Container>
    )
}

export default Navbar