export interface State {
  name: string;
  abbreviation: string;
  type: Importance;
  electoralVotes: number;
}

export enum Importance {
  BigSix,
  NotSignificant,
  TrumpNeeds,
  BidenNeeds,
}

export const stateData: Array<State> = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    type: Importance.NotSignificant,
    electoralVotes: 9,
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    type: Importance.BigSix,
    electoralVotes: 11,
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    type: Importance.NotSignificant,
    electoralVotes: 6,
  },
  {
    name: 'California',
    abbreviation: 'CA',
    type: Importance.NotSignificant,
    electoralVotes: 55,
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    type: Importance.NotSignificant,
    electoralVotes: 9,
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    type: Importance.NotSignificant,
    electoralVotes: 7,
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    type: Importance.BigSix,
    electoralVotes: 29,
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    type: Importance.TrumpNeeds,
    electoralVotes: 16,
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    type: Importance.NotSignificant,
    electoralVotes: 4,
  },

  {
    name: 'Idaho',
    abbreviation: 'ID',
    type: Importance.NotSignificant,
    electoralVotes: 4,
  },

  {
    name: 'Illinois',
    abbreviation: 'IL',
    type: Importance.NotSignificant,
    electoralVotes: 20,
  },

  {
    name: 'Indiana',
    abbreviation: 'IN',
    type: Importance.NotSignificant,
    electoralVotes: 11,
  },

  {
    name: 'Iowa',
    abbreviation: 'IA',
    type: Importance.TrumpNeeds,
    electoralVotes: 6,
  },

  {
    name: 'Kansas',
    abbreviation: 'KS',
    type: Importance.NotSignificant,
    electoralVotes: 6,
  },

  {
    name: 'Kentucky',
    abbreviation: 'KY',
    type: Importance.NotSignificant,
    electoralVotes: 8,
  },

  {
    name: 'Louisiana',
    abbreviation: 'LA',
    type: Importance.NotSignificant,
    electoralVotes: 8,
  },

  {
    name: 'Maine',
    abbreviation: 'ME',
    type: Importance.BidenNeeds,
    electoralVotes: 4,
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    type: Importance.NotSignificant,
    electoralVotes: 10,
  },

  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    type: Importance.NotSignificant,
    electoralVotes: 11,
  },

  {
    name: 'Michigan',
    abbreviation: 'MI',
    type: Importance.BigSix,
    electoralVotes: 16,
  },

  {
    name: 'Minnesota',
    abbreviation: 'MN',
    type: Importance.BidenNeeds,
    electoralVotes: 10,
  },

  {
    name: 'Mississippi',
    abbreviation: 'MS',
    type: Importance.NotSignificant,
    electoralVotes: 6,
  },

  {
    name: 'Missouri',
    abbreviation: 'MO',
    type: Importance.NotSignificant,
    electoralVotes: 10,
  },

  {
    name: 'Montana',
    abbreviation: 'MT',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },

  {
    name: 'Nebraska',
    abbreviation: 'NE',
    type: Importance.NotSignificant,
    electoralVotes: 5,
  },

  {
    name: 'Nevada',
    abbreviation: 'NV',
    type: Importance.BidenNeeds,
    electoralVotes: 6,
  },

  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    type: Importance.BidenNeeds,
    electoralVotes: 4,
  },

  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    type: Importance.NotSignificant,
    electoralVotes: 14,
  },

  {
    name: 'New Mexico',
    abbreviation: 'NM',
    type: Importance.NotSignificant,
    electoralVotes: 5,
  },

  {
    name: 'New York',
    abbreviation: 'NY',
    type: Importance.NotSignificant,
    electoralVotes: 29,
  },

  {
    name: 'North Carolina',
    abbreviation: 'NC',
    type: Importance.BigSix,
    electoralVotes: 15,
  },

  {
    name: 'North Dakota',
    abbreviation: 'ND',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },

  {
    name: 'Ohio',
    abbreviation: 'OH',
    type: Importance.TrumpNeeds,
    electoralVotes: 18,
  },

  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    type: Importance.NotSignificant,
    electoralVotes: 7,
  },

  {
    name: 'Oregon',
    abbreviation: 'OR',
    type: Importance.NotSignificant,
    electoralVotes: 7,
  },

  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    type: Importance.BigSix,
    electoralVotes: 20,
  },

  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    type: Importance.NotSignificant,
    electoralVotes: 4,
  },

  {
    name: 'South Carolina',
    abbreviation: 'SC',
    type: Importance.NotSignificant,
    electoralVotes: 9,
  },

  {
    name: 'South Dakota',
    abbreviation: 'SD',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },

  {
    name: 'Tennessee',
    abbreviation: 'TN',
    type: Importance.NotSignificant,
    electoralVotes: 11,
  },

  {
    name: 'Texas',
    abbreviation: 'TX',
    type: Importance.TrumpNeeds,
    electoralVotes: 38,
  },

  {
    name: 'Utah',
    abbreviation: 'UT',
    type: Importance.NotSignificant,
    electoralVotes: 6,
  },

  {
    name: 'Vermont',
    abbreviation: 'VT',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },

  {
    name: 'Virginia',
    abbreviation: 'VA',
    type: Importance.NotSignificant,
    electoralVotes: 13,
  },

  {
    name: 'Washington',
    abbreviation: 'WA',
    type: Importance.NotSignificant,
    electoralVotes: 12,
  },

  {
    name: 'West Virginia',
    abbreviation: 'WV',
    type: Importance.NotSignificant,
    electoralVotes: 5,
  },

  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    type: Importance.BigSix,
    electoralVotes: 10,
  },

  {
    name: 'Wyoming',
    abbreviation: 'WY',
    type: Importance.NotSignificant,
    electoralVotes: 3,
  },
];
