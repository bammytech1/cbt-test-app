const questions = [
  {
    id: 1,
    quest: "What is a Computer?",
    obj: [
      "A television",
      "An electronic machine",
      "A gabage in gabage out",
      "An electric calculator",
    ],
    ans: "An electronic machine",
  },

  {
    id: 2,
    quest: "What does computer raw fact mean?",
    obj: ["An information", "A piece of hardware", "A data", "A processed"],
    ans: "A data",
  },
  {
    id: 3,
    quest: "A Robot is an example of ................ generation of computer?",
    obj: [
      "First Generation",
      "Second Generation",
      "Third Generation",
      "Fifth Generation",
    ],
    ans: "Second Generation",
  },
  {
    id: 4,
    quest: "ATM is a Pc?",
    obj: ["True", "False"],
    ans: "True",
  },
  {
    id: 5,
    quest: "Which among these is an input device?",
    obj: ["Cursor", "Mouse", "Pointer", "Printer"],
    ans: "Mouse",
  },
  // {
  //   id: 6,
  //   quest: "_________________computers are used for counting and calculation ",
  //   obj: ["Hybrid", "Analogue", "Mainframe", "Digital"],
  // },
  // {
  //   id: 7,
  //   quest: "Information can be obtained from _________________",
  //   obj: [
  //     "the above",
  //     "Radio",
  //     "Television, newspaper ",
  //     "Library, chats ",
  //     "All of the above",
  //   ],
  // },
  // {
  //   id: 8,
  //   quest:
  //     "The numeric keys produce _________ in the lowercase and _________ after pressing the shift key",
  //   obj: [
  //     "and symbols",
  //     "Numbers and functions",
  //     "Numbers and symbols",
  //     "Symbols and abomination",
  //     "None of the above",
  //   ],
  // },
  // {
  //   id: 9,
  //   quest: "which generation of computer made use of I.C?",
  //   obj: [
  //     "eneration",
  //     "First Generation",
  //     "Second Generation",
  //     "Third Generation",
  //     "Fourth Generation",
  //   ],
  // },
  // {
  //   id: 10,
  //   quest: "The computer has an _________ and _________ part",
  //   obj: [
  //     "output",
  //     "Input, outpit",
  //     "Inpit, outpit",
  //     "Input, output",
  //     "All of the above",
  //   ],
  // },
  // {
  //   id: 11,
  //   quest: "Where can you watch football games?",
  //   obj: [
  //     "Disk and cassettes",
  //     "Computer and television",
  //     "Radio and television",
  //     "Screen and monitors",
  //   ],
  // },
  // {
  //   id: 12,
  //   quest: "How is printing done?",
  //   obj: [
  //     "By typing on a paper ",
  //     "By photocoping",
  //     "By placing paper in the input tray and issue a command for printing",
  //     "None of the above ",
  //   ],
  // },
  // {
  //   id: 13,
  //   quest:
  //     "____________key makes a command to be executed or moves the cursor to the beginning of another line",
  //   obj: ["Shift key", "Enter key", "Scroll bar key", "Esc key"],
  // },
  // {
  //   id: 14,
  //   quest: "What is the function of the C.P.U?",
  //   obj: [
  //     "It conducts all the computer operations",
  //     "It conducts only ALU operations",
  //     "It conducts only memory unit operations ",
  //     "None of the above ",
  //   ],
  // },
  // {
  //   id: 15,
  //   quest: "V.G.A stands for ___________",
  //   obj: [
  //     "Versatile graphic adapter",
  //     "Visual grape adapter",
  //     "Video graphic adapter",
  //     "None of the above ",
  //   ],
  //   ans: "Video graphic adapter",
  // },
  // {
  //   id: 16,
  //   quest: "Data or information is stored in the drive in ___________",
  //   obj: ["Bets", "Bits", "Bytes", "Megas"],
  // },
  // {
  //   id: 17,
  //   quest:
  //     "__________ are used in specialised activities that are dangerous or tedious for humans",
  //   obj: ["Computers", "Joystick ", "Robots", "Military weapons"],
  // },
  // {
  //   id: 18,
  //   quest: "What is a printer?",
  //   obj: [
  //     "It is just a device",
  //     "It is a device used by a computer to bring out a hard copy of printout results",
  //     "It is a photocopier",
  //     "All of the above",
  //   ],
  // },
  // {
  //   id: 19,
  //   quest: "Where do you connect the monitor to?",
  //   obj: ["Monitor", "Mouse ", "System unit", "UPS"],
  // },
  // {
  //   id: 20,
  //   quest: "Microprocessor chips are used by ____________",
  //   obj: [
  //     "Mainframe computer",
  //     "Personal computer",
  //     "Mini computer",
  //     "Micro computer",
  //   ],
  // },
  // {
  //   id: 21,
  //   quest:
  //     "The rectangular box or frame that displays the properties of an environment in the computer is ____________",
  //   obj: ["Start Menu", "Window", "Task bar", "Desktop"],
  // },
  // {
  //   id: 22,
  //   quest: "What are the parts of the computer you know?",
  //   obj: ["Mouse", "Monitor and system unit", "A and B", "All of the above "],
  // },
  // {
  //   id: 23,
  //   quest: "What is an application software?",
  //   obj: [
  //     "It is a utility software",
  //     "It is a software that is specially designed for one kind of activity",
  //     "It is a program",
  //     "Instructions",
  //   ],
  // },
  // {
  //   id: 24,
  //   quest: "What is an input?",
  //   obj: [
  //     "It is the data that is been fed into the computer",
  //     "It is the gabbage given to the computer",
  //     "It is letters",
  //     "None of the above",
  //   ],
  // },
  // {
  //   id: 25,
  //   quest: "NDE stands for",
  //   obj: [
  //     "National Director of Empowerment",
  //     "National Director of Employment",
  //     "National Directorate of Empowerment",
  //     "National Directorate of Employment",
  //   ],
  // },
  // {
  //   id: 26,
  //   quest: "Computer can be used to ____________",
  //   obj: ["Listen to music", "Learn", "Draw, type", "All of the above"],
  // },
  // {
  //   id: 27,
  //   quest: "___________ can store and retrieve data",
  //   obj: ["CPU", "Computer", "Memory unit", "All of the above"],
  // },
  // {
  //   id: 28,
  //   quest:
  //     "All of these are importance of a computer program `Mavis Beacon` except ___________",
  //   obj: [
  //     "It gives typing skill",
  //     "It shows how to place fingers on the keyboard",
  //     "It increases typing speed",
  //     "It shows a game",
  //   ],
  // },
  // {
  //   id: 29,
  //   quest: "___________ is used mostly in games and entertainment software",
  //   obj: ["Mouse", "Mice", "Lice", "Joystick"],
  // },
  // {
  //   id: 30,
  //   quest: "How does the monitor look like?",
  //   obj: ["Radio", "Sreen", "Television", "Mirror"],
  // },
  // {
  //   id: 31,
  //   quest:
  //     "The process every computer must pass through before use is ___________",
  //   obj: ["Loading", "Windows xp", "Booting", "Processing"],
  // },
  // {
  //   id: 32,
  //   quest: "What does the term GIGO mean?",
  //   obj: [
  //     "Go In Go Out",
  //     "Get In Get Out",
  //     "Going In Going Out",
  //     "Gabage In Gabage Out",
  //   ],
  // },
  // {
  //   id: 33,
  //   quest: "What is the full meaning of USB?",
  //   obj: [
  //     "Universal Serial Bus",
  //     "Uniform Serving Bus",
  //     "Universe Station Bus",
  //     "Unity Serial Bus",
  //   ],
  // },
  // {
  //   id: 34,
  //   quest: "What does the term PC mean?",
  //   obj: [
  //     "Peoples Computer",
  //     "Personal Computer",
  //     "Power Computer",
  //     "Unity Serial Bus",
  //   ],
  // },
  // {
  //   id: 35,
  //   quest: "What is the keyword that can be used to run Microsoft Paint?",
  //   obj: ["Paint", "Microsoft Paint", "Ms Paint", "Mspaint"],
  // },
  // {
  //   id: 36,
  //   quest: "Which among these is not a version of Microsoft Windows?",
  //   obj: ["Windows 7", "Windows 8", "Windows 9", "Windows 10"],
  // },
  // {
  //   id: 37,
  //   quest:
  //     "What are the small pictures that you click on to start an application called?",
  //   obj: ["folders", "programs", "icons", "pictures"],
  // },
  // {
  //   id: 38,
  //   quest: "Ctrl + Z is a command used to",
  //   obj: ["Undo", "Redo", "Copy", "Paste"],
  // },
  // {
  //   id: 39,
  //   quest: "Ctrl + Y is a command used to",
  //   obj: ["Undo", "Redo", "Copy", "Paste"],
  // },
  // {
  //   id: 40,
  //   quest: "The topmost bar of every window is known as the title bar.",
  //   obj: ["True", "False"],
  // },
  // {
  //   id: 41,
  //   quest: "What is a Command?",
  //   obj: [
  //     "A requirement from the computer",
  //     "A question given to the computer",
  //     "A set of instrument given to the computer",
  //     "A set of instruction given to the computer on its own language",
  //   ],
  // },
  // {
  //   id: 42,
  //   quest: "A processed data is ____________",
  //   obj: ["A raw material", "An information", "A command", "None of the above"],
  // },
  // {
  //   id: 43,
  //   quest: "Scanner is an output device",
  //   obj: ["True", "False"],
  // },
  // {
  //   id: 44,
  //   quest:
  //     "The physical part of the computer that we can touch, see and carry about is called?",
  //   obj: ["Software", "Hardware", "Softcopy", "Hardcopy"],
  // },
  // {
  //   id: 45,
  //   quest: "Warm booting is done to ______________",
  //   obj: [
  //     "Power On the system",
  //     "Boot the system",
  //     "Refresh the memory of the system",
  //     "Process data",
  //   ],
  // },
  // {
  //   id: 46,
  //   quest: "________ disrupts the smooth operation of the computer system",
  //   obj: ["Syphy", "Trokiter", "Virus", "sprokiter"],
  // },
  // {
  //   id: 47,
  //   quest: "___________ is not a component of the system unit",
  //   obj: ["Cd Rom", "Power Supply Unit", "Connector", "Harddisk"],
  // },
  // {
  //   id: 48,
  //   quest: "___________ is an example of a program that removes system virus",
  //   obj: ["kasperse", "Avast", "Trokiter", "Newton"],
  // },
  // {
  //   id: 49,
  //   quest: "A.L.U is found where?",
  //   obj: ["In the G.U.I", "In the D.P.O", "In the R.P.O", "In the C.P.U"],
  // },
  // {
  //   id: 50,
  //   quest: "what is the most busiest part of the computer system?",
  //   obj: ["A.L.U", "D.P.O", "R.P.O", "C.P.U"],
  // },
];

export default questions;

export const resultInitalState = {
  score: 0,
  correctAnswer: 0,
  wrongAnswer: 0,
};
