import {Button, Image, View} from "react-native";
import Form from "./components/Form";
import styles from "./styles/Styles";
import {useState} from "react";


export default function App() {
	// Création de l'état infos
<<<<<<< HEAD
	const [infos, setInfos] = useState({});
=======
	const [infos, setInfos] = useState({})
>>>>>>> b8b79a9b7e828d22fc9e135a5ac53d4aadeaaa68

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
				onFunctionPress={(nouvelleInfo) => {setInfos({...infos, ...nouvelleInfo})}}
			/>
			<Button title={"Register"} onPress={() => {
				console.log("Informations : ")
				console.log(infos)
			}}/>
		</View>
	);
}