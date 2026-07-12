import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Profile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <h2>Please Login</h2>;
  }
  console.log(session?.user);

  return (
    <div className="space-y-3">
      <Image
        width={"100"}
        height={"150"}
        src={session.user.image || "/default-avatar.png"}
        alt={session.user.name}
        className="w-20 h-20 rounded-full"
      />

      <h2>{session.user.name}</h2>
      <p>{session.user.email}</p>
      <p>{session.user.id}</p>
    </div>
  );
};

export default Profile;
