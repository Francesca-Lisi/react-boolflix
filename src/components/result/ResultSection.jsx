

const ResultSection = ({ title, data }) => {
  return (
    <section>
      <h2>{title}</h2>
      {data.map(item => {
        <div key={item.id}>
          <h3>{item.title || item.name}</h3>
          <p>{item.overview}</p>
        </div>
      })}
    </section>
  )
}

export default ResultSection