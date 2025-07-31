<template>
  <div>
    <h1>Page 2</h1>
    <p>Status: {{ status }}</p>
    <section>
      <pre>{{ data }}</pre>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { status, data } = await useLazyAsyncData("page2", () => {
  console.log(
    `Fetching on page2 started from ${import.meta.client ? "client" : "server"}`,
  );
  // 3s delay
  return $fetch("/api/delay/2");
});

console.log("Data from page2 in the setup function:", data.value);
</script>

<style scoped></style>
