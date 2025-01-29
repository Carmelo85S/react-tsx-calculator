import { useState } from 'react';
import Calculator from './components/Calculator';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("blue");
  const [buttonColor, setButtonColor] = useState<string>("orange");
  const [color, setColor] = useState<string>("yellow");
  const [resultColor, setResultColor] = useState<string>("white");

  return (
    <section className="p-0 m-0 bg-slate-800 flex justify-center items-center flex-col-reverse h-screen">

      <ColorPicker 
        backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
        buttonColor={buttonColor} setButtonColor={setButtonColor}
        color={color} setColor={setColor}
        resultColor={resultColor} setResultColor={setResultColor}
      />
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
