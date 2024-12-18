import { Party } from "data/party";
import type { State } from "data/state";

function stateClassName(state: State) {
  if (state.split === true && Array.isArray(state.win)) return "state-split";
  if (state.win === Party.Neutral) return "";

  return state.win === Party.Dem ? "state-dem" : "state-rep";
}

export default function StateList({
  title,
  states,
  updaterFunction,
  party = Party.Neutral,
}: {
  title: string;
  states: Array<State>;
  updaterFunction: (stateAbbreviation: string, newData: Partial<State>) => void;
  party?: Party;
}) {
  return (
    <>
      <h2
        className={
          party === Party.Dem
            ? "text-dem"
            : party === Party.Rep
              ? "text-rep"
              : ""
        }
        style={{ margin: 0 }}
      >
        {title}
      </h2>
      <ol
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: ".75rem",
          listStyleType: "none",
          padding: 0,
        }}
      >
        {states.map((s, idx) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: like 4 people use this site and i don't care enough to fix it right now
          <li
            key={s.abbreviation}
            className={`state ${stateClassName(s)}`}
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
            <p
              style={{ fontWeight: "bold", margin: 0, marginBottom: ".125rem" }}
            >
              {s.name}{" "}
              <span style={{ fontSize: ".85rem", textTransform: "uppercase" }}>
                ({s.abbreviation})
              </span>
            </p>
            <p
              style={{ margin: 0, marginBottom: ".25rem", fontSize: ".85rem" }}
            >
              Eligible Electoral Votes: {s.electoralVotes}
            </p>
            {Array.isArray(s.win) && (
              <ul style={{ paddingLeft: "1rem", fontSize: ".85rem" }}>
                {s.win.map((s) => (
                  <li key={`${s[0]}-${s[1]}`}>
                    {s[0] === Party.Dem ? "Democrats" : "Republicans"}: {s[1]}{" "}
                    {s[2]?.length ? `(${s[2]})` : ""}
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
