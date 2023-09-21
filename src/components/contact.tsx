export default function Contact() {
  return (
    <div className="p-4 w-1/2 mx-auto">
      <h1 className="text-4xl font-bold sm:text-6xl text-center">Contact</h1>
      <form action="">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-black  bg-transparent"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-black  bg-transparent"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="border border-black  bg-transparent"
          ></textarea>
          <button className="rounded-full text-white bg-black">Send</button>
        </div>
      </form>
    </div>
  );
}
