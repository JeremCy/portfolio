export default async function Loading () {
    return (
        <div className="hero">
            <div className="hero-content flex flex-col text-center">
                <div
                    className="rounded-full p-2 sm:w-40 sm:h-40 w-20 h-20 skeleton"
                />
                <div className="text-5xl font-bold skeleton w-1/2 h-20"></div>
                <div className="btn skeleton w-20"></div>
            </div>
        </div>
    );
}
