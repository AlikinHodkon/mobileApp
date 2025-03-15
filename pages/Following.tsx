import { StyleSheet, Text, View } from "react-native"

export const Following = () => {
  
    return (
      <View>
        <View style={HomeStyles.wrapper}>
            <Text style={HomeStyles.header}>Welcome, to the following</Text>
        </View>
      </View>
    )
  }
  
  const HomeStyles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: 'auto',
      height: '100%'
    },
    header: {
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 5
    }
  })