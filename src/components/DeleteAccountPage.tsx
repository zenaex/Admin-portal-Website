import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import bgImage from '../assets/image 2924.png';
import {
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lock,
  Mail,
  KeyRound,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '');

interface ApiErrorResponse {
  message?: string;
  error?: string;
}

const DELETION_REASONS = [
  'I no longer need or use my Zenaex account',
  'Privacy or data security concerns',
  'Created a duplicate or test account',
  'Switching to another payment method',
  'Other reason',
];

export function DeleteAccountPage() {
  // Step state: 1 = Login, 2 = Initiate Deletion, 3 = Confirm Deletion, 4 = Success
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Step 1: Login State
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // Step 1b: 2FA / New Device Verification State
  const [is2FAChallenge, setIs2FAChallenge] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [challengeMessage, setChallengeMessage] = useState('');

  // Step 2: Initiate State
  const [reason, setReason] = useState(DELETION_REASONS[0]);
  const [customReason, setCustomReason] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [initiateToken, setInitiateToken] = useState('');

  // Step 3: Confirm State
  const [confirmationCode, setConfirmationCode] = useState('');

  // General UI States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const identifierId = useId();
  const passwordId = useId();
  const otpCodeId = useId();
  const customReasonId = useId();
  const codeId = useId();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What data will be permanently deleted?',
      a: 'Upon confirming deletion, your personal account profile, contact details, login credentials, saved payout accounts, and notification preferences will be permanently removed from our active databases.',
    },
    {
      q: 'What data will be retained and for how long?',
      a: 'In compliance with financial regulations and statutory requirements, Zenaex is required to retain certain financial transaction logs, identity verification records, and fraud prevention metadata for a mandatory statutory period. This retained data is restricted and will not be used for marketing or commercial purposes.',
    },
    {
      q: 'How long does the account deletion process take?',
      a: 'Your account access is revoked immediately upon confirmation. Full deletion and cleanup across all associated backup systems complete within 30 days.',
    },
    {
      q: 'What if I lost access to my account or password?',
      a: 'If you can no longer log in to your account, you can send a manual data deletion request to support@zenaex.com from your registered email address with identity verification.',
    },
  ];

  // Helper to extract or generate device information
  const getDeviceInfo = () => {
    let deviceId = localStorage.getItem('zenaex_device_id');
    if (!deviceId) {
      deviceId = 'web_' + Math.random().toString(36).substring(2, 11) + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('zenaex_device_id', deviceId);
    }

    const ua = navigator.userAgent || '';
    let deviceOs = 'Web';
    if (ua.includes('Win')) deviceOs = 'Windows';
    else if (ua.includes('Mac')) deviceOs = 'macOS';
    else if (ua.includes('Linux')) deviceOs = 'Linux';
    else if (ua.includes('Android')) deviceOs = 'Android';
    else if (ua.includes('iPhone') || ua.includes('iPad')) deviceOs = 'iOS';

    return {
      deviceId,
      deviceName: `Web Browser (${navigator.appName || 'Browser'})`,
      deviceOs,
      deviceModel: navigator.platform || 'Web Browser',
      deviceManufacturer: '',
      pushToken: '',
    };
  };

  // Helper for fetch requests
  const makeApiCall = async (
    endpoint: string,
    bodyData: Record<string, unknown>,
    headers: Record<string, string> = {}
  ) => {
    const url = API_BASE_URL ? `${API_BASE_URL}${endpoint}` : endpoint;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(bodyData),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const errRes = data as ApiErrorResponse;
      throw new Error(errRes.message || errRes.error || `Request failed with status ${res.status}`);
    }
    return data;
  };

  // STEP 1: Handle Login (POST /auth/login)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) {
      setErrorMessage('Please enter both your email address and password');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const deviceInfo = getDeviceInfo();
      const data = await makeApiCall('/auth/login', {
        email: identifier,
        password: password,
        ...deviceInfo,
      });

      // Check if 2FA or new-device verification is required
      if (
        data.isTwoFactorEnabled ||
        data.deviceRecognized === false ||
        (!data.token && !data.accessToken && !data.access_token)
      ) {
        setIs2FAChallenge(true);
        setChallengeMessage(
          data.message ||
            'Security verification required. A one-time passcode (OTP) has been emailed to your registered email address.'
        );
        return;
      }

      const token = data.token || data.accessToken || data.access_token || 'authenticated';
      setAuthToken(token);
      setUserEmail(data.user?.email || identifier);
      setStep(2);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Wrong email or password';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // STEP 1b: Handle 2FA / New Device OTP Verification (POST /auth/2fa/verify-login)
  const handleVerify2FASubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim()) {
      setErrorMessage('Please enter the verification code sent to your email.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const deviceInfo = getDeviceInfo();
      const data = await makeApiCall('/auth/2fa/verify-login', {
        email: identifier,
        otp: otpCode.trim(),
        code: otpCode.trim(),
        deviceId: deviceInfo.deviceId,
      });

      const token = data.token || data.accessToken || data.access_token || 'authenticated';
      setAuthToken(token);
      setUserEmail(data.user?.email || identifier);
      setIs2FAChallenge(false);
      setStep(2);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Invalid or expired verification code.';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // STEP 2: Handle Initiate Deletion (POST /settings/account/delete/initiate)
  const handleInitiateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setErrorMessage('Please acknowledge the confirmation to proceed.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    const finalReason = reason === 'Other reason' ? customReason : reason;

    try {
      const headers: Record<string, string> = {};
      if (authToken && authToken !== 'authenticated') {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      const data = await makeApiCall(
        '/settings/account/delete/initiate',
        {
          reason: finalReason,
          email: userEmail,
        },
        headers
      );

      setInitiateToken(data.initiateId || data.token || data.id || 'initiated');
      setStep(3);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to initiate deletion.';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // STEP 3: Handle Confirm Deletion (POST /settings/account/delete/confirm)
  const handleConfirmSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmationCode.trim()) {
      setErrorMessage('Please enter the confirmation code sent to your email address.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const headers: Record<string, string> = {};
      if (authToken && authToken !== 'authenticated') {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      await makeApiCall(
        '/settings/account/delete/confirm',
        {
          code: confirmationCode.trim(),
          initiateId: initiateToken,
          email: userEmail,
        },
        headers
      );

      setStep(4);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Invalid or expired confirmation code.';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#F2F4F7] font-sans text-primary-black">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-primary-black">
        <Header variant="light" />

        <div className="relative flex flex-col items-center justify-center px-4 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-36">
          <div className="pointer-events-none absolute inset-0 z-0">
            <img src={bgImage} alt="" className="h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-black/70 via-primary-black/60 to-primary-black/90" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Account & Data Deletion
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Request permanent deletion of your Zenaex account and associated data.
            </p>

            {/* Stepper Indicator */}
            <div className="mt-8 inline-flex items-center gap-2 sm:gap-4 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  step === 1 ? 'bg-primary-green text-primary-black' : step > 1 ? 'text-white' : 'text-gray-400'
                }`}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/20 text-[10px]">1</span>
                <span>Login</span>
              </div>
              <span className="text-white/20">/</span>
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  step === 2 ? 'bg-primary-green text-primary-black' : step > 2 ? 'text-white' : 'text-gray-400'
                }`}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/20 text-[10px]">2</span>
                <span>Initiate</span>
              </div>
              <span className="text-white/20">/</span>
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  step === 3 ? 'bg-primary-green text-primary-black' : step > 3 ? 'text-white' : 'text-gray-400'
                }`}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/20 text-[10px]">3</span>
                <span>Confirm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-12 md:px-8 md:py-16 lg:px-[110px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-xl sm:p-10">

              {errorMessage && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 p-4 text-xs sm:text-sm text-red-700">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                  <p>{errorMessage}</p>
                </div>
              )}

              {/* STEP 1: LOGIN (/auth/login) & 2FA VERIFICATION (/auth/2fa/verify-login) */}
              {step === 1 && !is2FAChallenge && (
                <div>
                  <div className="mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-primary-black sm:text-2xl">
                      Step 1: Authenticate Account
                    </h2>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Please enter your account details to verify ownership before requesting data deletion.
                    </p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-5">
                    <div>
                      <label htmlFor={identifierId} className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          id={identifierId}
                          type="email"
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          placeholder="name@example.com"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] pl-10 pr-4 py-3 text-sm text-primary-black placeholder:text-gray-400 transition-all focus:border-primary-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor={passwordId} className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Account Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          id={passwordId}
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] pl-10 pr-4 py-3 text-sm text-primary-black placeholder:text-gray-400 transition-all focus:border-primary-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                        />
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary-black px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-black/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer shadow-md"
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Authenticating...
                          </span>
                        ) : (
                          <>
                            Authenticate & Continue
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 1b: 2FA / NEW DEVICE OTP VERIFICATION */}
              {step === 1 && is2FAChallenge && (
                <div>
                  <div className="mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-primary-black sm:text-2xl">
                      Step 1b: Security Verification
                    </h2>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm leading-relaxed">
                      {challengeMessage}
                    </p>
                  </div>

                  <form onSubmit={handleVerify2FASubmit} className="space-y-5">
                    <div>
                      <label htmlFor={otpCodeId} className="block text-xs font-semibold text-gray-700 mb-1.5">
                        One-Time Passcode (OTP)
                      </label>
                      <div className="relative">
                        <KeyRound className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          id={otpCodeId}
                          type="text"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          placeholder="Enter 6-digit OTP code"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] pl-10 pr-4 py-3 text-sm text-primary-black placeholder:text-gray-400 transition-all focus:border-primary-green focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/30"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIs2FAChallenge(false);
                          setErrorMessage('');
                        }}
                        className="rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary-black px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-black/90 disabled:opacity-50 cursor-pointer shadow-md"
                      >
                        {isLoading ? (
                          <span>Verifying OTP...</span>
                        ) : (
                          <>
                            Verify OTP & Continue
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 2: INITIATE DELETION (/settings/account/delete/initiate) */}
              {step === 2 && (
                <div>
                  <div className="mb-6 border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-primary-black sm:text-2xl">
                        Step 2: Initiate Account Deletion
                      </h2>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                        Authenticated
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Target Account: <strong className="text-primary-black">{userEmail}</strong>
                    </p>
                  </div>

                  <form onSubmit={handleInitiateSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">
                        Why are you deleting your account? (Optional)
                      </label>
                      <div className="space-y-2">
                        {DELETION_REASONS.map((r) => (
                          <label
                            key={r}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-xs transition-all ${
                              reason === r
                                ? 'border-primary-black bg-gray-50 font-semibold text-primary-black'
                                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="deletionReason"
                              value={r}
                              checked={reason === r}
                              onChange={() => setReason(r)}
                              className="accent-primary-black"
                            />
                            {r}
                          </label>
                        ))}
                      </div>

                      {reason === 'Other reason' && (
                        <div className="mt-3">
                          <label htmlFor={customReasonId} className="sr-only">
                            Provide details
                          </label>
                          <textarea
                            id={customReasonId}
                            value={customReason}
                            onChange={(e) => setCustomReason(e.target.value)}
                            placeholder="Please share any additional details..."
                            rows={3}
                            className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] p-3 text-xs text-primary-black focus:border-primary-green focus:outline-none"
                          />
                        </div>
                      )}
                    </div>

                    {/* Warning Alert Box */}
                    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-amber-800">
                        <ShieldAlert className="h-4 w-4 shrink-0" />
                        Important Deletion Notice:
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-amber-800/90 text-[11px] leading-relaxed">
                        <li>Active account balances or unprocessed transactions will be permanently lost.</li>
                        <li>This action cannot be undone once confirmed.</li>
                      </ul>
                    </div>

                    {/* Checkbox Acknowledgment */}
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-gray-700">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-0.5 rounded border-gray-300 accent-primary-black"
                      />
                      <span>
                        I understand that initiating account deletion will begin the process of permanently deleting my account and data.
                      </span>
                    </label>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isLoading || !agreedToTerms}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-red-700 disabled:opacity-50 cursor-pointer shadow-md"
                      >
                        {isLoading ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            Initiate Account Deletion
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 3: CONFIRM DELETION (/settings/account/delete/confirm) */}
              {step === 3 && (
                <div>
                  <div className="mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-primary-black sm:text-2xl">
                      Step 3: Confirm Account Deletion
                    </h2>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Please enter the verification code sent to your registered contact channel to confirm deletion.
                    </p>
                  </div>

                  <form onSubmit={handleConfirmSubmit} className="space-y-6">
                    <div>
                      <label htmlFor={codeId} className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Verification / Confirmation Code
                      </label>
                      <div className="relative">
                        <KeyRound className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                          id={codeId}
                          type="text"
                          value={confirmationCode}
                          onChange={(e) => setConfirmationCode(e.target.value)}
                          placeholder="e.g. 123456"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-[#F8F9FA] pl-10 pr-4 py-3 text-sm text-primary-black placeholder:text-gray-400 transition-all focus:border-primary-green focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="rounded-full border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-xs font-semibold text-white transition-all hover:bg-red-700 disabled:opacity-50 cursor-pointer shadow-md"
                      >
                        {isLoading ? (
                          <span>Verifying & Deleting...</span>
                        ) : (
                          <>
                            Confirm Permanent Deletion
                            <ShieldAlert className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 4: SUCCESS RECEIPT */}
              {step === 4 && (
                <div className="text-center py-6">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-primary-black sm:text-3xl">
                    Account Deletion Requested
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Your request for account and data deletion for <strong className="text-primary-black">{userEmail || identifier}</strong> has been successfully processed and confirmed.
                  </p>

                  <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-5 text-left text-xs space-y-3">
                    <div className="flex items-center gap-2 font-semibold text-primary-black">
                      <Clock className="h-4 w-4 text-gray-500" />
                      What happens next?
                    </div>
                    <ul className="space-y-2 text-gray-600 text-[11px] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>Account sessions have been revoked immediately across all mobile apps and web sessions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>Personal identifiers and data records will be purged within 30 days.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 rounded-full bg-primary-black px-8 py-3.5 text-xs font-semibold text-white transition-all hover:bg-black/90"
                    >
                      Return to Home Page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: FAQ Accordion & Manual Support */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* FAQ Accordion */}
            <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-md sm:p-8">
              <h3 className="text-lg font-bold text-primary-black mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-gray-500" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-3.5 text-left text-xs font-semibold text-primary-black bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="p-3.5 text-[11px] leading-relaxed text-gray-600 bg-white border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Support Request Option */}
            <div className="rounded-3xl border border-amber-200/80 bg-amber-50/60 p-6 sm:p-8">
              <h3 className="text-sm font-bold text-amber-900 mb-2">Can't log in to your account?</h3>
              <p className="text-xs text-amber-800/90 leading-relaxed mb-4">
                If you have lost access to your login credentials or authentication factors, our support team can assist you with manual identity verification and account deletion.
              </p>
              <Link
                to="/support#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-2.5 text-xs font-semibold text-amber-900 transition-colors hover:bg-amber-100"
              >
                Contact Support for Manual Deletion
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
