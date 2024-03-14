import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import {
  MaterialCommunityIcons, MaterialIcons as MaterialIcon,
  FontAwesome as FAIcon,
  Foundation as Foundation,
  FontAwesome6 as FA6Icon,
  FontAwesome5 as FA5Icon,
} from "react-native-vector-icons";

const App = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/2.58kb.jpg")}
          style={styles.roundImage}
        />
        <TextInput style={styles.textInput} placeholder="Search..."></TextInput>
        <MaterialIcon
          name="message-processing"
          size={25}
          color="#999"
          style={styles.icon}
        />
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        <View styles={{marginTop:10}}>
          <View style={styles.header}>
            <Image
              source={require("./assets/2.58kb.jpg")}
              style={[styles.roundImage, { width: 50, height: 60 }]}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Surya Moharana<Text style={{ fontSize: 12 }}> (He/Him)</Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Aspiring React-Native Developer
              </Text>
              <Text style={{ fontSize: 12 }}>6h</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: 25,
                }}
              >
                <FAIcon
                  name="user-plus"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text>Connect</Text>
              </View>
            </Pressable>
          </View>
          <Text style={styles.text}>
            {showFullText
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores? Non tenetur labore incidunt consequatur, sapiente alias nemo cupiditate! Vel facere sed, enim voluptatibus placeat qui voluptate, facilis maiores adipisci rerum quidem aliquam ut minima iste saepe dolorum suscipit quo alias harum voluptas velit et error? Maxime enim doloribus id? Veniam, alias aspernatur quos blanditiis sapiente similique culpa necessitatibus eum earum obcaecati facere ex odio ipsum provident doloribus! Debitis repellat aperiam similique dolores, sit adipisci autem esse nemo et."
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores?"}
          </Text>
          <Pressable onPress={toggleShowFullText} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {showFullText ? "Read Less" : "Read More"}
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Foundation
                  name="like"
                  size={30}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Like
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="commenting"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Comment
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FA6Icon
                  name="repeat"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Repost
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="send"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Send
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View styles={{marginTop:10}}>
          <View style={styles.header}>
            <Image
              source={require("./assets/2.58kb.jpg")}
              style={[styles.roundImage, { width: 50, height: 60 }]}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Surya Moharana<Text style={{ fontSize: 12 }}> (He/Him)</Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Aspiring React-Native Developer
              </Text>
              <Text style={{ fontSize: 12 }}>6h</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: 25,
                }}
              >
                <FAIcon
                  name="user-plus"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text>Connect</Text>
              </View>
            </Pressable>
          </View>
          <Text style={styles.text}>
            {showFullText
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores? Non tenetur labore incidunt consequatur, sapiente alias nemo cupiditate! Vel facere sed, enim voluptatibus placeat qui voluptate, facilis maiores adipisci rerum quidem aliquam ut minima iste saepe dolorum suscipit quo alias harum voluptas velit et error? Maxime enim doloribus id? Veniam, alias aspernatur quos blanditiis sapiente similique culpa necessitatibus eum earum obcaecati facere ex odio ipsum provident doloribus! Debitis repellat aperiam similique dolores, sit adipisci autem esse nemo et."
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores?"}
          </Text>
          <Pressable onPress={toggleShowFullText} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {showFullText ? "Read Less" : "Read More"}
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Foundation
                  name="like"
                  size={30}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Like
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="commenting"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Comment
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FA6Icon
                  name="repeat"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Repost
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="send"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Send
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View styles={{marginTop:10}}>
          <View style={styles.header}>
            <Image
              source={require("./assets/2.58kb.jpg")}
              style={[styles.roundImage, { width: 50, height: 60 }]}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Surya Moharana<Text style={{ fontSize: 12 }}> (He/Him)</Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Aspiring React-Native Developer
              </Text>
              <Text style={{ fontSize: 12 }}>6h</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: 25,
                }}
              >
                <FAIcon
                  name="user-plus"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text>Connect</Text>
              </View>
            </Pressable>
          </View>
          <Text style={styles.text}>
            {showFullText
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores? Non tenetur labore incidunt consequatur, sapiente alias nemo cupiditate! Vel facere sed, enim voluptatibus placeat qui voluptate, facilis maiores adipisci rerum quidem aliquam ut minima iste saepe dolorum suscipit quo alias harum voluptas velit et error? Maxime enim doloribus id? Veniam, alias aspernatur quos blanditiis sapiente similique culpa necessitatibus eum earum obcaecati facere ex odio ipsum provident doloribus! Debitis repellat aperiam similique dolores, sit adipisci autem esse nemo et."
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores?"}
          </Text>
          <Pressable onPress={toggleShowFullText} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {showFullText ? "Read Less" : "Read More"}
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Foundation
                  name="like"
                  size={30}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Like
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="commenting"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Comment
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FA6Icon
                  name="repeat"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Repost
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="send"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Send
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View styles={{marginTop:10}}>
          <View style={styles.header}>
            <Image
              source={require("./assets/2.58kb.jpg")}
              style={[styles.roundImage, { width: 50, height: 60 }]}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Surya Moharana<Text style={{ fontSize: 12 }}> (He/Him)</Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Aspiring React-Native Developer
              </Text>
              <Text style={{ fontSize: 12 }}>6h</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: 25,
                }}
              >
                <FAIcon
                  name="user-plus"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text>Connect</Text>
              </View>
            </Pressable>
          </View>
          <Text style={styles.text}>
            {showFullText
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores? Non tenetur labore incidunt consequatur, sapiente alias nemo cupiditate! Vel facere sed, enim voluptatibus placeat qui voluptate, facilis maiores adipisci rerum quidem aliquam ut minima iste saepe dolorum suscipit quo alias harum voluptas velit et error? Maxime enim doloribus id? Veniam, alias aspernatur quos blanditiis sapiente similique culpa necessitatibus eum earum obcaecati facere ex odio ipsum provident doloribus! Debitis repellat aperiam similique dolores, sit adipisci autem esse nemo et."
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores?"}
          </Text>
          <Pressable onPress={toggleShowFullText} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {showFullText ? "Read Less" : "Read More"}
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Foundation
                  name="like"
                  size={30}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Like
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="commenting"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Comment
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FA6Icon
                  name="repeat"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Repost
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="send"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Send
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View styles={{marginTop:10}}>
          <View style={styles.header}>
            <Image
              source={require("./assets/2.58kb.jpg")}
              style={[styles.roundImage, { width: 50, height: 60 }]}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Surya Moharana<Text style={{ fontSize: 12 }}> (He/Him)</Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Aspiring React-Native Developer
              </Text>
              <Text style={{ fontSize: 12 }}>6h</Text>
            </View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: 25,
                }}
              >
                <FAIcon
                  name="user-plus"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text>Connect</Text>
              </View>
            </Pressable>
          </View>
          <Text style={styles.text}>
            {showFullText
              ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores? Non tenetur labore incidunt consequatur, sapiente alias nemo cupiditate! Vel facere sed, enim voluptatibus placeat qui voluptate, facilis maiores adipisci rerum quidem aliquam ut minima iste saepe dolorum suscipit quo alias harum voluptas velit et error? Maxime enim doloribus id? Veniam, alias aspernatur quos blanditiis sapiente similique culpa necessitatibus eum earum obcaecati facere ex odio ipsum provident doloribus! Debitis repellat aperiam similique dolores, sit adipisci autem esse nemo et."
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit omnis rem nemo quod nisi reiciendis facilis explicabo animi minus tenetur. Animi deleniti dolorem at quia harum velit quibusdam pariatur maiores?"}
          </Text>
          <Pressable onPress={toggleShowFullText} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>
              {showFullText ? "Read Less" : "Read More"}
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <Foundation
                  name="like"
                  size={30}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Like
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="commenting"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Comment
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FA6Icon
                  name="repeat"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Repost
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="send"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Send
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="home"
                  size={25}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FA5Icon
                  name="user-friends"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  My Network
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialIcon
                  name="post-add"
                  size={25}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Post
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialIcon
                  name="notifications"
                  size={25}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Notifications
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  backgroundColor: "white",
                },
              ]}
            >
              <View style={{ alignItems: "center" }}>
                <FAIcon
                  name="shopping-bag"
                  size={20}
                  color="grey"
                  style={styles.icon}
                />
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Job
                </Text>
              </View>
            </Pressable>
          </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#E8E5E4",
    padding: 5,
  },
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  icon: {
    size: 30,
  },
});
