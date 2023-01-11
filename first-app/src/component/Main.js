import Title from "./Title";
const results = [
  {
    title: "Why does HTML think 'chucknorris' is a color?",
    description:
      "nonvalid hexadecimal characters with 0s: chucknorris becomes c00c0000000 Pad out to the next total number of characters divisible by 3 (11 → 12): c00c 0000 0000 Split into three equal groups...",
    votes: 7966,
    accepted: true,
  },
  {
    title:
      " How do I get the directory where a Bash script is located from within the script itself?",
    description:
      "It will work as long as the last component of the path used to find the script is not a symlink (directory links are OK). …",
    votes: 7757,
    accepted: true,
  },
  {
    title:
      " What's the difference between @Component, @Repository & @Service annotations in Spring?",
    description:
      "Can @Component, @Repository and @Service annotations be used interchangeably in Spring or do they provide any particular functionality besides acting as a notation device? … In other words,",
    votes: 2473,
    accepted: true,
  },
];

export default function Main() {
  return (
    <div className="main">
      <Title
        title={results[0].title}
        description={results[0].description}
        votes={results[0].votes}
      />
      <Title
        title={results[1].title}
        description={results[1].description}
        votes={results[1].votes}
      />
      <Title
        title={results[2].title}
        description={results[2].description}
        votes={results[2].votes}
      />
    </div>
  );
}
