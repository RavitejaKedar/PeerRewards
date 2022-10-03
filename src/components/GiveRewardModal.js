import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import uuid from "react-native-uuid";

import FloatingButton from "../common/FloatingButton";
import InputElement from "../common/InputElement";
import { CloseIcon } from "../../assets/icons";

import font from "../res/font";
import palette from "../res/palette";
import strings from "../res/strings";

const GiveRewardModal = (props) => {
  const { closeModal, isVisible, onGiveReward } = props;

  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [isValidInput, setIsValidInput] = useState({
    recipientName: true,
    message: true,
    amount: true,
  });

  const onGiveButton = () => {
    setIsValidInput({
      ...isValidInput,
      recipientName: recipientName ? true : false,
      message: message ? true : false,
      amount: amount ? true : false,
    });

    if (recipientName && amount && message) {
      const newReward = {
        id: uuid.v4(),
        imageUrl: "https://picsum.photos/200",
        sender: "Robert Redford",
        message: message,
        amount: amount,
        recipient: recipientName,
        timeStamp: new Date().getTime(),
      };

      onGiveReward(newReward);
      closeModal();
    }
  };

  const onCloseButton = () => {
    closeModal();
  };

  const inputItems = [
    {
      id: strings.modal.inputOne,
      returnValue: setRecipientName,
      value: recipientName,
      type: "string",
      label: strings.modal.inputOne,
      numberOfLines: 1,
      inputHeight: 40,
      isMultiline: false,
      isValid: isValidInput.recipientName,
    },
    {
      id: strings.modal.inputTwo,
      returnValue: setAmount,
      value: amount,
      type: "numeric",
      label: strings.modal.inputTwo,
      numberOfLines: 1,
      inputHeight: 40,
      isMultiline: false,
      isValid: isValidInput.amount,
    },
    {
      id: strings.modal.inputThree,
      returnValue: setMessage,
      value: message,
      type: strings.modal.inputThree,
      label: "Message",
      numberOfLines: 4,
      inputHeight: 100,
      isMultiline: true,
      isValid: isValidInput.message,
    },
  ];

  const renderInputList = inputItems.map((itemContent) => {
    return <InputElement props={itemContent} key={itemContent.id} />;
  });

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onCloseButton}
      transparent={true}
      style={styles.flexOne}
    >
      <KeyboardAvoidingView
        style={styles.flexOne}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView style={styles.flexOne}>
          <Pressable
            style={styles.outsideModal}
            onPress={(event) => {
              if (event.target == event.currentTarget) {
                onCloseButton();
              }
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.header}>{strings.modal.header}</Text>
              {renderInputList}
              <TouchableOpacity
                style={styles.giveButton}
                onPress={onGiveButton}
              >
                <Text style={styles.giveButtonText}>
                  {strings.modal.giveButton}
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
          <FloatingButton onButtonPress={onCloseButton} icon={<CloseIcon />} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default GiveRewardModal;

const windowHeight = Dimensions.get("window").height;
const modalTopMargin = windowHeight / 7;
const modalHeight = windowHeight - modalTopMargin;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginTop: modalTopMargin,
    alignItems: "center",
    backgroundColor: palette.black,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 14,
    shadowColor: palette.black,
    height: modalHeight,
    padding: 30,
  },
  header: {
    color: palette.white,
    fontSize: font.size.font26,
  },

  flexOne: {
    flex: 1,
  },

  outsideModal: {
    flex: 1,
  },
  giveButton: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 30,
    elevation: 14,
    borderRadius: 25,
    backgroundColor: palette.white,
    height: 45,
    width: "70%",
  },
  giveButtonText: {
    fontSize: font.size.font19,
    color: palette.black,
    fontWeight: font.weight.semi,
    alignItems: "center",
    padding: 8,
  },
});
