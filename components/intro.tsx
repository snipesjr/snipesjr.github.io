import Container from './container'
import {LinkedInIcon, GithubIcon} from "./icons";

const Intro = () => {
    return (
        <Container>
            <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
                Jake Snipes
            </h1>
                <h4 className={"text-center md:text-left text-lg mt-5 md:pl-8"}>
                    Data Leader | Fintech | Nerd.
                </h4>
            <a
                href="https://www.linkedin.com/in/jake-snipes-93256737/"
                aria-label="LinkedIn Profile Link"
                title="LinkedIn Profile Link"
                target="_blank"
                rel="noreferrer noopener"
            >
                <LinkedInIcon/>
            </a>
            <a
                href="https://github.com/snipesjr"
                aria-label="GitHub Profile Link"
                title="Github Profile"
                target="_blank"
                rel="noreferrer noopener"
            >
                <GithubIcon/>
            </a>
            </section>
        </Container>
    )
}

export default Intro