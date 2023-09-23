import { useTranslation } from 'next-i18next'

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <div className="p-4 w-1/2 mx-auto">
      <h1 className="text-4xl font-bold sm:text-6xl text-center">{t('contact.title')}</h1>
      <form action="">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">{t('contact.name')}</label>
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
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="border border-black  bg-transparent"
          ></textarea>
          <button className="rounded-full text-white bg-black">{t('contact.cta')}</button>
        </div>
      </form>
    </div>
  );
}
