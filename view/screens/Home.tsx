import {
  ActivityIndicator,
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { UserStorageService } from '../../model/auth/UserStorageService'
import { useGetNews } from '../../viewmodel/hooks/useGetNews'
import { ArticleItem } from '../components/ArticleItem'
import { useUserViewModel } from '../../viewmodel/hooks/useUserViewModal'

export const Home = ({ setIsAuth, setArticleContent }: any) => {
  const { data: news, isLoading, fetchNextPage } = useGetNews()

  const { userData, isPageLoading } = useUserViewModel()

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
      source={require('../../assets/Background.png')}
    >
      <View style={HomeStyles.wrapper}>
        <Text style={HomeStyles.header}>Welcome, {userData?.name}</Text>
        <Button
          onPress={() => UserStorageService.handleLeave(setIsAuth)}
          title='Leave'
        />
        <FlatList
          style={HomeStyles.list}
          data={news?.pages.map((page) => page.results).flat()}
          onEndReached={() => fetchNextPage()}
          keyExtractor={(_, index) => index.toString()}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<ActivityIndicator size={'large'} />}
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
