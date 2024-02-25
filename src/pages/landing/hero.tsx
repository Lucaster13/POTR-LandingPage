export default function Hero() {
  return (
    <section>
      <Header />
      <p>
        POTR is a first-of-its-kind mutable trait NFT collection. Gather coins,
        Summon Protectors, and Battle for rare prizes.
        <br />
        <span>Help restore the Rand Kingdom back to its old glory!</span>
      </p>
    </section>
  );
}

const Header = () => (
  <h1 className=" group text-center ">
    <span className="transition-all group-hover:-rotate-45 relative origin-left text-red-400 inline-block text-8xl">
      Protectors
    </span>
    <span className="transition-all group-hover:-rotate-45 relative origin-left text-red-400 inline-block text-6xl">
      of the
    </span>
    <span className="transition-all group-hover:-rotate-45 relative origin-left text-red-400 inline-block text-7xl ">
      Rand
    </span>
  </h1>
);
