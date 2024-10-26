import  React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import Menu from "../components/Menu";
const PaymentMethod = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const handlePayment = () => {
    console.log("Pay Now button pressed!"); // Debug log

    // Basic error checking
    if (!name || !cardNumber || !expiryDate || !cvv || !billingAddress) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    if (cardNumber.length !== 16) {
      Alert.alert("Error", "Card number must be 16 digits.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      Alert.alert("Error", "Expiry date must be in MM/YY format.");
      return;
    }

    if (cvv.length !== 3) {
      Alert.alert("Error", "CVV must be 3 digits.");
      return;
    }

    // Handle successful payment submission
    Alert.alert("Success", "Payment processed successfully!");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Menu />
      <ScrollView>
        <Text style={styles.headerText}>Payment Information</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name on Card</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={16}
            placeholderTextColor="#aaa"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfInput]}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              keyboardType="numeric"
              maxLength={5}
              placeholderTextColor="#aaa"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
          </View>

          <View style={[styles.inputContainer, styles.halfInput]}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              keyboardType="numeric"
              maxLength={3}
              secureTextEntry
              placeholderTextColor="#aaa"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Billing Address</Text>
          <TextInput
            style={styles.input}
            placeholder="123 Main St"
            placeholderTextColor="#aaa"
            value={billingAddress}
            onChangeText={setBillingAddress}
          />
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePayment} activeOpacity={0.7}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000", // Black text
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000", // Black text
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#000", // Black text
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginRight: 10,
  },
  payButton: {
    backgroundColor: "#FFD700", // Yellow button
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  payButtonText: {
    fontSize: 18,
    color: "#000", // Black text
    fontWeight: "bold",
  },
});

export default PaymentMethod;
