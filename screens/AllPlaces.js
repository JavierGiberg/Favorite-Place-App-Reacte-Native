import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlace, setLoadedPlace] = useState([]);

  const isFocuse = useIsFocused();
  useEffect(() => {
    async function loadPlace() {
      const places = await fetchPlaces();
      setLoadedPlace(places);
    }
    if (isFocuse) {
      loadPlace();
      // setLoadedPlace((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocuse]);

  return <PlacesList places={loadedPlace} />;
}

export default AllPlaces;
