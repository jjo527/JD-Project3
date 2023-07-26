import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    let items = ["Player1", "Player2"];

    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
            <Button color="danger" onClick={() => console.log("Clicked")}>
                MyButton
            </Button>
            <ListGroup
                onSelectItem={handleSelectItem}
                items={items}
            ></ListGroup>
        </div>
    );
}

export default App;
