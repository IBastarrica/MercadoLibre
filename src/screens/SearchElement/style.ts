import { StyleSheet } from 'react-native';
import colors from "../../constants/color";

const style = StyleSheet.create({
    addItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchIcon: {
        position: 'absolute',
        width: 20,
        height: 20,
        padding: 1,
        margin: 5,
    }, 
    input: {
        paddingLeft: 30,
        width: 320,
        height: 32,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowOpacity: 0.1,
    },
    cart: {
        width: 25,
        height: 25,
    },
    inputContainer: {
        height: 200,
        paddingHorizontal: 30,
        paddingTop: 80,
        flex:1,
    },
    containerButton: {
        position: 'absolute',
        padding:90,
        top: 300,
        borderRadius: 20,
        backgroundColor: 'black',
    },
})

export default style;