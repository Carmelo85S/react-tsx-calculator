import { useState } from 'react';

type CalculatorProps = {
  backgroundColor: string;
  buttonColor: string;
  color: string;
  resultColor: string;
}

const Calculator = ({ backgroundColor, buttonColor, color, resultColor }: CalculatorProps): JSX.Element => {
  const [result, setResult] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setResult(result.concat(e.currentTarget.id));
  };

  const clear = (): void => setResult("");

  const deleteEl = (): void => setResult(result.slice(0, -1));

  const calculate = (): void => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: color
  };

  return (
    <div className="bg-blue-700 w-80 mx-auto mt-10 p-8 rounded-lg" style={{ backgroundColor: backgroundColor }}>
      <input 
        className="w-full text-right py-2 px-5 text-2xl text-white bg-white border border-gray-500 rounded-md"
        type="text" 
        value={result} 
        disabled 
        style={{ color: resultColor }} 
      />

      <div className="grid grid-cols-4 gap-4 mt-4">
        <button className="bg-blue-500 text-white rounded-lg p-2" onClick={clear} style={buttonStyle}>AC</button>
        <button className="bg-blue-500 text-white rounded-lg p-2" onClick={deleteEl} style={buttonStyle}>DE</button>

        <button id="." className="bg-blue-500 text-white rounded-lg p-2" onClick={handleClick} style={buttonStyle}>.</button>
        <button id="/" className="bg-blue-500 text-white rounded-lg p-2" onClick={handleClick} style={buttonStyle}>/</button>

        <button id="7" className=" bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>7</button>
        <button id="8" className=" bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>8</button>
        <button id="9" className=" bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>9</button>

        <button id="*" className="bg-blue-500 text-white rounded-lg p-2" onClick={handleClick} style={buttonStyle}>*</button>

        <button id="4" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>4</button>
        <button id="5" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>5</button>
        <button id="6" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>6</button>

        <button id="-" className="bg-blue-500 text-white rounded-lg p-2" onClick={handleClick} style={buttonStyle}>-</button>

        <button id="1" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>1</button>
        <button id="2" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>2</button>
        <button id="3" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>3</button>

        <button id="+" className="bg-blue-500 text-white rounded-lg p-2" onClick={handleClick} style={buttonStyle}>+</button>

        <button id="00" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>00</button>
        <button id="0" className="bg-slate-300 text-blue-700 rounded-lg p-2" onClick={handleClick} style={buttonStyle}>0</button>

        <button id="=" className="bg-blue-500 text-white rounded-lg p-2 col-span-2" onClick={calculate} style={buttonStyle}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
