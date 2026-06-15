import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './Button';

const WAITLIST_ENDPOINT =
  typeof import.meta.env.VITE_WAITLIST_ENDPOINT === 'string'
    ? import.meta.env.VITE_WAITLIST_ENDPOINT.trim()
    : '';

function isWaitlistEndpointConfigured(endpoint: string): boolean {
  return endpoint.length > 0 && !endpoint.includes('YOUR_API_ID');
}

export function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const waitlistLink = `${window.location.origin}/waitlist`;
    const textToCopy = `The future of crypto is here and it is called Zenaex. Trade, save, and send crypto and gift cards with zero stress. Get in early. ${waitlistLink}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col font-sans">
      <Header variant="dark" />

      <main className="flex-grow pt-32 pb-24 px-8 md:px-12 lg:px-[110px] w-full max-w-[1440px] mx-auto">
        <section className="mx-auto w-full max-w-2xl text-center mb-12">
          <p className="text-[#A3A3A3] text-sm font-medium mb-3">Waitlist</p>
          <h1 className="text-primary-black text-[44px] md:text-[60px] font-semibold tracking-tight leading-[1.05] mb-5">
            Zenaex is Coming. Are You Ready?
          </h1>
          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Trade, save, and send crypto and gift cards with zero stress! Join the waitlist and be the first through the door.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8 md:p-12 lg:p-16 max-w-3xl mx-auto">
          {!submitted ? (
            <form
              className="flex flex-col gap-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitError(null);

                if (!isWaitlistEndpointConfigured(WAITLIST_ENDPOINT)) {
                  setSubmitError('Waitlist is not configured. Please try again later.');
                  return;
                }

                const form = e.currentTarget;
                const fd = new FormData(form);

                try {
                  setSubmitting(true);
                  const response = await fetch(WAITLIST_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      data: [
                        {
                          firstName: String(fd.get('firstName') || ''),
                          lastName: String(fd.get('lastName') || ''),
                          email: String(fd.get('email') || ''),
                          phone: String(fd.get('phone') || ''),
                          referrer: document.referrer || '',
                          userAgent: navigator.userAgent || '',
                          timestamp: 'DATETIME',
                        },
                      ],
                    }),
                  });

                  if (!response.ok) {
                    let message = 'Something went wrong. Please try again.';
                    try {
                      const body = (await response.json()) as { error?: string; message?: string };
                      message = body.error || body.message || message;
                    } catch {
                      // ignore JSON parse errors
                    }
                    setSubmitError(message);
                    return;
                  }

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
                  placeholder="Phone Number"
                  className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
                  required
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
                You're In. Welcome to the 1%!
              </h2>
              <p className="text-[#666666] text-sm md:text-base leading-relaxed mb-8">
                Share this with someone who deserves to be here.
              </p>
              <Button
                variant="dark"
                showArrow={false}
                onClick={handleCopyLink}
                className="w-full sm:w-auto mx-auto min-w-[200px]"
              >
                {copied ? 'Link Copied!' : 'Copy Link'}
              </Button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
