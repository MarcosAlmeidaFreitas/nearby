import { View, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '@/styles/theme';
import { IconProps } from '@tabler/icons-react-native'

type Props = {
  title : string,
  description: string, 
  icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon : Icon} : Props) {
  return (
    <View style={styles.container}>
      {/* Colocando dentro da chaves e usando o && impede que se ele não achar o ícone de não renderizar a tela */}
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}