import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../components/views/AppSafeView'
import HomeHeader from '../components/headers/HomeHeader'
import ProductCard from '../components/cards/ProductCard'
import ProductList from '../components/lists/ProductList'

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <ProductList />
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})