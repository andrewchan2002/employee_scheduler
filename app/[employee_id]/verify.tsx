﻿import { SafeAreaView, View, Text, Pressable } from "react-native";

const VerifyTrips = () => {
  return (
    <SafeAreaView>
      <Text>Your trips to verify:</Text>
      <View className="flex flex-row justify-center items-center">
        <Text>Trip #1</Text>
        <Pressable className="rounded-3xl bg-green-500 p-2">
          <Text>Go</Text>
        </Pressable>
        <Pressable className="rounded-3xl bg-red-500 p-2">
          <Text>Don't Go</Text>
        </Pressable>
      </View>
      <Text>Trip #1</Text>
      <Text>Trip #1</Text>
      <Text>Trip #1</Text>
    </SafeAreaView>
  );
};

export default VerifyTrips;
