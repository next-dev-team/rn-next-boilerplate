import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Layout, Section } from '_app/components/atoms';
import { navigate } from '_app/services';
import { useHomeStore, useTheme } from '_app/store';

const HomeScreen = () => {
  const { twGradients, tw } = useTheme();
  const { menusScreen } = useHomeStore();

  return (
    <Layout>
      <Section>
        {menusScreen.map((state, ind) => {
          return (
            <LinearGradient
              key={ind}
              start={{ x: 0, y: 0.8 }}
              end={{ x: 1, y: 0.2 }}
              colors={
                ind % 2
                  ? twGradients(`bg-cyan-400`, `bg-green-500`, `bg-pink-600`)
                  : twGradients(`bg-green-400`, `bg-blue-500`, `bg-blue-600`)
              }
              style={tw`rounded-full mb-2.5`}
            >
              <Button
                label={state.title}
                onPress={() => {
                  navigate('DetailScreen', { state: { ...state, menusScreen } });
                }}
                labelCls="uppercase font-bold"
              />
            </LinearGradient>
          );
        })}
      </Section>
    </Layout>
  );
};

export default HomeScreen;
