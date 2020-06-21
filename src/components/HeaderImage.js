import React from 'react'
import { Image } from 'react-native'
export default function HeaderImage () {
  return (
    <Image 
      source={require('@assets/header-image.png')}
      style={{
        width: 115,
        height: 35
      }}
    />
  )
}