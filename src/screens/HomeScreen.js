import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabsHomeScreen from "../components/HomeScreenTabs";
import ProfileContainer from "../components/UserInfoContainer";
import GiveRewardModal from "../components/GiveRewardModal";
import FloatingButton from "../common/FloatingButton";

import Data from "../res/dataFile";
import { PlusIcon } from "../../assets/icons";

const HomeScreen = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [feedsList, setFeedList] = useState(Data.feedsList);
  const [myRewardsList, setMyRewardsList] = useState(Data.myRewardsList);
  const [rewardAmount, setRewardAmount] = useState(Data.userData.rewardsGiven);

  const onActionButton = () => {
    setModalStatus(!modalStatus);
  };
  const onGiveReward = (newReward) => {
    setRewardAmount(rewardAmount + parseInt(newReward.amount));
    setFeedList((prevList) => [...prevList, newReward]);
    setMyRewardsList((prevList) => [...prevList, newReward]);
  };

  return (
    <>
      <NavigationContainer>
        <ProfileContainer newRewardAmount={rewardAmount} />
        <TabsHomeScreen feedData={feedsList} myRewardData={myRewardsList} />
      </NavigationContainer>

      {modalStatus && (
        <GiveRewardModal
          isVisible={modalStatus}
          closeModal={onActionButton}
          onGiveReward={onGiveReward}
        />
      )}
      <FloatingButton onButtonPress={onActionButton} icon={<PlusIcon />} />
    </>
  );
};

export default HomeScreen;
