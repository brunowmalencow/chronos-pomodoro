import Contador from "../../Components/Contador";
import Container from "../../Components/Container";
import MainForm from "../../Components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import MainTemplate from "../../templates/MainTemplate";

export type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

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