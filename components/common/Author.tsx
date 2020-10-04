import { Grid, Flex, Avatar, Text } from '@chakra-ui/core';
import { Card } from 'components/common/Card';

export default function Author({ author }) {
  return (
    <Card variant="outline" mx="auto" maxWidth="xs">
      <Grid gridTemplateColumns="75px auto">
        <Flex>
          <Avatar name={author.fullName} src={author.profilePhoto} />
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight="black" fontFamily="heading">{author.fullName}</Text>
          <Text color="grey.300" fontFamily="heading">Growth Engineer</Text>
        </Flex>
      </Grid>
    </Card>
  )
}