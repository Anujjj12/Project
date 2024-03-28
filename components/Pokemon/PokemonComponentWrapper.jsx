import { useRouter } from "next/router";
import React, { Fragment } from "react";
import PokemonDetail from "./pokemonDetail";
import PokemonExplorePage from "./PokemonExplorePage";
import PokemonListingPage from "./PokemonListingPage";

const idMap = {
  details: PokemonDetail,
  listing: PokemonListingPage,
  explore: PokemonExplorePage,
};

const PokemonComponentWrapper = () => {
  const router = useRouter();
  const { query } = router;
  const { type } = query;

  const Component = idMap[type] || Fragment;

  return <Component />;
};

export default PokemonComponentWrapper;
