import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { ArticleContent } from '../../model/ArticleContent'

type Props = {
  articleContent: ArticleContent
}

export function Article({ articleContent }: Props) {
  const size = Dimensions.get('window')
  return (
    <View>
      <Text style={ArticleStyles.header}>{articleContent.title}</Text>
      <View style={{ padding: 10 }}>
        <Image
          style={{
            height: size.height / 3,
            width: size.width - 20,
          }}
          source={{ uri: articleContent.image_url }}
        />
      </View>
      <Text style={ArticleStyles.site}>{articleContent.news_site}</Text>
      <Text style={ArticleStyles.summary}>{articleContent.summary}</Text>
      <Text
        style={ArticleStyles.link}
        onPress={() => Linking.openURL(articleContent.url)}
      >
        Read full article
      </Text>
    </View>
  )
}

const ArticleStyles = StyleSheet.create({
  header: {
    fontSize: 32,
    padding: 10,
  },
  site: {
    fontSize: 12,
    textAlign: 'center',
  },
  summary: {
    fontSize: 16,
    textAlign: 'justify',
    padding: 10,
  },
  link: {
    color: 'blue',
    padding: 10,
  },
})
