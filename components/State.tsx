export default function TitledList({ title, states }: { title: String; states: Array<State> }) {
  return (
    <>
      <h2 style={{ margin: 0 }}>{title}</h2>
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
            style={{
              border: '1px solid #ccc',
              borderRadius: '.25rem',
              backgroundColor: '#F7FAFC',
              marginRight: '.75rem',
              marginBottom: '.75rem',
              padding: '1rem',
              width: '17rem',
            }}
          >
            <p style={{ fontWeight: 'bold', margin: 0, marginBottom: '.25rem' }}>
              {s.name} <span style={{ fontSize: '.85rem', textTransform: 'uppercase' }}>({s.abbreviation})</span>
            </p>
            <p style={{ margin: 0, marginBottom: '.25rem' }}>Eligible Electoral Votes: {s.electoralVotes}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
