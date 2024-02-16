import { getDictionary } from "@libs/dictionaries";
import Link from "next/link";

export default async function Carrer({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>>["carrer"] }) {
    return (
        // get array length off of dictionary.carrers
        // if length is 1, use grid-cols-1
        // if length is 2, use grid-cols-2

        <div className="container space-y-6 mx-auto text-center lg:text-start">
            <h1 className="text-5xl font-bold">{dictionary.title}</h1>
            <p className="text-xl">{dictionary.subtitle}</p>
            <div className={dictionary.carrers.length >= 1 ? "grid-cols-1" : "lg:grid-cols-2" + " grid "}>
            {dictionary.carrers.map((carrer, index) => (
                <CarrerCard key={index} {...carrer} />
            ))}
            </div>
        </div>
    )
}

function CarrerCard(carrer: Awaited<ReturnType<typeof getDictionary>>["carrer"]["carrers"][0]) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl flex text-start">
        <div className="card-body">
          <h2 className="card-title">{carrer.title}</h2>
          <p>{carrer.company}</p>
            <p>{carrer.date}</p>
            <p>{carrer.description}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={carrer.cta.url}>{carrer.cta.title}</Link>
          </div>
        </div>
      </div>
    )
}
