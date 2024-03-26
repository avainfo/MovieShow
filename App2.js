import {Button, Dimensions, Image, View} from "react-native";
import {StyleSheet} from "react-native-web";
import Form from "./components/Form";

export default function App2() {
    return (
        <View>
            <View style={styles.container}>
                <Image source={require("./assets/images/img.png")} style={styles.img}/>
            </View>
            <View style={styles.container}>
                <Form
                    title={"Registration"}
                    content={{
                    input: ["First Name", "Last Name", "Email", "Website"],
                    selector: {
                        "Age": {
                            min: 0,
                            max: 100,
                        },
                    }
                }}/>
            </View>
            <View style={styles.container}>
                <Button title={"Register"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
    },
    img: {
        width: Dimensions.get('window').width,
        height: 140
    },
})