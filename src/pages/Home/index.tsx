import Contador from "../../Components/Contador";
import Container from "../../Components/Container";
import MainForm from "../../Components/MainForm";
import MainTemplate from "../../templates/MainTemplate";

export default function Home() {
    return (
        <>
            <MainTemplate>
                <Container>
                    <Contador />
                </Container>

                <Container>
                    <MainForm />
                </Container>
            </MainTemplate>
        </>
    )
}