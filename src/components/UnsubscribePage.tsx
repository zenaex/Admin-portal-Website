import { useState, useId } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Header } from './Header';
import bgImage from '../assets/image 2924.png';
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

const REASONS = [
  'I receive too many emails from Zenaex',
  'The content is no longer relevant to me',
  'I never signed up for this newsletter',
  'I prefer to receive updates on social media',
  'Other reason',
];

export function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const initialEmail = searchParams.get('email') || '';
  
  const [email, setEmail] = useState(initialEmail);
  const [unsubscribeOption, setUnsubscribeOption] = useState<'marketing' | 'all' | 'pause'>('marketing');
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [customReason, setCustomReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isResubscribed, setIsResubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailInputId = useId();
  const customReasonId = useId();

  const handleUnsubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate API request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setIsResubscribed(false);
    }, 800);
  };

  const handleResubscribe = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(false);
      setIsResubscribed(true);
    }, 600);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-primary-black font-sans text-primary-black">
      {/* Navigation Header */}
      <Header variant="light" />

      {/* 404-style Base Layer Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background overlay" 
          className="h-full w-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black/70 via-primary-black/60 to-primary-black/90 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 md:px-8 md:py-28">
        <div className="w-full max-w-xl">
          
          {/* Status Message when resubscribed */}
          {isResubscribed && !isDone && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 shadow-md">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
              <p className="text-xs md:text-sm font-medium">
                Welcome back! You've been successfully resubscribed to Zenaex updates.
              </p>
            </div>
          )}

          {!isDone ? (
            /* Unsubscribe Form Card (White Background) */
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl sm:p-10 text-primary-black">
              
              {/* Title & Subtitle */}
              <h1 className="text-2xl font-bold tracking-tight text-primary-black sm:text-3xl">
                Manage your subscription
              </h1>
              <p className="mt-2 text-xs leading-relaxed text-[#666666] sm:text-sm">
                We're sorry to see you go. Tailor your email preferences or confirm your unsubscription below.
              </p>

              <form onSubmit={handleUnsubscribe} className="mt-8 space-y-6">
                {/* Target Email Address */}
                <div>
                  <label htmlFor={emailInputId} className="block text-xs font-medium text-gray-700 mb-2">
                    Target Email Address
                  </label>
                  <div className="relative">
                    <input
                      id={emailInputId}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] px-4 py-3 text-sm text-primary-black placeholder:text-gray-400 transition-all focus:border-primary-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                    />
                  </div>
                  {errorMessage && (
                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" /> {errorMessage}
                    </p>
                  )}
                </div>

                {/* Unsubscribe Options */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-3">
                    Subscription Choice
                  </label>
                  <div className="space-y-2.5">
                    <label 
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all ${
                        unsubscribeOption === 'marketing'
                          ? 'border-primary-black bg-gray-50 text-primary-black shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="unsubscribeOption"
                        value="marketing"
                        checked={unsubscribeOption === 'marketing'}
                        onChange={() => setUnsubscribeOption('marketing')}
                        className="mt-0.5 accent-primary-black"
                      />
                      <div>
                        <p className="text-xs font-semibold text-primary-black">Unsubscribe from marketing & promos</p>
                        <p className="text-[11px] text-[#666666]">Stop receiving promotional emails, news, and special offers.</p>
                      </div>
                    </label>

                    <label 
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all ${
                        unsubscribeOption === 'pause'
                          ? 'border-primary-black bg-gray-50 text-primary-black shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="unsubscribeOption"
                        value="pause"
                        checked={unsubscribeOption === 'pause'}
                        onChange={() => setUnsubscribeOption('pause')}
                        className="mt-0.5 accent-primary-black"
                      />
                      <div>
                        <p className="text-xs font-semibold text-primary-black">Pause emails for 30 days</p>
                        <p className="text-[11px] text-[#666666]">Take a temporary break without missing out long term.</p>
                      </div>
                    </label>

                    <label 
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all ${
                        unsubscribeOption === 'all'
                          ? 'border-primary-black bg-gray-50 text-primary-black shadow-xs'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="unsubscribeOption"
                        value="all"
                        checked={unsubscribeOption === 'all'}
                        onChange={() => setUnsubscribeOption('all')}
                        className="mt-0.5 accent-primary-black"
                      />
                      <div>
                        <p className="text-xs font-semibold text-primary-black">Unsubscribe from ALL emails</p>
                        <p className="text-[11px] text-[#666666]">Opt out of all automated emails except security alerts.</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Reason Selection */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Help us improve (Optional)
                  </label>
                  <div className="space-y-2">
                    {REASONS.map((reason) => (
                      <label 
                        key={reason}
                        className="flex cursor-pointer items-center gap-2.5 text-xs text-gray-600 hover:text-primary-black transition-colors"
                      >
                        <input
                          type="radio"
                          name="reason"
                          value={reason}
                          checked={selectedReason === reason}
                          onChange={(e) => setSelectedReason(e.target.value)}
                          className="accent-primary-black"
                        />
                        {reason}
                      </label>
                    ))}
                  </div>

                  {selectedReason === 'Other reason' && (
                    <div className="mt-3">
                      <label htmlFor={customReasonId} className="sr-only">
                        Please tell us more
                      </label>
                      <textarea
                        id={customReasonId}
                        value={customReason}
                        onChange={(e) => setCustomReason(e.target.value)}
                        placeholder="Please tell us more..."
                        rows={2}
                        className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] p-3 text-xs text-primary-black placeholder:text-gray-400 focus:border-primary-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                      />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary-black px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Confirm Unsubscribe
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-xs font-medium text-primary-black transition-all hover:bg-gray-100"
                  >
                    Keep Me Subscribed
                  </Link>
                </div>

              </form>

              {/* Note */}
              <div className="mt-8 flex items-center gap-2 text-[11px] text-gray-500 border-t border-gray-100 pt-4">
                <ShieldCheck className="h-4 w-4 text-gray-600 shrink-0" />
                <span>Account security & transactional emails will continue as required by service terms.</span>
              </div>

            </div>
          ) : (
            /* Success / Unsubscribed State (White Background) */
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl text-center sm:p-12 text-primary-black">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#BCEB0F]/20 border border-[#BCEB0F] text-[#013220] shadow-[0_0_30px_rgba(188,235,15,0.3)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-black">
                You've Been Unsubscribed
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed max-w-md mx-auto">
                We've updated the preferences for <strong className="text-primary-black font-semibold">{email}</strong>. 
                {unsubscribeOption === 'pause' 
                  ? ' Your emails are paused for the next 30 days.' 
                  : ' You will no longer receive marketing communications from Zenaex.'}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleResubscribe}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-6 py-3 text-xs font-semibold text-primary-black transition-all hover:bg-gray-100 cursor-pointer"
                >
                  <HeartHandshake className="h-4 w-4" />
                  Unsubscribed by mistake? Resubscribe
                </button>

                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-black px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-black/90"
                >
                  Return to Home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 border-t border-gray-100 pt-6">
                <p className="text-[11px] text-gray-400">
                  Changed your mind later? You can update your notifications anytime from your Zenaex account settings.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
