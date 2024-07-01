import { ChangeEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "./styles.css";

export const Home = () => {
  const [number1, setNumber1] = useState<string>("");
  const [number2, setNumber2] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [history, setHistory] = useState<string[]>([]);
  console.log("🚀 ~ Home ~ history:", history);

  const handleChangeNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setNumber1(value);
  };

  const handleChangeNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setNumber2(value);
  };

  const handleAddHistory = (operation: string) => {
    setHistory([...history, `${number1} ${operation} ${number2}`]);
  };

  const handleAddition = () => {
    const calcResult: number = Number(number1) + Number(number2);

    setResult(calcResult);
    handleAddHistory("+");
  };

  const handleSubtraction = () => {
    const calcResult: number = Number(number1) - Number(number2);

    setResult(calcResult);
    handleAddHistory("-");
  };

  const handleMultiply = () => {
    const calcResult: number = Number(number1) * Number(number2);

    setResult(calcResult);
    handleAddHistory("*");
  };

  const handleDivision = () => {
    const calcResult: number = Number(number1) / Number(number2);

    setResult(calcResult);
    handleAddHistory("/");
  };

  const handleReset = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <div className="body">
        <div className="inputs-container">
          <Input
            label="Número 1"
            name="number1"
            type="number"
            onChange={handleChangeNumber1}
            value={number1}
          />

          <Input
            label="Número 2"
            name="number2"
            type="number"
            onChange={handleChangeNumber2}
            value={number2}
          />
        </div>

        <div className="result-container">
          <p>Resultado</p>

          <span>{result}</span>
        </div>
      </div>

      <span className="exec-operation">Executar operação: </span>

      <div className="btn-container">
        <Button onClick={handleAddition}>Adição</Button>

        <Button onClick={handleSubtraction}>Subtração</Button>

        <Button onClick={handleMultiply}>Multiplicação</Button>

        <Button onClick={handleDivision}>Divisão</Button>
      </div>

      <div className="history">
        <div className="title-container">
          <h2>Histórico:</h2>

          <Button onClick={handleReset}>Reset</Button>
        </div>

        {history.length === 0 && (
          <div className="no-history">
            <span>Nenhum histórico ainda</span>
          </div>
        )}

        <ul>
          {history.map((operation) => (
            <li key={operation}>{operation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
