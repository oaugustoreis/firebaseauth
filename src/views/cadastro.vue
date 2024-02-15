<template>
  <div>
    <div class="login center">
      <div class="center">
        <div class="center">
          <h1>Pedido na conta do usuario</h1>
        </div>
        <div class="backfield">
          <span>Adicionar Pedidos:</span>
          <div class="arrayAdd">
            <input type="number" id="numberInput" placeholder="Enter number" />
            <input type="text" id="textInput" placeholder="Enter text" />
            <button @click="addPedidos">Add to Array</button>
          </div>
          <br />
          <span>preco:</span>
          <input id="input-alert" class="fields" type="text" v-model="preco" />
        </div>
        <button class="button-74" @click="register">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const db = getFirestore();
const preco = ref("");
const userId = ref(null);
const auth = getAuth();
let pedidos = [];
onAuthStateChanged(auth, async (user) => {
  userId.value = user.uid;
});
// console.log(userId);
const addPedidos = async () => {
  let textInput = document.getElementById("textInput").value;
  let numberInput = document.getElementById("numberInput").value;
  var conca = numberInput + "x " + textInput;

  pedidos.push(conca);
  // Clear input fields
  document.getElementById("textInput").value = "";
  document.getElementById("numberInput").value = "";
  pedidos.forEach((order) => {
    console.log(order);
  });
};

// pegar a doc ref do usuario pra
const register = async () => {
  const date = {
    nome: pedidos,
    data: dataAtualFormatada(),
    price: preco.value,
    userId: userId.value, //botar aqui
  };

  try {
    await addDoc(collection(db, "pedidos"), date);
    console.log("Pedido adicionado com sucesso");
  } catch (error) {
    console.error("Erro ao adicionar pedido: ", error);
  }
};

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = mes.length == 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}
</script>



<style lang="scss" scoped>
.login {
  padding: 10px 10px;
  width: 500px;
  height: 548px;
  border: 2px solid var(--color1);
  border-radius: 10px;
  background-color: #fff;
  h1 {
    font-size: 40px;
    font-weight: 500;
  }
}
.arrayAdd {
  display: flex;
}
.arrayAdd input:first-child {
  width: 50px;
}
.backfield {
  width: 70%;
  font-size: 20px;
  margin: 10px 0;
}
.fields {
  border-radius: 10px;
  width: 100%;
  border: 1px solid var(--color1);
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
}

span {
  margin: 10px 0;
  i {
    font-size: 10px;
    color: var(--color4);
    border-radius: 100%;
    border: 3px solid var(--color1);
  }
  a {
    color: var(--color4);
    &:hover {
      background: none;
      text-decoration: underline;
    }
  }
}
</style>
