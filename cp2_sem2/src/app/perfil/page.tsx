"use client"
import { Header } from "@/components/Header/Header";
import { Layout } from "@/components/Layout/Layout";
import UserContext from "@/context/UserContext";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";

export default function Profile() {
  
    const { userName, setUserName } = useContext(UserContext);
  
    useEffect(() => {
      const userToken = JSON.parse(sessionStorage.getItem("userToken"));
  
      if (userToken) {
        const userData = jwtDecode(userToken.token);
        setUserName(userData.name);
      } else {
    
      }
    }, []);
  
    return (
      <Layout>
        <Header title="Perfil" userName={userName} />
      </Layout>
    );
  }