import { profileData } from "../_components/data/data-functions/profile"

export default async function Profile() {
  const profile = await profileData();
  return (
    <div>
      <h1>Profile</h1>
      {profile?.name}
    </div>
  )
}
