import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff', 
        tabBarInactiveTintColor: '#6293ba', 
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#0d1330', 
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
    
      <Tabs.Screen
        name="primeiro"
        options={{
          title: '1º Ano',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="segundo"
        options={{
          title: '2º Ano',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code-working-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="terceiro"
        options={{
          title: '3º Ano',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="terminal-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}