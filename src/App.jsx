import { Button as Button_1 } from "./Button.jsx";

export const Button = (props) => ((baloney) => Button_1(props, baloney));

export function App() {
    return <div class="">
        <h1 class="">
            HelloWorld
        </h1>
        <Button className="test"
            size="default">
            test
        </Button>
        {Button_1({
            className: "test",
        }, "stripes")}
    </div>;
}

