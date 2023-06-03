import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// TODO: add more sports
const sportList = [{ label: "SOCCER", value: "soccer" }];

export function Home() {
  const [sport, setSport] = useState(sportList[0]);
  const [isSportPickerOpen, setSportPickerOpen] = useState(false);
  const [sportItems, setSportItems] = useState(sportList);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [type, setType] = useState("team"); // team or indiv

  const handleDateConfirm = (selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate);
  };

  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime);
  };

  const handleReserve = () => {
    // TODO: implement
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sports</Text>
        </View>
        <View style={styles.sportPickerContainer}>
          <DropDownPicker
            open={isSportPickerOpen}
            value={sport}
            items={sportItems}
            setOpen={setSportPickerOpen}
            setValue={setSport}
            setItems={setSportItems}
            style={styles.sportPicker}
          />
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Type</Text>
        </View>
        <View style={styles.typeWrapper}>
          <TouchableOpacity
            onPress={() => setType("team")}
            style={
              type === "team" ? styles.typeButton : styles.typeButtonDisabled
            }
          >
            <Text style={styles.typeText}>TEAM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType("indiv")}
            style={
              type === "indiv" ? styles.typeButton : styles.typeButtonDisabled
            }
          >
            <Text style={styles.typeText}>INDIV</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Schedule</Text>
          <TouchableOpacity onPress={() => setShowDatePicker((s) => !s)}>
            <MaterialIcons name="calendar-today" size={20} color="#50a42f" />
          </TouchableOpacity>
        </View>
        <DateTimePicker value={time} mode="time" onChange={handleTimeChange} />
      </View>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setShowDatePicker(false)}
      />
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Location</Text>
        </View>
        <TextInput
          value={location}
          onChangeText={setLocation}
          style={styles.locationInput}
          placeholder="type in the location"
        />
      </View>
      <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
        <Text style={styles.reserveText}>RESERVE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  titleContainer: {
    padding: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#50a42f",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  typeWrapper: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  typeButton: {
    borderRadius: 10,
    backgroundColor: "#50a42f",
    color: "#fff",
    padding: 10,
  },
  typeButtonDisabled: {
    borderRadius: 10,
    backgroundColor: "#888",
    color: "#fff",
    padding: 10,
  },
  typeText: {
    color: "#fff",
  },
  sportPickerContainer: {
    width: 200,
    alignSelf: "center",
  },
  locationInput: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  reserveButton: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#50a42f",
  },
  reserveText: {
    color: "#50a42f",
    fontSize: 20,
  },
});
