import { Party } from "data/party";

type PartyTuple = [Party, number] | [Party, number, string];

export interface State {
  name: string;
  abbreviation: string;
  type: Importance;
  electoralVotes: number;
  win: Party | Array<PartyTuple>;
  split?: boolean;
}

export enum Importance {
  ToWatch = 0,
  NotSignificant = 1,
}

export const stateData: Array<State> = [
  {
    name: "Alabama",
    abbreviation: "AL",
    type: Importance.NotSignificant,
    electoralVotes: 9,
    win: Party.Rep,
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Rep,
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    type: Importance.ToWatch,
    electoralVotes: 11,
    win: Party.Rep,
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    type: Importance.NotSignificant,
    electoralVotes: 6,
    win: Party.Rep,
  },
  {
    name: "California",
    abbreviation: "CA",
    type: Importance.NotSignificant,
    electoralVotes: 54,
    win: Party.Dem,
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    type: Importance.NotSignificant,
    electoralVotes: 10,
    win: Party.Dem,
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    type: Importance.NotSignificant,
    electoralVotes: 7,
    win: Party.Dem,
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Dem,
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Dem,
  },
  {
    name: "Florida",
    abbreviation: "FL",
    type: Importance.NotSignificant,
    electoralVotes: 30,
    win: Party.Rep,
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    type: Importance.ToWatch,
    electoralVotes: 16,
    win: Party.Rep,
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Dem,
  },

  {
    name: "Idaho",
    abbreviation: "ID",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Rep,
  },

  {
    name: "Illinois",
    abbreviation: "IL",
    type: Importance.NotSignificant,
    electoralVotes: 19,
    win: Party.Dem,
  },

  {
    name: "Indiana",
    abbreviation: "IN",
    type: Importance.NotSignificant,
    electoralVotes: 11,
    win: Party.Rep,
  },

  {
    name: "Iowa",
    abbreviation: "IA",
    type: Importance.NotSignificant,
    electoralVotes: 6,
    win: Party.Rep,
  },

  {
    name: "Kansas",
    abbreviation: "KS",
    type: Importance.NotSignificant,
    electoralVotes: 6,
    win: Party.Rep,
  },

  {
    name: "Kentucky",
    abbreviation: "KY",
    type: Importance.NotSignificant,
    electoralVotes: 8,
    win: Party.Rep,
  },

  {
    name: "Louisiana",
    abbreviation: "LA",
    type: Importance.NotSignificant,
    electoralVotes: 8,
    win: Party.Rep,
  },

  {
    name: "Maine",
    abbreviation: "ME",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Dem,
    split: false,
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    type: Importance.NotSignificant,
    electoralVotes: 10,
    win: Party.Dem,
  },

  {
    name: "Massachusetts",
    abbreviation: "MA",
    type: Importance.NotSignificant,
    electoralVotes: 11,
    win: Party.Dem,
  },

  {
    name: "Michigan",
    abbreviation: "MI",
    type: Importance.ToWatch,
    electoralVotes: 15,
    win: Party.Rep,
  },

  {
    name: "Minnesota",
    abbreviation: "MN",
    type: Importance.NotSignificant,
    electoralVotes: 10,
    win: Party.Dem,
  },

  {
    name: "Mississippi",
    abbreviation: "MS",
    type: Importance.NotSignificant,
    electoralVotes: 6,
    win: Party.Rep,
  },

  {
    name: "Missouri",
    abbreviation: "MO",
    type: Importance.NotSignificant,
    electoralVotes: 10,
    win: Party.Rep,
  },

  {
    name: "Montana",
    abbreviation: "MT",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Rep,
  },

  {
    name: "Nebraska",
    abbreviation: "NE",
    type: Importance.NotSignificant,
    electoralVotes: 5,
    win: Party.Rep,
    split: false,
  },

  {
    name: "Nevada",
    abbreviation: "NV",
    type: Importance.ToWatch,
    electoralVotes: 6,
    win: Party.Rep,
  },

  {
    name: "New Hampshire",
    abbreviation: "NH",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Dem,
  },

  {
    name: "New Jersey",
    abbreviation: "NJ",
    type: Importance.NotSignificant,
    electoralVotes: 14,
    win: Party.Dem,
  },

  {
    name: "New Mexico",
    abbreviation: "NM",
    type: Importance.NotSignificant,
    electoralVotes: 5,
    win: Party.Dem,
  },

  {
    name: "New York",
    abbreviation: "NY",
    type: Importance.NotSignificant,
    electoralVotes: 28,
    win: Party.Dem,
  },

  {
    name: "North Carolina",
    abbreviation: "NC",
    type: Importance.ToWatch,
    electoralVotes: 16,
    win: Party.Rep,
  },

  {
    name: "North Dakota",
    abbreviation: "ND",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Rep,
  },

  {
    name: "Ohio",
    abbreviation: "OH",
    type: Importance.NotSignificant,
    electoralVotes: 17,
    win: Party.Rep,
  },

  {
    name: "Oklahoma",
    abbreviation: "OK",
    type: Importance.NotSignificant,
    electoralVotes: 7,
    win: Party.Rep,
  },

  {
    name: "Oregon",
    abbreviation: "OR",
    type: Importance.NotSignificant,
    electoralVotes: 8,
    win: Party.Dem,
  },

  {
    name: "Pennsylvania",
    abbreviation: "PA",
    type: Importance.ToWatch,
    electoralVotes: 19,
    win: Party.Rep,
  },

  {
    name: "Rhode Island",
    abbreviation: "RI",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Dem,
  },

  {
    name: "South Carolina",
    abbreviation: "SC",
    type: Importance.NotSignificant,
    electoralVotes: 9,
    win: Party.Rep,
  },

  {
    name: "South Dakota",
    abbreviation: "SD",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Rep,
  },

  {
    name: "Tennessee",
    abbreviation: "TN",
    type: Importance.NotSignificant,
    electoralVotes: 11,
    win: Party.Rep,
  },

  {
    name: "Texas",
    abbreviation: "TX",
    type: Importance.NotSignificant,
    electoralVotes: 40,
    win: Party.Rep,
  },

  {
    name: "Utah",
    abbreviation: "UT",
    type: Importance.NotSignificant,
    electoralVotes: 6,
    win: Party.Rep,
  },

  {
    name: "Vermont",
    abbreviation: "VT",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Dem,
  },

  {
    name: "Virginia",
    abbreviation: "VA",
    type: Importance.NotSignificant,
    electoralVotes: 13,
    win: Party.Dem,
  },

  {
    name: "Washington",
    abbreviation: "WA",
    type: Importance.NotSignificant,
    electoralVotes: 12,
    win: Party.Dem,
  },

  {
    name: "West Virginia",
    abbreviation: "WV",
    type: Importance.NotSignificant,
    electoralVotes: 4,
    win: Party.Rep,
  },

  {
    name: "Wisconsin",
    abbreviation: "WI",
    type: Importance.ToWatch,
    electoralVotes: 10,
    win: Party.Rep,
  },

  {
    name: "Wyoming",
    abbreviation: "WY",
    type: Importance.NotSignificant,
    electoralVotes: 3,
    win: Party.Rep,
  },
];
