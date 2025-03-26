import { Image, Linking, Text, View } from 'react-native'

export function Article({ articleContent }: any) {
  console.log(articleContent.image_url)
  return (
    <View>
      <Text>{articleContent.title}</Text>
      <Image source={{ uri: articleContent.image_url }}></Image>
      <Text>{articleContent.news_site}</Text>
      <Text>{articleContent.summary}</Text>
      <Text
        style={{ color: 'blue' }}
        onPress={() => Linking.openURL(articleContent.url)}
      >
        Read full article
      </Text>
    </View>
  )
}
