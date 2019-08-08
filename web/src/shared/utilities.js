// import { Alert } from 'react-native'

class Utilities {
	static removeNulls(object) {
		for (const key of Object.keys(object)) {
			if (object.hasOwnProperty(key)) {
				const value = object[key];

				if (value === null) {
					object[key] = "";
				} else if (value instanceof Object) {
					object[key] = this.removeNulls(object[key]);
				}
			}
		}

		return object;
	}

	// static showAlert = (msg) => {
	// 	Alert.alert(
	// 		'Alert Title',
	// 		'My Alert Msg',
	// 		[
	// 			{ text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
	// 			{
	// 				text: 'Cancel',
	// 				onPress: () => console.log('Cancel Pressed'),
	// 				style: 'cancel',
	// 			},
	// 			{ text: 'OK', onPress: () => console.log('OK Pressed') },
	// 		],
	// 		{ cancelable: false },
	// 	);
	// }

	static showLimitedChars = (string, limit) => {
		if (string.length > limit) string = string.substring(0, limit)+'...';
		return string;
	}


}

export default Utilities;
