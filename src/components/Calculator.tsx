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

    interface ButtonInterface {
        id: string,
        className: string,
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void, 
        style:React.CSSProperties;
    }

    const buttonsList: ButtonInterface[] = [
        {id:"AC", className:"bg-blue-500 text-white rounded-lg p-2", onClick: clear, style:buttonStyle},
        {id:"DE", className:"bg-blue-500 text-white rounded-lg p-2", onClick:deleteEl, style:buttonStyle},
        {id:".", className:"bg-blue-500 text-white rounded-lg p-2", onClick: handleClick, style:buttonStyle},
        {id:"/", className:"bg-blue-500 text-white rounded-lg p-2", onClick: handleClick, style:buttonStyle},

        {id:"7", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick: handleClick, style:buttonStyle},
        {id:"8", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick: handleClick, style:buttonStyle},
        {id:"9", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick: handleClick, style:buttonStyle},

        {id:"*", className:"bg-blue-500 text-white rounded-lg p-2", onClick:handleClick, style:buttonStyle},

        {id:"4", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},
        {id:"5", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},
        {id:"6", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},

        {id:"-", className:"bg-blue-500 text-white rounded-lg p-2", onClick:handleClick, style:buttonStyle},

        {id:"1", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},
        {id:"2", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},
        {id:"3", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},

        {id:"+", className:"bg-blue-500 text-white rounded-lg p-2", onClick:handleClick, style:buttonStyle},

        {id:"00", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},
        {id:"0", className:"bg-slate-300 text-blue-700 rounded-lg p-2", onClick:handleClick, style:buttonStyle},

        {id:"=", className:"bg-blue-500 text-white rounded-lg p-2", onClick:calculate, style:buttonStyle},
    ]

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
            {buttonsList.map(({ id, className, onClick, style }) => (
                <button 
                    key={id} 
                    id={id}
                    className={className} 
                    onClick={onClick} 
                    style={style}
                >
                    {id}
                </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
