import { State } from 'data/state';
import { Party } from 'data/party';

export default function TitledList({
  title,
  states,
  updaterFunction,
  party = Party.Neutral,
}: {
  title: String;
  states: Array<State>;
  updaterFunction: (stateAbbreviation: string, newData: Partial<State>) => void;
  party?: Party;
}) {
  return (
    <>
      <h2 className={party === Party.Dem ? 'text-dem' : party === Party.Rep ? 'text-rep' : ''} style={{ margin: 0 }}>
        {title}
      </h2>
      <ol
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          listStyleType: 'none',
          padding: 0,
        }}
      >
        {states.map((s, idx) => (
          <li
            key={s.abbreviation}
            className={`state ${
              s.win === Party.Neutral || Array.isArray(s.win) ? '' : s.win === Party.Dem ? 'state-dem' : 'state-rep'
            }`}
            onClick={() =>
              updaterFunction(s.abbreviation, {
                win:
                  s.win === Party.Dem
                    ? Party.Neutral
                    : s.win === Party.Neutral
                    ? Party.Rep
                    : s.win === Party.Rep
                    ? Party.Dem
                    : Party.Neutral,
              })
            }
          >
            <p style={{ fontWeight: 'bold', margin: 0, marginBottom: '.25rem' }}>
              {s.name} <span style={{ fontSize: '.85rem', textTransform: 'uppercase' }}>({s.abbreviation})</span>
            </p>
            <p style={{ margin: 0, marginBottom: '.25rem' }}>Eligible Electoral Votes: {s.electoralVotes}</p>
            {Array.isArray(s.win) && (
              <ul style={{ paddingLeft: '1rem' }}>
                {s.win.map((s, idx) => (
                  <li key={`${s[0]}-${s[1]}`}>
                    {s[0] === Party.Dem ? 'Democrats' : 'Republicans'}: {s[1]} ({s[2]})
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
