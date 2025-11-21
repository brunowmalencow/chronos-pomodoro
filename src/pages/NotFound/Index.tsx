import { Search } from "lucide-react";

import { GenericHtml } from "../../Components/GenericHtml";
import Container from "../../Components/Container";
import MainTemplate from "../../templates/MainTemplate";

export default function NotFound() {
    return (
        <MainTemplate>
            {/* {<Container>
                <Search size={60} style={{ marginBottom: '2rem'}} />
                <h1>404 - Página não encontrada</h1>
                <p>A página que você está procurando não existe.</p>
            </Container>} */}

            <Container>
                <GenericHtml>
                    <Search size={60} style={{ marginBottom: '2rem'}} />
                    <h1>404 - Página não encontrada</h1>
                    <p>A página que você está procurando não existe.</p>
                </GenericHtml>
            </Container>
        </MainTemplate>
    )
}