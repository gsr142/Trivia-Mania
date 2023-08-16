const { Question } = require('../models');

const questionData = [
  {
    category_id: 1,
    question_text:
      'Which of the following Grand Slam tennis tournaments occurs LAST?',
    correct_answer: 'US Open',
    answer_options: {
      a: 'US Open',
      b: 'French Open',
      c: 'Wibmledon',
      d: 'French Open',
    },
    difficulty: 'medium',
  },
  {
    category_id: 1,
    question_text:
      'Who won the 2015 College Football Playoff (CFP) National Championship?',
    correct_answer: 'Ohio State Buckeyes',
    answer_options: {
      a: 'Alabama Crimson Tide',
      b: 'Clemson Tigers',
      c: 'Ohio State Buckeyes',
      d: 'Wisconsin Badgers',
    },
    difficulty: 'medium',
  },
  {
    category_id: 1,
    question_text: 'What country hosted the 2014 Winter Olympics?',
    correct_answer: 'Russia',
    answer_options: {
      a: 'Germany',
      b: 'Russia',
      c: 'Korea',
      d: 'Brazil',
    },
    difficulty: 'medium',
  },
  {
    category_id: 1,
    question_text: 'Which basketball team has played in the most NBA finals?',
    correct_answer: 'Los Angeles Lakers',
    answer_options: {
      a: 'Boston Celtics',
      b: 'Golden State Warriors',
      c: 'Philadelphia 76ers',
      d: 'Los Angeles Lakers',
    },
    difficulty: 'medium',
  },
  {
    category_id: 1,
    question_text:
      'Who is the top scorer for the England national football team?',
    correct_answer: 'Wayne Rooney',
    answer_options: {
      a: 'David Beckham',
      b: 'Wayne Rooney',
      c: 'Michael Owen',
      d: 'Steven Gerrard',
    },
    difficulty: 'medium',
  },
  {
    category_id: 1,
    question_text: 'Which player holds the NHL record of 2,857 points?',
    correct_answer: 'Wayne Gretzky',
    answer_options: {
      a: 'Gordie Howe',
      b: 'Mario Lemieux',
      c: 'Sidney Crosby',
      d: 'Wayne Gretzky',
    },
    difficulty: 'easy',
  },
  {
    category_id: 1,
    question_text:
      'How many soccer players should be on the field at the same time?',
    correct_answer: '22',
    answer_options: {
      a: '24',
      b: '22',
      c: '20',
      d: '18',
    },
    difficulty: 'easy',
  },
  {
    category_id: 1,
    question_text: 'Which country hosted the 2018 FIFA World Cup?',
    correct_answer: 'Russia',
    answer_options: {
      a: 'Russia',
      b: 'United States',
      c: 'Germany',
      d: 'Qatar',
    },
    difficulty: 'easy',
  },
  {
    category_id: 1,
    question_text:
      'Which of the following sports is not part of the triathlon?',
    correct_answer: 'Horseback-Riding',
    answer_options: {
      a: 'Swimming',
      b: 'Running',
      c: 'Cycling',
      d: 'Horseback-Riding',
    },
    difficulty: 'easy',
  },
  {
    category_id: 1,
    question_text:
      'In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?',
    correct_answer: '4',
    answer_options: {
      a: '3',
      b: '4',
      c: '5',
      d: '6',
    },
    difficulty: 'easy',
  },
  {
    category_id: 1,
    question_text:
      'With which doubles partner did John McEnroe have most success?',
    correct_answer: 'Peter Fleming',
    answer_options: {
      a: 'Michael Stich',
      b: 'Mary Carillo',
      c: 'Mark Woodforde',
      d: 'Peter Fleming',
    },
    difficulty: 'hard',
  },
  {
    category_id: 1,
    question_text: 'What is the full name of the footballer Cristiano Ronaldo?',
    correct_answer: 'Cristiano Ronaldo dos Santos Aveiro',
    answer_options: {
      a: 'Cristiano Ronaldo dos Santos Aveiro',
      b: 'Cristiano Ronaldo los Santos Diego',
      c: 'Cristiano Armando Diego Ronaldo',
      d: 'Cristiano Luis Armando Ronaldo',
    },
    difficulty: 'hard',
  },
  {
    category_id: 1,
    question_text: '"Which year was the third Super Bowl held?',
    correct_answer: '1969',
    answer_options: {
      a: '1966',
      b: '1967',
      c: '1968',
      d: '1969',
    },
    difficulty: 'hard',
  },
  {
    category_id: 1,
    question_text:
      'Which female player won the gold medal of table tennis singles in 2016 Olympics Games?',
    correct_answer: 'DING Ning (China)',
    answer_options: {
      a: 'Song KIM (North Korea)',
      b: 'Ai FUKUHARA (Japan)',
      c: 'DING Ning (China)"',
      d: 'LI Xiaoxia (China)',
    },
    difficulty: 'hard',
  },
  {
    category_id: 1,
    question_text:
      'In Canadian football, scoring a rouge is worth how many points?',
    correct_answer: '1',
    answer_options: {
      a: '1',
      b: '2',
      c: '3',
      d: '4',
    },
    difficulty: 'hard',
  },
  {
    category_id: 2,
    question_text:
      'In CoD: Black Ops III, what is the name of the rogue A.I. antagonist?',
    correct_answer: 'Corvus',
    answer_options: {
      a: 'Corvus',
      b: 'Cabal',
      c: 'Legion',
      d: 'Icarus',
    },
    difficulty: 'easy',
  },
  {
    category_id: 2,
    question_text:
      'In the Assassins Creed series,what was the name that Desmond Miles was given by Abstergo?',
    correct_answer: 'Subject 17',
    answer_options: {
      a: 'Subject 15',
      b: 'Subject 16',
      c: 'Subject 17',
      d: 'Subject 18',
    },
    difficulty: 'easy',
  },
  {
    category_id: 2,
    question_text: 'Which Nintendo 64 game did NOT have Luigi in it?',
    correct_answer: 'Super Mario 64',
    answer_options: {
      a: 'Paper Mario',
      b: 'Mario Party 2',
      c: 'Super Smash Bros.',
      d: 'Super Mario 64',
    },
    difficulty: 'easy',
  },
  {
    category_id: 2,
    question_text: 'What was the first game in the Battlefield series?',
    correct_answer: 'Battlefield 1942',
    answer_options: {
      a: 'Battlefield 1942',
      b: 'Battlefield 1',
      c: 'Battlefield 2',
      d: 'Battlefield Vietnam',
    },
    difficulty: 'easy',
  },
  {
    category_id: 2,
    question_text:
      'In Mortal Kombat, each character is capable of a finishing move called a _________.',
    correct_answer: 'Fatality',
    answer_options: {
      a: 'Execution',
      b: 'Fatality',
      c: 'Murder',
      d: 'Slaughter',
    },
    difficulty: 'easy',
  },
  {
    category_id: 2,
    question_text: 'In what video game does Mario first appear?',
    correct_answer: 'Jump Man',
    answer_options: {
      a: 'Donkey Kong, Jr',
      b: 'Super Mario Brothers',
      c: 'Jump Man',
      d: 'Donkey Kong',
    },
    difficulty: 'medium',
  },
  {
    category_id: 2,
    question_text:
      'In Grand Theft Auto: V, what wanted level does the player receive if they enter Zancudo Army Base north of Los Santos',
    correct_answer: '4',
    answer_options: {
      a: '2',
      b: '3',
      c: '4',
      d: '5',
    },
    difficulty: 'medium',
  },
  {
    category_id: 2,
    question_text: 'Where does The Legend of Zelda: Majoras Mask, take place?',
    correct_answer: 'Termina',
    answer_options: {
      a: 'Gysahl',
      b: 'Termina',
      c: 'Hyrule',
      d: 'Besaid',
    },
    difficulty: 'medium',
  },
  {
    category_id: 2,
    question_text:
      'Which musical artist was NOT featured as playable avatars in the game DJ Hero?',
    correct_answer: 'Dr. Dre',
    answer_options: {
      a: 'DJ Shadow',
      b: 'Dr. Dre',
      c: 'Daft Punk',
      d: 'Grandmaster Flash',
    },
    difficulty: 'medium',
  },
  {
    category_id: 2,
    question_text: 'What is a Tetris piece called?',
    correct_answer: 'Tetromino',
    answer_options: {
      a: 'Tetratile',
      b: 'Tetripiece',
      c: 'Tetris',
      d: 'Tetromino',
    },
    difficulty: 'medium',
  },
  {
    category_id: 2,
    question_text:
      'In oldschool runescape, to reach level skill 99, the player needs to reach __ xp.',
    correct_answer: '13,034,431 XP',
    answer_options: {
      a: '12,904,431',
      b: '11,857,431',
      c: '14,620,431',
      d: '13,034,431 XP',
    },
    difficulty: 'hard',
  },
  {
    category_id: 2,
    question_text:
      'In Counter Strike: Global Offensive, what is the code implanted onto the C4 as the Terrorists plant the bomb?',
    correct_answer: '7355608',
    answer_options: {
      a: '7355608',
      b: '7890728',
      c: '7256380',
      d: '7726354',
    },
    difficulty: 'hard',
  },
  {
    category_id: 2,
    question_text:
      '"What programming language was used to create the game Minecraft?',
    correct_answer: 'Java',
    answer_options: {
      a: 'HTML 5',
      b: 'C++',
      c: 'Python',
      d: 'Java',
    },
    difficulty: 'hard',
  },
  {
    category_id: 2,
    question_text: 'What year was the original SimCity released?',
    correct_answer: '1989',
    answer_options: {
      a: '1988',
      b: '1989',
      c: '1990',
      d: '1991',
    },
    difficulty: 'hard',
  },
  {
    category_id: 2,
    question_text:
      'In Sonic the Hedgehog 3 for the Sega Genesis, what is the color of the second Chaos Emerald you can get from Special Stages?',
    correct_answer: 'Orange',
    answer_options: {
      a: 'Blue',
      b: 'Green',
      c: 'Red',
      d: 'Orange',
    },
    difficulty: 'hard',
  },
  {
    category_id: 3,
    question_text:
      'Which of these countries remained neutral during World War II?',
    correct_answer: 'Switzerland',
    answer_options: {
      a: 'United Kingdom',
      b: 'Italy',
      c: 'Switzerlan',
      d: 'France',
    },
    difficulty: 'easy',
  },
  {
    category_id: 3,
    question_text: 'Who was the first president of the United States?',
    correct_answer: 'George Washington',
    answer_options: {
      a: 'George Washington',
      b: 'Thomas Jefferson',
      c: 'James Madison',
      d: 'Abraham Lincoln',
    },
    difficulty: 'easy',
  },
  {
    category_id: 3,
    question_text: 'What year was the first moon landing?',
    correct_answer: '1969',
    answer_options: {
      a: '1968',
      b: '1969',
      c: '1970',
      d: '1971',
    },
    difficulty: 'easy',
  },
  {
    category_id: 3,
    question_text: 'In what year did the Wall Street Crash take place?',
    correct_answer: '1929',
    answer_options: {
      a: '1927',
      b: '1928',
      c: '1929',
      d: '1930',
    },
    difficulty: 'easy',
  },
  {
    category_id: 3,
    question_text:
      'Who was the King of England during the American Revolution?',
    correct_answer: 'George III',
    answer_options: {
      a: 'Henry VIII',
      b: 'George II',
      c: 'George III',
      d: 'George VI',
    },
    difficulty: 'easy',
  },
  {
    category_id: 3,
    question_text:
      'The crown of the Empire State Building was originally built for what purpose?',
    correct_answer: 'Airship Dock',
    answer_options: {
      a: 'Lightning Rod',
      b: 'Flag Pole',
      c: 'Airship Dock',
      d: 'Antennae',
    },
    difficulty: 'medium',
  },
  {
    category_id: 3,
    question_text:
      'The Fallingwater House, located in Pennsylvania, was designed by which famous architect?',
    correct_answer: 'Frank Lloyd Wright',
    answer_options: {
      a: 'Le Corbusier',
      b: 'Frank Gehry',
      c: 'Antoni Gaudi',
      d: '"Frank Lloyd Wright',
    },
    difficulty: 'medium',
  },
  {
    category_id: 3,
    question_text:
      'What was the name of the chemical that was dropped on Vietnam during the Vietnam war?',
    correct_answer: 'Agent Orange',
    answer_options: {
      a: 'Mustard Gas',
      b: 'Agent Orange',
      c: 'Phosgene',
      d: 'Hydrogen Cyanide',
    },
    difficulty: 'medium',
  },
  {
    category_id: 3,
    question_text:
      'What was the capital of South Vietnam before the Vietnam War?',
    correct_answer: 'Saigon',
    answer_options: {
      a: 'Ho Chi Minh City',
      b: 'Hanoi',
      c: 'Hue',
      d: 'Saigon',
    },
    difficulty: 'medium',
  },
  {
    category_id: 3,
    question_text:
      'In 1845, a series of wars named after which indigenous people began in New Zealand?',
    correct_answer: 'Māori',
    answer_options: {
      a: 'Polynesians',
      b: 'Māori',
      c: 'Papuans',
      d: 'Aborigines',
    },
    difficulty: 'medium',
  },
  {
    category_id: 3,
    question_text: 'What was found in 1946 by two young shepards near a cave?',
    correct_answer: 'Dead Sea Scrolls',
    answer_options: {
      a: 'The Blackbeard Chest',
      b: 'The Shroud of Turin',
      c: 'The First Oaxaca Cave Sleeper',
      d: 'Dead Sea Scrolls',
    },
    difficulty: 'hard',
  },
  {
    category_id: 3,
    question_text: 'When was the city of Rome, Italy founded?',
    correct_answer: '753 BCE',
    answer_options: {
      a: '902 BCE',
      b: '524 BCE',
      c: '753 BCE',
      d: '697 BCE',
    },
    difficulty: 'hard',
  },
  {
    category_id: 3,
    question_text: 'What was the original name of New York City?',
    correct_answer: 'New Amsterdam',
    answer_options: {
      a: 'New Amsterdam',
      b: 'New London',
      c: 'New Paris',
      d: 'New England',
    },
    difficulty: 'hard',
  },
  {
    category_id: 3,
    question_text:
      'Which of the following Physicists aided Nazi Germany in their production of a nuclear weapon?',
    correct_answer: 'Werner Heisenberg',
    answer_options: {
      a: 'Albert Einstein',
      b: 'Max Planck',
      c: 'John von Neumann',
      d: 'Werner Heisenberg',
    },
    difficulty: 'hard',
  },
  {
    category_id: 3,
    question_text: 'In what year was Canada founded?',
    correct_answer: '1867',
    answer_options: {
      a: '1867',
      b: '1798',
      c: '1859',
      d: '1668',
    },
    difficulty: 'hard',
  },
];

module.exports = questionData;
