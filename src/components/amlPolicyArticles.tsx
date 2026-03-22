import type { ReactNode } from 'react';

export type AmlArticle = {
  id: string;
  navLabel: string;
  cardTitle: string;
  content: ReactNode;
};

const p = 'text-[15px] leading-relaxed text-gray-600';
const ul = 'mt-2 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-gray-600';
const h3 = 'mt-6 text-base font-bold text-primary-black';

export const AML_POLICY_ARTICLES: AmlArticle[] = [
  {
    id: 'article-1',
    navLabel: 'Section 1 — Policy',
    cardTitle: 'Section 1 — Policy',
    content: (
      <>
        <p className={p}>
          This policy sets out the Company&apos;s principles and measures adopted to ensure that the Company adheres with applicable laws and regulatory requirements in relation to combating money laundering, corruption and financing terrorism. This document describes the degree of due diligence to be applied for establishing, managing, monitoring and declassifying/terminating business relationships at the various stages of the client relationship lifecycle.
        </p>
        <p className={`${p} mt-4`}>This document requires that the Company comply with the following basic principles:</p>
        <ul className={ul}>
          <li>Do not accept funds which the Company knows, or is expected to know, are proceeds of criminal activities.</li>
          <li>Do not enter into or maintain business relationships with shell companies.</li>
          <li>Determine the identity of the contracting partner and beneficial owners</li>
          <li>Apply a risk-based approach</li>
          <li>Undertake additional investigations for business relationships and transactions with increased risks</li>
        </ul>
        <p className={`${p} mt-4`}>For employees, the main objectives of this policy are to:</p>
        <ul className={ul}>
          <li>Enhance awareness of all employees (especially higher-risk roles) to money laundering and financing terrorism risks to the business;</li>
          <li>
            Enable staff follow a Risk Based Approach to mitigating Anti Money Laundering (AML) and Counter Terrorism Financing (CFT) risks and provide reasonable assurance that the Company does not accept assets which it knows or should be reasonably be expected to know are proceeds of crime;
          </li>
          <li>Ensure that the Company remains compliant with all relevant money laundering legislation and regulation;</li>
          <li>
            Define a framework for staff encountering suspicious activity, transactions or behaviour to escalate/notify the Money Laundering Compliance Officer (MLCO) or compliance;
          </li>
          <li>Retain the confidence of Zena&apos;s key stakeholders, including regulators and law enforcement</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-2',
    navLabel: 'Section 2 — Scope',
    cardTitle: 'Section 2 — Scope',
    content: (
      <>
        <p className={p}>
          This policy applies to all business undertaken by the Company where it is required to identify and undertake due diligence for anti-money laundering purposes on client&apos;s relationships. The policy applies to all employees of the Company and each member of staff must ensure they understand the personal role and responsibilities resulting from this policy.
        </p>
        <p className={`${p} mt-4`}>
          Non-adherence to any part of this policy may lead to disciplinary action, up to including dismissal.
        </p>
      </>
    ),
  },
  {
    id: 'article-3',
    navLabel: 'Section 3 — Roles and Responsibilities',
    cardTitle: 'Section 3 — Roles and Responsibilities',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>3.1. The Board</h3>
        <p className={p}>
          The Board will be responsible for approving this policy and ensuring the AML/CFT measures adopted by the Company are sufficiently robust and adequate for the Company&apos;s operations. The Board will also have the responsibility to ensure that any staff involved in whistleblowing or making suspicious activity reports are protected from any form of victimisation.
        </p>
        <h3 className={h3}>3.2. Executive Management</h3>
        <p className={p}>
          The implementation and maintenance of an effective AML programme that meets the Company&apos;s objectives will primarily be the responsibility of Executive Management led by the CEO. The Executive Management team must ensure adequate resources are made available for the implementation, review and control of the AML/CFT programme, including the appointment of an AML/CFT Compliance Officer with the relevant competence, authority and independence to undertake the institution&apos;s AML/CFT compliance programme.
        </p>
        <h3 className={h3}>3.3. AML/CFT Compliance Officer</h3>
        <p className={p}>The duties of the AML/CFT Compliance Officer, among others, will include:</p>
        <ul className={ul}>
          <li>Developing an AML/CFT Compliance Programme;</li>
          <li>Providing reports to the Board on issues of the AML/CFT programme;</li>
          <li>Receiving and vetting suspicious transaction reports from staff;</li>
          <li>Filing suspicious transaction reports with the NFIU;</li>
          <li>Rendering &quot;nil&quot; reports with the NFIU, where necessary to ensure compliance;</li>
          <li>Ensuring that the Company&apos;s compliance programme is implemented;</li>
          <li>
            Coordinating the training of staff in AML/CFT awareness, detection methods and reporting requirements; and
          </li>
          <li>
            Serving both as liaison officer with the NFIU and a point-of-contact for all employees on money laundering and terrorist financing issues.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-4',
    navLabel: 'Section 4 — Overview and Policy Framework',
    cardTitle: 'Section 4 — Overview and Policy Framework',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>4.1. What is Money Laundering</h3>
        <p className={p}>
          Money Laundering is the process by which money that is illegally obtained is made to appear to have been legally obtained. By a large variety of methods, the nature and ownership of these criminal proceeds are concealed. The consequence is that the origin of and the entitlement of the money are disguised and the money can be reused to benefit the criminal and/or their associates.
        </p>
        <p className={`${p} mt-4`}>
          This process is often achieved by converting the original illegally obtained proceeds which can take the form of cash, property, jewellery, into other forms such as deposits or securities and to confuse the audit trail by transferring them from one financial institution to another.
        </p>
        <h3 className={h3}>4.2. The Three Stages of Money Laundering</h3>
        <p className={p}>
          Regardless of who uses the apparatus of money-laundering, the operational principles are essentially the same. Money-laundering is a dynamic three-stage process that requires:
        </p>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>Placement</p>
        <p className={p}>
          Moving the funds from direct association with the crime and enter into the financial system. Generally, this stage serves two purposes; (a) it relieves the criminal holding and guarding large amounts of bulky cash; and (b) it places the money into the financial system. It is during the placement stage that money launderers are most vulnerable to being caught. This is due the fact that placing large amounts of money into the legitimate financial system may raise suspicions of officials.
        </p>
        <p className={`${p} mt-4`}>
          The placement of the proceeds of crime can be done in a number of ways. For example, cash could be packed into a suitcase and smuggled to a country, or the launderer could use structuring to defeat reporting threshold laws and avoid suspicion. Some other common methods include:
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-primary-black">Loan Repayment:</strong> Repayment of loans or credit cards with illegal proceeds
          </li>
          <li>
            <strong className="text-primary-black">Gambling:</strong> Purchase of gambling chips or placing bets on sporting events
          </li>
          <li>
            <strong className="text-primary-black">Currency Smuggling:</strong> The physical movement of illegal currency or monetary instruments over the border
          </li>
          <li>
            <strong className="text-primary-black">Currency Exchanges:</strong> Purchasing foreign money with illegal funds through foreign currency exchanges
          </li>
          <li>
            <strong className="text-primary-black">Blending Funds:</strong> Using a legitimate cash focused business to co-mingle dirty funds with the day&apos;s legitimate sales receipts
          </li>
        </ul>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>Layering</p>
        <p className={p}>
          Disguising the trail to foil pursuit. After placement comes the layering stage. The layering stage is the most complex and often entails the international movement of funds. The primary purpose of this stage is to separate illicit money from its source. Money launders achieve this by a series of sophisticated transactions that obscure the audit trail and sever link with the original crime.
        </p>
        <p className={`${p} mt-4`}>
          For instance, the money launderers may begin to move funds electronically from one country to another, then divide them into investments placed in advanced financial options or overseas markets, constantly moving to elude detection.
        </p>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>Integration</p>
        <p className={p}>
          This is the final stage of money laundering. It is the stage the money is made available to the criminal in what seems to be legitimate sources. Having been placed initially as cash and layered through a number of financial transactions, the criminal proceeds are now fully integrated into the financial system and can be used for any purpose.
        </p>
        <p className={`${p} mt-4`}>
          It has increasingly been recognised that the ease with which money can be laundered has facilitated and encouraged criminal activity. Consequently, regulations requiring all financial institutions to establish appropriate and risk proportionate systems and controls have been set in place. In keeping with our regulatory and legislative obligations, we must take precautions to mitigate the risk of our operations being used for criminal purposes such as money laundering, terrorist financing, corruption or for activities conducted in contravention of sanctions.
        </p>
        <h3 className={h3}>4.3. AML Policy</h3>
        <p className={p}>
          It is the policy of the Company to comply with all relevant Anti-Money Laundering and Counter Financing of Terrorism Legislations and Regulations in Nigeria and other International best practices.
        </p>
        <p className={`${p} mt-4`}>
          All staff and senior management are committed to the adherence to regulations and statutes in place to prevent Financial Crime, Terrorism and Money Laundering. To achieve this, the Company will implement and adhere to the Securities and Exchange Commission&apos;s regulations on AML, through the use of the Joint Money Laundering Steering Group (JMLSG) Guidance Notes and the application of industry best practice. All employees must read this AML/CFT Manual and failure to follow the procedures set out herein may lead to disciplinary action and where appropriate dismissal regardless of any regulatory or statutory sanction that may also be applied to the employee. The Company undertakes to:
        </p>
        <ul className={ul}>
          <li>Ensure that the clients identities are satisfactorily verified</li>
          <li>Ensure that the clients are known at the acceptance stage and throughout the business relationship</li>
          <li>Ensure that all employees are suitably trained</li>
          <li>Encourage awareness of the need for employees to report promptly any suspicions</li>
          <li>Adopt and communicate the Company risk-based approach</li>
          <li>Allocate senior management with appropriate responsibilities for managing the risks associated with AML and Terrorist Financing</li>
          <li>Appoint and support a designated AML/CFT Compliance Officer</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-5',
    navLabel: 'Section 5 — Regulatory Overview',
    cardTitle: 'Section 5 — Regulatory Overview',
    content: (
      <>
        <p className={p}>
          As a business registered in Nigeria, the Company is required to comply with two parallel regimes: the regulatory and legislative regimes.
        </p>
        <h3 className={h3}>5.1. Regulatory</h3>
        <p className={p}>
          The regulatory requirements as prescribed by SECURITIES AND EXCHANGE COMMISSION (CAPITAL MARKET OPERATORS ANTI-MONEY LAUNDERING AND COMBATING THE FINANCING OF TERRORISM) REGULATIONS, 2013 which aims to prevent and detect money laundering and to counter terrorism financing. To achieve this, the requirements set out system and controls (SYSC) rules that require senior management to establish appropriate procedures and controls to manage the risk of a Company&apos;s products being used for the purposes of financial crime.
        </p>
        <h3 className={h3}>5.2. Legislative</h3>
        <p className={p}>
          The legislative requirements in MONEY LAUNDERING (PROHIBITION) (AMENDMENT) ACT (MLPA), 2012, THE TERRORISM (PREVENTION) ACT 2011 and THE TERRORISM (PREVENTION) (AMENDMENT) ACT, 2013 are the set of money laundering legislation applicable throughout Nigeria to the proceeds of all crimes. Within the legislation, there is a disclosure regime contained which makes it an offence for a Company or an employee of the Company not to disclose knowledge or suspicion of proceeds of crime and money laundering. The list of crimes includes, but not limited to:
        </p>
        <ul className={ul}>
          <li>Participation in an organized crime groups and racketeering;</li>
          <li>Terrorism, including terrorist financing;</li>
          <li>Trafficking in human beings and migrant smuggling;</li>
          <li>Sexual exploitation, including sexual exploitation of children;</li>
          <li>Illicit trafficking in narcotic drugs and psychotropic substances;</li>
          <li>Illicit arms trafficking;</li>
          <li>Illicit trafficking in stolen and other goods;</li>
          <li>Corruption and Bribery;</li>
          <li>Fraud;</li>
          <li>Counterfeiting currency;</li>
          <li>Counterfeiting and piracy of products;</li>
          <li>Environmental crime;</li>
          <li>Murder, grievous bodily injury;</li>
          <li>Kidnapping, illegal restraint and hostage taking;</li>
          <li>Robbery or theft;</li>
          <li>Smuggling;</li>
          <li>Extortion;</li>
          <li>Forgery;</li>
          <li>Piracy; and</li>
          <li>Insider trading and market manipulation.</li>
        </ul>
        <p className={`${p} mt-4`}>Further, the Company has the duty to:</p>
        <ul className={ul}>
          <li>
            Ensure transactions above the threshold of N5,000,000 for individuals and N10,000,000 for corporate persons, or the equivalent in any currency, are reported to the NFIU.
          </li>
          <li>
            Ensure a transfer of funds or securities to or from a foreign country in excess of US$10,000 or its naira equivalent is reported to the Securities and Exchange Commission (&quot;SEC&quot;).
          </li>
        </ul>
        <h3 className={h3}>5.3. Principal provisions of MLPA, 2012</h3>
        <p className={p}>The MLPA 2013 creates four main offences broadly described below:</p>
        <h3 className={`${h3} text-[15px]`}>5.3.1. Assistance</h3>
        <p className={p}>
          It is an offence for any person to acquire, use, possess, conceal, disguise, convert, transfer or remove property out of Nigeria, or to enter into an arrangement that they know or suspect facilitates the acquisition, retention, use or control of criminal property on behalf of another person.
        </p>
        <p className={`${p} mt-4`}>
          It is an offence to assist anyone whom you know or suspect to be laundering any property obtained from criminal conduct. However, to be guilty of an offence of this type, the individual must have done more than simply committing the act of assistance, but have done so with requisite knowledge.
        </p>
        <h3 className={`${h3} text-[15px]`}>5.3.2. Failure to report</h3>
        <p className={p}>
          The mandatory reporting offence now applies to those working in the financial sector, such as the employees of this Company. It is an offence for any person that discovers information during the course of their employment that makes them know or suspect that criminal funds are being laundered or which raises reasonable grounds for suspicion and not report their knowledge to the Company&apos;s designated Money Laundering Compliance Officer or law enforcement agencies.
        </p>
        <p className={`${p} mt-4`}>
          In addition to the MLPA 2012, there is specific Nigerian legislation relating to terrorism. The main legislation, THE TERRORISM (PREVENTION) ACT 2011 AND THE TERRORISM (PREVENTION) AMENDMENT ACT, 2013 makes it an offence for those working in the regulated sector who fail to report (as soon as possible) knowledge, suspicion, or reasonable grounds for suspicion of offences or attempted offences relating to the following:
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-primary-black">Fund raising:</strong> covers inviting another to provide money or property to fund terrorism
          </li>
          <li>
            <strong className="text-primary-black">Use and possession:</strong> covers using money or other property for the purpose of terrorism
          </li>
          <li>
            <strong className="text-primary-black">Funding arrangements:</strong> Covers involvement in funding arrangements as a result of which money or other property is made available to terrorism
          </li>
        </ul>
        <h3 className={`${h3} text-[15px]`}>5.3.3. Retaining</h3>
        <p className={p}>
          Any person who retains the proceeds of a crime or of any illegal activity on behalf of another person commits an offence and will be liable on conviction to imprisonment for a term of not less than 5 years or to a fine equivalent to five times the value of the proceeds of the criminal conduct or to both such fine and term of imprisonment.
        </p>
        <h3 className={`${h3} text-[15px]`}>5.3.4. Tipping off</h3>
        <p className={p}>
          Even where suspicions are reported, staff must generally be careful not to alert the suspicions of the alleged launderer, as this can amount to an offence for the employee. This offence, if convicted, is punishable by a term of imprisonment of between two and three years or a fine of 500,000 naira to 1 million.
        </p>
      </>
    ),
  },
  {
    id: 'article-6',
    navLabel: 'Section 6 — AML Risk Assessment',
    cardTitle: 'Section 6 — A Risk Assessment of the AML Risk',
    content: (
      <>
        <p className={p}>
          In order to comply with Section 3 of SEC requirements, we detail below the Anti-Money Laundering Risk Assessment for the Company.
        </p>
        <p className={`${p} mt-4`}>
          The Company will undertake a risk based assessment of its money laundering risks with the aim of using internal and external information to identify the major risk areas in relations to our clients, products and services. In instances where risks have been identified as High or Higher, the Company will review the relationship at least annually. In addition, a Financial Crime Management Committee will be established and conduct meetings used to raise issues and questions regarding the application of the risk based approach.
        </p>
        <h3 className={h3}>6.1. Risk Based Approach</h3>
        <p className={p}>
          The Company will use appropriate risk variables to classify all its clients into one of four AML risk grouping; Higher, High, Medium or Lower Risk and ensure that these assessments are subject to regular review. The Company will consider a number of factors when determining the risk profile of a client. This will include, but not limited to, the clients Political Exposure (PEPs), geographic or domicile risks (Country location) and industry/ activity risks.
        </p>
        <p className={`${p} mt-4`}>Overall, as part of the Company&apos;s risk based approach, Management commit to:</p>
        <ul className={ul}>
          <li>Establish clear client acceptance standards which elevate to require enhanced due diligence as the risk of the client increases</li>
          <li>Establish procedures relating to client identification and screening against appropriate information sources and/or databases to determine acceptability</li>
          <li>Establish procedures to ensure client profiling identifies the purpose and reasons of clients seeking a business relationship with the Company</li>
          <li>Ensure roles and responsibilities are clearly defined and documented</li>
          <li>Establish and conduct relevant training</li>
          <li>Appoint a designated money laundering compliance officer responsible for oversight of the AML program</li>
          <li>Establish monitoring procedures designed to identify and report unusual or suspicious activity</li>
          <li>Maintain records of the client verification process and transactions for the period stipulated by law</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-7',
    navLabel: 'Section 7 — Who is our client?',
    cardTitle: 'Section 7 — Client / Customer Due Diligence Measures',
    content: (
      <>
        <h3 className={`${h3} mt-0`}>7.1. Who is our client?</h3>
        <p className={p}>
          The client must be identified as soon as reasonably practicable after first contact with the Company and then verified promptly. Where a client cannot be verified satisfactorily the matter must be brought to the attention of the Money Laundering Compliance Officer. The unwillingness of the client to undergo the due diligence process may be a factor for suspicion.
        </p>
        <p className={`${p} mt-4`}>
          KYC should not just end at verifying the identity of the client, but also establishing the nature of business to be undertaken. The additional information to be obtained at the start of a client relationship could include:
        </p>
        <ul className={ul}>
          <li>Purpose/reason for establishing relationship</li>
          <li>Anticipated nature and level of activity</li>
          <li>Relationships of signatories and underlying beneficial owners</li>
          <li>Expected origin of funds</li>
        </ul>
        <p className={`${p} mt-4`}>
          Employees should note that the Company needs to identify who has control over the funds that form or relate to the relationship being initiated. If this cannot be easily identified, you must discuss the potential transaction with the Money Laundering Compliance Officer.
        </p>
      </>
    ),
  },
  {
    id: 'article-8',
    navLabel: 'Section 8 — Customer Due Diligence',
    cardTitle: 'Section 8 — Customer Due Diligence',
    content: (
      <>
        <p className={p}>
          During client identification and verification, an assessment will be made on the money laundering risk that a client might pose to the Company and on this basis determine which of the two measure will be applied:
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-primary-black">Enhanced due diligence (EDD)</strong> – for higher risk situations, clients operating in high risk jurisdictions, complex organisations, and politically exposed persons;
          </li>
          <li>
            <strong className="text-primary-black">Simplified due diligence (SDD)</strong> – which may be applied to certain Companies in the financial sector, companies listed on a regulated market, public authorities, certain pension funds and low risk products.
          </li>
        </ul>
        <h3 className={h3}>8.1. Enhanced due diligence (EDD)</h3>
        <p className={p}>
          Enhanced Due Diligence is required where the customer and product/service combination is considered to present a higher risk of money laundering or financing terrorism. There are a number of situations that can be counted as high risk such as:
        </p>
        <ul className={ul}>
          <li>where you do not meet your client face to face;</li>
          <li>the jurisdiction in which the client is domiciled i.e. sensitive/high risk countries – see 8.2 for further details.</li>
          <li>the industry in which the client operates i.e. sensitive industry e.g. defence, Firearms or Tobacco; or</li>
          <li>where you are dealing with a politically exposed person (PEP) – See 8.3 for further details</li>
        </ul>
        <p className={`${p} mt-4`}>
          Where the Company has assessed a client as having an increased risk profile, it may be appropriate to conduct enhanced due diligence procedures for that customer. Key considerations when undertaking a process of enhanced due diligence are to develop an understanding (and documentary evidence as applicable) of:
        </p>
        <ul className={ul}>
          <li>Where the client&apos;s funds and source of wealth/investment originate from;</li>
          <li>Other businesses the client may have investments in;</li>
          <li>The current and recent historical financial position of the prospective client;</li>
          <li>Any other entities or connected persons associated with the client;</li>
          <li>The identity of each beneficial owner and signer.</li>
          <li>Press/media coverage of the client or its beneficial owners</li>
          <li>The anticipated account activity levels, products, services and geographic dispersion of transactions for the client.</li>
        </ul>
        <p className={`${p} mt-4`}>
          A high-risk customer does not mean that they are involved in money laundering or other criminal activity but that there is an increased opportunity to be involved.
        </p>
        <h3 className={h3}>Politically Exposed Persons (PEPs)</h3>
        <p className={p}>
          When applying EDD measures, the category of PEPs comprises higher-ranking public officials, members of parliament, and such persons&apos; immediate families and close associates. Prominent PEPs can pose a higher risk because their position may make them vulnerable to corruption. Relationships of this nature should obtain approval from the Money Laundering Compliance Officer and CEO before commencing business with them.
        </p>
        <p className={`${p} mt-4`}>
          Where the client is already a client of the Company and has an ongoing relationship with us and is identified to be a PEP, approval must be obtained the Money Laundering Compliance Officer and the CEO in order to continue the business relationship.
        </p>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>What is a PEP?</p>
        <p className={p}>
          The Company must consider risks associated with providing services to individuals or entities which are associated with Politically Exposed Persons (PEPs). For the purpose of this manual, the Financial Action Task Force (FATF) definition of PEP will be relied on and is as follows:
        </p>
        <p className={`${p} mt-4`}>
          <strong className="text-primary-black">Domestic PEPs:</strong> individuals who are or have been entrusted domestically with prominent public functions, for example Heads of State or of government, Governors, Local government chairmen, senior politicians, senior government officials, judicial or military officials, senior executives of state owned corporations, important political party officials, family members and close associates and Members of Royal Families.
        </p>
        <p className={`${p} mt-4`}>
          <strong className="text-primary-black">Foreign PEPs:</strong> individuals who are or have been entrusted with prominent public functions by a foreign country, for example Heads of State or of government, senior politicians, senior government, judicial or military officials, senior executives of state owned corporations, important political party officials.
        </p>
        <p className={`${p} mt-4`}>
          <strong className="text-primary-black">International organisation PEPs:</strong> persons who are or have been entrusted with a prominent function by an international organisation, refers to members of senior management or individuals who have been entrusted with equivalent functions, i.e. directors, deputy directors and members of the board
        </p>
        <p className={`${p} mt-4`}>
          Family members are individuals who are related to a PEP either directly (consanguinity) or through marriage or similar (civil) forms of partnership i.e. spouse, partner, children and their spouses or partners, and parents.
        </p>
        <p className={`${p} mt-4`}>
          Close associates are individuals who are closely connected to a PEP, either socially or professionally. They are persons with whom joint beneficial ownership of a legal entity or legal arrangement is held, with whom there are close business relationships, or who is a sole beneficial owner of a legal entity or arrangement set up by the primary PEP.
        </p>
        <p className={`${p} mt-4`}>
          When dealing with PEPs, the staff employee responsible for client onboarding should undertake enhanced due diligence procedures to satisfy themselves of the legitimacy of the client&apos;s source of funds and nature of the business, and also consider the requirement for enhanced ongoing monitoring of that account activity for potentially suspicious behaviour.
        </p>
        <p className={`${p} mt-4`}>
          If due diligence checks identify a client as a PEP or having a link with a PEP, the client&apos;s file must be referred to the Money Laundering Compliance Officer for sign off from both MLRO and CEO before onboarding the client.
        </p>
        <h3 className={h3}>8.2. Simplified Due Diligence (SDD)</h3>
        <p className={p}>
          Simplified due diligence is the lowest level of due diligence that can be completed on a client. This is appropriate where there is little opportunity or risk of your services or customer becoming involved in money laundering or terrorist financing.
        </p>
        <p className={`${p} mt-4`}>
          When completing simplified due diligence, there is no requirement to verify your customer&apos;s identity to the extent of a standard or enhanced due diligence approach. However, the business relationship must be continually monitored for events which may trigger a requirement for further due diligence in future.
        </p>
        <p className={`${p} mt-4`}>
          Typically, clients that are required to disclose information regarding their ownership structure and business activities or companies that are subject to the Money Laundering Regulations are seen to be a lower risk.
        </p>
        <p className={`${p} mt-4`}>
          For instance, where the client is a financial services business subject to Money Laundering Requirements, and is not a money service operator, verification will end once proof of their status has been obtained e.g. Capital Market Operators.
        </p>
        <p className={`${p} mt-4`}>
          Also, if the client is a public authority in Nigeria or listed on a regulated market they may be perceived to be a lower risk as they are required to disclose information, so SDD may be applied.
        </p>
        <p className={`${p} mt-4`}>
          If at any point during the relationship with your customer, additional intelligence becomes available which suggests that the customer or product may pose a higher risk than originally thought, a more enhanced level of due diligence should be conducted and the issue raised with the Money Laundering Compliance Officer.
        </p>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>Who qualifies for simplified due diligence?</p>
        <p className={p}>The following clients and products qualify:</p>
        <ul className={ul}>
          <li>
            Capital Market Operators provided they are subject to requirements for the combat of money laundering and terrorist financing which are consistent with the provisions of this Manual and are supervised for compliance with them;
          </li>
          <li>Public companies (listed on a securities exchange or similar situations) that are subject to regulatory disclosure requirements;</li>
          <li>Government ministries and parastatals /enterprises;</li>
          <li>
            Life insurance policies where the annual premium and single monthly premium are within the threshold determined by NAICOM;
          </li>
          <li>
            Insurance policies for pension schemes if there is no surrender - value clause and the policy cannot be used as collateral;
          </li>
          <li>
            A pension, superannuation or similar scheme that provides retirement benefits to employees, where contributions are made by way of deduction from wages and the scheme rules do not permit the assignment of a member&apos;s interest under the scheme; and
          </li>
          <li>
            Beneficial-owners of pooled-accounts held by Designated Non-Financial Businesses and Professions (DNFBPs) provided that they are subject to requirements to combat money laundering and terrorist financing consistent with the provisions of Money Laundering (Prohibition) Act.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-9',
    navLabel: 'Section 9 — Introductions by Intermediary',
    cardTitle: 'Section 9 — Introductions by an Intermediary Who is an Agent of the Client',
    content: (
      <>
        <p className={p}>
          When dealing with Intermediaries, blind reliance should not be placed on intermediaries/third parties. The responsibility for client identification and verification remains with us and we must take all necessary steps to obtain assurance that adequate AML measures are implemented by the intermediaries.
        </p>
        <p className={`${p} mt-4`}>
          Where the intermediary has an outsourcing or agency relationship, business relationship or accounts with us and is acting on behalf of a client there is no obligation to identify and verify the client provided appropriate documentation is obtained from the intermediary. This is only applicable where the Company has established a business relationship with the intermediary. This relationship will include a formal agreement and analysis of the intermediary&apos;s disciplinary record; product provided; operational experience and any other relevant information available. Intermediaries must be reviewed annually and assessed to ensure that it is appropriate to rely upon their confirmation.
        </p>
        <p className={`${p} mt-4`}>
          Where the intermediary has no outsourcing or agency relationship, business relationship or accounts with us, the relationship should be treated differently, and due diligence is to be performed. Relevant staff will be required to verify the intermediary as well as the underlying client and must satisfy themselves that the intermediary:
        </p>
        <ul className={ul}>
          <li>Is able to provide the necessary information concerning its due diligence process;</li>
          <li>Is regulated/governed in accordance with the core principles of AML/CFT measures;</li>
          <li>
            Is able to make available copies of identification data and other relevant documentation relating to CDD requirements upon request without delay; and
          </li>
          <li>Will provide account information where request for relevant authorities</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-10',
    navLabel: 'Section 10 — Record Keeping',
    cardTitle: 'Section 10 — Record Keeping',
    content: (
      <>
        <p className={p}>
          The money laundering Regulations requires the Company to retain records concerning Clients identification and transactions for use as evidence in any possible future investigation. Collection of client&apos;s information facilitates the establishment of the identity and verification of the Client and it&apos;s the Company&apos;s policy to retain copies of such documents for five years after the relationship with the Client has ended.
        </p>
        <p className={`${p} mt-4`}>The full scope of records to be maintained should cover:</p>
        <ul className={ul}>
          <li>Client information</li>
          <li>Transactions</li>
          <li>Internal and external suspicion reports</li>
          <li>MLRO annual report</li>
          <li>Training and compliance monitoring</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-11',
    navLabel: 'Section 11 — Staff Training',
    cardTitle: 'Section 11 — Staff Training',
    content: (
      <>
        <p className={p}>
          It is the policy of the Company that all new staff are given Anti Money Laundering training prior to commencing their role or within a reasonable period of commencement if they are qualified by prior experience.
        </p>
        <p className={`${p} mt-4`}>
          Regulatory requirements are that every relevant member of staff receives adequate training on money laundering and terrorist financing prevention. At the Company, training may take place either through electronic learning, face to face talks, and ad-hoc emails. The training provided will be developed by under the guidance of the Money Laundering Compliance Officer in collaboration with Senior Management. The scope of training will cover, as a minimum, the following key areas:
        </p>
        <ul className={ul}>
          <li>AML/CFT Regulations and offences</li>
          <li>The nature of Money laundering</li>
          <li>Money laundering &apos;red flags&apos; and suspicious transactions, including trade-based money laundering typologies</li>
          <li>Reporting requirements</li>
          <li>Risk-based approach to AML/CFT</li>
          <li>Record keeping and retention policy</li>
        </ul>
        <p className={`${p} mt-4`}>
          This declaration will also be made available for new joiners to attest within a reasonable timeframe after joining. This period should be no longer than 30 days.
        </p>
        <p className={`${p} mt-4`}>
          A training register will be maintained to record the relevant training provided to each employee.
        </p>
      </>
    ),
  },
  {
    id: 'article-12',
    navLabel: 'Section 12 — Monitoring',
    cardTitle: 'Section 12 — Monitoring',
    content: (
      <>
        <p className={p}>
          It is the responsibility of the Client relationship manager to conduct ongoing monitoring of the business relationship with their clients. Ongoing monitoring of a business relationship includes:
        </p>
        <ul className={ul}>
          <li>
            Scrutiny of transactions undertaken throughout the course of the relationship (including, where necessary, the source of funds) to ensure that the transactions are consistent with the Company&apos;s knowledge of the client, his business and risk profile;
          </li>
          <li>Ensuring that the documents, data or information held by the Company are kept up to date.</li>
        </ul>
        <p className={`${p} mt-4`}>
          Monitoring client activity helps identify, during the course of a continuing relationship, unusual activity. If unusual events cannot be rationally explained, they may involve money laundering or terrorist financing. Monitoring client activity and transactions throughout a relationship helps give greater assurance that the Company is not being used for the purposes of financial crime.
        </p>
        <p className={`${p} mt-4 font-semibold text-primary-black`}>What is monitoring?</p>
        <p className={p}>The essentials of any system of monitoring are that:</p>
        <ul className={ul}>
          <li>it flags up transactions and/or activities for further examination;</li>
          <li>these reports are reviewed promptly by the right person(s); and</li>
          <li>appropriate action is taken on the findings of any further examination.</li>
        </ul>
        <p className={`${p} mt-4`}>The Company will conduct monitoring in two ways.</p>
        <p className={`${p} mt-4`}>
          Firstly, a manual system will be utilised and reliance will be placed upon employees&apos; alertness. It will rely upon such factors as employees&apos; intuition, direct exposure to a client face-to-face or on the telephone, and the ability, through practical experience, to recognise transactions that do not seem to make sense for that client. All potential issues will be discussed with the Money Laundering Compliance Officer.
        </p>
        <p className={`${p} mt-4`}>
          Employees will further be trained to look for the following attributes:
        </p>
        <ul className={ul}>
          <li>the unusual nature of a transaction: e.g., abnormal size or frequency for that client or peer group;</li>
          <li>the nature of a series of transactions: for example, a number of cash credits;</li>
          <li>the geographic destination or origin of a payment: for example, to or from a high-risk country; and</li>
          <li>the parties concerned: for example, a request to make a payment to or from a person on a sanctions list.</li>
        </ul>
        <p className={`${p} mt-4`}>
          Secondly, compliance monitoring will be undertaken on a risk based approach and a sample of clients will be selected both new and existing. Such sampling may be by reference to specific types of transactions; the profile of the client, or by comparing their activity or profile with that of a similar, peer group of clients, or through a combination of these approaches.
        </p>
        <p className={`${p} mt-4`}>
          Higher risk accounts and client relationships, such as a relationship with a PEP will generally require more frequent or intensive monitoring. In such cases, the compliance monitoring may be undertaken on a regular, say monthly basis, but this will be established in the Compliance Plan for the year. Senior management will be updated on a regular basis as to the frequency and numbers of monitoring reviews conducted and where necessary on an exception basis, the findings of those reviews.
        </p>
      </>
    ),
  },
  {
    id: 'article-13',
    navLabel: 'Section 13 — Suspicious Transactions (Red Flags)',
    cardTitle: 'Section 13 — Suspicious Transactions “Red Flags”',
    content: (
      <>
        <p className={p}>
          When dealing with transactions, it is important that you as an employee of the Company are able to identify key signs that a transaction may be suspicious. Staff need to be aware and heightened their focus when dealing with:
        </p>
        <ul className={ul}>
          <li>Transactions involving high-risk countries vulnerable to money laundering,</li>
          <li>Transactions involving shell companies.</li>
          <li>Transactions with correspondents that have been identified as higher risk.</li>
          <li>
            Large transaction activity involving monetary instruments such as traveler&apos;s cheques, bank drafts, money order, particularly those that are serially numbered
          </li>
          <li>
            Transaction activity involving amounts that are just below the stipulated reporting threshold or enquiries that appear to test an institution&apos;s own internal monitoring threshold or controls.
          </li>
        </ul>
        <p className={`${p} mt-4`}>
          Customer facing/relations staff would need to be vigilant and pay special attention to all complex, unusual large transactions or unusual patterns of transactions that have no apparent or visible economic or lawful purpose. Such transactions or patterns of transactions include:
        </p>
        <ul className={ul}>
          <li>significant transactions relative to a relationship,</li>
          <li>transactions that exceed certain limits,</li>
          <li>very high account turnover inconsistent with the size of the account balance or</li>
          <li>Transactions which fall out of the regular pattern of the account&apos;s activity.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-14',
    navLabel: 'Section 14 — Terrorist Financing & Escalation',
    cardTitle: 'Section 14 — Terrorist Financing “Red Flags” and Escalation',
    content: (
      <>
        <p className={`${p} font-semibold text-primary-black`}>TERRORIST FINANCING &quot;Red flags&quot;</p>
        <ul className={ul}>
          <li>
            Persons involved in a transaction share an address or phone number, particularly when the address is also a business location or does not seem to correspond to the stated occupation (e.g., student, unemployed, or self-employed).
          </li>
          <li>
            Securities transaction by a non-profit or charitable organisation, for which there appears to be no logical economic purpose or for which there appears to be no link between the stated activity of the organisation and other parties in the transaction.
          </li>
          <li>
            Large volume of securities transactions through a business account, where there appears to be no logical business or other economic purpose for the transfers, particularly when this activity involves designated high-risk locations.
          </li>
          <li>The stated occupation of the clients is inconsistent with the type and level of account activity.</li>
          <li>
            Multiple personal and business accounts or the accounts of non-profit organisations or charities that are used to collect and channel securities to a small number of foreign beneficiaries
          </li>
        </ul>
        <h3 className={h3}>Escalation</h3>
        <p className={p}>
          Where an employee has reasonable grounds to suspect or detects a transaction which is irregular, the employee must raise this with the Money Laundering Compliance Officer as soon as possible. A review panel will be instituted immediately to investigate the matter, under the supervision of the ML Compliance Officer.
        </p>
        <p className={`${p} mt-4`}>
          A record of every action undertaken during the investigation will be maintained, as well as the confidentiality of the ongoing investigation or the potential outcome.
        </p>
        <p className={`${p} mt-4`}>
          The Review Panel will need to examine as far as possible, without tipping off the customer, the background and purpose for such transactions and set forth their findings in writing. Where the Panel concludes that sufficient or reasonable grounds exists to suspect that funds are the proceeds of criminal activity or related to terrorist financing, a suspicious activity report would be made to the NFIU. All suspicious transactions, including attempted transactions will be reported regardless of the amount involved.
        </p>
        <p className={`${p} mt-4`}>
          All employees are prohibited from discussing the fact that a report is required to be filed with the authorities. This requirement applies regardless of whether the transactions involve tax matters or other things.
        </p>
        <p className={`${p} mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500`}>
          © 2026 Zena Technologies Limited. Anti-Money Laundering Policy — Last Updated: 08 March 2026
        </p>
      </>
    ),
  },
];
