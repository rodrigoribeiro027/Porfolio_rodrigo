import Navbar from '../../Componets/Navbar/Navbar';
import './sobre.css';
import { useState, useEffect } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Link } from 'react-router-dom';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';


interface Repository {
    name: string;
    description: string;
    html_url: string;
}
function Sobre() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const [age, setAge] = useState<number>(0);
    const birthYear = 2000;
    const birthMonth = 6; // Lembrando que os meses começam em 0, então Julho é o mês 6
    useEffect(() => {
        fetch('https://api.github.com/users/rodrigoribeiro027/repos')
            .then(Response => Response.json())
            .then(data => setRepositories(data))
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        let calculatedAge = currentYear - birthYear;
        // Verifica se o mês atual é menor que o mês de nascimento, se sim, subtrai 1 da idade
        if (currentMonth < birthMonth) {
            calculatedAge--;
        }

        setAge(calculatedAge);
    }, []);

    const gridItem = (repository: Repository) => {
        return (
            <div className="carde">
                <div className="cardGit">
                    <div className='twoItens'>
                        <h3>{repository.name}</h3>
                        <p>Descrição: {repository.description}</p>
                    </div>
                    
                    <Link className='botaolink' to={repository.html_url}>
                        <Button label='Saiba mais' className='botaoMais'  icon={'pi pi-fw pi-github'}/>
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <Navbar />

            <div className='Flexivel'>
                <h3 className='texto2'>Rodrigo Ribeiro Dos Santos - Idade: {age} - Desenvolvedor de Software De Multiplataforma</h3>
            </div>
            <div className="card">
                <Accordion className='' activeIndex={0}>
                    <AccordionTab header="Sobre">
                        <p className="m-0">
                            Sou um entusiasta do mundo da tecnologia e estou sempre de olho nos sites mais atualizados sobre tecnologia e games. Recentemente, comecei um curso de programação e desenvolvimento de software na Fatec para aprimorar minha formação curricular na área de tecnologia. Estou extremamente empolgado para adquirir conhecimentos amplos e aprofundados em programação, com o objetivo de criar soluções inovadoras, como softwares, sites e outros sistemas que possam fazer a diferença no mercado e na vida das pessoas. Acredito que a tecnologia é a chave para o futuro e estou determinado a ser parte desse universo fascinante!
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Qualificações">
                        <p className="m-0">
                            <h3>Curso Desenvolvimento de Software Multiplataforma 6ºSemestres</h3>
                            <h5>instituição de ensino Fatec São José dos Campos - Prof. Jessen Vidal</h5>
                            <p>Semestre Atual: 4ºSemestre </p>
                        </p>
                        <br />
                        <p className="m-0">
                            <h3>Ensino Médio – completo</h3>
                            <h5>Professor Joaquim Andrade Meirelles</h5>
                            <p>Finalizado em Dezembro/2018 </p>
                        </p>
                        <br />
                        <p className="m-0">
                            <h3>Curso de Inspetor de Qualidade</h3>
                            <h5>SENAI - SP</h5>
                            <p>Realizado em Fevereiro/2017 á Setembro/2017São José dos Campos - SP </p>
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Expectativas">
                        <p className="m-0">
                            Eu quero me tornar um desenvolvedor fullstack no futuro, porque acredito que essa área tem um grande potencial e oferece muitas oportunidades. Eu estou empolgado em aprender todas as etapas do desenvolvimento de software, desde o design até a implementação e manutenção do sistema. Eu espero trabalhar em projetos desafiadores e inovadores, em diferentes setores, e contribuir para a construção de soluções que mudam o mundo. Eu sei que não será fácil, mas estou disposto a me dedicar e a me manter atualizado sobre as últimas tendências e tecnologias para alcançar meu objetivo.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
            <h2 className='textoCentro'>Lista de Projetos Criados</h2>
            <div className="card">
                <DataView value={repositories} itemTemplate={gridItem} paginator rows={3} />
            </div>
            <div className='contaierFooter'>
                    <h2><Link to="https://www.linkedin.com/in/-rodrigo-ribeiro">Rodrigo Ribeiro</Link> - Todos os direitos reservados.</h2>
            </div>


        </>
    )

}
export default Sobre;