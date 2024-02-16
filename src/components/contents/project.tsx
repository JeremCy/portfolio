import { Locale } from "@/i18n.config";
import { getDictionary } from "@libs/dictionaries";
import Link from "next/link";

export default async function Projects({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>>["project"] }) {
    return (
        <div className="container space-y-6 mx-auto text-center lg:text-start">
            <h1 className="text-5xl font-bold">{dictionary.title}</h1>
            <p className="text-xl">{dictionary.subtitle}</p>
            <div className="grid gap-6 lg:grid-cols-2 text-start">
            {dictionary.projects.map((project, index) => (
                <ProjectsCard key={index} {...project} />
            ))}
            </div>
        </div>
    )
}

function ProjectsCard(project: Awaited<ReturnType<typeof getDictionary>>["project"]["projects"][0]) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl flex">
        <div className="card-body">
          <h2 className="card-title">{project.title}</h2>
          <p>{project.status}</p>
            <p>{project.context}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" href={project.cta.url}>{project.cta.title}</Link>
          </div>
        </div>
      </div>
    )
}
