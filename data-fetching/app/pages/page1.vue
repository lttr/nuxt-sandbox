<template>
  <div>
    <h1>Page 1</h1>
    <p>Status: {{ status }}</p>
    <section>
      <pre>{{ data }}</pre>
    </section>
  </div>
</template>

<script lang="ts" setup>
// Using await before useAsyncData:
// During SSR it means that after this code executes data will have a value
// The promise is awaited anyway, so the data will make it into the template
// For consistency of behavior, use await before useAsyncData always
const { status, data } = await useAsyncData("page1", () => {
  console.log(
    `Fetching on page1 started from ${import.meta.client ? "client" : "server"}`,
  );
  // 3s delay using our custom endpoint
  return $fetch("/api/delay/1");
});

console.log("Data from page1 in the setup function:", data.value);
</script>

<style scoped></style>
