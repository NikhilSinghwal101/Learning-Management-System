import React, { useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 28.8316307,
  lng: 77.5779582, 
};

const Contact = () => {
  // const mapRef = useRef(null);

  // const onLoad = (map) => {
  //   mapRef.current = map;

  //   // Check if google.maps is loaded
  //   if (window.google && window.google.maps) {
  //     // Create an AdvancedMarkerElement
  //     const marker = new window.google.maps.marker.AdvancedMarkerElement({
  //       position: center,
  //       map: map,
  //       content: '<div style="color: red;">My Marker</div>',
  //     });
  //   } else {
  //     console.error("Google Maps API not loaded");
  //   }
  // };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:mx-0 sm:mx-0 mx-[28px] p-[25px] md:mt-8 lg:mt-8 sm:mt-8 mt-4 w-[480px] mb-8 border-[0.5px] border-gray-300 rounded-md bg-slate-50">
          <h1 className="text-center mb-[1rem] md:text-3xl sm:text-2xl text-2xl">
            Contact Us!
          </h1>
          <div className="text-center">
            <form action="#">
              <input
                type="text"
                className="w-full bg-white rounded-[0.3rem] p-[0.5rem] text-[0.9rem] mb-[1rem] text-black border-[2px] border-[#00abf0] focus:outline-none"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="w-full bg-white rounded-[0.3rem] p-[0.5rem] text-[0.9rem] mb-[1rem] text-black border-[2px] border-[#00abf0] focus:outline-none"
                placeholder="Email"
                required
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="p-2 w-full h-[12rem] border-[2px] border-[#00abf0]"
                placeholder="Your Message"
              ></textarea>
              <input
                type="submit"
                className="cursor-pointer bg-blue-500 rounded-md py-2 px-4 mt-4 text-white hover:bg-blue-600"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>

      <LoadScript googleMapsApiKey="AIzaSyA_H2lZ6KPIjQEuyWCAm-MPdnwYfhmgs3U">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          // onLoad={onLoad}
        >
          {/* Add a marker if desired */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Contact;
