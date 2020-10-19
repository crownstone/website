---
layout: page
title: Privacy Policy
header: Privacy
description: Privacy Policy of Crownstone
group: Policy
markdown: true
permalink: app/privacy-policy/
---
{% include JB/setup %}

# APP PRIVACY POLICY

See also our [Terms of Service](/terms-of-service), [Ethical Policy](/ethical-policy) and our [Privacy Policy](/privacy-policy).
This page describes our app privacy policy.

Summarized, we do **not sell** your data, we do **not share** your data, we do **not want** your data. 
Your data is only used to provide you with particular functionality that you want. 
We consider you the owner of your data.

{% assign email = ".rocks, stone, crown, @, sk, a" | split: ", "  %}

## SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?

**Webshop**. When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.
When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.

**App**. The Crownstones you have bought have a companion Crownstone app. This app can create a smart home experience using *indoor positioning*. That is, you can walk into a room and automatically the lights go on. To be able to do this technically, we need the location permissions in the Crownstone app enabled. The app collects location data to enable indoor positioning, even when the app is in the background.

The location data is used to provide you with your smart home functionality. The location data can be shared to other household members depending on your own permission settings. The location data is not used for ads.

**Cloud**. To be able to give other people in your household permissions to use the smart lights and outlets, keys are distributed to them through the Crownstone cloud. General information about the number of rooms, the number of devices, and configuration options are stored in the cloud so that an (admin) user can configure the smart home once and other household members can use this configuration. Information such as location information can be shared with household members. This option can be found under Settings - Privacy - Share location and can of course be disabled.

<p>
We do not collect any data to be sold to third-parties or used for advertisement purposes. All data that is present in the cloud can be queried by the user and deleted by the user. If you need help with the deletion of your account, including all data, contact us at
{% include snippets/email subject="Legal" email=email %}
or by mail at Crownstone, {{ site.company.address }}.
</p>

## SECTION 2 - CONSENT

**Webshop**. When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.

<p>
If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at 
{% include snippets/email subject="Legal" email=email %}
or by mail at Crownstone, {{ site.company.address }}.
</p>

**Cloud**. The consent is given when you start using the Crownstone app.

If, after you opt-in, you change your mind, you can withdraw your consent by removing your data and your account.

**App**. When downloading and using the Crownstone app, we ask for your consent by using the permission system of the market place owners. 

If, after you opt-in, you change your mind, you can withdraw your consent by removing the app from your smartphone or tablet.

## SECTION 3 - DISCLOSURE

We may disclose your personal information if we are required by law to do so.

## SECTION 4 - THIRD-PARTY COMPANIES

**Webshop**. Our store (<https://shop.crownstone.rocks>) is hosted on *Shopify Inc.*. Shopify provide us with the online e-commerce platform that allows us to sell our products and services to you.
Your data is stored through Shopify’s data storage, databases and the general Shopify application. They store your data on a secure server behind a firewall.
If you choose a direct payment gateway to complete your purchase, then Shopify stores your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted.
All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
For more insight, you may also want to read Shopify’s Terms of Service (<https://www.shopify.com/legal/terms>) or Privacy Statement (<https://www.shopify.com/legal/privacy>). 
For most transactions within Europe Crownstone's payment provider is Mollie (<https://www.mollie.com/en/privacy>).

**Cloud**. Our servers are hosted at TransIP (<https://www.transip.nl/legal-and-security/privacy-policy/>) and Heroku (<https://www.heroku.com/policy/privacy>).

**App**. Your data is stored on your phone. To make sure that the Crownstones do not need to be configured by multiple people in the same household, certain configuration data is stored on our servers (see also section 1).
Our apps are hosted by Apple (<https://www.apple.com/privacy/>) and Google (<https://policies.google.com/privacy>).

**Website**. Our website (<http://crownstone.rocks>) is hosted on Github pages (<https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement>. We use a privacy-friendly variant of analytics, called SimpleAnalytics (<https://simpleanalytics.com/privacy>). We use Google Analytics for particular pages (<https://policies.google.com/privacy>). After a website visitor clicks on the chat widget, the privacy policy applies of Re:plain (<https://replain.cc/terms-and-policies>).

**Other**. We make use of Cloudflare (<https://www.cloudflare.com/privacypolicy/>) for DNS and protect our servers against online attacks.


## SECTION 5 - THIRD-PARTY SERVICES

**Webshop**. For all third-party services read carefully through Shopify’s Terms of Service (<https://www.shopify.com/legal/terms>) or Privacy Statement (<https://www.shopify.com/legal/privacy>). 
In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.

**Cloud**. When you connect a third-party service to Crownstone, please read their respective privacy policy. For example, when connecting Google Home, Google's privacy policy applies (<https://policies.google.com/privacy>). Similarly, when connecting Alexa, Amazon's privacy policy applies (<https://www.alexa.com/help/privacy>). Read those carefully. For example, to be able to present status information of your smart home devices, those companies require Crownstone to update the status of your devices regularly (not only when you switch or dim them).

We do not provide integrations by default. Each time you give explicit permission to integrate the Crownstone service with a third-party service. This permission can also be withdrawn.

**App**. We do make use of React for app development. The source code of the app can be found at <https://github.com/crownstone/crownstone-app>. We do not integrate services that collect data for third-parties except for one that allows us to catch errors in the field, Sentry (<https://sentry.io/privacy/>).

**Other**. When you click on links on our website, store, or otherwise, they may direct you away from our site. We are not responsible for the privacy practices of other sites.

## SECTION 6 - SECURITY

**Webshop**. To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption.  Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.

**Cloud**. Access to our cloud uses HTTPS and the data is encrypted by the industry's best practices.

**App**. Communication between the app and the Crownstone hardware is encrypted by the industry's best practices.

## SECTION 7 - COOKIES

**Webshop**. The list of cookies that Shopify stores can be found at <https://www.shopify.com/legal/cookies>.

**Cloud**. The cloud does not make use of cookies.

**App**. The app does not make use of cookies.

**Website**. The cookies stored by Re:plain can be found at <https://replain.cc/terms-and-policies>. We prevent loading the chat widget by default to preserve your privacy even more. The cookies stored by Disqus can be found at <https://disqus.com/data-sharing-settings/>. We prevent loading the comment section by default to preserve your privacy as well. Cloudflare's cookie policy can be found at <https://www.cloudflare.com/cookie-policy/>. Google's cookies can be found at <https://policies.google.com/technologies/types>.

## SECTION 8 - AGE OF CONSENT

By using Crownstone services, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.

## SECTION 9 - CHANGES TO THIS PRIVACY POLICY

We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
If Crownstone or third-parties are acquired or merged with other companies, your information may be transferred to the new owners for continued service. Please, read the privacy policy at regular times to understand your rights.

## SECTION 10 - GDPR COMPLIANCE

Crownstone operates GDPR compliant and evokes [article 6](https://gdpr.eu/article-6-how-to-process-personal-data-legally/) on the lawfullness of processing.

In our case, processing is lawfull, because:

- the data subject has given consent to the processing of his or her personal data for one or more specific purposes;
- processing is necessary for compliance with a legal obligation to which the controller is subject.

The personal data used is to permit the customer to have a truly smart home reacting on their presence. Crownstone 
sells hardware with the promise that it can react to the presence of the user and henceforth carries a legal obligation
to implement given functionality. 

According to GDPR regulation, the customer can withdraw consent.

## QUESTIONS AND CONTACT INFORMATION

<p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact us at 
{% include snippets/email subject="Legal" email=email %}
or by mail at Crownstone, {{ site.company.address }}.</p>

{% include snippets/bottom-margin %}
