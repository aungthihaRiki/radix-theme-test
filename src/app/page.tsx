import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Card, Container, Flex, Heading, Text, Badge, Button } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Container size={"1"}>
        <Flex direction={"column"}>
          <Heading>Codding Issue Tracker</Heading>
          <Text color="gray" size="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            temporibus recusandae necessitatibus architecto saepe omnis,
          </Text>
        </Flex>

        <Flex gap="4" direction={"column"}>
          <Card>
            <Flex direction="column">
              <Text>Issue #01 - UI Bug</Text>

              <Flex gap={"2"}>
                <Badge color="blue">Frontend</Badge>
                <Badge color="red">Frontend</Badge>
              </Flex>

              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum unde velit nisi facilis aspernatur fugit, iste sed sit
                cum rerum rem possimus adipisci autem doloribus totam odit
                cupiditate aliquam id.
              </Text>
              <Flex gap={"2"}>
                <Flex align={"center"} className="gap-2">
                  <ChatBubbleIcon />
                  <Text ml={"2"} color="gray">
                    5 comments
                  </Text>
              <Button >Delete</Button>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex direction="column">
              <Text>Issue #01 - UI Bug</Text>

              <Flex gap={"2"}>
                <Badge color="blue">Frontend</Badge>
                <Badge color="red">Frontend</Badge>
              </Flex>

              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum unde velit nisi facilis aspernatur fugit, iste sed sit
                cum rerum rem possimus adipisci autem doloribus totam odit
                cupiditate aliquam id.
              </Text>
              <Flex gap={"2"}>
                <Flex align={"center"} className="gap-2">
                  <ChatBubbleIcon />
                  <Text ml={"2"} color="gray">
                    5 comments
                  </Text>
                  <Button >Delete</Button>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex direction="column">
              <Text>Issue #01 - UI Bug</Text>

              <Flex gap={"2"}>
                <Badge color="blue">Frontend</Badge>
                <Badge color="red">Frontend</Badge>
              </Flex>

              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum unde velit nisi facilis aspernatur fugit, iste sed sit
                cum rerum rem possimus adipisci autem doloribus totam odit
                cupiditate aliquam id.
              </Text>
              <Flex gap={"2"}>
                <Flex align={"center"} className="gap-2">
                  <ChatBubbleIcon />
                  <Text ml={"2"} color="gray">
                    5 comments
                  </Text>
                  <Button >Delete</Button>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card>
            <Flex direction="column">
              <Text>Issue #01 - UI Bug</Text>

              <Flex gap={"2"}>
                <Badge color="blue">Frontend</Badge>
                <Badge color="red">Frontend</Badge>
              </Flex>

              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum unde velit nisi facilis aspernatur fugit, iste sed sit
                cum rerum rem possimus adipisci autem doloribus totam odit
                cupiditate aliquam id.
              </Text>
              <Flex gap={"2"}>
                <Flex align={"center"} className="gap-2">
                  <ChatBubbleIcon />
                  <Text ml={"2"} color="gray">
                    5 comments
                  </Text>
                  <Button >Delete</Button>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </main>
  );
}
