import { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import Spinner from "./Spinner";


const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [pais, setPais] = useState("");
  const [mostrarSpinner, setMostrarSpinner] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoria.trim() === "" || pais.trim() === "") {
      alert("Elija una categoría y país");
    } else {
      consultarAPI();
    }
  };

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true)
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_120060cf3047975828a1d6a5b67b247f8d572&category=${categoria}&country=${pais}`
      );
      const dato = await respuesta.json();
      console.log(dato.results);
      setNoticias(dato.results);
      setMostrarSpinner(false)
    } catch (error) {
      alert('complete los dos campos')
    }
  };

  const mostrarComponente = (mostrarSpinner === true)?(<Spinner></Spinner>):(<ListaNoticias noticias={noticias}></ListaNoticias>)


  return (
    <Card className="my-4">
      <Card.Header className="p-4 bgForm">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={4} lg={2}>
                <Form.Label>Buscar por categoria:</Form.Label>
              </Col>
              <Col sm={12} md={8} lg={10}>
                <Form.Select
                  aria-label="categoria"
                  onChange={(e) => setCategoria(e.target.value)}
                  value={categoria}
                  required
                >
                  <option>Categorias</option>
                  <option value="business">Negocios</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="environment">Ambiente</option>
                  <option value="food">Alimentos</option>
                  <option value="health">Salud</option>
                  <option value="politics">Política</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deportes</option>
                  <option value="technology">Tecnología</option>
                  <option value="top">Top</option>
                  <option value="world">Mundo</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={12} md={4} lg={2}>
                <Form.Label>Buscar por pais:</Form.Label>
              </Col>
              <Col sm={12} md={8} lg={10}>
                <Form.Select
                  aria-label="pais"
                  onChange={(e) => setPais(e.target.value)}
                  value={pais}
                  required
                >
                  <option>Paises</option>
                  <option value="ar">Argentina </option>
                  <option value="at">Austria </option>
                  <option value="bd">Bangladesh </option>
                  <option value="be">Belgium </option>
                  <option value="br">Brazil </option>
                  <option value="bg">Bulgaria </option>
                  <option value="ca">Canada </option>
                  <option value="cl">Chile</option>
                  <option value="cn">China </option>
                  <option value="co">Colombia </option>
                  <option value="cu">Cuba </option>
                  <option value="cz">Czech republic</option>
                  <option value="eg">Egypt </option>
                  <option value="fi">Finland </option>
                  <option value="fr">France </option>
                  <option value="de">Germany </option>
                  <option value="gr">Greece </option>
                  <option value="hk">Hong kong</option>
                  <option value="hu">Hungary </option>
                  <option value="in">India </option>
                  <option value="id">Indonesia </option>
                  <option value="iq">Iraq </option>
                  <option value="ie">Ireland </option>
                  <option value="il">Israel </option>
                  <option value="it">Italy </option>
                  <option value="jp">Japan</option>
                  <option value="kz">Kazakhstan </option>
                  <option value="kw">Kuwait </option>
                  <option value="lv">Latvia </option>
                  <option value="lb">Lebanon </option>
                  <option value="lt">Lithuania </option>
                  <option value="my">Malaysia </option>
                  <option value="mx">Mexico </option>
                  <option value="ma">Morocco </option>
                  <option value="nl">Netherland </option>
                  <option value="nz">New zealand</option>
                  <option value="ng">Nigeria </option>
                  <option value="kp">North korea</option>
                  <option value="no">Norway</option>
                  <option value="pk">Pakistan</option>
                  <option value="pe">Peru</option>
                  <option value="ph">Philippines </option>
                  <option value="pl">Poland </option>
                  <option value="pt">Portugal </option>
                  <option value="ro">Romania </option>
                  <option value="ru">Russia </option>
                  <option value="sa">Saudi arabia</option>
                  <option value="rs">Serbia </option>
                  <option value="sg">Singapore </option>
                  <option value="sk">Slovakia </option>
                  <option value="si">Slovenia </option>
                  <option value="za">South africa</option>
                  <option value="kr">South korea</option>
                  <option value="es">Spain </option>
                  <option value="se">Sweden </option>
                  <option value="ch">Switzerland </option>
                  <option value="tw">Taiwan </option>
                  <option value="tz">Tanzania </option>
                  <option value="th">Thailand </option>
                  <option value="tr">Turkey </option>
                  <option value="ua">Ukraine</option>
                  <option value="ae">United arab emirates </option>
                  <option value="gb">United kingdom</option>
                  <option value="us">United states of america</option>
                  <option value="ve">Venezuela</option>
                  <option value="vi">Vietnam</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <Button variant="dark" type="submit">
            Enviar
          </Button>
        </Form>
      </Card.Header>
      <Card.Body className="bgFormb">
        {mostrarComponente}
      </Card.Body>
    </Card>
  );
};

export default Formulario;