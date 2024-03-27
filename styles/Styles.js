import {StyleSheet} from "react-native-web";
import {Dimensions} from "react-native";

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "red",
	},
	img: {
		width: Dimensions.get('window').width,
		height: 140
	},
});

export default styles;