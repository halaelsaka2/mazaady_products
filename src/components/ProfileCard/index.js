import Image from "next/image";
import ProfilePhoto from '../../../public/Images/profilePhoto.jpeg'
import FollowingIcon from '../../../public/Images/user-tick.svg'
import FollowersIcon from '../../../public/Images/profile-2user.svg'
import StarIcon from '../../../public/Images/magic-star.svg'
import CustomButton from "../CustomButton";
import Follow from "./Follow";

const ProfileCard = () => {
    return (
        <div className="bg-white w-full block rounded-2xl p-6 shadow-sm shadow-indigo-100">
            <Image
                alt="profile"
                src={ProfilePhoto}
                className="rounded-3xl object-cover h-24 w-24"

            />
            <div className="mt-2 w-full">
                <div>
                    <h1 className="font-bold">Hala Ahmed</h1>

                    <p className="text-sm text-gray-500">I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.</p>
                </div>
                <div className="mt-6 flex items-center gap-5 text-xs w-full">
                    <Follow number={5} text="Following" image={FollowingIcon} />
                    <Follow number={34} text="Followers" image={FollowersIcon} />
                    <Follow number={2} text="Rate" image={StarIcon} />
                </div>
                <CustomButton appendClassNames='w-full rounded-xl p-2 mt-4 font-bold '>Follow</CustomButton>
            </div>
        </div>
    )
}
export default ProfileCard;