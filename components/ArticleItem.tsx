import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  item: {
    title: string
    authors: { name: string; socials: object[] }[]
    news_site: string
  }
  setArticleContent: any
}

export function ArticleItem({ item, setArticleContent }: Props) {
  const navigation = useNavigation()
  const handlePress = () => {
    setArticleContent(item)
    navigation.navigate('Article')
  }
  return (
    <View style={ArticleStyles.wrapper}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={ArticleStyles.title}>{item.title}</Text>
        <Text style={ArticleStyles.authors}>{item.news_site}</Text>
        <Text style={ArticleStyles.authors}>
          Authors: {item.authors?.map((author) => author.name).join(', ')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const ArticleStyles = StyleSheet.create({
  wrapper: {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    marginTop: 10,
    borderRadius: 8,
    padding: 5,
    backgroundColor: 'rgba(224, 224, 224, 0.5)',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
  },
  authors: {
    color: '#FFF',
    fontSize: 16,
  },
})
