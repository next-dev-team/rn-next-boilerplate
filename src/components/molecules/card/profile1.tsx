import React from 'react';
import { Box, Image, Text } from '_app/components/atoms';

const Profile1 = () => {
  return (
    <Box className="rounded overflow-hidden border border-gray-50 w-full bg-white">
      <Box className="w-full flex justify-between p-3">
        <Box className="flex">
          <Box className="rounded-full h-8 w-8 bg-gray-500 flex-row items-center justify-center overflow-hidden">
            <Image src="https://avatars0.githubusercontent.com/u/38799309?v=4" />
          </Box>
          <Text className="pt-1 ml-2 font-bold text-sm">braydoncoyer</Text>
        </Box>
      </Box>
      <Image
        className="w-full h-60"
        src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
      />
      <Box className="px-3 pb-2">
        <Box className="pt-2">
          <Text className="text-sm text-gray-400 font-medium">12 likes</Text>
        </Box>
        <Box className="pt-1">
          <Text className="font-medium mr-2">braydoncoyer</Text>
          <Text className="mb-2 text-sm">
            Lord of the Rings is my favorite film-series. One day Ill make my way to New Zealand to visit the Hobbiton
            set!
          </Text>
        </Box>
        <Text className="text-sm mb-2 text-gray-400 font-medium">View all 14 comments</Text>
        <Box className="mb-2">
          <Box className="mb-2">
            <Text className="font-medium mr-2">razzle_dazzle</Text>
            <Text>
              Dude! How cool! I went to New Zealand last summer and had a blast taking the tour! So much to see! Make
              sure you bring a good camera when you go!
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile1;
