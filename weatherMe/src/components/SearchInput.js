import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';


const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState('')
    
    return <View>
        <Input 
            label='Search'
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCapitalize='none'
            autoCorrect={false}
        />
    </View> 
    
}

const styles = StyleSheet.create({

});

export default SearchInput;