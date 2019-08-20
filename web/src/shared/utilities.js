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

  static  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "Expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  static getCookie(cname) {
    try{
        let name = cname + "=";
        let decodedCookie;
        decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
    } catch (e) {
        console.log("ERROR: While getting cookie: ", e.toString());
    }

    return "";
}


}

export default Utilities;
