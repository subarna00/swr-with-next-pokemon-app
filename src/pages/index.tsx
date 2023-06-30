"use client";

import PokemonCard from "@/components/PokemonCard";
import { getPokemonPage } from "@/network/pokemon-api";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import useSWR from "swr";
export default function Home() {
  const router = useRouter();
  const page = parseInt(router.query.page?.toString() || "1");
  const { data, isLoading } = useSWR(["getPokemonPage", page], ([key, page]) =>
    getPokemonPage(page)
  );

  if (isLoading)
    return <Spinner animation="border" className="d-block m-auto" />;

  return (
    <div>
      <h1 className="text-center mb-4">Gotta cache &apos;em all</h1>
      <div className="d-flex justify-content-center w-100">
        <Row xs={1} sm={2} lg={3} xl={4}>
          {data?.results.map((pokemon) => (
            <Col key={pokemon.name} className="p-4">
              <PokemonCard name={pokemon.name} />
            </Col>
          ))}
        </Row>
      </div>
      <div className="d-flex-justify-content-center align-items-center gap-2 mt-4">
        {data?.previous && (
          <Button
            onClick={() =>
              router.push({ query: { ...router.query, page: page - 1 } })
            }
          >
            Previous page
          </Button>
        )}
        {data?.next && (
          <Button
            className="mx-2"
            onClick={() =>
              router.push({ query: { ...router.query, page: page + 1 } })
            }
          >
            Next page
          </Button>
        )}
      </div>
    </div>
  );
}
