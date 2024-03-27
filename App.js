import {Button, Image, View} from "react-native";
import Form from "./components/Form";
import styles from "./styles/Styles";

export default function App() {
	return (
		<View style={styles.container}>
			<Image source={require("./assets/images/img.png")} style={styles.img}/>
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
			<Button title={"Register"}/>
		</View>
	);
}
