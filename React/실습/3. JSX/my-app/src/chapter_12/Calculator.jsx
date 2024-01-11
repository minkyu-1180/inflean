import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물 끓어요</p>;
    } else {
        return <p>안끓어요;</p>;
    }
}

function toCelsius(f) {
    return (f-32)*5/9;
}

function toFahrenheit(c) {
    return (c * 9/5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;

    return rounded.toString();
}

// temperature와 scale를 설정하여 온도 값과 단위 각각 저장
// 이 온도와 단위를 이용하여 변환 함수를 통해 섭씨온도와 화씨온도를 구해서 사용
function Calculator(props) {
	const [temperature, setTemperature] = useState('');
  	const [scale, setScale] = useState('c');
  
  	const handleCelsiusChange = (temperature) => {
      	setTemperature(temperature);
      	setScale('c');
    }
    
    const handleFahrenheitChange = (temperature) => {
      	setTemperature(temperature);
      	setScale('f');
    }
    
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
  	return (
      	<div>
      		{/* // 각 단위로 변환된 온도 값과 단위를 Props 값에 넣어줌
      		// 값이 변경될 때 Update하기 위한 함수는 onTemperatureChange에 넣어줌
      		// 섭씨온도가 변경되면 단위가 C
      		// 화씨온도가 변경되면 단위가 f */}
      		<TemperatureInput
      			scale="c"
      			temperature={celsius}
				onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={handleFahrenheitChange} />
             <BoilingVerdict
				celsius={parseFloat(celsius)} />
         </div>
    );
}
export default Calculator;