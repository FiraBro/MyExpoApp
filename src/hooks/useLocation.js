import { useEffect, useState } from "react";
import * as Location from "expo-location";
export default useLocation = () => {
  const [location, setLocation] = useState();
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
          console.log("Permission denied");
          return;
        }

        const location = await Location.getLastKnownPositionAsync();
        if (!location) {
          console.log("No location available");
          return;
        }

        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });
        console.log({ latitude, longitude });
      } catch (error) {
        console.error("Error getting location:", error);
      }
    };

    getLocation();
    return location;
  }, []); // Empty dependency array means this runs once on mount
};
