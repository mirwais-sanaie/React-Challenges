import { useState } from "react";

function UnitConverter() {
  const [inputValue, setInputValue] = useState(0);
  const [inputUnit, setInputUnit] = useState("celsius");
  const [outputUnit, setOutputUnit] = useState("fahrenheit");
  const [convertedValue, setConvertedValue] = useState("");

  const conversionFactors = {
    temperature: {
      celsius: {
        fahrenheit: (value) => (value * 9) / 5 + 32,
        kelvin: (value) => value + 273.15,
      },
      fahrenheit: {
        celsius: (value) => ((value - 32) * 5) / 9,
        kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
      },
      kelvin: {
        celsius: (value) => value - 273.15,
        fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
      },
    },
    length: {
      meter: {
        foot: (value) => value * 3.2808,
        inch: (value) => value * 39.3701,
      },
      foot: {
        meter: (value) => value / 3.2808,
        inch: (value) => value * 12,
      },
      inch: {
        meter: (value) => value / 39.3701,
        foot: (value) => value / 12,
      },
    },
    weight: {
      kilogram: {
        pound: (value) => value * 2.2046,
        ounce: (value) => value * 35.2739,
      },
      pound: {
        kilogram: (value) => value / 2.2046,
        ounce: (value) => value * 16,
        // eslint-disable-next-line no-dupe-keys
        ounce: {
          kilogram: (value) => value / 35.2739,
          pound: (value) => value / 16,
        },
      },
    },
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputUnit);
    const inputUnitConversionFactor =
      conversionFactors["temperature"][inputUnit][outputUnit];
    const convertedValue = inputUnitConversionFactor(inputValue);
    setConvertedValue(convertedValue);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    if (!isNaN(value)) {
      setInputValue(Number(value));
    }
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        >
          <option value="celsius">celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <button type="submit">Convert</button>
      </form>
      <p>{convertedValue}</p>
    </div>
  );
}

export default UnitConverter;
