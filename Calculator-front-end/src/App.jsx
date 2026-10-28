import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState('0');
  const [num1, setNum1] = useState(null);
  const [operation, setOperation] = useState(null);
  const [num2, setNum2] = useState(false);

  const handleNumber = (num) => {
    if (input === '0' || num2) {
      setInput(String(num));
      setNum2(false);
    } else {
      setInput((prev) => prev + String(num));
    }
  };

  const handleOperator = (sum) => {
    setNum1(input);
    setOperation(sum);
    setNum2(true);
  };

  const getSum = async () => {
    if (!operation || num1 === null) return;

    try {
      const res = await axios.get(
        `https://backend-projects-five.vercel.app/${operation}/${num1}/${input}`
      );
      if (res.data.success) {
        setInput((res.data.data));
        setNum1(null);
        setOperation(null);
        setNum2(true);
      } else {
        setInput('Error');
      }
    } catch (err) {
      console.error(err);
      setInput('Error');
    }
  };


  const handleClear = () => {
    setInput('0');
    setNum1(null);
    setOperation(null);
    setNum2(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="flex flex-col bg-white p-2 gap-2 ">
        <input
          type="text"
          readOnly
          value={input}
          className="bg-amber-50 p-3 outline-none m-2"
        />

        <div className="grid grid-cols-3 pl-8">
          <button
            onClick={handleClear}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            AC
          </button>
          <button
            onClick={() => handleOperator('percentage')}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            %
          </button>
          <button
            onClick={() => handleOperator('divide')}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            ÷
          </button>
  
          <button
            onClick={() => handleNumber(7)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            7
          </button>
          
          <button
            onClick={() => handleNumber(8)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            8
          </button>
          <button
            onClick={() => handleOperator('multiply')}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            ×
          </button>

          <button
            onClick={() => handleNumber(9)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            9
          </button>
          
            <button
            onClick={() => handleNumber(4)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"

          >
            4
          </button>
  
            <button
            onClick={() => handleOperator('add')}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            +
          </button>

         
          <button
            onClick={() => handleNumber(5)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            5
          </button>

          

          <button
            onClick={() => handleNumber(6)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            6
          </button>

           <button
            onClick={() => handleOperator('sub')}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            −
          </button>
         

          <button
            onClick={() => handleNumber(1)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            1
          </button>
           
          <button
            onClick={() => handleNumber(2)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            2
          </button>

          <button
            onClick={getSum}
            className="bg-orange-300 rounded-full w-8 h-8 p-1 m-1 hover:bg-orange-200 active:bg-orange-400"
          >
            =
          </button>

          <button
            onClick={() => handleNumber(3)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            3
          </button>
        

          {/* Bottom Row: 0 and Equals */}
          <button
            onClick={() => handleNumber(0)}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            0
          </button>

          <button
            onClick={() => handleNumber('.')}
            className="bg-amber-200 rounded-full w-8 h-8 p-1 m-1 hover:bg-amber-100 active:bg-amber-300"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;