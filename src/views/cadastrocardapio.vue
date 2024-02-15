<template>
  <div>
    <div class="login center">
      <div class="center" id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="center">
          <h1>Pedido no cardapio</h1>
        </div>
        <div class="backfield">
          <span>Descricao/ingredientes:</span>
          <div class="arrayAdd">
            <input type="text" id="textInput" placeholder="Enter text" />
            <button @click="addPedidos">Add to Array</button>
          </div>
          <br />
          <span>preco:</span>
          <input id="input-alert" class="fields" type="text" v-model="preco" />
          <span>Nome do prato:</span>
          <input id="input-alert" class="fields" type="text" v-model="nomePrato" />
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
const nomePrato = ref("");
const userId = ref(null);
const auth = getAuth();
let desc = [];
onAuthStateChanged(auth, async (user) => {
  userId.value = user.uid;
});

const addPedidos = async () => {
  let textInput = document.getElementById("textInput").value;

  desc.push(textInput);
  document.getElementById("textInput").value = "";
  // desc.forEach((order) => {
  //   console.log(order);
  // });
};

const register = async () => {
  const date = {
    nome: nomePrato.value,
    price: preco.value,
    desc:desc, 
  };

  try {
    await addDoc(collection(db, "cardapio"), date);
    alert("Pedido adicionado com sucesso");
  } catch (error) {
    console.error("Erro ao adicionar pedido: ", error);
  }
};
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
  width: 150px;
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
