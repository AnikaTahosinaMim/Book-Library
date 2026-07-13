"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, Image as ImageIcon, Pencil, Check, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";

type ProfileUser = {
  id: string;
  name: string;
  email: string;
  image: string;
};

const ProfileEditForm = ({ user }: { user: ProfileUser }) => {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: user.name, image: user.image });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setForm({ name: user.name, image: user.image });
    setEditing(false);
  };

  const handleSave = async () => {
    setLoading(true);
    const { error } = await authClient.updateUser({
      name: form.name,
      image: form.image,
    });

    if (error) {
      console.log(error);
      alert("Profile update failed");
    } else {
      setEditing(false);
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Avatar */}
      <div className="relative">
        <div className="h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-white/5">
          <Image
            width={96}
            height={96}
            src={(editing ? form.image : user.image) || "/default-avatar.png"}
            alt={user.name}
            className="h-full w-full object-cover"
          />
        </div>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#d9a441] text-black shadow-[0_0_15px_#d9a44166] transition hover:brightness-105"
            aria-label="Edit profile"
          >
            <Pencil size={14} />
          </button>
        )}
      </div>

      {!editing ? (
        <div className="w-full space-y-1 text-center">
          <h2 className="text-lg font-semibold text-white">{user.name}</h2>
          <p className="text-sm text-white/40">{user.email}</p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {/* Name */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#d9a441]/40">
            <User size={16} className="text-white/40" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>

          {/* Image URL */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#d9a441]/40">
            <ImageIcon size={16} className="text-white/40" />
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Profile image URL"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>

          {/* Email (read-only) */}
          <p className="text-center text-xs text-white/30">{user.email}</p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-1 rounded-full border border-white/10 py-2.5 text-sm text-white/60 transition hover:bg-white/5 disabled:opacity-60"
            >
              <X size={14} /> Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-1 rounded-full bg-[#d9a441] py-2.5 text-sm font-semibold text-black shadow-[0_0_15px_#d9a44166] transition hover:brightness-105 disabled:opacity-60"
            >
              <Check size={14} /> {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEditForm;