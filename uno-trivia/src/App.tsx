import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
    return (
        <div>
            <Alert>
                Hello <span>World</span>
            </Alert>
            <Button color="danger" onClick={() => console.log("Clicked")}>
                MyButton
            </Button>
        </div>
    );
}

export default App;
