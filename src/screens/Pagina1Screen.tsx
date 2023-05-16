import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text,Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }



const Pagina1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 1</Text>
            <Button
                title="Ir a pagina 2"
                onPress={() => navigation.navigate('Pagina2Screen')}

            />

        </View>
    );
};



export default Pagina1Screen;
