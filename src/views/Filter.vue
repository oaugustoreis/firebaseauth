<template>
    <nav>
      <div class="header " >
        <div class="header-inner center">
          <p>Filtros</p>
        </div>
      </div>
    </nav>
  </template>
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  .router-hover{
    padding: 5px 10px ;
    border-radius: 10px;
    &:hover {
      background-color: rgb(242, 243, 243);
    }
  }
  .header {
    padding: 10px;
    border-radius:10px ;
    background-color: white;
    width: 250px;
    height: 660px;
  }
  .user {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row;
    padding: 5px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s;
    p {
      padding-bottom: 5px;
    }
    i {
      margin: 0 10px;
      font-size: 30px;
      color: var(--color1);
    }
    i:first-child {
      font-size: 20px;
    }
  }
  .dropdown {
    cursor: pointer;
    transition: 0.2s;
    border-radius: 10px 10px 0 0;
    position: relative;
    display: inline-block;
  
    &:hover {
      background-color: rgb(242, 243, 243);
    }
  }
  .dropdown-content {
    display: none;
  
    padding: 10px;
    position: absolute;
    background-color: rgb(242, 243, 243);
    width: calc(100% - 20px);
    z-index: 1;
    border-radius: 0 0 10px 10px;
  
    .logout {
      line-height: 0;
      height: 35px;
    }
  }
  .dropdown-opt {
    color: var(--color1);
    width: 80%;
    transition: 0.2s;
    border-radius: 10px;
    padding: 10px;
    &:hover {
      background-color: rgb(255, 255, 255);
    }
  }
  .dropdown-opt:last-child {
    margin-bottom: 10px;
  }
  .dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
  }
  // .user-img-profile{
  //   margin: 0 10px;
  //   border-radius: 100%;
  //   width: 30px;
  // }
  </style>