import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Stack, VStack, Flex, Text, Button } from '@chakra-ui/react'

import Title from './Title'

const Terms: FunctionComponent = (props) => {
  return (
    <VStack
      mt={'15px'}
      px={{ sm: '10px', md: '20px', lg: '110px' }}
      w={'100%'}
      spacing={'53px'}
    >
      <Title />
      <Flex
        mt={'46px'}
        rounded={'25px'}
        background={'#212121'}
        w='100%'
        align='center'
        px={{ sm: '10px', md: '20px', lg: '50px' }}
        py={{ sm: '10px', md: '20px', lg: '60px' }}
      >
        <Text
          fontSize='11px'
          fontWeight={'800'}
        >
        Welcome to https://neartreasury.io, a website (“Site”) that provides access
        to https://app.neartreasury.io a website-hosted user interface (the “App”)
        (collectively referred to as the “Interface”) provided by NearTreasury.
        (“NearTreasury”, “we”, “our”, or “us”). The Interface provides access to a
        decentralized protocol on the Near blockchain that allows depositers of
        certain digital assets to participate in decentralized markets (the
        “Protocol”).<br/><br/>
        THE INTERFACE IS A WEB APPLICATION WHICH MERELY PROVIDES A
        NON-EXCLUSIVE, PARTIAL USER INTERFACE TO THE PROTOCOL. THE
        OWNER/OPERATOR OF THE INTERFACE DOES NOT HAVE CUSTODY
        OVER YOUR ASSETS OR ACCESS TO YOUR PRIVATE KEY AND CANNOT
        INITIATE A TRANSFER OF DIGITAL ASSETS OR OTHERWISE ACCESS
        YOUR DIGITAL ASSETS. THE INTERFACE IS NOT A BROKER OR
        INTERMEDIARY AND IS IN NO WAY YOUR AGENT, ADVISOR, OR
        CUSTODIAN, AND WE DO NOT HAVE A FIDUCIARY RELATIONSHIP OR
        OBLIGATION TO YOU REGARDING ANY OTHER DECISIONS OR
        ACTIVITIES THAT YOU EFFECT WHEN USING YOUR WALLET OR OUR
        SERVICES. WE ARE NOT RESPONSIBLE FOR ANY ACTIVITIES THAT YOU
        ENGAGE IN WHEN USING YOUR WALLET, AND YOU SHOULD
        UNDERSTAND THE RISKS ASSOCIATED WITH PARTICIPATING IN
        DECENTRALIZED PROTOCOLS ON THE NEAR BLOCKCHAIN. UNLESS
        EXPLICITLY PROVIDED IN WRITING, WE DO NOT HOST OR MAINTAIN
        ECOSYSTEM PARTNERS ACCESSIBLE ON OUR SERVICES AND DO NOT
        PARTICIPATE IN ANY TRANSACTIONS ON SUCH ECOSYSTEM PARTNERS,
        RECOMMEND, ENDORSE, OR OTHERWISE TAKE A POSITION ON YOUR
        USE OF THESE SERVICES<br/><br/>
        This Terms of Service Agreement (the “Terms” or “Agreement”) explains
        the terms and conditions by which you may access and use the
        Interface. Please read this Agreement carefully. This Agreement applies to
        you (“You”) as a user of the Interface, including all the products, services,
        tools, and information made available on app.neartreasury.io or on
        neartreasury.io. This Agreement contains a mandatory individual
        arbitration and class action/jury trial waiver provision that requires the use
        of arbitration on an individual basis to resolve disputes, rather than jury
        trials or class actions.
        To use the Interface, you must be able to form a legally binding contract
        online either as an individual or on behalf of a legal entity. To that end, you
        represent that, if you are agreeing to this Agreement on behalf of a legal
        entity, you have the legal authority to bind the company or other legal
        entity to this Agreement and you are at least 18 years old or the age of
        majority where you reside, whichever is older, can form a legally binding
        contract online, and have the full, right, power, and authority to enter into
        and to comply with the obligations under this Agreement.
        You are advised to check this Agreement periodically to familiarize
        yourself with any changes to the terms. We, in our sole discretion, reserve
        the right to make changes to our terms of services. Changes are binding
        on users of the Interface and will take effect immediately upon posting. As
        a user, you agree to be bound by any changes, variations, or modifications
        to our terms of service and your continued use of the Interface shall
        constitute acceptance of any such changes, variations, or modifications.
        By accessing or using the Interface, you signify that you have read,
        understand, and agree to be bound by this Agreement in its entirety. If you
        do not agree, you are not authorized to access or use the Interface.<br/><br/>

        <Text fontSize='13px'>1. Interface</Text>
        The Interface provides access to a decentralized protocol on the Near
        blockchain that allows depositers of digital assets to interact with the
        Protocol and transact using smart contracts (“Smart Contracts”).
        Using the Protocol may require that you pay a fee on the Near network to
        perform a transaction. You acknowledge and agree that NearTreasury has
        no control over any transactions, the method of payment of any
        transactions, or any actual payments of transactions. You must ensure
        that you have a sufficient balance to complete any transaction on the
        Protocol before initiating such transaction.
        You acknowledge and agree that NearTreasury has no control over any
        transactions over the Protocol, the method of payment of any transactions
        or any actual payments of transactions. Accordingly, you must ensure that
        you have a sufficient balance of the applicable cryptocurrency tokens
        stored at your NearTreasury-compatible wallet address (“Cryptocurrency
        Wallet”) to complete any transaction on the Protocol or the Near network
        before initiating such transaction.
        When used on this Interface, the terms “deposit,” “lend,” “save,”
        “collateral”, “credit,” “leverage,” “bank”, “borrow”, “yield”, “invest” and
        other similar terms are not meant to be interpreted literally. Rather, such
        terms are being used to draw rough, fuzzy-logic analogies between the
        heavily automated and mostly deterministic operations of a decentralizedfinance smart contract system and the discretionary performance of
        traditional-finance transactions by people. When the Interface is used by
        users to access the Protocol and transact using Smart Contracts, there
        are no legal agreements, promises of payment, or courts of law, and
        therefore there are no debts, loans, or other traditional finance
        transactions involved.<br/><br/>

        <Text fontSize='13px'>2. Access</Text>
        Access to the Interface is provided “as is” and on an “as available” basis
        only. We do not guarantee that the Interface, or any content on it, will
        always be available or uninterrupted. From time to time, access may be
        interrupted, suspended, or restricted, including because of a fault, error,
        unforeseen circumstances, or because we are carrying out planned
        maintenance.
        We reserve the right to limit the availability of the Interface to any person,
        geographic area, or jurisdiction we so desire and/or to terminate your
        access to and use of the site, at any time and in our sole discretion.
        We may remove or amend the content of the Interface at any time.
        However, some of the content may be out of date at any given time and
        we are under no obligation to update it. We do not guarantee that the
        Interface, or any content on it, will be free from errors or omissions.
        We will not be liable to you for any loss or damage you may suffer as a
        result of the Interface being unavailable at any time for any reason.<br/><br/>

        <Text fontSize='13px'>3. Eligibility</Text>
        To access or use the Interface, you must be able to form a legally binding
        contract with us. Accordingly, you represent that you are at least eighteen
        years old and have the full right, power, and authority to enter into and
        comply with the terms and conditions of this Agreement on behalf of
        yourself and any company or legal entity for which you may access or use
        the Interface. You further represent that you are not a citizen, resident, or
        member of any jurisdiction or group that is subject to economic sanctions,
        or where your use of the Interface would be illegal or otherwise violate any
        applicable law. You further represent that your access and use of the
        Interface will fully comply with all applicable laws and regulations, and that
        you will not access or use the Interface to conduct, promote, or otherwise
        facilitate any illegal activity.<br/><br/>

        <Text fontSize='13px'>4. Modification of this Agreement</Text>
        We reserve the right, in our sole discretion, to modify this Agreement from
        time to time. If we make any modifications, we will notify you by updating
        the date at the top of the Agreement and by maintaining a current version
        of the Agreement at neartreasury.io/terms. All modifications will be
        effective when they are posted, and your continued use of the Interface
        will serve as confirmation of your acceptance of those modifications. If
        you do not agree with any modifications to this Agreement, you must
        immediately stop accessing and using the Interface.<br/><br/>
        
        <Text fontSize='13px'>5. Proprietary Rights</Text>
        The proprietary rights belong exclusively to NearTeasury. Any duplication,
        copy or violation of this terms will face legal action.<br/><br/>
        
        <Text fontSize='13px'>6. Marks, Logos and Branding</Text>
        All NearTreasury-related marks, logos, and branding used belong to
        NearTreasury exclusively. All other marks, logos and branding appearing
        on the Site (including token names, symbols and logos that may be
        identified on the Site) are the property of their respective owners.<br/><br/>

        <Text fontSize='13px'>7. NearTreasury Smart Contract Protocol</Text>
        The NearTreasury Smart Contract Protocol is comprised entirely of nonopen-source software running on the public Near blockchain and is our
        proprietary property.<br/><br/>

        <Text fontSize='13px'>8. Privacy</Text>
        Your privacy is important to us. Although we do not collect your data, we
        cannot guarantee that unauthorized third parties will never be able to
        obtain or use your data or aggregate data for improper purposes. By
        accessing and using the Interface, you acknowledge that we are not
        responsible for any of these variables or risks, do not own or control the
        Protocol, and cannot be held liable for any improperly accessed data,
        whether resulting in losses that you experience while accessing or using
        the Interface or otherwise.<br/><br/>

        <Text fontSize='13px'>9. Prohibited Activity</Text>
        You agree not to engage in, or attempt to engage in, any of the following
        categories of prohibited activity in relation to your access and use of the
        Interface:
        Intellectual Property Infringement. Activity that infringes on or violates
        any copyright, trademark, service mark, patent, right of publicity, right
        of privacy, or other proprietary or intellectual property rights under the
        law.
        Cyberattack. Activity that seeks to interfere with or compromise the
        integrity, security, or proper functioning of any computer, server,
        network, personal device, or other information technology system,
        including (but not limited to) the deployment of viruses and denial of
        service attacks.
        Fraud and Misrepresentation. Activity that seeks to defraud us or any
        other person or entity, including (but not limited to) providing any
        false, inaccurate, or misleading information in order to unlawfully
        obtain the property of another.
        Market Manipulation. Activity that violates any applicable law, rule, or
        regulation concerning the integrity of trading markets, including (but
        not limited to) the manipulative tactics commonly known as spoofing
        and wash trading.
        Other Harmful Acts. Attempts to engage in or engage in, any
        potentially harmful acts that are directed against NearTreasury,
        including but not limited to violating or attempting to violate any
        security features of NearTreasury, using manual or automated
        software or other means to access, “scrape,” “crawl” or “spider” any
        pages contained in or on the Interface, introducing viruses, worms, or
        similar harmful code into the Interface, or interfering or attempting to
        interfere with use of the Interface by any other user, host or network,
        including by means of overloading, “flooding,” “spamming,” “mail
        bombing,” or “crashing” the Interface or any other NearTreasury
        properties.
        Any Other Unlawful Conduct. Activity that violates any applicable Law,
        including, without limitation, any relevant and applicable anti-money
        laundering and anti-terrorist financing laws and any relevant and
        applicable privacy and data collection laws, in each case as may be
        amended.<br/><br/>

        <Text fontSize='13px'>10. No Professional Advice</Text>
        All information provided by the Interface is for informational purposes only
        and should not be construed as professional advice. In particular, the
        content and materials available on the Interface does not constitute any
        form of advice or recommendation by us, should not be regarded as an
        offer, solicitation, invitation or recommendation to buy or sell investments,
        securities or any other financial services and is not intended to be relied
        upon by you in making any specific investment or other decisions. You
        should not take, or refrain from taking, any action based on any
        information contained in the Interface. Before you make any financial,
        legal, or other decisions involving the Interface, you should seek
        independent professional advice from an individual who is licensed and
        qualified in the area for which such advice would be appropriate.
        Nothing included in the Interface constitutes an offer or solicitation to sell,
        or distribution of, investments and related services to anyone in any
        jurisdiction. From time to time, reference may be made to data we have
        gathered. These references may be selective or, may be partial. As
        markets change continuously, previously published information and data
        may not be current and should not be relied upon. Any reference to any
        Rate on the Interface is denominated in terms of stable and volatile coins
        or other digital assets or tokens, as applicable, not USD or other fiat
        currency. The Rate is a forward-looking projection based on a good faith
        belief of how to reasonably project results over the relevant period, but
        such belief is subject to numerous assumptions, risks and uncertainties
        (including smart contract security risks and third-party actions) which
        could result in a materially different (lower or higher) token-denominated
        Rate. The Rate is not a promise, guarantee, or undertaking on the part of
        any person or group of persons, but depends entirely on the results of
        operation of smart contracts and other autonomous systems (including
        third-party systems) and how third parties interact with those systems
        after the time of your deposit. Even if the Rate is achieved as projected,
        you may still suffer a financial loss in fiat-denominated terms if the fiatdenominated value of the relevant tokens (your deposit and any tokens
        allocated or distributed to you pursuant to the Rate) declines during the
        deposit period.<br/><br/>
        
        <Text fontSize='13px'>11. Third-Party Links</Text>
        The Interface may contain hyperlinks or references to third party websites.
        Any such hyperlinks or references are provided for your information and
        convenience only. We have no control over third party websites and
        accept no legal responsibility for any content, material or information
        contained in them. The display of any hyperlink and reference to any thirdparty website does not mean that we endorse that third party's website,
        products or services. Your use of a third-party site may be governed by
        the terms and conditions of that third-party site.<br/><br/>

        <Text fontSize='13px'>12. No Warranties</Text>
        The Interface is provided on an “AS IS” and “AS AVAILABLE” basis. To the
        fullest extent permitted by law, we disclaim any representations and
        warranties of any kind, whether express, implied, or statutory, including
        (but not limited to) the warranties of merchantability and fitness for a
        particular purpose. You acknowledge and agree that your use of the
        Interface is at your own risk. We do not represent or warrant that access
        to the Interface will be continuous, uninterrupted, timely, or secure; that
        the information contained in the Interface will be accurate, reliable,
        complete, or current; or that the Interface will be free from errors, defects,
        viruses, or other harmful elements. No advice, information, or statement
        that we make should be treated as creating any warranty concerning the
        Interface. We do not endorse, guarantee, or assume responsibility for any
        advertisements, offers, or statements made by third parties concerning
        the Interface.<br/><br/>

        <Text fontSize='13px'>13. No Fiduciary Duties</Text>
        This Agreement is not intended to, and does not, create or impose any
        fiduciary duties on us. To the fullest extent permitted by law, you
        acknowledge and agree that we owe no fiduciary duties or liabilities to you
        or any other party, and that to the extent any such duties or liabilities may
        exist at law or in equity, those duties and liabilities are hereby irrevocably
        disclaimed, waived, and eliminated. You further agree that the only duties
        and obligations that we owe you are those set out expressly in this
        Agreement.<br/><br/>

        <Text fontSize='13px'>14. Assumption of Risk</Text>
        By accessing and using the Interface, you represent that you understand
        the inherent risks associated with using cryptographic and blockchainbased systems, and that you have a working knowledge of the usage and
        intricacies of digital assets. You further understand that the markets for
        these digital assets are highly volatile due to factors including (but not
        limited to) adoption, speculation, technology, security, and regulation. You
        acknowledge that the cost and speed of transacting with cryptographic
        and blockchain-based systems are variable and may increase dramatically
        at any time. You further acknowledge the risk that your digital assets may
        lose some or all of their value while they are supplied to the Protocol. If
        you borrow digital assets from the Protocol, you will have to supply digital
        assets of your own as collateral. If your collateral declines in value such
        that it is no longer sufficient to secure the amount that you borrowed,
        others may interact with the Protocol to seize your collateral in a
        liquidation event. You further acknowledge that we are not responsible for
        any of these variables or risks, do not own or control the Protocol, and
        cannot be held liable for any resulting losses that you experience while
        accessing or using the Interface.
        We make no warranties as to the markets on which digital assets are
        transferred, purchased, or traded. You are solely responsible for
        determining what, if any, taxes apply to your digital asset transactions. We
        are not responsible for determining the taxes that apply to your
        transactions.
        We do not store, send, or receive digital assets or funds. This is because
        digital assets exist only by virtue of the ownership record maintained on
        its supporting blockchain. Any transfer of digital assets occurs within the
        decentralized Protocol and Near blockchain and not in the Interface. We
        cannot assist you to cancel or otherwise modify any transaction or
        transaction details. There are no warranties or guarantees that a transfer
        initiated via the Interface will successfully transfer title or right in any
        digital asset.
        Accordingly, you understand and agree to assume full responsibility for all
        of the risks of accessing and using the Interface and interacting with the
        Protocol.<br/><br/>

        <Text fontSize='13px'>15. Release of Claims</Text>
        You expressly agree that you assume all risks in connection with your
        access and use of the Interface and your interaction with the Protocol. You
        further expressly waive and release us from any and all liability, claims,
        causes of action, or damages arising from or in any way relating to your
        use of the Interface and your interaction with the Protocol. If you are a
        California resident, you waive the benefits and protections of California
        Civil Code § 1542, which provides: “[a] general release does not extend to
        claims that the creditor or releasing party does not know or suspect to
        exist in his or her favor at the time of executing the release and that, if
        known by him or her, would have materially affected his or her settlement
        with the debtor or released party.”<br/><br/>

        <Text fontSize='13px'>16. Indemnity</Text>
        You agree to hold harmless, release, defend, and indemnify us and our
        officers, directors, employees, contractors, agents, affiliates, and
        subsidiaries from and against all claims, damages, obligations, losses,
        liabilities, costs, and expenses arising from: (a) your access and use of the
        Interface; (b) your violation of any term or condition of this Agreement, the
        right of any third party, or any other applicable law, rule, or regulation; and
        (c) any other party’s access and use of the Interface with your assistance
        or using any device or account that you own or control.<br/><br/>

        <Text fontSize='13px'>17. Limitation of Liability</Text>
        Under no circumstances shall we or any of our officers, directors,
        employees, contractors, agents, affiliates, or subsidiaries be liable to you
        for any indirect, punitive, incidental, special, consequential, or exemplary
        damages, including (but not limited to) damages for loss of profits,
        goodwill, use, data, or other intangible property, arising out of or relating
        to any access or use of the Interface, nor will we be responsible for any
        damage, loss, or injury resulting from hacking, tampering, or other
        unauthorized access or use of the Interface or the information contained
        within it. We assume no liability or responsibility for any: (a) errors,
        mistakes, or inaccuracies of content; (b) personal injury or property
        damage, of any nature whatsoever, resulting from any access or use of the
        Interface; (c) unauthorized access or use of any secure server or database
        in our control, or the use of any information or data stored therein; (d)
        interruption or cessation of function related to the Interface; (e) bugs,
        viruses, trojan horses, or the like that may be transmitted to or through the
        Interface; (f) errors or omissions in, or loss or damage incurred as a result
        of the use of, any content made available through the Interface; and (g)
        the defamatory, offensive, or illegal conduct of any third party. Under no
        circumstances shall we or any of our officers, directors, employees,
        contractors, agents, affiliates, or subsidiaries be liable to you for any
        claims, proceedings, liabilities, obligations, damages, losses, or costs in
        an amount exceeding the amount you paid to us in exchange for access to
        and use of the Interface, or $100.00, whichever is greater. This limitation
        of liability applies regardless of whether the alleged liability is based on
        contract, tort, negligence, strict liability, or any other basis, and even if we
        have been advised of the possibility of such liability. Some jurisdictions do
        not allow the exclusion of certain warranties or the limitation or exclusion
        of certain liabilities and damages. Accordingly, some of the disclaimers
        and limitations set forth in this Agreement may not apply to you. This
        limitation of liability shall apply to the fullest extent permitted by law.<br/><br/>

        <Text fontSize='13px'>18. Dispute Resolution</Text>
        We will use our best efforts to resolve any potential disputes through
        informal, good faith negotiations. If a potential dispute arises, you must
        contact us by sending an email to legal@neartreasury.io so that we can
        attempt to resolve it without resorting to formal dispute resolution. If we
        aren’t able to reach an informal resolution within sixty days of your email,
        then you and we both agree to resolve the potential dispute according to
        the process set forth below.
        Any claim or controversy arising out of or relating to the Interface, this
        Agreement, including any question regarding this Agreement’s existence,
        validity or termination, or any other acts or omissions for which you may
        contend that we are liable, including (but not limited to) any claim or
        controversy as to arbitrability (“Dispute”), shall be referred to and finally
        resolved by arbitration in Singapore in accordance with the Arbitration
        Rules of the Singapore International Arbitration Centre ("SIAC Rules")
        You understand that you are required to resolve all Disputes by binding
        arbitration. The arbitration shall be held on a confidential basis before one
        or three arbitrators, who shall be selected pursuant to SIAC Rules. The
        seat of the arbitration shall be determined by the arbitrator(s); the arbitral
        proceedings shall be conducted in English. The applicable law shall be
        Singapore law.
        Unless we agree otherwise, the arbitrator may not consolidate your claims
        with those of any other party. Any judgment on the award rendered by the
        arbitrator may be entered in any court of competent jurisdiction.<br/><br/>

        <Text fontSize='13px'>19. Class Action and Jury Trial Waiver</Text>
        You must bring any and all Disputes against us in your individual capacity
        and not as a plaintiff in or member of any purported class action,
        collective action, private attorney general action, or other representative
        proceeding. This provision applies to class arbitration. You and we both
        agree to waive the right to demand a trial by jury.<br/><br/>

        <Text fontSize='13px'>20. Governing Law</Text>
        You agree that the laws of Singapore, without regard to principles of
        conflict of laws, govern this Agreement and any Dispute between you and
        us. You further agree that the Interface shall be deemed to be based
        solely in Singapore, and that although the Interface may be available in
        other jurisdictions, its availability does not give rise to general or specific
        personal jurisdiction in any forum outside of Singapore.<br/><br/>

        <Text fontSize='13px'>21. Miscellaneous</Text>
        We may perform any of our obligations, and exercise any of the rights
        granted to us under this Agreement, through a third-party. We may assign
        any or all our rights and obligations under this Agreement to any thirdparty. If any clause or part of any clause of this Agreement is found to be
        void, unenforceable or invalid, then it will be severed from this Agreement,
        leaving the remainder in full force and effect, provided that the severance
        has not altered the basic nature of this Agreement. No single or partial
        exercise, or failure or delay in exercising any right, power or remedy by us
        shall constitute a waiver by us of, or impair or preclude any further
        exercise of, that or any right, power or remedy arising under these terms
        and conditions or otherwise.
        If any of the provisions in this Agreement is found to be illegal, invalid or
        unenforceable by any court of competent jurisdiction, the remainder shall
        continue in full force and effect. All disclaimers, indemnities and
        exclusions in this Agreement shall survive termination of the Agreement
        and shall continue to apply during any suspension or any period during
        which the Interface is not available for you to use for any reason
        whatsoever.<br/><br/>

        <Text fontSize='13px'>22. About Us</Text>
        NearTreasury is the first 3rd Gen. Decentralized Savings Protocol on Near.<br/><br/>

        <Text fontSize='13px'>23. Contacting Us</Text>
        If you have any question about this Agreement, or if you wish to contact us
        for any reason whatsoever, please send us an email
        at legal@neartreasury.io
        </Text>
      </Flex>

    </VStack>
  );
}
export default Terms;

