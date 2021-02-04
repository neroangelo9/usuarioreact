import React from "react";
import { View, Modal, StyleSheet, ActivityIndicator } from "react-native";

export default function Spinner(props){
  return (
    <Modal    
      transparent={true}
      visible={true}
      onRequestClose={() => props.onClose()}
    >
      <View style={styles(props).spinnerContainer}>
        <View style={styles(props).spinner}>
          <ActivityIndicator size={props.size} color={props.color} />
        </View>
      </View>
    </Modal>
  );
};

const styles = props =>
  StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#00000080"
    },
    spinner: {
      opacity: 0.9,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.backgroundColor
    }
  });