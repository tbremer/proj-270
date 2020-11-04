import { stateData, Importance, State } from 'data/state';
import { Party } from 'data/party';
import StateList from 'components/State';

interface RunTimeProps {
  data: Array<State>;
}

interface StaticProps {
  props: RunTimeProps;
}

function TheCount({ states }: { states: Array<State> }) {
  const [total, dem, rep] = states.reduce(
    (acc, cur) => {
      if (cur.win === Party.Neutral) return acc;

      const [total, dem, rep] = acc;

      if (Array.isArray(cur.win)) {
        const [totalNested, demNested, repNested] = cur.win.reduce(
          (acc, [party, count]) => {
            const [innerTotal, innerDem, innerRep] = acc;
            return [
              innerTotal + count,
              party === Party.Dem ? innerDem + count : innerDem,
              party === Party.Rep ? innerRep + count : innerRep,
            ];
          },
          [0, 0, 0]
        );

        return [total + totalNested, dem + demNested, rep + repNested];
      } else {
        return [
          total + cur.electoralVotes,
          cur.win === Party.Dem ? dem + cur.electoralVotes : dem,
          cur.win === Party.Rep ? rep + cur.electoralVotes : rep,
        ];
      }
    },
    [0, 0, 0]
  );

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>The Race</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          boxSizing: 'border-box',
        }}
      >
        <div
          className="text-white bg-dem"
          style={{
            padding: '1rem',
            flex: (dem / total) * 10,
            borderRadius: '.25rem',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            textAlign: 'right',
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>Biden</p>
          <p style={{ margin: 0, marginTop: '.125rem', fontSize: '.85rem' }}>{dem} electoral votes</p>
        </div>
        <div
          className="text-white bg-rep"
          style={{
            padding: '1rem',
            flex: (rep / total) * 10,
            borderRadius: '.25rem',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>Trump</p>
          <p style={{ margin: 0, marginTop: '.125rem', fontSize: '.85rem' }}>{rep} electoral votes</p>
        </div>
      </div>
    </section>
  );
}

export default function Home({ data: states }: RunTimeProps) {
  const bigsix = states.filter((s) => s.type === Importance.BigSix);
  const rest = states.filter((s) => s.type === Importance.NotSignificant);
  const biden = states.filter((s) => s.type === Importance.BidenNeeds);
  const trump = states.filter((s) => s.type === Importance.TrumpNeeds);
  return (
    <>
      <h1 style={{ marginTop: 0, marginBottom: 0 }}>
        <span className="text-dem">Project </span>
        <span className="text-rep">270</span>
      </h1>
      <h4 style={{ fontWeight: 500, marginTop: 0 }}>2020 Presidential Election Tracker</h4>
      <hr style={{ marginBottom: '2rem' }} />

      <TheCount states={states} />

      <StateList title="Big six to watch" states={bigsix} />
      <StateList title="Biden needs to win" states={biden} />
      <StateList title="Trump needs to win" states={trump} />
      <StateList title="Remaining states" states={rest} />

      <hr />
      <footer>
        <h4 style={{ marginBottom: '.5rem' }}>Credits:</h4>
        <ul style={{ margin: 0, paddingLeft: '1rem' }}>
          <li>
            State JSON Data I was too lazy to type out:{' '}
            <a href="//gist.github.com/mshafrir/2646763#file-states_titlecase-json">
              gist.github/ mshafrir/states_hash.json
            </a>
          </li>
          <li>
            High level race data:{' '}
            <a href="//www.vox.com/21428915/electoral-college-trump-biden-2020">
              Vox: How Biden — or Trump — could win 270 electoral votes
            </a>
          </li>
          <li>
            Electoral Count:{' '}
            <a href="//www.kare11.com/article/news/nation-world/how-many-electoral-votes-does-each-state-have-for-2020-presidential-election/507-7b3d52f4-ea66-4bbd-bfcf-3eb29f17586c">
              KARE 11: How many electoral votes does each state get for presidential election?
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export function getStaticProps(): StaticProps {
  return {
    props: {
      data: stateData,
    },
  };
}
