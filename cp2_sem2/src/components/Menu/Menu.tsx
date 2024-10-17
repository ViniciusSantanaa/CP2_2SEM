"use client"

import Link from "next/link";
import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";


export const Menu = () => {
  return (
    <StyledMenu>
      <StyledWrapperMenu>
        <StyledMenuItem>
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <Link href="/">Inicio</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiSearch size="1.5rem" color="#38aede" />
          <Link href="/busca">Busca</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiHeart size="1.5rem" color="#38aede" />
          <a href="/favorites">Favoritos</a>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link href="/perfil">Perfil</Link>
        </StyledMenuItem>
      </StyledWrapperMenu>
    </StyledMenu>
  );
};
