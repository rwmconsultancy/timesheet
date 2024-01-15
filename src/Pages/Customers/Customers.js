import "./Customers.css";
import React, { useState, useEffect } from "react";
import { Typography } from 'antd';


import { Container, Row, Col, Table } from "react-bootstrap";

import DropdownBtn from "../../Components/TimesheetsDropdownBtn/TimesheetsDropdownBtn";
import Loading from "../../Components/Loading/Loading";

const { Text, Link } = Typography;

const mockupTableData = [
  {
    id: 1,
    number: "21008",
    customer: "Gemeente Gemert-Bakel",
    active: true
  },
  {
    id: 2,
    number: "21001",
    customer: "Boom Transport B.V.",
    active: true
  },
];

function Customers() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // API call simulatie
    setTimeout(() => {
      setIsLoading(false);
    }, 0); // Op 2000 zetten om 2 seconden wachttijd te simuleren
  }, []);

  const customersTableData = mockupTableData.map((customer) => (
    <tr key={customer.id}>
      <td>
        <Link href={`customer/${customer.id}`}>{customer.number}</Link>
      </td>
      <td>{customer.customer}</td>
      <td className="customerActive">{customer.active ? "✅" : "❌"}</td>
      <td>
        <DropdownBtn
          variant={"warning"}
          title={"Actions"}
          size={"sm"}
          timesheetKey={customer.id}
        />
      </td>
    </tr>
  ));

  if (isLoading) {
    return (
      <div className="customers">
        <div className="titleblock">
          <h3>Customers</h3>
        </div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="customers">
      <div className="titleblock">
        <h3>Customers</h3>
      </div>
      <Container className="content">
        <Row>
          <Col>
            <Text>Ruimte voor filter (search & filters). Of implementatie Antd table.</Text>
            <Table responsive="sm" hover striped>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Active?</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="customersTable">{customersTableData}</tbody>
            </Table>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Customers;
