import {Component} from "react";
import {Text, TextInput, View} from "react-native";
import {StyleSheet} from "react-native-web";
import NumberPicker from "./NumberPicker";
import BouncyCheckbox from "react-native-bouncy-checkbox";

class Form extends Component {
	inputs = [];
	selectors = [];

	state = {}

	/**
	 * Constructor
	 * @param props Parameters of this Component
	 */
	constructor(props) {
		super(props);
		// On créer une variable qui permet de stocker le contenu du paramètre content
		let content = this.props.content;

		// On créer un id qui permettra de définir une clé a chaqu'un des inputs
		let key = 0;

		// On récupère chaques valeur dans le tableau input
		for(const input of content.input) {
			// Création d'un Component TextInput
			let newInput = <TextInput
				placeholder={input}
				key={key}
				style={styles.input}
				inputMode={"email"}
				onChangeText={async(text) => {
					// Quand le texte change on met a jour la variable state avec l'id de l'inputText et sa valeur
					this.setState({[key]: text})
				}}/>

			//Ajouts du nouveau Component dans le tableau d'inputs
			this.inputs.push(newInput);

			// Incrémentation de l'id
			key++;
		}

		// Pour chaque valeurs contenu dans le selector on récupère : [Name, {value}]
		/**
		 * Exemple :
		 * selector: {
		 *   "Age": {
		 *     min: 0,
		 *     max: 100,
		 *   },
		 * }
		 *
		 * name = Age
		 * value = {
		 *     min: 0,
		 *     max: 100,
		 * }
		 */
		for(const [name, value] of Object.entries(content.selector)) {
			// Création d'un Component NumberPicker qui contient 1 text, le "name" avec " : ", auquel on a ajouté le Number Picker
			let numberPicker = <Text
				key={key++}
				style={{textAlign: "center"}}>
				{name + " : "}
				<NumberPicker
					min={value.min}
					max={value.max}/>
			</Text>
			// Ajouts du number picker dans le tableau selectors
			this.selectors.push(numberPicker);
		}
	}

	// On render les éléments
	render() {
		return (
			<View>
				{/* On ajoute le title */}
				<Text style={styles.title}>{this.props.title}</Text>
				{/* On ajoute le tableau d'inputs */}
				{this.inputs}
				{/* On ajoute le tableau de selectors */}
				{this.selectors}
				{/* On ajoute la checkBox ainsi que le text */}
				<Text><BouncyCheckbox onPress={(isChecked) => {
					console.log(this.state)
				}}/>Agree with Terms & Conditions</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		marginLeft: 40,
		marginBottom: 25,
	},
	input: {
		backgroundColor: "white",
		border: "2px solid #1057CA",
		placeholderTextColor: "#ACACAC",
		paddingTop: 15,
		paddingLeft: 15,
		paddingBottom: 15,
		borderRadius: "7px",
		marginLeft: 40,
		marginRight: 40,
		marginTop: 25,
	}
});

export default Form;