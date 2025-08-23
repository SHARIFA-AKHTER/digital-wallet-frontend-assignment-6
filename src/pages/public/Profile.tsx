/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";

// export default function Profile() {
//   const [name, setName] = useState("Sharifa Akhter");
//   const [phone, setPhone] = useState("017xxxxxxxx");
//   const [password, setPassword] = useState("");

//   const handleUpdate = () => {
//     // API call with RTK Query → update user profile
//     console.log({ name, phone, password });
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Update Profile</h2>
//       <div className="flex flex-col gap-4">
//         <input 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 rounded"
//           placeholder="Full Name"
//         />
//         <input 
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="border p-2 rounded"
//           placeholder="Phone Number"
//         />
//         <input 
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 rounded"
//           placeholder="New Password"
//         />
//         <button 
//           onClick={handleUpdate} 
//           className="bg-blue-600 text-white py-2 rounded">
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }


import { useGetProfileQuery, useUpdateProfileMutation } from "@/features/user/users.api";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "@/Context/AuthContext"; 

export default function Profile() {
  const { data: profile } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const { setAuthUser } = useAuth(); 

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setPhone(profile.phone || "");
    }
  }, [profile]);

  const handleUpdate = async () => {
    try {
      const res = await updateProfile({ name, phone, password }).unwrap();

      toast.success("Profile updated successfully");

     
      const authUser = JSON.parse(localStorage.getItem("authUser") || "{}");
      const newAuthUser = {
        ...authUser,
        user: {
          ...authUser.user,
          name: res.data?.name || name,
          phone: res.data?.phone || phone,
        },
      };

      localStorage.setItem("authUser", JSON.stringify(newAuthUser));
      setAuthUser(newAuthUser);

    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update Profile</h2>
      <div className="flex flex-col gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          placeholder="Full Name"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
          placeholder="Phone Number"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          placeholder="New Password"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
