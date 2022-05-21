import Head from "next/head";
import styles from '../styles/Home.module.css'
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}