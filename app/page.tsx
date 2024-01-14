import styles from './page.module.css'
import * as React from "react";

import { HomeContainer } from '@/features/home/containers/HomeContainer';

export default function Home() {
  return(
  <main className="main">
    <HomeContainer />
  </main>);
}
