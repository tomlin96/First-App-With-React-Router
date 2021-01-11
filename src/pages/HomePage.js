import React from 'react';
import Article from "../components/Article"

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptate quidem, maiores magnam iure illo hic aliquid tenetur repellat inventore quia fugit neque a, accusantium cupiditate dolorem, veniam odio culpa."

    },
    {
        id: 2,
        title: "Wiedźmin 3 vs CyberPunk",
        author: "Jan Kowaliski",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptate quidem, maiores magnam iure illo hic aliquid tenetur repellat inventore quia fugit neque a, accusantium cupiditate dolorem, veniam odio culpa."

    },
    {
        id: 3,
        title: "Biotcoin. Czy Ameryka rozprawi się z kryptowalutami?",
        author: "JK k",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptate quidem, maiores magnam iure illo hic aliquid tenetur repellat inventore quia fugit neque a, accusantium cupiditate dolorem, veniam odio culpa."

    },
    {
        id: 4,
        title: "Matrix 4. Kontyunuacja serii po wielu latach przerwy.",
        author: "Keanu Reeves",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptate quidem, maiores magnam iure illo hic aliquid tenetur repellat inventore quia fugit neque a, accusantium cupiditate dolorem, veniam odio culpa."

    },
    {
        id: 5,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptate quidem, maiores magnam iure illo hic aliquid tenetur repellat inventore quia fugit neque a, accusantium cupiditate dolorem, veniam odio culpa."

    },
]


const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;