// é um gerenciador de rotas da aplicação do expo-router
import { Stack } from "expo-router";
import { colors } from "@/styles/theme";

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'

import { Loading } from "@/components/loading";

export default function Layout(){
  //mandando usar a font instalada e atribuindo a uma variável para verificar se realmente foi instalada 
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  //Caso não tenha carregado a font ele vai fazer um Loading para dar tempo de carregar
  if(!fontsLoaded){
    return <Loading />
  }

  return <Stack 
  screenOptions={
    { 
        // devolvendo a rota e colocando que não queremos o cabeçalho na aplicação
        headerShown: false,
        //definindo a cor de fundo da aplicação indo buscar no arquivo de tema
        contentStyle: { backgroundColor: colors.gray[100]}
      }
    } 
  />
}