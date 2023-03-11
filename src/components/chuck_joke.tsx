import Joke from "../joke";

interface ChuckJokeProps {
    joke:Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({joke}) => {return <p>{joke.joke}</p>;

}

export default ChuckJoke;
