import React, { useState } from 'react';

const ComponentSelector = ({ name, options, selectedOption, onSelect }) => {
  return (
    <div>
      <h3>{name}</h3>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{ 
            backgroundColor: selectedOption?.name === option.name ? 'lightgreen' : 'lightgrey',
            margin: '5px',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {option.name} - {option.price} HUF
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const [processor, setProcessor] = useState(null);
  const [memory, setMemory] = useState(null);
  const [motherboard, setMotherBoard] = useState(null);
  const [tapegyseg, setTapegyseg] = useState(null);
  const [SSD, setSSD] = useState(null);
  const [GPU, setGPU] = useState(null);

  const processors = [
    { name: 'Intel i5', price: 50000 },
    { name: 'Intel i7', price: 75000 },
  ];
 
  const memories = [
    { name: '8GB RAM', price: 12000 },
    { name: '16GB RAM', price: 25000 },
  ];

  const motherboards = [
    { name: "MSI", price: 30000 },
    { name: "AMD", price: 20000 }
  ]

  const tapegysegek = [
    {name: "400 W", price: 20000},
    {name: "600 W", price: 25000}
  ]

  const SSDs = [
    {name: "1 TB", price: 50000},
    {name: "2 TB", price: 100000}
  ]

  const GPUs = [
    {name: "Nvidia 5000", price: 200000},
    {name: "AMD 10000", price: 100000}
  ]

  const totalPrice = (processor?.price || 0) + (memory?.price || 0) + (motherboard?.price || 0) + (tapegyseg?.price || 0) + (SSD?.price || 0) + (GPU?.price || 0);

  return (
    <div>
      <h2>Számítógép összeszerelő app</h2>
      <ComponentSelector
        name="Processzor"
        options={processors}
        selectedOption={processor}
        onSelect={setProcessor}
      />
      <ComponentSelector
        name="Memória"
        options={memories}
        selectedOption={memory}
        onSelect={setMemory}
      />
      <ComponentSelector
        name="Alaplap"
        options={motherboards}
        selectedOption={motherboard}
        onSelect={setMotherBoard}
      />
      <ComponentSelector
        name="Tápegység"
        options={tapegysegek}
        selectedOption={tapegyseg}
        onSelect={setTapegyseg}
      />
      <ComponentSelector
        name="SSD"
        options={SSDs}
        selectedOption={SSD}
        onSelect={setSSD}
      />
       <ComponentSelector
        name="Videókártya"
        options={GPUs}
        selectedOption={GPU}
        onSelect={setGPU}
      />
      <h3>Teljes ár: {totalPrice} HUF</h3>
    </div>
  );
};

export default App;