import { Link } from "expo-router";
import {
    Alert,
    FlatList,
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const posts = [
  {
    id: "1",
    postImage:
      "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg",
  },
  {
    id: "2",
    postImage:
      "https://images.pexels.com/photos/1463295/pexels-photo-1463295.jpeg",
  },
  {
    id: "3",
    postImage:
      "https://images.pexels.com/photos/2470606/pexels-photo-2470606.jpeg",
  },
  {
    id: "4",
    postImage:
      "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg",
  },
  {
    id: "5",
    postImage:
      "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg",
  },
  {
    id: "6",
    postImage:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
  },
  {
    id: "7",
    postImage:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  },
  {
    id: "8",
    postImage:
      "https://images.pexels.com/photos/1839906/pexels-photo-1839906.jpeg",
  },
  {
    id: "9",
    postImage:
      "https://images.pexels.com/photos/322588/pexels-photo-322588.jpeg",
  },
];

const MainPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.safeAreaSpacer} />

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
            }}
            style={styles.logo}
          />
          <Text style={styles.groupName}>Prince Pande</Text>
          <Text style={styles.groupBio}>GOD IS GOOD ✝✝🙏</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>53</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Admins</Text>
          </View>
        </View>

        {/* Follow Button */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => Alert.alert("Following User", "Thanks for the follow!")}
        >
          <Text style={styles.alertButtonText}>Follow</Text>
        </TouchableOpacity>

        {/* Grid */}
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <Image source={{ uri: item.postImage }} style={styles.gridImage} />
          )}
        />
      </ScrollView>

      {/* Taskbar */}
      <View style={styles.taskBar}>
        <Link href="/home"><Text>Home</Text></Link>
        <Text>Search</Text>
        <Text>Videos</Text>
        <Text>Shopping</Text>
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
  scrollContent: {
    paddingBottom: 80, // space so content doesn't hide behind taskbar
  },
  safeAreaSpacer: {
    height: Platform.OS !== "ios" ? StatusBar.currentHeight : 0,
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
    paddingVertical: 20,
    backgroundColor: "red",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
});