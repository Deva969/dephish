const mockEmails = [
  {
    id: 1,
    sender: "Malu",
    subject: "Account recovery email changed",
    body: "It looks like my Google recovery email has changed...",
    isPhish: false,
    avatar: "/assets/1.png",
    time: "2 months ago",
  },
  {
    id: 2,
    sender: "Thunder",
    subject: "Amazon issue help",
    body: "Can you help me with an issue on my Amazon account?",
    isPhish: false,
    avatar: "/assets/2.png",
    time: "about 2 months ago",
  },
  {
    id: 3,
    sender: "Bart",
    subject: "Suspicious supplier message",
    body: "A colleague received a suspicious message from a supplier...",
    isPhish: true,
    avatar: "/assets/3.png",
    time: "about 2 months ago",
  },
];

export default mockEmails;
