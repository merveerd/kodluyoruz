const { TouchableOpacity } = require("react-native")

const CheckBox = (props) => {
    return ( //style lari css dosyasina tasi en son
        <View>
            <TouchableOpacity
                style = {{
                    width : 20,
                    height : 20,
                    borderWidth: 1.5,
                    borderColor: 'gray',
                }}>
            </TouchableOpacity>
        </View>
    )
}

export {CheckBox};
