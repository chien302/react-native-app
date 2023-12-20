import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { ConfigColor } from "../utils/ConfigColor";
const SearchInput = ({ clicked, searchInputValue, onChangeSearchInputValue, onSubmitEditing }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={18}
          color={ConfigColor.GREY}
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={searchInputValue}
          onChangeText={onChangeSearchInputValue}
          placeholderTextColor={ConfigColor.BLACK}
          returnKeyType="go"
          onSubmitEditing={onSubmitEditing}

        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            setSearchPhrase("")
          }} />
        )}
      </View>

    </View>
  )
}

export default SearchInput
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "full",

  },

  searchBar__clicked: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    marginLeft: 5,
    width: "90%",
    color: ConfigColor.BLACK
  },
});