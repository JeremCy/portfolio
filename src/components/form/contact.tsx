"use client";
import { useForm } from "react-hook-form";
import { type getDictionary } from "@libs/dictionaries";
import { contact } from "@/src/types/contact";
import { ContactSubmit } from "@/src/utils/contact";


export default function Contact ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"];
}) {
  const { register, handleSubmit, formState: { errors } } = useForm<contact>();
  const action: () => void = handleSubmit(async (data) => {
    const contact = await ContactSubmit(data);
    // if the return status is 200, toast success else toast error
    if (contact.status === 200) {

    } else {

    }
  });

  const form = useForm();

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="lg:text-5xl font-bold text-3xl">{dictionary.title}</h1>
          <p className="py-6">{dictionary.description}</p>
        </div>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={form.handleSubmit(action)} className="card-body">
          <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="form-control">
          <label className="label">
            <span className="label-text">{dictionary.form.firstname.label}</span>
          </label>
            <input
              placeholder={dictionary.form.firstname.label}
              className="input input-bordered" required 
              {...register("firstName", { required: true })}
            />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">{dictionary.form.lastname.label}</span>
          </label>
            <input
              placeholder={dictionary.form.lastname.label}
              className="input input-bordered" required 
              {...register("lastName", { required: true })}          
            />
            </div>
          </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">{dictionary.form.email.label}</span>
          </label>
            <input
              placeholder={dictionary.form.email.label}
              className="input input-bordered" required 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">{dictionary.form.subject.label}</span>
          </label>
            <input
              placeholder={dictionary.form.subject.label}
              className="input input-bordered" required 
              {...register("subject", { required: true })}
            />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">{dictionary.form.message.label}</span>
          </label>
            <textarea placeholder={dictionary.form.message.placeholder}  {...register('message', { required: true })} className="min-h-[10vh] input input-bordered"/>
          </div>
          <div className="form-control mt-6">
          <button className="btn btn-primary">{dictionary.form.submit}</button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}
