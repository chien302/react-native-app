import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { ConfigColor } from '../utils/ConfigColor'
import { getStringData } from '../utils/HandleAsyncStorage'
import { AuthContext } from '../contexts/AuthContext'

const Message = ({ message }) => {
  const { user } = useContext(AuthContext)

  const getAuthId = async () => {
    const authId = await getStringData('currentUserId')
    return authId
  }
  console.log('getAuthId')
  console.log(user)
  console.log('message')
  console.log(message)
  return (
    <View>

      <View style={{
        flexDirection: 'row',
        justifyContent: user?.id === message?.sender?.id && 'flex-end',
      }}>
        {user?.id === message?.sender?.id ?
          '' :
          (
            <Image style={{ height: 30, width: 30, borderRadius: 999, marginRight: 10 }} src={message?.sender?.avatar?.url} />
          )}
        <Text
          style={{ color: ConfigColor.BLACK, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: 'grey', color: ConfigColor.WHITE, borderRadius: 20 }}
        >
          {message?.content[0]}
        </Text>
      </View>

    </View>
  )
}

export default Message