import React from "react";
import backgroundImage from "../../assets/safety_bg.png";

const SafetyGuidelines = () => {
  return (
    <>
      <div
        className="w-full font-poppins min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="lg:w-3/5 w-full -top-50 px-[10%] text-white flex flex-col gap-5 justify-center items-left min-h-screen text-wrap ">
          <div className="flex flex-row gap-16">
            <div className="w-2 h-24 rounded-l-lg radius bg-white"></div>
            <h1 className="text-left my-auto font-semibold text-4xl">
              Safety Guidelines
            </h1>
          </div>
          <p className="text-lg leading-8 mb-16">
            At PahingaU, your safety is our utmost priority. While we employ
            measures to prevent fraudulent activity on our platform, we highly
            recommend following our recommended safety practices to ensure that
            your renting journey remains safe and secure:
          </p>
        </div>
      </div>
      <div className="w-full px-4 sm:px-[10%] font-poppins pb-20 sm:pb-[20%] mt-40">
        <div className="flex pb-20 sm:pb-[5%] flex-col justify-start gap-5 text-left">
          <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] mb-4">
            1. Check the Verification Status of the Property
          </h1>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
            There are three levels of verification at PahingaU:
            <ul className="list-disc pl-5">
              <li>Unverified: No badge.</li>
              <li>
                Semi-Verified: Verified email address and mobile number, with ID
                photo submitted.
              </li>
              <li>
                Verified: Verified with supporting legal documents on
                affiliations and/or ownership of the listed properties.
              </li>
              <li>
                Partner: PahingaU has physically visited the property location
                and has partnered with the property for end-to-end support.
              </li>
            </ul>
          </p>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
            Listings with lower verification levels appear lower in the search
            results. We include user-generated listings to provide a wider pool
            of options for renters to explore, as it is not always logistically
            feasible for our teams to physically visit and partner with every
            rental property in the country.
          </p>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl mb-8">
            As much as possible, only transact with hosts tagged with higher
            verification levels on the platform.
          </p>

          <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] mb-4">
            2. Avoid Reservation Fees and Down Payments Before Viewing
          </h1>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
            Some hosts may request reservation fees and down payments ahead of
            the contract. However, this is also a common scam tactic used by
            fraudulent hosts, who ask for early deposits prior to viewing the
            property.
          </p>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl mb-8">
            Verify the host's affiliation, and ensure to have an on-site viewing
            appointment before performing any monetary transaction.
          </p>

          <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] mb-4">
            3. Verify Your Host's Authorization to Lease Out the Property
          </h1>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
            We recommend that you confirm the affiliations of the host before
            making any monetary transaction. For high-rise buildings like
            condominium rentals, you may do this by approaching the building
            administrator or reception areas and confirming the identity of your
            agent or landlord.
          </p>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl mb-8">
            For other property types, ask for legal documentation on ownership
            and/or authorization to lease out the property. It is best if the
            rental is legally registered and tax-mapped with the Bureau of
            Internal Revenue, as this guarantees that the operator is a
            registered business.
          </p>
          <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] mb-4">
            4. Keep All Transactions and Conversations Within the Platform
          </h1>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
            In compliance with our Terms of Service and Privacy Policy, we
            monitor chat logs and user touchpoints on our platform to moderate
            activity.
          </p>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl mb-8">
            We monitor suspicious activity and execute security measures to
            mitigate possible irregularities in user interactions. If inquiries
            and requests are transferred out-of-platform, then our teams will
            not be able to screen possible suspicious activity, therefore
            increasing your risk exposure in rental transactions.
          </p>

          <h1 className="text-[#0077B5] text-3xl sm:text-4xl font-bold leading-tight sm:leading-[40px] mb-4">
            5. Monitor Security Updates from Our Teams
          </h1>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl">
            If fraudulent activity is detected with hosts that you've interacted
            with, our teams will reach out and alert you of possible risks. Be
            on the lookout for security emails, and follow recommended practices
            to stay safe on our platform.
          </p>
          <p className="font-poppins font-medium text-[#1A1A1A] text-base sm:text-xl mb-8">
            Despite the presence of our security measures, it is always best for
            you to practice these safety guidelines to avoid experiencing
            fraudulent transactions in the future.
          </p>
        </div>
        <div className="text-[#0077B5] text-center font-poppins font-semibold text-3xl leading-[48px] mb-20">
          <h1>Happy renting, and have a safe journey ahead.</h1>
        </div>
        <div className="p-4 bg-blue-300 bg-opacity-70 rounded-lg py-10 px-8">
          <p className="text-[#1A1A1A] text-justify font-poppins font-medium text-lg leading-[32px] mb-4">
            By accessing our platforms, you hereby agree to our Terms of
            Service, Privacy Policy, and Cookie Policy.
          </p>
          <p className="text-[#1A1A1A] text-justify font-poppins font-medium text-lg leading-[32px]">
            <span className="text-[#0077B5] font-bold">Disclaimer:</span> Your
            interactions with hosts on the platform are solely between you and
            them, and any terms, conditions, warranties, or representations
            associated with such interactions are solely the responsibility of
            these third parties. To the maximum extent permitted by applicable
            law, PahingaU and its officers, directors, employees, agents, and
            affiliates shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, including but not
            limited to loss of profits, data, or use, arising out of or in
            connection with your use of the services or these terms.
          </p>
        </div>
      </div>
    </>
  );
};

export default SafetyGuidelines;
