import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import {images} from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex"
    },
    image: {
        width: 40,
        height: 40
    },
    bold: {
        fontWeight: "bold"
    }
});

const { container, image, bold } = styles

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    return (
        <View style={container}>
            <Image style={styles.image} source={{url: images[symbol]}} />
            <Text>{symbol}</Text>
            <Text>{coin_name}</Text>
            <Text>{price_usd} <Text style={bold}>$</Text></Text>
            <Text>Change Past 24 hrs: {percent_change_24h}</Text>
            <Text>Change Past 7 days: {percent_change_7d}</Text>
        </View>
    )
}

export default CoinCard;