import { StyleSheet } from 'react-native';
import colors from "../../constants/color";

const style = StyleSheet.create({
    renderItemStyle: {
        height: 60,
        flexDirection: 'row',
        marginBottom: 25,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-around",
        shadowColor: 'center',
        shadowOpacity: 0.3,
        textShadowOffset : {width:0, height: 1},
        shadowRadius: 2,
        elevation: 3,
    },
    fontName:{
        fontFamily: 'Shoulder',
        fontSize: 20,
    },
    trash: {
        width: 30,
        height: 30,
        justifyContent: 'flex-end',
    },
})


export default style