import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from 'react-native'
import { styles } from "./styles";
import { colors } from "@/styles/theme"
import { IconProps as TablerIconProps} from "@tabler/icons-react-native"

//configurando que além das propriedades do botão voce quer mais uma propriedade que é o isLoading, pois não existe essa propriedade dentro de TouchableOpacityProps
type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...rest } : ButtonProps){
  return (
    // botão complexo para um botão não é mesmo? mas calma que eu vou tentar explicar o que ele fez nessa bagaça
    //primeiro quando o botão foi criado ele cria um Função title para passar como um componente filho para o botão que é o texto
    //o style ganha estilização pelo arquivo de estilização porem aceita diretamente na criação passando a propriedade style
    //o if ternário dentro do botão, é se a propriedade isLoading for verdadeira ele vai ativar a animação de carregando e vai tirar a opção de click do usuário, se for falso ele somente vai colocar o texto vindo do children 
    <TouchableOpacity activeOpacity={0.8} style={[styles.container, style]} disabled={isLoading} {...rest}>
      { isLoading ? <ActivityIndicator size={'small'} color={colors.gray[100]}/> : children }
    </TouchableOpacity>
  )
}

function Title({children} : TextProps){
  return <Text style={styles.title}>{children}</Text>
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon : Icon } : IconProps ){
  return <Icon size={24} color={colors.gray[100]} />
}


Button.Title = Title
Button.Icon = Icon

export { Button }