import { Link } from "expo-router";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Instagram</Text>

      {/* Stories */}
      <View style={styles.stories}>
          <Image
              source={{
                uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
              }}
              style={styles.storiesImages}
            />
          <Image
              source={{
                uri: "https://images.pexels.com/photos/8185815/pexels-photo-8185815.jpeg",
              }}
              style={styles.storiesImages}
            />
          <Image
              source={{
                uri: "https://images.pexels.com/photos/7121557/pexels-photo-7121557.jpeg",
              }}
              style={styles.storiesImages}
            />
          <Image
              source={{
                uri: "https://images.pexels.com/photos/6868084/pexels-photo-6868084.jpeg",
              }}
              style={styles.storiesImages}
            />
             <Image
              source={{
                uri: "https://images.pexels.com/photos/6582763/pexels-photo-6582763.jpeg",
              }}
              style={styles.storiesImages}
            />
             <Image
              source={{
                uri: "https://images.pexels.com/photos/6151982/pexels-photo-6151982.jpeg",
              }}
              style={styles.storiesImages}
            />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.safeAreaSpacer} />

        {/* Feed */}
        <View>
          <Image
              source={{
                uri: "https://images.pexels.com/photos/6151982/pexels-photo-6151982.jpeg",
              }}
              style={styles.feed}
            />
        </View>
      </ScrollView>

      {/* Taskbar */}
      <View style={styles.taskBar}>
        <Link href="/home"><Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/128/3917/3917033.png",
            }}
            style={styles.icons}
          /></Link>
        <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/128/3917/3917132.png",
            }}
            style={styles.icons}
          />
        <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/128/9239/9239347.png",
            }}
            style={styles.icons}
          />
        <Image
            source={{
              uri: "https://cdn-icons-png.freepik.com/128/10742/10742183.png",
            }}
            style={styles.icons}
          />
        <Link href="./">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
            }}
            style={styles.profileButt}
          />
        </Link>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  stories:{
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    gap: 10
  },
  storiesImages: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#d6249f",
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 80, // space so content doesn't hide behind taskbar
  },
  safeAreaSpacer: {
    height: Platform.OS !== "ios" ? StatusBar.currentHeight : 0,
  },
  feed: {
    flex: 1,
    height: 500,
    borderColor: "#d6249f"
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#d6249f",
    backgroundColor: "#eee",
  },
  groupName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  groupBio: {
    textAlign: "center",
    marginVertical: 8,
    color: "#333",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
  statLabel: {
    color: "#555",
  },
  grid: {
    alignSelf: "stretch",
  },
  gridImage: {
    width: "33.3%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#fff",
  },
  alertButton: {
    paddingVertical: 15,
    backgroundColor: "red",
    margin: 20,
    borderRadius: 5,
  },
  alertButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  taskBar: {
    position: "absolute", //keeps the task bar at the bottom of the page
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileButt: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#d6249f",
  },
  icons: {
    width: 30,
    height: 30,
  }
});
