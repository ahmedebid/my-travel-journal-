import Header from './components/Header';
import Card from "./components/Card";
import data from './data';

export default function App() {

    const cardElements = data.map(item => 
        <Card 
            key={item.id}
            item={item}
        />    
    )

    return (
        <>
            <Header />
            <main>
                {cardElements}
            </main>
        </>
    )
}