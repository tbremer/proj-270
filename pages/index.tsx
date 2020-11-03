enum Importance {
  BigSix,
  NotSignificant,
  TrumpNeeds,
  BidenNeeds,
}

interface State {
  name: string,
  abbreviation: string,
  type: Importance
}

interface Data {
  data: Array<State>
}

interface Props {
  props: Data
}

function TitledList({ title, states}: { title: String, states: Array<State>}) {
  return (
    <>
    <h2>{title}</h2>
    <ol>
    {states.map(s => <li key={s.abbreviation}>{s.name}</li>)}
    </ol>
    </>
  )
}

export default function Home({ data: states }) {
  const bigsix: Array<State> = states.filter(s => s.type === Importance.BigSix);
  const rest = states.filter(s => s.type === Importance.NotSignificant);
  const biden = states.filter(s => s.type === Importance.BidenNeeds);
  const trump = states.filter(s => s.type === Importance.TrumpNeeds);
  return (
    <>
      <TitledList title="Big six to watch" states={bigsix} />
      <TitledList title="Biden needs to win" states={biden} />
      <TitledList title="Trump needs to win" states={trump} />
      <TitledList title="Remaining states" states={rest} />
      </>
  );
}

export function getStaticProps(): Props {
  return {
    props: {
      data: [
        {
          name: "Alabama",
          abbreviation: "AL",
          type: Importance.NotSignificant
        },
        {
          name: "Alaska",
          abbreviation: "AK",
          type: Importance.NotSignificant
        },
        {
          name: "Arizona",
          abbreviation: "AZ",
          type: Importance.BigSix
        },
        {
          name: "Arkansas",
          abbreviation: "AR",
          type: Importance.NotSignificant
        },
        {
          name: "California",
          abbreviation: "CA",
          type: Importance.NotSignificant
        },
        {
          name: "Colorado",
          abbreviation: "CO",
          type: Importance.NotSignificant
        },
        {
          name: "Connecticut",
          abbreviation: "CT",
          type: Importance.NotSignificant
        },
        {
          name: "Delaware",
          abbreviation: "DE",
          type: Importance.NotSignificant
        },
        {
          name: "Florida",
          abbreviation: "FL",
          type: Importance.BigSix
        },
        {
          name: "Georgia",
          abbreviation: "GA",
          type: Importance.TrumpNeeds
        },
        {
          name: "Guam",
          abbreviation: "GU",
          type: Importance.NotSignificant
        },
        {
          name: "Hawaii",
          abbreviation: "HI",
          type: Importance.NotSignificant
        },
        {
          name: "Idaho",
          abbreviation: "ID",
          type: Importance.NotSignificant
        },
        {
          name: "Illinois",
          abbreviation: "IL",
          type: Importance.NotSignificant
        },
        {
          name: "Indiana",
          abbreviation: "IN",
          type: Importance.NotSignificant
        },
        {
          name: "Iowa",
          abbreviation: "IA",
          type: Importance.TrumpNeeds
        },
        {
          name: "Kansas",
          abbreviation: "KS",
          type: Importance.NotSignificant
        },
        {
          name: "Kentucky",
          abbreviation: "KY",
          type: Importance.NotSignificant
        },
        {
          name: "Louisiana",
          abbreviation: "LA",
          type: Importance.NotSignificant
        },
        {
          name: "Maine",
          abbreviation: "ME",
          type: Importance.BidenNeeds
        },
        {
          name: "Marshall Islands",
          abbreviation: "MH",
          type: Importance.NotSignificant
        },
        {
          name: "Maryland",
          abbreviation: "MD",
          type: Importance.NotSignificant
        },
        {
          name: "Massachusetts",
          abbreviation: "MA",
          type: Importance.NotSignificant
        },
        {
          name: "Michigan",
          abbreviation: "MI",
          type: Importance.BigSix
        },
        {
          name: "Minnesota",
          abbreviation: "MN",
          type: Importance.BidenNeeds
        },
        {
          name: "Mississippi",
          abbreviation: "MS",
          type: Importance.NotSignificant
        },
        {
          name: "Missouri",
          abbreviation: "MO",
          type: Importance.NotSignificant
        },
        {
          name: "Montana",
          abbreviation: "MT",
          type: Importance.NotSignificant
        },
        {
          name: "Nebraska",
          abbreviation: "NE",
          type: Importance.NotSignificant
        },
        {
          name: "Nevada",
          abbreviation: "NV",
          type: Importance.BidenNeeds
        },
        {
          name: "New Hampshire",
          abbreviation: "NH",
          type: Importance.BidenNeeds
        },
        {
          name: "New Jersey",
          abbreviation: "NJ",
          type: Importance.NotSignificant
        },
        {
          name: "New Mexico",
          abbreviation: "NM",
          type: Importance.NotSignificant
        },
        {
          name: "New York",
          abbreviation: "NY",
          type: Importance.NotSignificant
        },
        {
          name: "North Carolina",
          abbreviation: "NC",
          type: Importance.BigSix
        },
        {
          name: "North Dakota",
          abbreviation: "ND",
          type: Importance.NotSignificant
        },
        {
          name: "Ohio",
          abbreviation: "OH",
          type: Importance.TrumpNeeds
        },
        {
          name: "Oklahoma",
          abbreviation: "OK",
          type: Importance.NotSignificant
        },
        {
          name: "Oregon",
          abbreviation: "OR",
          type: Importance.NotSignificant
        },
        
        {
          name: "Pennsylvania",
          abbreviation: "PA",
          type: Importance.BigSix
        },
        {
          name: "Rhode Island",
          abbreviation: "RI",
          type: Importance.NotSignificant
        },
        {
          name: "South Carolina",
          abbreviation: "SC",
          type: Importance.NotSignificant
        },
        {
          name: "South Dakota",
          abbreviation: "SD",
          type: Importance.NotSignificant
        },
        {
          name: "Tennessee",
          abbreviation: "TN",
          type: Importance.NotSignificant
        },
        {
          name: "Texas",
          abbreviation: "TX",
          type: Importance.TrumpNeeds
        },
        {
          name: "Utah",
          abbreviation: "UT",
          type: Importance.NotSignificant
        },
        {
          name: "Vermont",
          abbreviation: "VT",
          type: Importance.NotSignificant
        },
        {
          name: "Virginia",
          abbreviation: "VA",
          type: Importance.NotSignificant
        },
        {
          name: "Washington",
          abbreviation: "WA",
          type: Importance.NotSignificant
        },
        {
          name: "West Virginia",
          abbreviation: "WV",
          type: Importance.NotSignificant
        },
        {
          name: "Wisconsin",
          abbreviation: "WI",
          type: Importance.BigSix
        },
        {
          name: "Wyoming",
          abbreviation: "WY",
          type: Importance.NotSignificant
        },
      ],
    },
  };
}
