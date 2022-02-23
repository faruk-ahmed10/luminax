


const GetBuddy = () => {
    return (
        <div className="w-full rounded-lg bg-dark-gray p-8 ">
            <div className="">
                <h1 className="font-medium text-dark-white pb-8">Get a buddy</h1>
                <div className="w-full rounded-lg flex overflow-hidden">
                    <input type="text" name="" id="" className="w-full outline-none rounded-l-lg border-y-2 border-l-2 border-dark-pri/40 bg-transparent py-2 px-2 text-xs placeholder:text-dark-pri/40" placeholder="Address" />
                    <button className="bg-dark-sec text-dark-black text-xs px-4">Submit</button>
                </div>
                <p className="text-sm my-4">
                    A buddy is how you get on LuminaX. Good things should not happen in isolation.
                </p>
                <p className="text-sm py-3">
                    We have made it easy for you to find a buddy.
                </p>
                <div className="w-full rounded-lg border border-dark-pri/50 mt-5">
                    <ul className="p-5">
                        <li className="pb-5">
                            <h3 className="">Manager</h3>
                            <p className="text-sm font-medium text-dark-white">0</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Beneficiary</h3>
                            <p className="text-sm font-medium text-dark-white">0</p>
                        </li>
                        <li className="border-t border-dark-pri/40 py-5">
                            <h3 className="">Inactivity Threshold</h3>
                            <p className="text-sm font-medium text-dark-white">None</p>
                        </li>
                        <li className="border-t border-dark-pri/40 pt-5">
                            <h3 className="">Manager</h3>
                            <p className="text-sm font-medium text-dark-white">Feb 2, 2022. 10am</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GetBuddy;