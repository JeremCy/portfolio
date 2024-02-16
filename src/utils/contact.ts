import { contact } from "../types/contact";


async function ContactSubmit(data: contact) {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      return { response: response, status: response.status}
    } catch (error) {
      // return error with status code 500
      return { error: error, status: 500};
    }
  }

export { ContactSubmit };
