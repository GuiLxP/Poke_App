import { Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
<<<<<<< HEAD
import { commonStyles } from '../../styles/CommonStyles'
import { API } from '../../services/api'

export default function Terms({ navigation, route }) {

  const { player, pokemon } = route.params

  function addPlayer() {
    fetch(
      API + '/players',
      {
        body: JSON.stringify({
          nickname: player.nickname,
          age: player.age,
          email: player.email,
          phone: player.phone,
          password: player.password,
          phrase: player.phrase,
          pokemon: pokemon
        }),
          method: 'POST',
          headers: {
          'Content-type': 'application/json'
        }
      })
      .then(() => {
          alert('Cadastrado com sucesso')
          navigation.navigate('Login')
      })
      .catch(() => alert('Houve ao tentar cadastrar o jogador'))
=======

import { commonStyles } from '../../styles/CommonStyles'

export default function Terms({navigation}) {

  function addPlayer() {
    Alert.alert(
      'Sucesso',
      'Jogador com sucesso',
      [
        {
          text: 'Logar',
          onPress: () => navigation.navigate('Login')
        }
      ]
    )
>>>>>>> ccd4e1775619fa58be005cd4d24fcbf523dbe737
  }


  return (
    <ScrollView>
      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>

      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>

      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>

      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>

      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>
      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>
      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>
      <Text style={styles.term}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </Text>

      <TouchableOpacity
        onPress={addPlayer}
        style={{ ...commonStyles.button, alignSelf: 'center' }}>
        <Text style={commonStyles.buttonText}>Aceito os termos</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  term: {
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 20,
    marginVertical: 20
  }
})
