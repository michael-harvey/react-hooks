import { useState, useEffect } from "react";

/**
 * Returns geolocation
 *
 * @returns object - { latitude, longitude }
 */
function useGeolocation() {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    const getPostion = async () => {
      await navigator.geolocation.getCurrentPosition(
        (res) => {
          const { latitude, longitude } = res.coords;
          setCoords({ latitude, longitude });
        },
        (error) => {
          console.log(`An error has occurred: ${error.message}`);
        }
      );
    };

    getPostion();
  }, [coords]);

  return coords;
}

export default useGeolocation;
