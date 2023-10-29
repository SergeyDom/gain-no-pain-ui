<template>
  <div class="card">
    <div class="card-content">
      <div class="form-container">
        <div class="select-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard"
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 70vw;
}

.card-content {
  display: flex; /* Располагаем элементы слева направо */
  justify-content: space-between; /* Равномерно распределяем элементы по горизонтали */
  align-items: center; /* Выравниваем элементы по вертикали по центру */
}



.select-container p {
  display: inline-block;
  margin: 0; /* Удалите верхний и нижний отступ у p */
  vertical-align: top; /* Выравнивание по верхнему краю */
}
</style>
