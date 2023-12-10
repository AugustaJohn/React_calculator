import CalculatorTile from "./CalculatorTitle"
import OutputScreen from './OutputScreen'
import Button from "./Button"
import { useState } from "react";

export default function Calculator() {
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');

    function handleButtonClick(e) {
        const value = e.target.textContent;
        console.log(value);
        switch (value) {
            case '=':
                try {
                    /* eslint no-eval: 0 */
                    const result = eval(question);
                    if (isNaN(result) || result === Infinity || result === -Infinity) {
                        setAnswer('Math Error');
                    } else {
                        setAnswer(result);
                        setQuestion('');
                    }
                } catch (error) {
                    console.log(error);
                    setAnswer('Math Error in catch');
                }
                break;

            case 'clear':
                setAnswer('');
                setQuestion('');
                break;

            case 'delete':
                if (question !== '') {
                    const newValue = question.slice(0, -1);
                    setQuestion(newValue);
                    break;
                }
                break;

            default:
                setQuestion(`${question}${value}`);
                break;
        }
    }

    return (
        <>
            <CalculatorTile value='My Calculator' />
            <div className="text-center">
                <OutputScreen props={[question, answer]} />
                <div >
                    <Button label={'clear'} handleClick={handleButtonClick} />
                    <Button label={'delete'} handleClick={handleButtonClick} />
                    <Button label={'.'} handleClick={handleButtonClick} />
                    <Button label={'/'} handleClick={handleButtonClick} />
                </div>
                <div >
                    <Button label={7} handleClick={handleButtonClick} />
                    <Button label={8} handleClick={handleButtonClick} />
                    <Button label={9} handleClick={handleButtonClick} />
                    <Button label={'*'} handleClick={handleButtonClick} />
                </div>
                <div>
                    <Button label={4} handleClick={handleButtonClick} />
                    <Button label={5} handleClick={handleButtonClick} />
                    <Button label={6} handleClick={handleButtonClick} />
                    <Button label={'-'} handleClick={handleButtonClick} />
                </div>
                <div>
                    <Button label={1} handleClick={handleButtonClick} />
                    <Button label={2} handleClick={handleButtonClick} />
                    <Button label={3} handleClick={handleButtonClick} />
                    <Button label={'+'} handleClick={handleButtonClick} />
                </div>
                <div>
                    <Button label={0} handleClick={handleButtonClick} />
                    <Button label={'='} handleClick={handleButtonClick} />
                </div>
            </div>
        </>
    )
}