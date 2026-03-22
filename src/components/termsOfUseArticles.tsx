import type { ReactNode } from 'react';

export type TermsArticle = {
  id: string;
  navLabel: string;
  cardTitle: string;
  content: ReactNode;
};

const p = 'text-[15px] leading-relaxed text-gray-600';
const ul = 'mt-2 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-gray-600';
const h3 = 'mt-6 text-base font-bold text-primary-black';
const caps = 'mt-4 text-[13px] font-bold uppercase leading-snug tracking-wide text-primary-black';

export const TERMS_ARTICLES: TermsArticle[] = [
  {
    id: 'article-1',
    navLabel: 'Article 1 — Introduction',
    cardTitle: 'Article 1 — Introduction',
    content: (
      <>
        <p className={p}>
          These Zena Terms of Use (referred to as &quot;these Terms&quot;) are entered into between you (referred to as &quot;you&quot;, &quot;your&quot;, or &quot;User&quot;) and Zena Technologies Limited and its affiliates (referred to as &quot;Zena&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing, downloading, registering, or using the Zena platform or any Zena Services (as defined below), or by clicking &quot;I Agree&quot;, you confirm that you have read, understood, and accepted all the terms and conditions set out in these Terms, as well as our Privacy Policy and all applicable Platform Rules.
        </p>
        <p className={`${p} mt-4`}>
          In addition to these Terms, when using specific features of the Platform, you may be subject to additional terms and conditions applicable to those features, which are incorporated herein by reference.
        </p>
        <p className={caps}>
          THESE TERMS CONTAIN IMPORTANT PROVISIONS INCLUDING AN ARBITRATION CLAUSE THAT REQUIRES ALL CLAIMS AND DISPUTES TO BE RESOLVED BY LEGALLY BINDING ARBITRATION AS SET FORTH IN ARTICLE 15.
        </p>
        <p className={caps}>
          THE VALUES OF DIGITAL CURRENCIES AND CRYPTO ASSETS ARE HIGHLY VOLATILE. THERE IS A SUBSTANTIAL RISK OF ECONOMIC LOSS WHEN PURCHASING, SELLING, HOLDING, OR TRANSACTING DIGITAL CURRENCIES. BY USING ZENA SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH DIGITAL CURRENCY TRANSACTIONS; (2) YOU ASSUME ALL RISKS RELATED TO YOUR USE OF ZENA SERVICES; AND (3) ZENA SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES.
        </p>
        <p className={`${p} mt-4`}>
          If you do not agree to these Terms, you must immediately stop accessing or using the Platform and all Zena Services.
        </p>
      </>
    ),
  },
  {
    id: 'article-2',
    navLabel: 'Article 2 — Definitions',
    cardTitle: 'Article 2 — Definitions',
    content: (
      <>
        <p className={p}>For the purposes of these Terms, the following definitions apply:</p>
        <h3 className={`${h3} mt-4`}>2.1 Zena / Zenaex</h3>
        <p className={p}>
          Refers to the digital ecosystem operated by Zena Technologies Limited, comprising the Zena mobile application, website (www.zenaex.com), administrative systems, and all related platforms developed to deliver Zena Services.
        </p>
        <h3 className={h3}>2.2 Zena Operators</h3>
        <p className={p}>
          Refers to all parties responsible for operating the Zena platform and delivering Zena Services, including Zena Technologies Limited, its subsidiaries, affiliates, officers, employees, agents, and authorised third-party partners.
        </p>
        <h3 className={h3}>2.3 Zena Services</h3>
        <p className={p}>
          Refers to the products, features, and services made available through the Platform from time to time, including those described in Article 6 and as further set out in the Platform Rules.
        </p>
        <h3 className={h3}>2.4 Zena Platform Rules</h3>
        <p className={p}>
          Refers to all policies, rules, guidelines, announcements, and instructions issued by Zena from time to time, including fee schedules, KYC requirements, transaction limits, and Help Centre content. Platform Rules form an integral part of these Terms.
        </p>
        <h3 className={h3}>2.5 User / Users</h3>
        <p className={p}>
          Refers to any individual, legal entity, or organisation that accesses, registers, or uses the Zena Platform or any Zena Services and satisfies the eligibility criteria set out in these Terms. The term includes both retail users and institutional users where applicable.
        </p>
        <h3 className={h3}>2.6 Digital Currencies / Crypto Assets</h3>
        <p className={p}>
          Refers to encrypted or digital tokens, cryptocurrencies, stablecoins, and other blockchain-based assets that carry a certain value, issued and managed in decentralised or semi-decentralised form, including but not limited to Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), and Solana (SOL).
        </p>
        <h3 className={h3}>2.7 Zena Account</h3>
        <p className={p}>
          Refers to the virtual account created by Zena for each User, used to record usage of Zena Services, wallet balances, asset changes, transaction history, and profile information. The Zena Account serves as the basis for a User to access Zena Services on the Platform.
        </p>
        <h3 className={h3}>2.8 KYC / AML</h3>
        <p className={p}>
          Refers to Know Your Customer and Anti-Money Laundering processes, respectively. These are regulatory compliance requirements imposed on Zena under applicable Nigerian and international financial laws, requiring Zena to collect, verify, and retain User identity and transaction information.
        </p>
        <h3 className={h3}>2.9 Fiat Currency</h3>
        <p className={p}>
          Refers to government-issued currencies recognised as legal tender, including the Nigerian Naira (NGN) and other currencies supported on the Platform from time to time.
        </p>
        <h3 className={h3}>2.10 E-Trade</h3>
        <p className={p}>
          Refers to the agent-assisted over-the-counter (OTC) trading service available on the Platform, which enables Users to transact in unlisted or non-standard crypto assets through a supervised chat-based process.
        </p>
        <h3 className={h3}>2.11 Wallet Address</h3>
        <p className={p}>
          Refers to a unique alphanumeric identifier associated with a blockchain network that functions as a destination for sending or receiving Digital Currency. Wallet addresses are network-specific and non-interchangeable.
        </p>
        <h3 className={h3}>2.12 Transaction</h3>
        <p className={p}>
          Refers to any instruction initiated by a User on the Platform to send, receive, swap, convert, purchase, or otherwise move Digital Currency or Fiat Currency, including utility payments, gift card trades, and eSIM purchases.
        </p>
      </>
    ),
  },
  {
    id: 'article-3',
    navLabel: 'Article 3 — About Zena',
    cardTitle: 'Article 3 — About Zena',
    content: (
      <>
        <p className={p}>
          Zena is a borderless crypto utility platform that provides Africans with seamless access to digital currencies, solutions, and services. Zena is developed and operated by Zena Technologies Limited, a company registered in Nigeria.
        </p>
        <p className={`${p} mt-4`}>
          Zena primarily serves as a unified digital platform enabling Users to manage crypto assets, convert between digital and fiat currencies, make payments, and access lifestyle and utility services — all from a single application.
        </p>
        <p className={`${p} mt-4`}>
          Zena is committed to maintaining the accuracy and reliability of information provided through Zena Services; however, Zena cannot and does not guarantee the accuracy, completeness, reliability, integrity, or performance of such information. The information available on the Platform may change without prior notice. ZENA DOES NOT PROVIDE FINANCIAL, INVESTMENT, OR LEGAL ADVICE OF ANY KIND. ALL USERS MUST UNDERSTAND THE RISKS ASSOCIATED WITH DIGITAL ASSETS AND ARE SOLELY RESPONSIBLE FOR ALL DECISIONS MADE IN CONNECTION WITH THEIR USE OF ZENA SERVICES.
        </p>
        <p className={caps}>
          ZENA RESERVES THE RIGHT, IN ITS SOLE DISCRETION, TO CHOOSE THE MARKETS AND JURISDICTIONS IN WHICH IT OPERATES AND MAY RESTRICT OR REFUSE THE PROVISION OF ZENA SERVICES IN CERTAIN COUNTRIES OR REGIONS.
        </p>
      </>
    ),
  },
  {
    id: 'article-4',
    navLabel: 'Article 4 — Registration and Account Requirements',
    cardTitle: 'Article 4 — Registration and Account Requirements',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>4.1 Account Registration</h3>
        <p className={p}>
          All Users must register a Zena Account at www.zenaex.com or through the Zena mobile application prior to using Zena Services. During registration, you must provide:
        </p>
        <ul className={ul}>
          <li>A valid and active email address.</li>
          <li>A secure password of your choosing.</li>
          <li>Acceptance of these Terms, the Privacy Policy, and all applicable Platform Rules.</li>
        </ul>
        <p className={`${p} mt-4`}>
          Zena reserves the right to decline, suspend, or cancel any account registration at its sole discretion, without obligation to provide a reason.
        </p>
        <h3 className={h3}>4.2 Accuracy of Information</h3>
        <p className={p}>
          You agree to provide complete, accurate, and truthful information when opening a Zena Account and undertake to promptly update your information to maintain its accuracy at all times. Providing false, misleading, or incomplete information constitutes a breach of these Terms and may result in immediate account suspension or termination.
        </p>
        <h3 className={h3}>4.3 One Account Per User</h3>
        <p className={p}>
          Each individual User may hold only one main Zena Account at any given time. Creating multiple accounts, whether under the same or different identities, is prohibited unless expressly authorised by Zena in writing. Institutional Users (companies and legal entities) may apply to open sub-accounts under their main account subject to Zena&apos;s approval.
        </p>
        <h3 className={h3}>4.4 Eligibility Requirements</h3>
        <p className={p}>By registering a Zena Account, you represent and warrant that:</p>
        <ul className={ul}>
          <li>You are at least 18 years of age or the age of majority in your jurisdiction, whichever is higher.</li>
          <li>You are a human individual; automated account creation is prohibited.</li>
          <li>
            You are not subject to any sanctions, trade embargoes, or restrictions imposed by any government or regulatory body, including the EFCC Sanctions List, CBN Watchlist, UN Security Council Sanctions, and OFAC Specially Designated Nationals list.
          </li>
          <li>Your use of Zena Services is not prohibited by applicable law in your jurisdiction.</li>
          <li>You have full legal capacity and authority to enter into a binding agreement.</li>
        </ul>
        <h3 className={h3}>4.5 Account Security</h3>
        <p className={p}>
          You are solely responsible for maintaining the confidentiality of your account credentials, including your password, transaction PIN, and biometric authentication data. You agree to:
        </p>
        <ul className={ul}>
          <li>Use a strong and unique password and not share it with any third party.</li>
          <li>Enable two-factor authentication and biometric security features where available.</li>
          <li>Immediately notify Zena at support@zenaex.com if you suspect any unauthorised access to your account.</li>
        </ul>
        <p className={`${p} mt-4`}>Zena shall not be liable for any losses arising from your failure to maintain adequate account security.</p>
      </>
    ),
  },
  {
    id: 'article-5',
    navLabel: 'Article 5 — Identity Verification (KYC/AML)',
    cardTitle: 'Article 5 — Identity Verification (KYC / AML Compliance)',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>5.1 Mandatory KYC</h3>
        <p className={p}>
          Zena is required to comply with applicable anti-money laundering (AML), counter-terrorism financing (CTF), and Know Your Customer (KYC) regulations under Nigerian law, including the Central Bank of Nigeria (CBN) AML/CFT Regulations, the Money Laundering (Prevention and Prohibition) Act 2022, and the Terrorism (Prevention and Prohibition) Act 2022. Accordingly, you must complete the required identity verification process to access the full range of Zena Services.
        </p>
        <h3 className={h3}>5.2 Information and Documents Required</h3>
        <p className={p}>Depending on your KYC tier, Zena may require:</p>
        <ul className={ul}>
          <li>Full legal name, date of birth, and nationality.</li>
          <li>Government-issued identification: National Identity Number (NIN), International Passport, Driver&apos;s Licence, or Voter&apos;s Card.</li>
          <li>Proof of residential address (utility bill, bank statement, etc.).</li>
          <li>Selfie and real-time facial biometric verification.</li>
          <li>Bank Verification Number (BVN) where applicable.</li>
          <li>Source of funds documentation for high-value transactions.</li>
        </ul>
        <h3 className={h3}>5.3 KYC Tiers and Transaction Limits</h3>
        <p className={p}>
          Access to Zena Services is tiered based on KYC verification level. Higher-tier verification unlocks increased transaction and withdrawal limits. Applicable limits will be displayed within the Platform and updated in accordance with regulatory requirements.
        </p>
        <h3 className={h3}>5.4 Ongoing Monitoring</h3>
        <p className={p}>
          Zena reserves the right to conduct ongoing due diligence on your account at any time, including requesting updated documentation or re-verification. Failure to cooperate with such requests may result in restrictions on your account, suspension, or termination.
        </p>
        <h3 className={h3}>5.5 Sanctions Screening</h3>
        <p className={p}>
          All Users are screened against applicable sanctions and watchlists at registration and on an ongoing basis. If a match is identified, your account may be immediately suspended and reported to relevant authorities in accordance with our legal obligations.
        </p>
      </>
    ),
  },
  {
    id: 'article-6',
    navLabel: 'Article 6 — Zena Services',
    cardTitle: 'Article 6 — Zena Services',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>6.1 Multi-Currency Crypto Wallets</h3>
        <p className={p}>
          Zena provides custodial cryptocurrency wallets supporting Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), and Solana (SOL), across multiple blockchain networks including Tron, Solana, Bitcoin Segwit, and Polygon.
        </p>
        <p className={caps}>
          YOU ARE SOLELY RESPONSIBLE FOR ENSURING THE ACCURACY OF ALL WALLET ADDRESSES AND NETWORK SELECTIONS USED IN TRANSACTIONS. SENDING DIGITAL CURRENCY TO AN INCORRECT ADDRESS OR AN INCOMPATIBLE NETWORK WILL RESULT IN PERMANENT AND IRRECOVERABLE LOSS OF FUNDS. ZENA ACCEPTS NO LIABILITY FOR LOSSES CAUSED BY USER ERROR IN THIS REGARD.
        </p>
        <h3 className={h3}>6.2 Crypto Operations — Send, Receive, and Swap</h3>
        <p className={p}>Users may send, receive, and swap supported Digital Currencies at real-time market rates.</p>
        <ul className={ul}>
          <li>
            <strong className="text-primary-black">Send:</strong> Transfer supported crypto assets to any valid external wallet address.
          </li>
          <li>
            <strong className="text-primary-black">Receive:</strong> Accept inbound crypto transfers from any compatible network address.
          </li>
          <li>
            <strong className="text-primary-black">Swap:</strong> Exchange one supported crypto asset for another at the prevailing market rate.
          </li>
        </ul>
        <p className={`${p} mt-4`}>
          Exchange rates are updated in real-time and subject to market fluctuations. If a confirmed rate expires before you complete a transaction, you will be prompted to review and accept the updated rate. Swap transactions attract a fee as set out in Article 7.
        </p>
        <h3 className={h3}>6.3 Fiat Conversion and Withdrawal</h3>
        <p className={p}>
          Users may convert supported Digital Currencies to Fiat Currency (e.g., Nigerian Naira) and withdraw to a registered bank account or mobile money wallet.
        </p>
        <ul className={ul}>
          <li>Withdrawals are subject to minimum and maximum limits based on your KYC tier.</li>
          <li>Exchange rates for fiat conversion are refreshed every 30 seconds.</li>
          <li>If a withdrawal fails after funds are deducted, the amount will be reversed to your wallet.</li>
          <li>Processing times vary between instant and 1-2 business days depending on the payment channel.</li>
        </ul>
        <p className={caps}>
          ZENA DOES NOT GUARANTEE THE AVAILABILITY OF SPECIFIC EXCHANGE RATES AT ANY GIVEN TIME. ALL CONVERSIONS ARE EXECUTED AT THE RATE PREVAILING AT THE MOMENT OF CONFIRMATION.
        </p>
        <h3 className={h3}>6.4 Utility Bill Payments</h3>
        <p className={p}>Zena enables Users to pay for everyday utility services directly from their crypto or wallet balance, including:</p>
        <ul className={ul}>
          <li>Airtime top-up (all major Nigerian networks).</li>
          <li>Mobile data bundles.</li>
          <li>Electricity tokens (prepaid and postpaid).</li>
          <li>Cable TV subscriptions.</li>
          <li>School fees.</li>
          <li>Betting and digital subscriptions.</li>
        </ul>
        <p className={`${p} mt-4`}>
          Utility services are processed through authorised third-party service providers. Availability and service levels are subject to third-party provider performance. Completed utility transactions may not be reversible once submitted. Zena shall not be held liable for service failures attributable to third-party providers.
        </p>
        <h3 className={h3}>6.5 Gift Card Trading</h3>
        <p className={p}>
          Zena enables Users to buy and sell gift cards including iTunes, Amazon, Steam, and other supported brands. Gift card trade values are determined by real-time rates, which may vary based on card type, denomination, and market conditions. All gift cards submitted for trade are subject to verification and validation. Zena reserves the right to reject, hold, or reverse gift card transactions suspected of fraud, misrepresentation, or policy violations. Once a gift card transaction is confirmed and funds are released, it cannot be reversed.
        </p>
        <p className={caps}>
          GIFT CARD RATES ARE NOT GUARANTEED AND MAY CHANGE WITHOUT NOTICE. ZENA IS NOT RESPONSIBLE FOR LOSSES ARISING FROM RATE FLUCTUATIONS BETWEEN SUBMISSION AND CONFIRMATION OF A GIFT CARD TRADE.
        </p>
        <h3 className={h3}>6.6 eSIM Services</h3>
        <p className={p}>
          Users may purchase international electronic SIM cards (eSIMs) using their crypto or wallet balance. eSIM provisioning is managed through third-party providers. Users are responsible for verifying eSIM compatibility with their device before purchase. Activated eSIMs are non-refundable.
        </p>
        <h3 className={h3}>6.7 E-Trade (OTC and Unlisted Asset Transactions)</h3>
        <p className={p}>
          E-Trade is an agent-assisted service that enables Users to conduct over-the-counter (OTC) transactions involving unlisted or non-standard crypto assets through a supervised, chat-based process. E-Trade transactions are processed by Zena agents. All E-Trade requests are subject to review, additional verification, and discretionary approval by Zena. Transaction fees for E-Trade services will be disclosed prior to execution. Zena agents do not provide investment advice and act solely as facilitators of agreed transactions.
        </p>
        <h3 className={h3}>6.8 Spending Integrations</h3>
        <p className={p}>
          Where available, Zena supports spending integrations with third-party platforms including Cash App and Zelle. These integrations are provided as a convenience. Users must comply with the terms and conditions of the respective third-party platforms. Zena shall not be responsible for any disputes, failures, or restrictions arising from the use of third-party spending services.
        </p>
        <h3 className={h3}>6.9 Referral Programme</h3>
        <p className={p}>
          Zena may operate a referral programme that enables existing Users to earn rewards for referring new Users to the Platform. Referral rewards are subject to applicable terms, expiry periods, and thresholds as specified in the Platform. Rewards that expire or remain unclaimed within the specified period are automatically forfeited. Zena reserves the right to modify, suspend, or terminate the referral programme at any time.
        </p>
      </>
    ),
  },
  {
    id: 'article-7',
    navLabel: 'Article 7 — Fees and Charges',
    cardTitle: 'Article 7 — Fees and Charges',
    content: (
      <>
        <p className={p}>
          All fees are transparently displayed before you confirm a transaction. Zena reserves the right to update its fee schedule at any time with reasonable prior notice communicated through the Platform or by email.
        </p>
        <p className={caps}>
          WHERE APPLICABLE, FEES ARE DEDUCTED FROM TRANSACTION PROCEEDS OR CHARGED TO THE SENDING WALLET AT THE TIME OF TRANSACTION. NO TRANSACTION WILL BE PROCESSED UNTIL APPLICABLE FEES ARE ACCEPTED.
        </p>
      </>
    ),
  },
  {
    id: 'article-8',
    navLabel: 'Article 8 — User Obligations and Prohibited Conduct',
    cardTitle: 'Article 8 — User Obligations and Prohibited Conduct',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>8.1 User Obligations</h3>
        <p className={p}>By using Zena Services, you agree to:</p>
        <ul className={ul}>
          <li>Use the Platform only for lawful purposes and in compliance with all applicable laws and regulations.</li>
          <li>Maintain the accuracy and completeness of your account information at all times.</li>
          <li>Complete KYC verification honestly and provide genuine documentation.</li>
          <li>Keep your login credentials, PIN, and security information confidential.</li>
          <li>Promptly report any unauthorised activity, security breach, or suspected fraud to Zena.</li>
          <li>Cooperate with Zena&apos;s compliance and fraud prevention investigations.</li>
        </ul>
        <h3 className={h3}>8.2 Prohibited Conduct</h3>
        <p className={p}>You must not use the Platform for any of the following prohibited activities:</p>
        <ul className={ul}>
          <li>Money laundering, terrorist financing, or any activity that violates AML/CFT laws.</li>
          <li>Fraud, identity theft, impersonation, or misrepresentation of identity.</li>
          <li>Circumventing or attempting to circumvent Zena&apos;s KYC, AML, or sanctions controls.</li>
          <li>Transacting with funds derived from criminal, illegal, or fraudulent activity.</li>
          <li>Market manipulation, wash trading, or any artificial inflation or deflation of asset prices.</li>
          <li>Submitting fraudulent, altered, or invalid gift cards or documents.</li>
          <li>Engaging in unauthorised access to, interference with, or disruption of the Platform&apos;s systems.</li>
          <li>Using automated scripts, bots, or scrapers to access or interact with the Platform without authorisation.</li>
          <li>Registering multiple accounts or allowing third parties to use your account.</li>
          <li>Reselling, sublicensing, or commercialising access to Zena Services without written authorisation.</li>
          <li>Engaging in any activity that breaches the rights of other Users or third parties.</li>
        </ul>
        <p className={caps}>
          VIOLATION OF THESE PROHIBITIONS MAY RESULT IN IMMEDIATE ACCOUNT SUSPENSION OR TERMINATION, FORFEITURE OF BALANCES PENDING INVESTIGATION, REPORTING TO RELEVANT REGULATORY AND LAW ENFORCEMENT AUTHORITIES, AND CIVIL OR CRIMINAL LEGAL ACTION.
        </p>
      </>
    ),
  },
  {
    id: 'article-9',
    navLabel: 'Article 9 — Risk Disclosures',
    cardTitle: 'Article 9 — Risk Disclosures',
    content: (
      <>
        <p className={p}>Before using Zena Services, you must carefully consider and acknowledge the following material risks:</p>
        <h3 className={h3}>9.1 Volatility Risk</h3>
        <p className={p}>
          The value of Digital Currencies is volatile and may fluctuate significantly within short periods. You may lose some or all of the value of Digital Currencies held in your Zena Account. Past performance is not indicative of future results.
        </p>
        <h3 className={h3}>9.2 Transaction Irreversibility</h3>
        <p className={p}>
          Blockchain transactions, once broadcast to the network and confirmed, are final and irreversible. Zena cannot reverse, recall, or cancel a confirmed on-chain transaction.
        </p>
        <h3 className={h3}>9.3 Wrong Address / Wrong Network Risk</h3>
        <p className={p}>
          Sending Digital Currency to an incorrect wallet address or an incompatible blockchain network will result in the permanent and irrecoverable loss of those funds. Zena is unable to recover funds sent to incorrect addresses under any circumstances.
        </p>
        <h3 className={h3}>9.4 Regulatory Risk</h3>
        <p className={p}>
          The regulatory environment for Digital Currencies continues to evolve. Changes in applicable laws or regulations in Nigeria or other jurisdictions may restrict, alter, or affect the availability of certain Zena Services without notice.
        </p>
        <h3 className={h3}>9.5 Technology and System Risk</h3>
        <p className={p}>
          The Platform may experience scheduled or unscheduled downtime, latency, technical errors, or cyberattacks. Although Zena takes all reasonable measures to maintain Platform availability and security, no system is fully immune to failure.
        </p>
        <h3 className={h3}>9.6 Third-Party Risk</h3>
        <p className={p}>
          Certain Zena Services depend on third-party service providers, including payment processors, blockchain infrastructure, utility providers, and eSIM suppliers. Failures, outages, or policy changes by third parties may affect the delivery of those services.
        </p>
        <h3 className={h3}>9.7 No Financial Advice</h3>
        <p className={p}>
          Zena does not provide financial, investment, tax, or legal advice. Nothing on the Platform constitutes a recommendation to buy, sell, hold, or transact in any Digital Currency or other asset. You should seek independent professional advice before making any financial decisions.
        </p>
        <p className={caps}>
          BY USING ZENA SERVICES, YOU CONFIRM THAT YOU HAVE READ AND UNDERSTOOD THESE RISK DISCLOSURES AND ACCEPT FULL RESPONSIBILITY FOR ALL OUTCOMES ARISING FROM YOUR USE OF THE PLATFORM.
        </p>
      </>
    ),
  },
  {
    id: 'article-10',
    navLabel: 'Article 10 — Intellectual Property',
    cardTitle: 'Article 10 — Intellectual Property',
    content: (
      <>
        <p className={p}>
          All intellectual property rights in and to the Zena Platform, including its name, logo, visual design, technology, software, code, features, content, trademarks, and trade secrets, are the exclusive property of Zenaex Technologies Limited or its licensors and are protected under applicable Nigerian and international intellectual property laws.
        </p>
        <p className={`${p} mt-4`}>
          You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely for personal, non-commercial purposes in accordance with these Terms. This licence does not grant you the right to:
        </p>
        <ul className={ul}>
          <li>Copy, reproduce, modify, adapt, or create derivative works from any Platform content.</li>
          <li>Reverse-engineer, decompile, or disassemble the Platform or any part thereof.</li>
          <li>Remove or alter any copyright, trademark, or other proprietary notices.</li>
          <li>Use Zena&apos;s brand, name, or logo without prior written consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-11',
    navLabel: 'Article 11 — Privacy and Data Protection',
    cardTitle: 'Article 11 — Privacy and Data Protection',
    content: (
      <>
        <p className={p}>
          Your use of the Platform is also governed by Zena&apos;s Privacy Policy, which is incorporated into these Terms by reference and forms an integral part of them. We process your personal data in accordance with the Nigeria Data Protection Act (NDPA) 2023. Please review the Privacy Policy available at www.zenaex.com to understand how we collect, use, store, share, and protect your information.
        </p>
        <p className={`${p} mt-4`}>
          By using Zena Services, you consent to the collection and processing of your personal data as described in the Privacy Policy. You have the right to access, correct, delete, and port your data, and to lodge a complaint with the Nigeria Data Protection Commission (NDPC).
        </p>
      </>
    ),
  },
  {
    id: 'article-12',
    navLabel: 'Article 12 — Indemnification',
    cardTitle: 'Article 12 — Indemnification',
    content: (
      <>
        <p className={p}>
          You agree to fully indemnify, defend, and hold harmless Zena Technologies Limited, its directors, officers, employees, agents, licensors, and service providers from and against any claims, actions, liabilities, losses, damages, penalties, fines, expenses, and costs (including reasonable legal and professional fees) arising out of or related to:
        </p>
        <ul className={ul}>
          <li>Your breach of these Terms or any applicable Platform Rules.</li>
          <li>Your use or misuse of the Platform or any Zena Services.</li>
          <li>Your violation of any applicable law, regulation, or regulatory requirement.</li>
          <li>Any false, inaccurate, or misleading information provided by you.</li>
          <li>Any claim by a third party arising from your conduct on the Platform.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-13',
    navLabel: 'Article 13 — Limitation of Liability',
    cardTitle: 'Article 13 — Limitation of Liability',
    content: (
      <>
        <p className={p}>
          To the fullest extent permitted by applicable law, Zena Technologies Limited and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, loss of profits, revenue, data, goodwill, business, opportunity, or other intangible losses:
        </p>
        <ul className={ul}>
          <li>Your use of or inability to use the Platform or any Zena Services.</li>
          <li>Unauthorised access to or alteration of your transmissions, data, or account.</li>
          <li>Technical errors, bugs, viruses, service interruptions, or Platform downtime.</li>
          <li>Permanent loss of funds due to incorrect wallet address input, wrong network selection, or user error.</li>
          <li>Failures, delays, or errors attributable to third-party service providers.</li>
          <li>Actions taken by Zena in compliance with regulatory requirements, including account suspension or asset freezing.</li>
        </ul>
        <p className={`${p} mt-4`}>
          To the extent liability cannot be excluded at law, Zena&apos;s total aggregate liability to you for any claim arising from or related to these Terms shall not exceed the total amount of fees paid by you to Zena in the three (3) months immediately preceding the date of the claim.
        </p>
      </>
    ),
  },
  {
    id: 'article-14',
    navLabel: 'Article 14 — Termination and Suspension',
    cardTitle: 'Article 14 — Termination and Suspension',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>14.1 Termination by Zena</h3>
        <p className={p}>
          Zena reserves the right to suspend, restrict, or terminate your account and access to all Zena Services, with or without prior notice, in any of the following circumstances:
        </p>
        <ul className={ul}>
          <li>Breach or suspected breach of these Terms or any Platform Rules.</li>
          <li>Provision of false, inaccurate, or fraudulent information during KYC or account registration.</li>
          <li>Suspicious, fraudulent, or potentially illegal account activity.</li>
          <li>Non-compliance with a regulatory request, court order, or law enforcement direction.</li>
          <li>Zena&apos;s decision to discontinue operations in a particular jurisdiction.</li>
        </ul>
        <h3 className={h3}>14.2 Termination by User</h3>
        <p className={p}>
          You may close your Zena Account at any time by submitting a written request to support@zenaex.com. Prior to account closure, you must withdraw all available balances. Zena may retain certain data and records after closure as required by applicable regulatory obligations.
        </p>
        <h3 className={h3}>14.3 Effect of Termination</h3>
        <p className={p}>
          Upon termination, your licence to use the Platform is immediately revoked. You remain liable for all obligations, fees, and liabilities accrued prior to the date of termination. Zena reserves the right to retain any funds pending the resolution of disputes, investigations, or regulatory holds.
        </p>
      </>
    ),
  },
  {
    id: 'article-15',
    navLabel: 'Article 15 — Resolving Disputes: Arbitration and Class Action Waiver',
    cardTitle: 'Article 15 — Resolving Disputes: Arbitration and Class Action Waiver',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>15.1 Good Faith Negotiation</h3>
        <p className={p}>
          In the event of any dispute, claim, or controversy arising out of or relating to these Terms or your use of Zena Services, you agree to first attempt to resolve the matter informally by notifying Zena in writing at legal@zenaex.com. Zena will endeavour to respond within 30 days of receiving your notification. Both parties agree to engage in good-faith negotiations for a period of at least 30 days before initiating formal proceedings.
        </p>
        <h3 className={h3}>15.2 Binding Arbitration</h3>
        <p className={p}>
          Arbitration proceedings shall be conducted in Lagos, Nigeria, in the English language. The decision of the arbitrator shall be final and binding on both parties and may be enforced by any court of competent jurisdiction.
        </p>
        <h3 className={h3}>15.3 Class Action Waiver</h3>
        <p className={caps}>
          YOU AGREE THAT ANY ARBITRATION OR LEGAL PROCEEDING SHALL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS. YOU EXPRESSLY WAIVE ANY RIGHT TO BRING OR PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR ANY CONSOLIDATED OR REPRESENTATIVE PROCEEDINGS. ZENA SHALL NOT BE REQUIRED TO ARBITRATE ANY DISPUTE BROUGHT AS A CLASS OR REPRESENTATIVE ACTION.
        </p>
        <h3 className={h3}>15.4 Exceptions</h3>
        <p className={p}>
          Nothing in this Article shall prevent either party from seeking emergency injunctive or equitable relief from a court of competent jurisdiction where necessary to prevent irreparable harm pending arbitration.
        </p>
      </>
    ),
  },
  {
    id: 'article-16',
    navLabel: 'Article 16 — Governing Law',
    cardTitle: 'Article 16 — Governing Law',
    content: (
      <>
        <p className={p}>
          These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Subject to the arbitration obligations set out in Article 15, both parties submit to the exclusive jurisdiction of the courts of Lagos State, Nigeria, for the purposes of any interim or injunctive relief.
        </p>
      </>
    ),
  },
  {
    id: 'article-17',
    navLabel: 'Article 17 — Amendments to These Terms',
    cardTitle: 'Article 17 — Amendments to These Terms',
    content: (
      <>
        <p className={p}>
          Zena reserves the right to amend, modify, or update these Terms at any time in its sole discretion. Zena will notify Users of material changes by publishing the updated Terms on the Platform and updating the &apos;Last Updated&apos; date at the top of this document.
        </p>
        <p className={caps}>
          ANY AND ALL MODIFICATIONS TO THESE TERMS BECOME EFFECTIVE UPON PUBLICATION ON THE PLATFORM OR NOTIFICATION TO USERS. YOUR CONTINUED USE OF ZENA SERVICES AFTER ANY SUCH CHANGE CONSTITUTES YOUR ACCEPTANCE OF THE REVISED TERMS. IF YOU DO NOT AGREE TO ANY CHANGE, YOU MUST STOP USING ZENA SERVICES IMMEDIATELY. YOU ARE ENCOURAGED TO REVIEW THESE TERMS REGULARLY.
        </p>
      </>
    ),
  },
  {
    id: 'article-18',
    navLabel: 'Article 18 — Miscellaneous',
    cardTitle: 'Article 18 — Miscellaneous',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>18.1 Entire Agreement</h3>
        <p className={p}>
          These Terms, together with the Privacy Policy and all applicable Platform Rules, constitute the entire agreement between you and Zena with respect to your use of the Platform and supersede all prior agreements, representations, or understandings.
        </p>
        <h3 className={h3}>18.2 Severability</h3>
        <p className={p}>
          If any provision of these Terms is found to be invalid, illegal, or unenforceable under applicable law, such provision shall be modified to the minimum extent necessary to make it enforceable, or severed without affecting the validity and enforceability of the remaining provisions.
        </p>
        <h3 className={h3}>18.3 Waiver</h3>
        <p className={p}>
          Zena&apos;s failure to enforce any provision of these Terms shall not be construed as a waiver of its right to do so in the future.
        </p>
        <h3 className={h3}>18.4 Assignment</h3>
        <p className={p}>
          You may not assign, transfer, or delegate any of your rights or obligations under these Terms without Zena&apos;s prior written consent. Zena may assign these Terms, in whole or in part, to any affiliate or successor entity without restriction.
        </p>
        <h3 className={h3}>18.5 Force Majeure</h3>
        <p className={p}>
          Zena shall not be liable for any delay or failure to perform its obligations under these Terms where such delay or failure is caused by events beyond its reasonable control, including acts of God, natural disasters, governmental actions, cyberattacks, blockchain network failures, or civil unrest.
        </p>
        <h3 className={h3}>18.6 Language</h3>
        <p className={p}>
          These Terms are drafted in the English language. In the event of any conflict between the English version and any translation, the English version shall prevail.
        </p>
      </>
    ),
  },
  {
    id: 'article-19',
    navLabel: 'Article 19 — Contact Information',
    cardTitle: 'Article 19 — Contact Information',
    content: (
      <>
        <p className={p}>
          For questions, complaints, or legal notices regarding these Terms or Zena Services, please contact us at:
        </p>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>Zenaex Technologies Limited</p>
        <p className={p}>Email (Legal): legal@zenaex.com</p>
        <p className={p}>Email (Support): support@zenaex.com</p>
        <p className={p}>Website: www.zenaex.com</p>
        <p className={p}>Address: Lagos, Nigeria</p>
        <p className={`${p} mt-4`}>
          For data protection enquiries, please contact our Data Protection Officer at: privacy@zenaex.com
        </p>
        <p className={`${p} mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500`}>
          © 2026 Zenaex Technologies Limited. All rights reserved. | Terms of Use — Last Updated: 2026
        </p>
      </>
    ),
  },
];
