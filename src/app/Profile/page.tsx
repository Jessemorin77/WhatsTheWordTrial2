import { profileData } from "../_components/data/data-functions/profile"
import Image from "next/image"

export default async function Profile() {
  const profile = await profileData();
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={profile?.image}
          alt={"profile image"}
          height={200}
          width={200}
          className="rounded-xl"
        />
      </div>
      <h1>Profile</h1>
      <div>
        {profile?.name}
        {profile?.email}
        {profile?.credibilityScore}
      </div>
      <div>
        <button className="btn mt-10">Edit Profile</button>
      </div>
    </div>
  )
}
