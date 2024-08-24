import Footer from "./footer";
import Header from "./header";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}