import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("A ligação ao serviço de subscrição está em validação. O seu endereço não foi enviado.");
  }
  return (
    <form onSubmit={submit} className="mt-8 max-w-xl" noValidate>
      <label htmlFor="newsletter-email" className="block text-sm font-semibold">Endereço de email</label>
      <div className="mt-2 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <input id="newsletter-email" name="email" type="email" inputMode="email" autoComplete="email" required className="min-h-12 min-w-0 rounded-sm border border-input bg-surface px-4 text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-ring" placeholder="nome@exemplo.com" aria-describedby={message ? "newsletter-status" : undefined} />
        <Button type="submit">Subscrever</Button>
      </div>
      {message && <p id="newsletter-status" role="status" className="mt-3 text-sm text-muted-foreground">{message}</p>}
    </form>
  );
}