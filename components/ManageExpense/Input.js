import { Text, TextInput, View, StyleSheet } from "react-native";
import { GlobalStyles } from '../../constants/styles';

function Input({label, textInputConfig, style, invalid }){

    const inputStyles = [styles.input]; 

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }

    if(invalid){
        inputStyles.push(styles.invalidInput);
    }

    return(
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 10,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel:{
        color: GlobalStyles.colors.error500,
        fontWeight: 'bold',
    },
    invalidInput:{
        backgroundColor: GlobalStyles.colors.error500,
        fontWeight: 'bold',
    }
});