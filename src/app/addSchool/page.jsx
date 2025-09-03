"use client";

import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { addSchool } from "../../lib/client/services/schoolServices";
import { useRouter } from "next/navigation";

const AddSchoolPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "image") {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      await addSchool(formData);
      toast.success("School added successfully 🎉");
      reset();
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Error adding school ❌");
    }
  };

  return (
    <div className="p-4 bg-gradient-to-br from-pink-300 via-purple-400 to-blue-500 rounded-xl shadow-[1px_1px_20px] shadow-gray-900 text-white">
      <Toaster />
      <div className="flex absolute right-2 items-center justify-center">
        <Link
          href="/"
          className="px-4 py-2 bg-rose-500 hover:scale-110 text-white rounded-md shadow hover:bg-gray-500 transition duration-200"
        >
          <span className="max-md:hidden">Back to Home</span>
          <IoArrowBackCircleSharp className="md:hidden text-2xl" />
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-center mb-4">Add New School</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto space-y-3"
      >
        {/* School Name */}
        <input
          type="text"
          placeholder="School Name..."
          {...register("name", { required: "School name is required" })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.name && <p className="text-slate-800">{errors.name.message}</p>}

        {/* Address */}
        <input
          type="text"
          placeholder="School Address..."
          {...register("address", { required: "Address is required" })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.address && (
          <p className="text-slate-800">{errors.address.message}</p>
        )}

        {/* City */}
        <input
          type="text"
          placeholder="City..."
          {...register("city", { required: "City is required" })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.city && <p className="text-slate-800">{errors.city.message}</p>}

        {/* State */}
        <input
          type="text"
          placeholder="State..."
          {...register("state", { required: "State is required" })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.state && (
          <p className="text-slate-800">{errors.state.message}</p>
        )}

        {/* Contact */}
        <input
          type="text"
          placeholder="Contact..."
          {...register("contact", {
            required: "Contact number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Contact must be 10 digits",
            },
          })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.contact && (
          <p className="text-slate-800">{errors.contact.message}</p>
        )}

        {/* Image */}
        <input
          type="file"
          {...register("image", { required: "Image is required" })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.image && (
          <p className="text-slate-800">{errors.image.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email..."
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="w-full p-3 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-500"
        />
        {errors.email && (
          <p className="text-slate-800">{errors.email.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 hover:bg-purple-800 hover:scale-x-105 transition text-white font-bold rounded-lg shadow-md"
        >
          Add School
        </button>
      </form>
    </div>
  );
};

export default AddSchoolPage;
