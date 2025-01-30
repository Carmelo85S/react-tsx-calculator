import { useState } from 'react';
import Calculator from './components/Calculator';
import ColorPicker from './components/ColorPicker';

const App = () => {

  //Variable to store color for different parts of Calculator component
  const [backgroundColor, setBackgroundColor] = useState<string>("blue");
  const [buttonColor, setButtonColor] = useState<string>("orange");
  const [color, setColor] = useState<string>("yellow");
  const [resultColor, setResultColor] = useState<string>("white");

  return (
    <main className="p-0 m-0 bg-slate-800 flex justify-center items-center flex-col-reverse h-screen">

    {/*Allow user to customize Calculator component*/}
      <ColorPicker 
        backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
        buttonColor={buttonColor} setButtonColor={setButtonColor}
        color={color} setColor={setColor}
        resultColor={resultColor} setResultColor={setResultColor}
      />
      {/*Calculator component receive color props*/}
      <Calculator
        backgroundColor={backgroundColor}
        color={color}
        buttonColor={buttonColor}
        resultColor={resultColor} 
      />
    </main>
  );
};

export default App;
