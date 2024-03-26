import {Button, Dimensions, Image, View} from "react-native";
import {StyleSheet} from "react-native-web";
import Form from "./components/Form";

export default function App() {
	return (
		<View>
			{/* Ajouts d'un Component Image pour pouvoir intégrer l'image en Haut */}
			<Image source={require("./assets/images/img.png")} style={styles.img}/>
			{/* Ajout du component Form ainsi que parametrage des paramters/props :
				- title : Titre du formulaire
				- content : Contenu du formulaire :
					- 4 inputs : [First Name, Last Name, Email, Website
					- 1 selector : Age :
					    min : 0
					    max : 100 */}
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
			{/* Ajouts du bouton Register */}
			<Button title={"Register"}/>
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