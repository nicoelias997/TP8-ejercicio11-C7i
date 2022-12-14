import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { category, paises } from "../helpers";
import ListaNoticias from "../components/ListaNoticias";

const Formulario = () => {
  const [select, setSelect] = useState("");
  const [noticias, setNoticias] = useState([]);

  const [selectPais, setSelectPais] = useState("");

  const [buscarPor, setBuscarPor] = useState("");
  const [buscandoCategoria, setBuscandoCategoria] = useState(null);

  useEffect(() => {
    if (buscarPor === "") {
      setBuscandoCategoria(null);
      setNoticias([])
      setSelectPais("")
      setSelect("")
    }

    if (buscarPor === "Categoria") {
      setBuscandoCategoria(true);
      setSelectPais("")

      const obtenerNoticiasCat = async () => {
        if (select !== "") {
          try {
            let res = await fetch(
              `https://newsdata.io/api/1/news?apikey=pub_122559621e8d1ff3ce700f15664a5cfa8cc7b&category=${select}`
            );
            let data = await res.json();
            let arrayObj = data.results;
            setNoticias(arrayObj);
          } catch (e) {
            console.log(e);
          }
        }
      };
      obtenerNoticiasCat();
      setNoticias([])

    }
    if (buscarPor === "Pais") {
      setBuscandoCategoria(false);
      setSelect("")

      const obtenerNoticiasPais = async () => {
        if (selectPais !== "") {
          try {
            let res = await fetch(
              `https://newsdata.io/api/1/news?apikey=pub_122559621e8d1ff3ce700f15664a5cfa8cc7b&country=${selectPais}`
            );
            let data = await res.json();
            let arrayObj = data.results;
            setNoticias(arrayObj);
          } catch (e) {
            console.log(e);
          }
        }
      };
      obtenerNoticiasPais();
      setNoticias([])
    }
  }, [select, buscarPor, selectPais, buscandoCategoria]);

  return (
    <Col>
      <Form className="m-3 text-center align-items-center">
        <Form.Group>
          <Row>
            <Col sm={6}>
              <Form.Label>Buscar por:</Form.Label>
            </Col>
            <Col m={6}>
              <Form.Select onChange={(e) => setBuscarPor(e.target.value)}>
                <option value="" defaultValue>
                  Elige una opcion
                </option>
                <option value={"Categoria"}>Categoria</option>
                <option value={"Pais"}>Pais</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-2">
          <Row>
            <Col sm={6}>
              <Form.Label>Buscar por categoria:</Form.Label>
            </Col>
            <Col m={6}>
              <Form.Select
                disabled={
                  buscandoCategoria === false || buscandoCategoria === null
                }
                onChange={(e) => setSelect(e.target.value)}
                value={select}
              >
                {category.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-2">
          <Row>
            <Col sm={6}>
              <Form.Label>Buscar por Pais:</Form.Label>
            </Col>
            <Col m={6}>
              <Form.Select
                onChange={(e) => setSelectPais(e.target.value)}
                disabled={
                  buscandoCategoria === true || buscandoCategoria === null
                }
                value={selectPais}

              >
                {paises.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <Row>
        {noticias.map((item) => (
          <ListaNoticias
            titulo={item.title}
            key={`${item.link}${item.creator}`}
            autor={item.creator}
            url={item.link}
            noticia={item.content}
            arrayNoticias={noticias}
            imagen={item.image_url}
          ></ListaNoticias>
        ))}
      </Row>
    </Col>
  );
};

export default Formulario;
