import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserBusinessProfile from '../component/UserBusinessProfile'
import BusinessManagerStack from '../navstack/BusinessManagerStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function HomePageBusiness() {
  const green = '#3AD6A7';
  const grey = '#4C5B61';
  const tabBarHeight = 70; 

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: green, 
        tabBarInactiveTintColor: grey,
        tabBarStyle: {
          paddingTop: 6,
          paddingBottom: 12,
          height: tabBarHeight,
        }, 
      }}>
      <Tab.Screen 
        name="Profile"  
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons 
              name="magnify" 
              color={focused ? green : grey} 
              size={size} 
            />
          ),
        }} 
        component={UserBusinessProfile}
      />
      <Tab.Screen 
        name="Locations" 
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <Text style={{ color }}>Locations</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons 
              name="garage-variant" 
              color={focused ? green : grey} 
              size={size} 
            />
          ),
        }}
        component={BusinessManagerStack} 
      />
    </Tab.Navigator>
  );
}