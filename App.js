import {Button, Image, View} from "react-native";
import Form from "./components/Form";
import styles from "./styles/Styles";
import {useState} from "react";
import axios from "axios";


export default function App() {
	// Création de l'état infos
	const [infos, setInfos] = useState({});

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
					},
				}}
				// Le paramètre onFunctionPress qui seras éxécuté quand il y aura un évènement
				onFunctionPress={(nouvelleInfo) => {
					setInfos({...infos, ...nouvelleInfo})
				}}
			/>
			<Button title={"Register"} onPress={() => {
				console.log("Informations : ")
				console.log(infos);

				axios.get('https://emailvalidation.abstractapi.com/v1/?api_key=7dc8281dfa3f417e890339cc2b75bad6&email=antonindosouto@gmail.com')
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					});
				console.log("test")
			}}/>
		</View>
	);
}