import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { ConfigColor } from "../utils/ConfigColor";
const SearchInput = ({ clicked, searchInputValue, setSearchInputValue }) => {
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
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={searchInputValue}
          onChangeText={setSearchInputValue}
          placeholderTextColor={ConfigColor.BLACK}

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
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "full",

  },

  searchBar__clicked: {
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: ConfigColor.BLACK
  },
});