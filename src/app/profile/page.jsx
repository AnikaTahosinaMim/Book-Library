import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileEditForm from "@/component/ProfileEditForm";

const Profile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1d1b18] px-4 py-10">
      {/* ambient glow background, matches the dark glass aesthetic */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d9a441]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:p-10">
        <h1 className="mb-8 text-center text-2xl font-bold text-white">
          My Profile
        </h1>

        <ProfileEditForm
          user={{
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image || "",
          }}
        />
      </div>
    </div>
  );
};

export default Profile;