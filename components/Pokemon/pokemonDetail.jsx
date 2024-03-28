import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getPokemonDetail } from "./services";

const PokemonDetail = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  useEffect(() => {
    getPokemonDetail(id).then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div>Here</div>
    </div>
  );
};

export default PokemonDetail;
