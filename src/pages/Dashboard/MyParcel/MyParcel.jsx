import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [selectedParcel, setSelectedParcel] = useState(null);

  
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['myParcel', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `parcels${user?.role === 'admin' ? '' : `?email=${user?.email}`}`
      );
      return res.data;
    }
  });

  if (isLoading) return <p>Loading parcels...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await axiosSecure.delete(`parcels/${id}`);
      refetch()
      Swal.fire("Deleted!", "Parcel has been deleted.", "success");
    }
  };

//   const handleView = (parcel) => {
//     setSelectedParcel(parcel);
//     alert(JSON.stringify(parcel, null, 2));
//   };

//   const handleEdit = (parcel) => {
//     setSelectedParcel(parcel);
//     const newStatus = prompt("Enter new status:", parcel.status || parcel.parcelData?.status);
//     if (newStatus) {
//       axiosSecure.patch(`/parcels/${parcel._id}`, { status: newStatus })
//         .then(() => queryClient.invalidateQueries(['myParcel', user?.email]));
//     }
//   };

  return (
    <div className="overflow-x-auto p-4">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Weight</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map(parcel => (
              <tr key={parcel._id}>
                <td>{parcel.trackingID || parcel.parcelData?.trackingID}</td>
                <td>{parcel.senderName || parcel.parcelData?.senderName}</td>
                <td>{parcel.receiverName || parcel.parcelData?.receiverName}</td>
                <td>{parcel.weight || parcel.parcelData?.weight}</td>
                <td>{parcel.cost || parcel.parcelData?.cost}</td>
                <td>{parcel.status || parcel.parcelData?.status || 'Pending'}</td>
                <td>{new Date(parcel.creation_date || parcel.parcelData?.creation_date).toLocaleString()}</td>
                <td className="space-x-2">
                  <button onClick={() => handleView(parcel)} className="btn btn-sm btn-info">View</button>
                  <button onClick={() => handleEdit(parcel)} className="btn btn-sm btn-warning">Edit</button>
                  <button onClick={() => handleDelete(parcel._id)} className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center">No parcels found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcel;
