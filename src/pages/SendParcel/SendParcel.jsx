import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const serviceData = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth()

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [parcelType, setParcelType] = useState("");

  const watchSenderRegion = watch("senderRegion");
  const watchReceiverRegion = watch("receiverRegion");

  // Get service centers (districts) by region
  const getServiceCenters = (region) =>
    serviceData.filter((d) => d.region === region);

  // Pricing calculation
  const calculateCost = (data) => {
    const senderCenter = data.senderServiceCenter;
    const receiverCenter = data.receiverServiceCenter;
    const withinCity = senderCenter === receiverCenter;

    let cost = 0;
    let description = "";

    if (data.type === "document") {
      cost = withinCity ? 60 : 80;
      description = withinCity
        ? "Document delivery within same city: ৳60"
        : "Document delivery outside city: ৳80";
    } else if (data.type === "non-document") {
      const weight = parseFloat(data.weight || 0);
      if (weight <= 3) {
        cost = withinCity ? 110 : 150;
        description = withinCity
          ? "Non-document ≤3kg within city: ৳110"
          : "Non-document ≤3kg outside city: ৳150";
      } else {
        const extraWeight = weight - 3;
        cost = withinCity
          ? 110 + extraWeight * 40
          : 150 + extraWeight * 40 + 40;
        description = withinCity
          ? `Non-document >3kg within city: ৳110 + ৳40/kg extra`
          : `Non-document >3kg outside city: ৳150 + ৳40/kg + ৳40 extra`;
      }
    }

    return { cost, description };
  };

  // Generate a random tracking ID
  const generateTrackingID = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";
    for (let i = 0; i < 8; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `TRK-${id}`;
  };

  const onSubmit = (data) => {
    const { cost, description } = calculateCost(data);
    const trackingID = generateTrackingID(); // <-- generate tracking ID

    // Include trackingID in the parcel object
    const parcelData = {
      ...data,
      cost,
      trackingID,
      creation_date: new Date(),
      userEmail: user?.email,   // ✅ add this
      userName: user?.displayName // ✅ add this
    };





    // axios.get('http://localhost:5000/parcels')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })





    axiosSecure.post('parcels', parcelData)
      .then(response => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });



    Swal.fire({
      title: `Delivery Cost: ৳${cost}`,
      html: `<p>${description}</p><p>Tracking ID: <b>${trackingID}</b></p>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed to Payment",
      cancelButtonText: "Edit",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Parcel info saved!", "success");
        console.log(parcelData); // full object with trackingID
        reset();
        setParcelType(""); // reset parcel type
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold mb-2 text-center">Add Parcel</h1>
        <p className="text-gray-500 mb-6 text-center">
          Fill parcel, sender, and receiver info
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* ===== Parcel Info ===== */}
          <div className="p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Parcel Info</h2>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Parcel Type */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    value="document"
                    {...register("type", { required: true })}
                    onChange={() => setParcelType("document")}
                  />
                  Document
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    value="non-document"
                    {...register("type", { required: true })}
                    onChange={() => setParcelType("non-document")}
                  />
                  Non-Document
                </label>
              </div>

              {/* Parcel Title */}
              <input
                {...register("title", { required: true })}
                placeholder="Parcel Title"
                className="input flex-1 min-w-[200px]"
              />

              {/* Weight */}
              {parcelType === "non-document" && (
                <input
                  type="number"
                  step="0.1"
                  {...register("weight", { required: true, min: 0.1 })}
                  placeholder="Weight (kg)"
                  className="input w-32"
                />
              )}
            </div>
            {errors.type && <p className="text-red-500 text-sm">Parcel type is required</p>}
            {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
            {parcelType === "non-document" && errors.weight && <p className="text-red-500 text-sm">Weight is required</p>}
          </div>

          {/* ===== Sender & Receiver ===== */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sender */}
            <div className="p-6 rounded-xl shadow space-y-4">
              <h2 className="text-xl font-semibold">Sender Info</h2>

              <input {...register("senderName", { required: true })} placeholder="Sender Name" className="input" />
              <input {...register("senderContact", { required: true })} placeholder="Contact" className="input" />

              {/* Region */}
              <select {...register("senderRegion", { required: true })} className="input">
                <option value="">Select Region</option>
                {[...new Set(serviceData.map((r) => r.region))].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>

              {/* Service Center (district) */}
              <select {...register("senderServiceCenter", { required: true })} className="input">
                <option value="">Select Service Center</option>
                {watchSenderRegion &&
                  getServiceCenters(watchSenderRegion).map((d) => (
                    <option key={d.district} value={d.district}>
                      {d.district}
                    </option>
                  ))}
              </select>

              <textarea {...register("senderAddress", { required: true })} placeholder="Address" className="input"></textarea>
              <textarea {...register("pickupInstruction", { required: true })} placeholder="Pickup Instructions" className="input"></textarea>
            </div>

            {/* Receiver */}
            <div className="p-6 rounded-xl shadow space-y-4">
              <h2 className="text-xl font-semibold">Receiver Info</h2>

              <input {...register("receiverName", { required: true })} placeholder="Receiver Name" className="input" />
              <input {...register("receiverContact", { required: true })} placeholder="Contact" className="input" />

              {/* Region */}
              <select {...register("receiverRegion", { required: true })} className="input">
                <option value="">Select Region</option>
                {[...new Set(serviceData.map((r) => r.region))].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>

              {/* Service Center (district) */}
              <select {...register("receiverServiceCenter", { required: true })} className="input">
                <option value="">Select Service Center</option>
                {watchReceiverRegion &&
                  getServiceCenters(watchReceiverRegion).map((d) => (
                    <option key={d.district} value={d.district}>
                      {d.district}
                    </option>
                  ))}
              </select>

              <textarea {...register("receiverAddress", { required: true })} placeholder="Address" className="input"></textarea>
              <textarea {...register("deliveryInstruction", { required: true })} placeholder="Delivery Instructions" className="input"></textarea>
            </div>
          </div>

          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition block mx-auto">
            Submit Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
