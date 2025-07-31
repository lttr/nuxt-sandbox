<template>
  <main class="p-container">
    <div class="content p-flow">
      <slot></slot>
    </div>
    <nav class="p-container">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/page1">Page 1</NuxtLink>
      <NuxtLink to="/page2">Page 2</NuxtLink>
    </nav>
  </main>
</template>

<style scoped>
nav {
  display: flex;

  > *:not(:first-child) {
    padding-left: 1rem;
  }

  > *:not(:last-child) {
    padding-right: 1rem;
    border-right: 1px solid #ddd;
  }
}
</style>
