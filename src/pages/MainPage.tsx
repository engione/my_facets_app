import { Header } from "../components/Header";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { AboutUs } from "../components/AboutUs/AboutUs";


export function MainPage() {
    return (
        <>
            <Header />
            <main>
                <ContentBlock />
                <AboutUs />
            </main>
        </>
    );
}
