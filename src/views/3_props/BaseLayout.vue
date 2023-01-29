<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.container {
  width: fit-content;
  border: 1px solid gray;
  border-radius: 8px;
  margin: auto;
  padding: 10px;
}
footer {
  border-top: 1px solid black;
  color: violet;
  font-size: 0.8em;
}
</style>
