import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { UserData } from './SignIn'
import { useGetNews } from '../api/useGetNews'
import { ArticleItem } from '../components/ArticleItem'

export const Home = ({ setIsAuth, setArticleContent }: any) => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
  })
  const [isPageLoading, setIsPageLoading] = useState(true)

  const { data: news, isLoading, fetchNextPage } = useGetNews()

  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((data) => (data !== null ? setUserData(JSON.parse(data)) : null))
      .finally(() => setIsPageLoading(false))
  }, [])

  const handleLeave = async () => {
    await AsyncStorage.removeItem('userData')
    setIsAuth(false)
  }

  if (isPageLoading || isLoading)
    return (
      <View style={HomeStyles.loader}>
        <ActivityIndicator size={'large'} />
      </View>
    )

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('../assets/Background.png')}
    >
      <View style={HomeStyles.wrapper}>
        <Text style={HomeStyles.header}>Welcome, {userData.name}</Text>
        <Button
          onPress={handleLeave}
          title='Leave'
        />
        <FlatList
          style={HomeStyles.list}
          data={news?.pages.map((page) => page.results).flat()}
          onEndReached={() => fetchNextPage()}
          keyExtractor={(_, index) => index.toString()}
          onEndReachedThreshold={0.4}
          renderItem={({ item }) => (
            <ArticleItem
              key={item.id}
              item={item}
              setArticleContent={setArticleContent}
            />
          )}
        ></FlatList>
      </View>
    </ImageBackground>
  )
}

const HomeStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
    height: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 5,
    color: '#FFF',
  },
  loader: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
})
