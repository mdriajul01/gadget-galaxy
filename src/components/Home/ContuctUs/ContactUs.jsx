// src/ContactUs.js

import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Qustion/Qustion";
const ContactUs = () => {
  const storeDetails = {
    name: "Gadget Galaxy",
    address: "Dhaka-1207 / Dhaka Koylanpur Road n-5",
    phone: "01761553460",
    email: "gadget.galaxy@gmail.com",
    location: [23.777844, 90.361043], 
  };
  const handleClick = () => {
    window.open("https://maps.app.goo.gl/1Zc345rqqtpSGnPV6", "_blank");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center mt-16">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gadget Galaxy</h2>
          <div className="mb-4 flex items-center">
            <FaMapMarkerAlt className="text-2xl text-[#fc8f00] mr-2" />
            <span className="text-lg">{storeDetails.address}</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhone className="text-2xl text-blue-500 mr-2" />
            <span className="text-lg">{storeDetails.phone}</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-2xl text-blue-500 mr-2" />
            <span className="text-lg">{storeDetails.email}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="h-64">
            <MapContainer
              center={storeDetails.location}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution=' <a href="https://www.openstreetmap.org/copyright">Open-Map</a> '
              />
              <Marker position={storeDetails.location}>
                <Popup>{storeDetails.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="text-center">
        
        <button
          onClick={handleClick}
          className="btn bg-blue-500 text-stone-100 text-lg"
        >
          Go Location
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
