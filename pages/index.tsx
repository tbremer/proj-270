import { stateData, Importance, type State } from "data/state";
import { Party } from "data/party";
import StateList from "components/state";
import { useState } from "react";

interface RunTimeProps {
  data: Array<State>;
}

interface StaticProps {
  props: RunTimeProps;
}

function TheCount({ states }: { states: Array<State> }) {
  const totalElectoralVotes = stateData.reduce(
    (c, s) => s.electoralVotes + c,
    0,
  );
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
          [0, 0, 0],
        );

        return [total + totalNested, dem + demNested, rep + repNested];
      }
      return [
        total + cur.electoralVotes,
        cur.win === Party.Dem ? dem + cur.electoralVotes : dem,
        cur.win === Party.Rep ? rep + cur.electoralVotes : rep,
      ];
    },
    [0, 0, 0],
  );

  return (
    <section
      style={{ marginBottom: "2rem", fontVariantNumeric: "tabular-nums" }}
    >
      <h2>
        The Race
        <span
          style={{
            display: "block",
            fontSize: "1rem",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {total} / {totalElectoralVotes} votes distributed
        </span>
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          boxSizing: "border-box",
        }}
      >
        <div
          className="text-white bg-dem"
          style={{
            padding: "1rem",
            flexGrow: Number.isNaN((dem / total) * 10) ? 1 : (dem / total) * 10,
            flexShrink: 0,
            borderRadius: ".25rem",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            textAlign: "right",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>Democrat</p>
          <p style={{ margin: 0, marginTop: ".125rem", fontSize: ".85rem" }}>
            {dem} electoral votes
          </p>
        </div>
        <div
          className="text-white bg-rep"
          style={{
            padding: "1rem",
            flexGrow: Number.isNaN((rep / total) * 10) ? 1 : (rep / total) * 10,
            flexShrink: 0,
            borderRadius: ".25rem",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>Republican</p>
          <p style={{ margin: 0, marginTop: ".125rem", fontSize: ".85rem" }}>
            {rep} electoral votes
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home({ data: states }: RunTimeProps) {
  const [stateData, setStateData] = useState(states);
  function updateState(abbreviation, newData) {
    const newStates = stateData.map((state) => {
      if (state.abbreviation === abbreviation) {
        return Object.assign({}, state, newData);
      }
      return state;
    });

    setStateData(newStates);
  }
  const toWatch = stateData.filter((s) => s.type === Importance.ToWatch);
  const rest = stateData.filter((s) => s.type === Importance.NotSignificant);

  return (
    <>
      <h1 style={{ marginTop: 0, marginBottom: 0 }}>
        <span className="text-dem">Project </span>
        <span className="text-rep">270</span>
      </h1>
      <h4 style={{ fontWeight: 500, marginTop: 0 }}>
        2024 Presidential Election Tracker
      </h4>
      <hr style={{ marginBottom: "2rem" }} />

      <TheCount states={stateData} />

      <StateList
        title="Important states to watch"
        states={toWatch}
        updaterFunction={updateState}
      />
      <StateList
        title="Remaining states"
        states={rest}
        updaterFunction={updateState}
      />

      <hr />
      <footer>
        <h4 style={{ marginBottom: ".5rem" }}>Previous Elections:</h4>
        <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
          <li>
            <a href="/2020">2020 Presidential</a>
          </li>
        </ul>
        <h4 style={{ marginBottom: ".5rem" }}>Credits:</h4>
        <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
          <li>
            State JSON Data I was too lazy to type out:{" "}
            <a href="//gist.github.com/mshafrir/2646763#file-states_titlecase-json">
              gist.github/ mshafrir/states_hash.json
            </a>
          </li>
          <li>
            Electoral Count:{" "}
            <a href="//www.archives.gov/electoral-college/allocation#:~:text=Every%20State%20is%20allocated%20a,number%20of%20its%20Congressional%20districts.">
              National Archives: Distribution of Electoral Votes
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
