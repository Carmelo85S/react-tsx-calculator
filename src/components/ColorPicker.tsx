interface ColorPickerProps {
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
    buttonColor: string;
    setButtonColor: (color: string) => void;
    color: string;
    setColor: (color: string) => void;
    resultColor: string;
    setResultColor: (color: string) => void;
  }
  
  const ColorPicker = ({
    backgroundColor, setBackgroundColor,
    buttonColor, setButtonColor,
    color, setColor,
    resultColor, setResultColor
  }: ColorPickerProps) => {
  
    const colorOptions = [
        { 
            id: "BackgroundColor",
            label: "Background Color", 
            value: backgroundColor, 
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setBackgroundColor(e.target.value) 
        },
        { 
            id: "ButtonColor", 
            label: "Button Color", 
            value: buttonColor, 
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setButtonColor(e.target.value) 
        },
        { 
            id: "TextColor", 
            label: "Text Color", 
            value: color, 
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value) 
        },
        { 
            id: "ResultColor", 
            label: "Result Color", 
            value: resultColor, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setResultColor(e.target.value) 
        },
      ];
    
    return (
      <section className="flex justify-center items-center flex-row py-10">
        {colorOptions.map(({ id, label, value, onChange }) => (
          <div key={id} className="py-4 px-5 flex justify-center items-center flex-col">
            <label className="text-white" htmlFor={id}>{label}</label>
            <input
              className="w-12 h-12 cursor-pointer border-2 border-gray-300 rounded-lg"
              type="color"
              id={id}
              value={value}
              onChange={onChange}
            />
          </div>
        ))}
      </section>
    );
  };
  
  export default ColorPicker;
  