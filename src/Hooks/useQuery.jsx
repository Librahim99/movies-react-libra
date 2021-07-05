import { useLocation } from "react-router-dom";

export function useQuery() {
    return new URLSearchParams(useLocation().search); //creamos un hook personalizado para obtener el parametro {busqueda} del serch de la url
  }