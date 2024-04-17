import { View, Text } from 'react-native';
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = () => {
  return (
    <View className="item-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color}
      className="w-6 h-6" />
      <Text className={`${focused ? 'font-psemibold' : 
    'font-pregular'}`}>
        {name}
    </Text>
    </View>
  )
}

export default TabIcon