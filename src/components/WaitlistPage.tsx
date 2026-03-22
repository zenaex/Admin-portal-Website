import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './Button';

const DEFAULT_WAITLIST_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbx_cvpoMuuBUiIXRpz8d6Bvrm4oig3kqLD-2IAr-Eo1MxPmIOD9Rarq6CBJvxY4SvFbgg/exec';

const WAITLIST_ENDPOINT =
  typeof import.meta.env.VITE_WAITLIST_ENDPOINT === 'string' &&
  import.meta.env.VITE_WAITLIST_ENDPOINT.trim().length > 0
    ? import.meta.env.VITE_WAITLIST_ENDPOINT.trim()
    : DEFAULT_WAITLIST_ENDPOINT;

export function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col font-sans">
      <Header variant="dark" />

      <main className="flex-grow pt-32 pb-24 px-8 md:px-12 lg:px-[110px] w-full max-w-[1440px] mx-auto">
        <section className="mx-auto w-full max-w-2xl text-center mb-12">
          <p className="text-[#A3A3A3] text-sm font-medium mb-3">Waitlist</p>
          <h1 className="text-primary-black text-[44px] md:text-[60px] font-semibold tracking-tight leading-[1.05] mb-5">
            Join the Zenaex waitlist
          </h1>
          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Be the first to know when we launch. Drop your details and we’ll notify you.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
          {!submitted ? (
            <form
              className="flex flex-col gap-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitError(null);

                if (!WAITLIST_ENDPOINT || WAITLIST_ENDPOINT.includes('PASTE_')) return;

                const form = e.currentTarget;
                const fd = new FormData(form);

                const params = new URLSearchParams();
                params.set('firstName', String(fd.get('firstName') || ''));
                params.set('lastName', String(fd.get('lastName') || ''));
                params.set('email', String(fd.get('email') || ''));
                params.set('phone', String(fd.get('phone') || ''));
                params.set('referrer', document.referrer || '');
                params.set('userAgent', navigator.userAgent || '');

                try {
                  setSubmitting(true);
                  await fetch(WAITLIST_ENDPOINT, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                    body: params.toString(),
                  });
                  setSubmitted(true);
                  form.reset();
                } catch {
                  setSubmitError('Something went wrong. Please try again.');
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>

              {submitError ? (
                <p className="text-center text-sm text-red-600" role="alert">
                  {submitError}
                </p>
              ) : null}

              <Button
                variant="primary"
                className="w-full mt-2"
                showArrow={false}
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Joining…' : 'Join waitlist'}
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-primary-black text-2xl font-bold mb-3">
                You’re on the list
              </h2>
              <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-8">
                Thanks for joining. We’ll reach out as soon as early access is available.
              </p>
              <Button variant="dark" to="/" showArrow={false}>
                Back to home
              </Button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
