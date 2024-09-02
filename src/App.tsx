import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {

    const [textoFrase, setTextoFrase] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

    const allFrases = [
        {
            id: 1,
            categoria: "Motivação",
            frases: [
                "Siga os bons e aprenda com eles.",
                "O bom-senso vale mais do que muito conhecimento.",
                "O riso é a menor distância entre duas pessoas.",
                "Deixe de lado as preocupações e seja feliz.",
                "Realize o óbvio, pense no improvável e conquiste o impossível.",
                "Acredite em milagres, mas não dependa deles.",
                "A maior barreira para o sucesso é o medo do fracasso."
            ]
        },
        {
            id: 2,
            categoria: "Bom dia",
            frases: [
                "Bom dia! Que cada passo que você der hoje o aproxime mais dos seus sonhos!",
                "Que sua jornada hoje seja cheia de sorrisos e momentos especiais. Bom dia!",
                "Comece o dia com gratidão e veja como a sua perspectiva muda. Bom dia!",
                "A vida é feita de escolhas. Escolha ser feliz hoje. Bom dia!",
                "Bom dia! Abra seu coração para as possibilidades infinitas que este dia oferece.",
                "Que cada momento do seu dia seja repleto de bênçãos e realizações. Bom dia!",
                "Bom dia! Que a luz do sucesso ilumine o seu caminho hoje e sempre."
            ]
        }
    ]

    function handleSwitchCategory(index: number) {
        setCategoriaSelecionada(index);
    }

    function showFrases() {
        let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
        setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio]);
    }

    return (
        <div className="container">
            <img src={logoImg} alt="Logo frases" className="logo"/>

            <h2 className="title">Categorias</h2>

            <section className="category-area">
                {allFrases.map((item, index) => (
                    <button
                        key={item.id}
                        className="category-button"
                        style={{
                            borderWidth: item.categoria ===allFrases[categoriaSelecionada].categoria ? 2 : 0,
                            borderColor: "#1FA4DB"
                        }}
                        onClick={() => handleSwitchCategory(index)}
                    >{item.categoria}</button>
                ))}
            </section>

            <button className="button-frase" onClick={showFrases}>Gerar frase</button>
            
            {textoFrase && (
                <p className="text-frase">"{textoFrase}"</p>
            )}
        </div>
    )
}

export default App;