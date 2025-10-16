const mockEmails = [
  {
    id: 1,
    sender: "Malu",
    email: "malu@google.com",
    subject: "Account recovery email changed",
    body: "Hi, Regan! How are you? I need your help! I received this email from Google, but I think there's something strange about it...",
    fullBody: `Hi, Regan! How are you?

I need your help!

I received this email from Google, but I think there's something strange about it...

Can you help me identify if it's phishing or not?

Thanks!`,
    signature: "Best regards,\nMalu",
    isPhish: false,
    avatar: "/assets/1.png",
    time: "2 months ago",
    dmarc: true,
    spf: true,
    dkim: true,
  },
  {
    id: 2,
    sender: "Thunder",
    email: "thunder@company.com",
    subject: "Amazon issue help",
    body: "Hey! Can you help me with an issue on my Amazon account? I got a weird email asking me to verify my payment method...",
    fullBody: `Hey!

Can you help me with an issue on my Amazon account?

I got a weird email asking me to verify my payment method. The link looks suspicious but I'm not sure.

Could you take a look at it when you get a chance?

Thanks in advance!`,
    signature: "Thunder\nIT Department",
    isPhish: false,
    avatar: "/assets/2.png",
    time: "about 2 months ago",
    dmarc: true,
    spf: true,
    dkim: true,
  },
  {
    id: 3,
    sender: "Bart",
    email: "bart@company.com",
    replyTo: "suspicious@unknown-domain.com",
    subject: "Suspicious supplier message",
    body: "URGENT: A colleague received a suspicious message from a supplier requesting immediate payment to a new bank account...",
    fullBody: `URGENT: Payment Information Update Required

A colleague received a suspicious message from a supplier requesting immediate payment to a new bank account.

The email claims our regular payment account has been "compromised" and we need to use this new account immediately:

Account: 9876543210
Bank: Offshore Bank Ltd
Swift: SUSPIC123

Please process this payment ASAP to avoid service disruption!

Click here to verify: http://definitely-not-phishing.xyz/verify

This seems very urgent!`,
    signature: "Bart\nFinance Team",
    isPhish: true,
    avatar: "/assets/3.png",
    time: "about 2 months ago",
    dmarc: false,
    spf: false,
    dkim: true,
  },
];

export default mockEmails;