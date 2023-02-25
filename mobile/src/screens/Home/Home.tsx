import { SafeAreaView, ScrollView, Text } from "react-native";
import { BackgroundDefault } from "../../styles/kitUi";



export function Home(){

    return(
        <BackgroundDefault>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                <Text>Home-page</Text>
                </ScrollView>
            </SafeAreaView>
        </BackgroundDefault>

    )

}