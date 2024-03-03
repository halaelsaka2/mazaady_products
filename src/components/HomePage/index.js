import Products from "../Products"
import ProfileCard from "../ProfileCard"
import QRCard from "../QRCard"

const HomePage = () => {
    return (
        <div className="grid grid-cols-1 gap-0 sm:gap-4 lg:grid-cols-4 lg:gap-8 mt-6">
            <aside>
                <ProfileCard />
                <QRCard />
            </aside>
            <div className="rounded-lg bg-white col-span-3">
                <Products />
            </div>
        </div>
    )
}
export default HomePage