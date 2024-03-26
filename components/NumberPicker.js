import {Button, Text, View} from "react-native";
import {useState} from "react";

const NumberPicker = (props) => {
    let [counter, setCounter] = useState(0);

    return (
        <View>
            <Text>
                <Button title={"+"} onPress={() => {
                    if(counter + 1 <= props.max)
                        setCounter(counter + 1)
                }}/>
                {counter}
                <Button title={"-"} onPress={() => {
                    if(counter - 1 >= props.min)
                        setCounter(counter - 1)
                }}/>
            </Text>
        </View>
    );
}

export default NumberPicker;