import { useState } from 'react';
import Calculator from './components/Calculator';

const App = () => {

  const [backgroundColor, setBackgroundColor] = useState<string>("blue");
  const [buttonColor, setButtonColor] = useState<string>("orange");
  const [color, setColor] = useState<string>("yellow");
  const [resultColor, setResultColor] = useState<string>("white");

  const changeBackgroundColor = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setBackgroundColor(e.target.value);
  }

  const changeButtonColor = (e: React.ChangeEvent<HTMLInputElement>):void =>{
    setButtonColor(e.target.value);
  }

  const changeTextColor = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setColor(e.target.value);
  }

  const changeResultColor = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setResultColor(e.target.value);
  }

  const colorOptions = [
    { id: "BackgroundColor", label: "Background Color", value: backgroundColor, onChange: changeBackgroundColor },
    { id: "ButtonColor", label: "Button Color", value: buttonColor, onChange: changeButtonColor },
    { id: "TextColor", label: "Text Color", value: color, onChange: changeTextColor },
    { id: "ResultColor", label: "Result Color", value: resultColor, onChange: changeResultColor },
  ];

  return (
    <section className="p0 m0 bg-slate-800 flex justify-center items-center flex-col-reverse h-screen">
      <section className="flex justify-center items-center flex-row py-10">
        {colorOptions.map(({ id, label, value, onChange }) => (
          <div key={id} className="py-4 px-5 flex justify-center items-center flex-col">
            <label className="text-white" htmlFor={id}>{label}</label>
            <input
              className="w-12 h-12 cursor-pointer border-2 border-gray-300 rounded-lg"
              type="color"
              value={value}
              onChange={onChange}
            />
          </div>
        ))}
      </section>

      <Calculator
        backgroundColor={backgroundColor}
        color={color}
        buttonColor={buttonColor}
        resultColor={resultColor} 
      />
    </section>
  );
};

export default App;
