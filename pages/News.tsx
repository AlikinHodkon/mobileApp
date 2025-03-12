import { StyleSheet, Text, View } from "react-native"

export const News = () => {
  
    return (
      <View>
        <View style={HomeStyles.wrapper}>
            <Text>Welcome, to the following</Text>
        </View>
        {/* <Tabs /> */}
      </View>
    )
  }
  
  const HomeStyles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: 'auto',
      height: 'auto'
    }
  })