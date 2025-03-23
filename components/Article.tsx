import { View, Text, StyleSheet } from "react-native";

type Props = {
    title: string
    authors: {name: string; socials: object[]}[]
    news_site: string
}

export function Article({title, authors, news_site}: Props) {
  return (
    <View style={ArticleStyles.wrapper}>
        <Text style={ArticleStyles.title}>{title}</Text>
        <Text style={ArticleStyles.authors}>{news_site}</Text>
        <Text style={ArticleStyles.authors}>Authors: {authors?.map((author) => author.name).join(', ')}</Text>
    </View>
  )
}

const ArticleStyles = StyleSheet.create({
    wrapper: {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    title: {
        fontSize: 24
    },
    authors: {
        fontSize: 16
    }
})
