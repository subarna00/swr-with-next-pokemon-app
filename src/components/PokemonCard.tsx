import usePokemon from "@/hooks/usePokemon";
import Link from "next/link";
import styles from "@/styles/pokemonCard.module.css";
import { Spinner } from "react-bootstrap";
import Image from "next/image";
interface Props {
  name: string;
}

const PokemonCard = ({ name }: Props) => {
  const { pokemon, pokemonLoading } = usePokemon(name);
  return (
    <Link href={"/" + name}>
      <div className="">
        {pokemonLoading && <Spinner size="sm" animation="grow" />}
        {pokemon && (
          <div className={styles.card}>
            <h1 className="text-center text-capitalize">{pokemon.name}</h1>
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default PokemonCard;
