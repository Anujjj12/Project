import { Button, Card, Col, Row } from "antd";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_POKEMON_LIST } from "./redux/actions";
import { getPokemon, getPokemonDetail } from "./services";

const PokemonListingPage = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonReducer);
  useEffect(() => {
    console.log("dispatch");
    getPokemon(dispatch).catch((err) => console.err(err));
  }, []);

  const handleDesc = (index) => {
    Router.push(`./details/${index}`);
  };

  return (
    <Row>
      <Col span={24}>
        <Card title="Pokemon">
          <Row gutter={[16, 16]}>
            {pokemon.map((item, index) => {
              return (
                <>
                  <Col span="6">
                    <Card title={item.name}>
                      <Button
                        type="link"
                        size="small"
                        onClick={() => handleDesc(index)}
                      >
                        {" "}
                        {item.url}
                      </Button>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default PokemonListingPage;
