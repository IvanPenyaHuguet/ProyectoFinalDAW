import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/pages/Index.module.css";
import Container from "../components/container/Container";
import IndexButton from "../components/button/IndexButton";
import PeriodicTable from '../components/periodictable/PeriodicTable';


export default function Index() {  return (
    <Container className={styles.main}>
        <IndexButton url="/reagent/all" title="Todos los reactivos" description="Muestra todos los reactivos"/>
        <IndexButton url="/reagent/organic" title="Reactivos Orgánicos" description="Muestra los reactivos orgánicos"/>
        <IndexButton url="/reagent/inorganic" title="Reactivos Inorgánicos" description="Muestra los reactivos inorgánicos"/>
        <Container>
          <PeriodicTable />
        </Container>
    </Container>      
    
  );
}
