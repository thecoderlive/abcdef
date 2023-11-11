import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import HomeFeed from './HomeFeed'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<HomeFeed item={item.home_feed}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({

});