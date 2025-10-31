import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const settingsoptions = [
{ 
id: "1", 
title: "Account" 
},
{ id: "2", 
title: "Privacy and Security" 
},
{ id: "3",
title: "Notifications" 
},
{ id: "4",
title: "Help"
},
{ id: "5",
title: "About"
},
]

const SettingItem = ({ title }) => (
    <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>
            {title}
        </Text>
        <Text style={styles.settingsArrow}>
            {'>'}
        </Text>
    </View>
);

const SettingsScreen = () => {
    return (
    <View style={styles.container}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>General</Text>
        </View>

        <FlatList
        data={settingsoptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SettingItem title={item.title} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

        <View style={styles.taskBar}>
        <Link href="/home"><Text>Home</Text></Link>
        <Text>Search</Text>
        <Text>Videos</Text>
        <Text>Shopping</Text>
        <Link href="/settings"><Text>Settings</Text></Link>
        <Link href="/">
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

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingBottom: 80,
    },
    sectionHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: "#f9f9f9",
    },
    sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    textTransform: 'uppercase',
    },
    settingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    },
    settingsTitle: {
    fontSize: 16,
    color: "#000",
    },
    settingsArrow: {
    fontSize: 18,
    color: "#ccc",
    fontWeight: "300",
    },
    separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 20,
    },
    taskBar: {
    position: "absolute",
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
